"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { User } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  increment,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  type Timestamp
} from "firebase/firestore";
import { avatarCode, ensureProfile, profilePhoto, safeName, type CommunityProfile } from "@/lib/communityAuth";
import { communityImagePolicy } from "@/lib/communityPolicy";
import { saveCommunityProfile } from "@/lib/communityUploadClient";
import { firebaseAuth, firestore } from "@/lib/firebase";

type AuthMode = "login" | "register";
type FeedType = "post" | "article";
type ChatTarget = "all" | string;

interface CommunityMessage {
  id: string;
  text: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  authorPhotoURL: string;
  targetId: string;
  targetName: string;
  createdAt?: Timestamp;
}

interface PublicProfile extends CommunityProfile {
  updatedAt?: Timestamp;
}

interface DirectConversation {
  id: string;
  participants: string[];
  participantNames: Record<string, string>;
  participantPhotos: Record<string, string>;
  lastMessage: string;
  updatedAt?: Timestamp;
}

interface FeedPost {
  id: string;
  type: FeedType;
  title: string;
  subject: string;
  body: string;
  createdBy: string;
  createdByName: string;
  createdByPhotoURL: string;
  commentCount: number;
  createdAt?: Timestamp;
  lastActivityAt?: Timestamp;
}

interface FeedComment {
  id: string;
  text: string;
  authorId: string;
  authorName: string;
  authorPhotoURL: string;
  createdAt?: Timestamp;
}

const forumSubjects = ["Lore", "Teorias", "Remakes", "Filmes", "Ajuda", "Colecionaveis", "Off-topic"];

function formatStamp(value?: Timestamp) {
  if (!value?.toDate) return "agora";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(value.toDate());
}

function directChatId(uidA: string, uidB: string) {
  return [uidA, uidB].sort().join("__");
}

function mapProfile(id: string, data: Record<string, unknown>): PublicProfile {
  return {
    uid: String(data.uid ?? id),
    displayName: String(data.displayName ?? "Operador anonimo"),
    bio: String(data.bio ?? ""),
    favoriteGame: String(data.favoriteGame ?? ""),
    avatarSeed: String(data.avatarSeed ?? data.displayName ?? id),
    isAnonymous: Boolean(data.isAnonymous ?? false),
    photoURL: String(data.photoURL ?? ""),
    photoPath: String(data.photoPath ?? ""),
    updatedAt: data.updatedAt as Timestamp | undefined
  };
}

function mapMessage(id: string, data: Record<string, unknown>): CommunityMessage {
  return {
    id,
    text: String(data.text ?? ""),
    authorId: String(data.authorId ?? ""),
    authorName: String(data.authorName ?? "Operador anonimo"),
    authorRole: String(data.authorRole ?? "registrado"),
    authorPhotoURL: String(data.authorPhotoURL ?? ""),
    targetId: String(data.targetId ?? "all"),
    targetName: String(data.targetName ?? "Todos"),
    createdAt: data.createdAt as Timestamp | undefined
  };
}

function mapConversation(id: string, data: Record<string, unknown>): DirectConversation {
  return {
    id,
    participants: Array.isArray(data.participants) ? data.participants.map(String) : [],
    participantNames: (data.participantNames ?? {}) as Record<string, string>,
    participantPhotos: (data.participantPhotos ?? {}) as Record<string, string>,
    lastMessage: String(data.lastMessage ?? ""),
    updatedAt: data.updatedAt as Timestamp | undefined
  };
}

function mapFeedPost(id: string, data: Record<string, unknown>): FeedPost {
  const type = data.type === "article" ? "article" : "post";
  return {
    id,
    type,
    title: String(data.title ?? ""),
    subject: String(data.subject ?? "Lore"),
    body: String(data.body ?? ""),
    createdBy: String(data.createdBy ?? ""),
    createdByName: String(data.createdByName ?? "Operador anonimo"),
    createdByPhotoURL: String(data.createdByPhotoURL ?? ""),
    commentCount: Number(data.commentCount ?? 0),
    createdAt: data.createdAt as Timestamp | undefined,
    lastActivityAt: data.lastActivityAt as Timestamp | undefined
  };
}

function mapFeedComment(id: string, data: Record<string, unknown>): FeedComment {
  return {
    id,
    text: String(data.text ?? ""),
    authorId: String(data.authorId ?? ""),
    authorName: String(data.authorName ?? "Operador anonimo"),
    authorPhotoURL: String(data.authorPhotoURL ?? ""),
    createdAt: data.createdAt as Timestamp | undefined
  };
}

function Avatar({
  name,
  photo,
  size = "normal"
}: {
  name: string;
  photo?: string;
  size?: "normal" | "small";
}) {
  return (
    <span className={size === "small" ? "profile-avatar avatar-small" : "profile-avatar"}>
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo} alt="" loading="lazy" />
      ) : (
        avatarCode(name)
      )}
    </span>
  );
}

export function CommunityHub() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [authForm, setAuthForm] = useState({ displayName: "", email: "", password: "" });
  const [profile, setProfile] = useState<CommunityProfile | null>(null);
  const [profileForm, setProfileForm] = useState({ displayName: "", bio: "", favoriteGame: "" });
  const [profiles, setProfiles] = useState<PublicProfile[]>([]);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [profileImageConsent, setProfileImageConsent] = useState(false);
  const [profileImageNotice, setProfileImageNotice] = useState("");
  const [generalMessages, setGeneralMessages] = useState<CommunityMessage[]>([]);
  const [directMessages, setDirectMessages] = useState<CommunityMessage[]>([]);
  const [directConversations, setDirectConversations] = useState<DirectConversation[]>([]);
  const [chatTarget, setChatTarget] = useState<ChatTarget>("all");
  const [chatDraft, setChatDraft] = useState("");
  const [feedPosts, setFeedPosts] = useState<FeedPost[]>([]);
  const [feedForm, setFeedForm] = useState({ type: "post" as FeedType, title: "", subject: "Lore", body: "" });
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [feedComments, setFeedComments] = useState<FeedComment[]>([]);
  const [commentDraft, setCommentDraft] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const currentName = safeName(user, profile);
  const currentPhoto = profilePhoto(user, profile);
  const selectedProfile = useMemo(() => profiles.find((item) => item.uid === chatTarget) ?? null, [profiles, chatTarget]);
  const activeMessages = chatTarget === "all" ? generalMessages : directMessages;
  const activeFeedPost = useMemo(() => feedPosts.find((item) => item.id === activePostId) ?? null, [activePostId, feedPosts]);

  const conversationContacts = useMemo(() => {
    if (!user) return [];
    const ids = new Set<string>();
    directConversations.forEach((conversation) => {
      const contactId = conversation.participants.find((id) => id !== user.uid);
      if (contactId) ids.add(contactId);
    });
    return Array.from(ids)
      .map((id) => profiles.find((profileItem) => profileItem.uid === id))
      .filter(Boolean) as PublicProfile[];
  }, [directConversations, profiles, user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (nextUser) => {
      setUser(nextUser);
      if (!nextUser) {
        setProfile(null);
        setProfileForm({ displayName: "", bio: "", favoriteGame: "" });
        setProfileImageFile(null);
        setProfileImageConsent(false);
        setChatTarget("all");
      }
      setAuthReady(true);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const profilesQuery = query(collection(firestore, "profiles"), limit(100));
    const unsubscribe = onSnapshot(
      profilesQuery,
      (snapshot) => {
        const nextProfiles = snapshot.docs
          .map((profileDoc) => mapProfile(profileDoc.id, profileDoc.data()))
          .sort((a, b) => a.displayName.localeCompare(b.displayName));
        setProfiles(nextProfiles);
      },
      (error) => setFeedback(error.message)
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;

    const profileRef = doc(firestore, "profiles", user.uid);
    let cancelled = false;

    ensureProfile(user).catch((error) => {
      if (!cancelled) setFeedback(error.message);
    });

    const unsubscribe = onSnapshot(
      profileRef,
      (snapshot) => {
        if (!snapshot.exists()) return;
        const data = snapshot.data();
        setProfile({
          uid: user.uid,
          displayName: String(data.displayName ?? safeName(user)),
          bio: String(data.bio ?? ""),
          favoriteGame: String(data.favoriteGame ?? ""),
          avatarSeed: String(data.avatarSeed ?? data.displayName ?? user.uid),
          isAnonymous: Boolean(data.isAnonymous ?? user.isAnonymous),
          photoURL: String(data.photoURL ?? user.photoURL ?? ""),
          photoPath: String(data.photoPath ?? "")
        });
        setProfileForm({
          displayName: String(data.displayName ?? safeName(user)),
          bio: String(data.bio ?? ""),
          favoriteGame: String(data.favoriteGame ?? "")
        });
      },
      (error) => setFeedback(error.message)
    );

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    const messagesQuery = query(collection(firestore, "communityRooms", "general", "messages"), orderBy("createdAt", "desc"), limit(80));
    const unsubscribe = onSnapshot(
      messagesQuery,
      (snapshot) => setGeneralMessages(snapshot.docs.map((message) => mapMessage(message.id, message.data())).reverse()),
      (error) => setFeedback(error.message)
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    const feedQuery = query(collection(firestore, "communityFeed"), orderBy("lastActivityAt", "desc"), limit(50));
    const unsubscribe = onSnapshot(
      feedQuery,
      (snapshot) => setFeedPosts(snapshot.docs.map((post) => mapFeedPost(post.id, post.data()))),
      (error) => setFeedback(error.message)
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }

    const conversationsQuery = query(collection(firestore, "directChats"), where("participants", "array-contains", user.uid), limit(50));
    const unsubscribe = onSnapshot(
      conversationsQuery,
      (snapshot) => {
        const nextConversations = snapshot.docs
          .map((conversation) => mapConversation(conversation.id, conversation.data()))
          .sort((a, b) => (b.updatedAt?.toMillis?.() ?? 0) - (a.updatedAt?.toMillis?.() ?? 0));
        setDirectConversations(nextConversations);
      },
      (error) => setFeedback(error.message)
    );

    return unsubscribe;
  }, [user]);

  useEffect(() => {
    if (!user || chatTarget === "all") {
      return;
    }

    const chatId = directChatId(user.uid, chatTarget);
    const messagesQuery = query(collection(firestore, "directChats", chatId, "messages"), orderBy("createdAt", "desc"), limit(80));
    const unsubscribe = onSnapshot(
      messagesQuery,
      (snapshot) => setDirectMessages(snapshot.docs.map((message) => mapMessage(message.id, message.data())).reverse()),
      (error) => setFeedback(error.message)
    );

    return unsubscribe;
  }, [chatTarget, user]);

  useEffect(() => {
    if (!activePostId) {
      return;
    }

    const commentsQuery = query(collection(firestore, "communityFeed", activePostId, "comments"), orderBy("createdAt", "asc"), limit(120));
    const unsubscribe = onSnapshot(
      commentsQuery,
      (snapshot) => setFeedComments(snapshot.docs.map((comment) => mapFeedComment(comment.id, comment.data()))),
      (error) => setFeedback(error.message)
    );

    return unsubscribe;
  }, [activePostId]);

  async function handleAuthSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback("");
    setIsBusy(true);

    try {
      const name = authForm.displayName.trim();

      if (authMode === "register") {
        const credential = await createUserWithEmailAndPassword(firebaseAuth, authForm.email.trim(), authForm.password);
        if (name) await updateProfile(credential.user, { displayName: name });
        await ensureProfile(credential.user, name);
      } else {
        const credential = await signInWithEmailAndPassword(firebaseAuth, authForm.email.trim(), authForm.password);
        await ensureProfile(credential.user);
      }

      setAuthForm({ displayName: "", email: "", password: "" });
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel autenticar.");
    } finally {
      setIsBusy(false);
    }
  }

  async function handleAnonymous() {
    setFeedback("");
    setIsBusy(true);

    try {
      const credential = await signInAnonymously(firebaseAuth);
      await ensureProfile(credential.user);
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel entrar como anonimo.");
    } finally {
      setIsBusy(false);
    }
  }

  function selectProfileImage(file: File | null) {
    setProfileImageNotice("");

    if (!file) {
      setProfileImageFile(null);
      return;
    }

    setProfileImageFile(file);
    setProfileImageNotice("Imagem pronta para analise no servidor. Confirme a declaracao antes de salvar.");
  }

  async function handleProfileSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!user) return;
    setFeedback("");
    setIsBusy(true);

    try {
      const displayName = profileForm.displayName.trim().slice(0, 42) || currentName;

      if (profileImageFile && !profileImageConsent) {
        setFeedback("Confirme que a foto nao contem conteudo sensivel antes de salvar.");
        setIsBusy(false);
        return;
      }

      await saveCommunityProfile({
        idToken: await user.getIdToken(),
        displayName,
        bio: profileForm.bio.trim().slice(0, 180),
        favoriteGame: profileForm.favoriteGame.trim().slice(0, 60),
        file: profileImageFile
      });
      await user.reload();
      setProfileImageFile(null);
      setProfileImageConsent(false);
      setProfileImageNotice("");
      setFeedback("Perfil atualizado.");
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel salvar o perfil.");
    } finally {
      setIsBusy(false);
    }
  }

  async function sendChatMessage() {
    if (!user) {
      setFeedback("Entre com conta ou anonimamente para escrever.");
      return;
    }

    const text = chatDraft.trim().slice(0, 900);
    if (!text) return;

    setFeedback("");
    setIsBusy(true);

    try {
      const payload = {
        text,
        authorId: user.uid,
        authorName: currentName,
        authorRole: user.isAnonymous ? "anonimo" : "registrado",
        authorPhotoURL: currentPhoto,
        createdAt: serverTimestamp()
      };

      if (chatTarget === "all") {
        await addDoc(collection(firestore, "communityRooms", "general", "messages"), {
          ...payload,
          targetId: "all",
          targetName: "Todos"
        });
      } else if (selectedProfile) {
        const chatId = directChatId(user.uid, selectedProfile.uid);
        await setDoc(
          doc(firestore, "directChats", chatId),
          {
            participants: [user.uid, selectedProfile.uid].sort(),
            participantNames: {
              [user.uid]: currentName,
              [selectedProfile.uid]: selectedProfile.displayName
            },
            participantPhotos: {
              [user.uid]: currentPhoto,
              [selectedProfile.uid]: selectedProfile.photoURL
            },
            lastMessage: text,
            lastSender: user.uid,
            updatedAt: serverTimestamp(),
            createdAt: serverTimestamp()
          },
          { merge: true }
        );
        await addDoc(collection(firestore, "directChats", chatId, "messages"), {
          ...payload,
          targetId: selectedProfile.uid,
          targetName: selectedProfile.displayName
        });
      }

      setChatDraft("");
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel enviar.");
    } finally {
      setIsBusy(false);
    }
  }

  async function createFeedPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!user) {
      setFeedback("Entre com conta ou anonimamente para publicar.");
      return;
    }

    const title = feedForm.title.trim().slice(0, 120);
    const body = feedForm.body.trim().slice(0, 3000);
    if (!body || (feedForm.type === "article" && !title)) return;

    setFeedback("");
    setIsBusy(true);

    try {
      const postRef = await addDoc(collection(firestore, "communityFeed"), {
        type: feedForm.type,
        title,
        subject: feedForm.subject,
        body,
        createdBy: user.uid,
        createdByName: currentName,
        createdByPhotoURL: currentPhoto,
        commentCount: 0,
        createdAt: serverTimestamp(),
        lastActivityAt: serverTimestamp()
      });
      setActivePostId(postRef.id);
      setFeedForm({ type: "post", title: "", subject: "Lore", body: "" });
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel publicar.");
    } finally {
      setIsBusy(false);
    }
  }

  async function sendComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!user || !activePostId) return;

    const text = commentDraft.trim().slice(0, 1200);
    if (!text) return;

    setFeedback("");
    setIsBusy(true);

    try {
      await addDoc(collection(firestore, "communityFeed", activePostId, "comments"), {
        text,
        authorId: user.uid,
        authorName: currentName,
        authorPhotoURL: currentPhoto,
        createdAt: serverTimestamp()
      });
      await updateDoc(doc(firestore, "communityFeed", activePostId), {
        commentCount: increment(1),
        lastActivityAt: serverTimestamp()
      });
      setCommentDraft("");
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel comentar.");
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <section className="section-block community-hub">
      <div className="section-title">
        <div>
          <p className="eyebrow">radio comunitario</p>
          <h2>Comunidade Umbrella Archive</h2>
        </div>
        <span className="counter">{user ? currentName : "modo leitura"}</span>
      </div>

      {feedback && <p className="community-feedback">{feedback}</p>}

      <div className="community-social-layout">
        <ChatDock
          conversations={conversationContacts}
          currentUserId={user?.uid ?? ""}
          disabled={!user || isBusy}
          draft={chatDraft}
          messages={activeMessages}
          profiles={profiles}
          selectedTarget={chatTarget}
          selectedTargetName={chatTarget === "all" ? "Todos" : selectedProfile?.displayName ?? "Operador"}
          onDraft={setChatDraft}
          onSelectTarget={setChatTarget}
          onSend={sendChatMessage}
        />

        <div className="community-feed-main">
          {user ? (
            <AccountPanel
              currentName={currentName}
              currentPhoto={currentPhoto}
              isAnonymous={user.isAnonymous}
              isBusy={isBusy}
              profileForm={profileForm}
              profileImageConsent={profileImageConsent}
              profileImageFile={profileImageFile}
              profileImageNotice={profileImageNotice}
              onProfileForm={setProfileForm}
              onProfileImage={selectProfileImage}
              onProfileImageConsent={setProfileImageConsent}
              onProfileSave={handleProfileSave}
              onSignOut={() => signOut(firebaseAuth)}
            />
          ) : (
            <AuthPanel
              authMode={authMode}
              authReady={authReady}
              authForm={authForm}
              isBusy={isBusy}
              onAnonymous={handleAnonymous}
              onAuthForm={setAuthForm}
              onAuthMode={setAuthMode}
              onSubmit={handleAuthSubmit}
            />
          )}

          <FeedComposer disabled={!user || isBusy} form={feedForm} onForm={setFeedForm} onSubmit={createFeedPost} />

          <div className="feed-list">
            {feedPosts.length === 0 ? (
              <p className="empty-state">Nenhum registro publicado ainda.</p>
            ) : (
              feedPosts.map((post) => (
                <FeedPostCard
                  active={post.id === activePostId}
                  commentDraft={post.id === activePostId ? commentDraft : ""}
                  comments={post.id === activePostId ? feedComments : []}
                  disabled={!user || isBusy}
                  key={post.id}
                  post={post}
                  onCommentDraft={setCommentDraft}
                  onOpen={() => {
                    setActivePostId((current) => (current === post.id ? null : post.id));
                    setCommentDraft("");
                  }}
                  onSendComment={sendComment}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatDock({
  conversations,
  currentUserId,
  disabled,
  draft,
  messages,
  profiles,
  selectedTarget,
  selectedTargetName,
  onDraft,
  onSelectTarget,
  onSend
}: {
  conversations: PublicProfile[];
  currentUserId: string;
  disabled: boolean;
  draft: string;
  messages: CommunityMessage[];
  profiles: PublicProfile[];
  selectedTarget: ChatTarget;
  selectedTargetName: string;
  onDraft: (value: string) => void;
  onSelectTarget: (value: ChatTarget) => void;
  onSend: () => void;
}) {
  const recipientOptions = profiles.filter((profile) => profile.uid !== currentUserId);

  return (
    <aside className="community-panel community-chat-rail">
      <div className="chat-head">
        <div>
          <span className="panel-kicker">comunicador</span>
          <strong>Chat</strong>
        </div>
        <p>{selectedTarget === "all" ? "Canal aberto com todos." : `Conversa com ${selectedTargetName}.`}</p>
      </div>

      <div className="chat-contact-list" aria-label="Conversas">
        <button className={selectedTarget === "all" ? "chat-contact active" : "chat-contact"} onClick={() => onSelectTarget("all")} type="button">
          <span className="contact-signal" />
          <strong>Todos</strong>
          <small>Chat geral</small>
        </button>
        {conversations.map((contact) => (
          <button className={selectedTarget === contact.uid ? "chat-contact active" : "chat-contact"} key={contact.uid} onClick={() => onSelectTarget(contact.uid)} type="button">
            <Avatar name={contact.displayName} photo={contact.photoURL} size="small" />
            <strong>{contact.displayName}</strong>
            <small>{contact.favoriteGame || "conversa direta"}</small>
          </button>
        ))}
      </div>

      <label className="chat-recipient">
        Enviar para
        <select disabled={!currentUserId} value={selectedTarget} onChange={(event) => onSelectTarget(event.target.value as ChatTarget)}>
          <option value="all">Todos</option>
          {recipientOptions.map((profile) => (
            <option key={profile.uid} value={profile.uid}>
              {profile.displayName}
            </option>
          ))}
        </select>
      </label>

      <div className="message-list compact" aria-live="polite">
        {messages.length === 0 ? (
          <p className="empty-state">{selectedTarget === "all" ? "Nenhuma transmissao registrada." : "Nenhuma conversa com esse operador."}</p>
        ) : (
          messages.map((message) => (
            <article className={message.authorId === currentUserId ? "message-item mine" : "message-item"} key={message.id}>
              <div>
                <strong>{message.authorName}</strong>
                <span>{formatStamp(message.createdAt)}</span>
              </div>
              <p>{message.text}</p>
            </article>
          ))
        )}
      </div>

      <form
        className="message-composer"
        onSubmit={(event) => {
          event.preventDefault();
          onSend();
        }}
      >
        <textarea disabled={disabled} value={draft} maxLength={900} onChange={(event) => onDraft(event.target.value)} placeholder={disabled ? "Entre para transmitir." : "Digite sua mensagem..."} />
        <button className="primary-action" disabled={disabled || !draft.trim()} type="submit">Enviar</button>
      </form>
    </aside>
  );
}

function AuthPanel({
  authMode,
  authReady,
  authForm,
  isBusy,
  onAnonymous,
  onAuthForm,
  onAuthMode,
  onSubmit
}: {
  authMode: AuthMode;
  authReady: boolean;
  authForm: { displayName: string; email: string; password: string };
  isBusy: boolean;
  onAnonymous: () => void;
  onAuthForm: (value: { displayName: string; email: string; password: string }) => void;
  onAuthMode: (value: AuthMode) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section className="community-panel account-card">
      <div className="community-panel-head">
        <span className="panel-kicker">identidade</span>
        <strong>{authReady ? "Acesso restrito" : "Inicializando"}</strong>
      </div>
      <div className="auth-switch">
        <button className={authMode === "login" ? "active" : ""} onClick={() => onAuthMode("login")} type="button">Login</button>
        <button className={authMode === "register" ? "active" : ""} onClick={() => onAuthMode("register")} type="button">Criar conta</button>
      </div>
      <form className="community-form" onSubmit={onSubmit}>
        {authMode === "register" && (
          <label>
            Nome publico
            <input value={authForm.displayName} maxLength={42} onChange={(event) => onAuthForm({ ...authForm, displayName: event.target.value })} placeholder="Ex.: S.T.A.R.S. Rookie" />
          </label>
        )}
        <label>
          E-mail
          <input autoComplete="email" type="email" value={authForm.email} onChange={(event) => onAuthForm({ ...authForm, email: event.target.value })} />
        </label>
        <label>
          Senha
          <input autoComplete={authMode === "login" ? "current-password" : "new-password"} minLength={6} type="password" value={authForm.password} onChange={(event) => onAuthForm({ ...authForm, password: event.target.value })} />
        </label>
        <button className="primary-action" disabled={isBusy} type="submit">{authMode === "login" ? "Entrar" : "Criar conta"}</button>
      </form>
      <button className="anonymous-action" disabled={isBusy} onClick={onAnonymous} type="button">Entrar como anonimo</button>
    </section>
  );
}

function AccountPanel({
  currentName,
  currentPhoto,
  isAnonymous,
  isBusy,
  profileForm,
  profileImageConsent,
  profileImageFile,
  profileImageNotice,
  onProfileForm,
  onProfileImage,
  onProfileImageConsent,
  onProfileSave,
  onSignOut
}: {
  currentName: string;
  currentPhoto: string;
  isAnonymous: boolean;
  isBusy: boolean;
  profileForm: { displayName: string; bio: string; favoriteGame: string };
  profileImageConsent: boolean;
  profileImageFile: File | null;
  profileImageNotice: string;
  onProfileForm: (value: { displayName: string; bio: string; favoriteGame: string }) => void;
  onProfileImage: (file: File | null) => void;
  onProfileImageConsent: (value: boolean) => void;
  onProfileSave: (event: FormEvent<HTMLFormElement>) => void;
  onSignOut: () => void;
}) {
  return (
    <section className="community-panel account-card">
      <div className="profile-card">
        <Avatar name={currentName} photo={currentPhoto} />
        <div>
          <strong>{currentName}</strong>
          <span>{isAnonymous ? "Operador anonimo" : "Conta registrada"}</span>
        </div>
      </div>
      <form className="community-form profile-inline-form" onSubmit={onProfileSave}>
        <label>
          Nome publico
          <input value={profileForm.displayName} maxLength={42} onChange={(event) => onProfileForm({ ...profileForm, displayName: event.target.value })} />
        </label>
        <label>
          Jogo favorito
          <input value={profileForm.favoriteGame} maxLength={60} onChange={(event) => onProfileForm({ ...profileForm, favoriteGame: event.target.value })} placeholder="Ex.: Resident Evil 2" />
        </label>
        <label className="wide-field">
          Bio
          <textarea value={profileForm.bio} maxLength={180} onChange={(event) => onProfileForm({ ...profileForm, bio: event.target.value })} placeholder="Sobrevivente de Raccoon, teorico de Plagas..." />
        </label>
        <label className="file-field">
          Foto de perfil
          <input accept="image/jpeg,image/png,image/webp" type="file" onChange={(event) => onProfileImage(event.target.files?.[0] ?? null)} />
          <span>{profileImageFile ? profileImageFile.name : "JPG, PNG ou WebP ate 4 MB"}</span>
        </label>
        <label className="content-consent wide-field">
          <input checked={profileImageConsent} onChange={(event) => onProfileImageConsent(event.target.checked)} type="checkbox" />
          <span>{communityImagePolicy}</span>
        </label>
        {profileImageNotice && <p className="upload-feedback wide-field">{profileImageNotice}</p>}
        <button className="primary-action" disabled={isBusy} type="submit">Salvar perfil</button>
        <button className="secondary-action" onClick={onSignOut} type="button">Sair</button>
      </form>
    </section>
  );
}

function FeedComposer({
  disabled,
  form,
  onForm,
  onSubmit
}: {
  disabled: boolean;
  form: { type: FeedType; title: string; subject: string; body: string };
  onForm: (value: { type: FeedType; title: string; subject: string; body: string }) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form className="community-panel feed-composer" onSubmit={onSubmit}>
      <div className="feed-composer-head">
        <div className="auth-switch">
          <button className={form.type === "post" ? "active" : ""} onClick={() => onForm({ ...form, type: "post" })} type="button">Post</button>
          <button className={form.type === "article" ? "active" : ""} onClick={() => onForm({ ...form, type: "article" })} type="button">Artigo de forum</button>
        </div>
        <label>
          Assunto
          <select disabled={disabled} value={form.subject} onChange={(event) => onForm({ ...form, subject: event.target.value })}>
            {forumSubjects.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </label>
      </div>
      {form.type === "article" && (
        <label>
          Titulo da discussao
          <input disabled={disabled} value={form.title} maxLength={120} onChange={(event) => onForm({ ...form, title: event.target.value })} placeholder="Ex.: A BSAA ainda pode ser confiavel?" />
        </label>
      )}
      <label>
        {form.type === "article" ? "Texto do artigo" : "Novo post"}
        <textarea disabled={disabled} value={form.body} maxLength={3000} onChange={(event) => onForm({ ...form, body: event.target.value })} placeholder={disabled ? "Entre para publicar." : "Abra uma pasta, escreva uma teoria, puxe uma discussao..."} />
      </label>
      <button className="primary-action" disabled={disabled || !form.body.trim() || (form.type === "article" && !form.title.trim())} type="submit">
        Publicar
      </button>
    </form>
  );
}

function FeedPostCard({
  active,
  commentDraft,
  comments,
  disabled,
  post,
  onCommentDraft,
  onOpen,
  onSendComment
}: {
  active: boolean;
  commentDraft: string;
  comments: FeedComment[];
  disabled: boolean;
  post: FeedPost;
  onCommentDraft: (value: string) => void;
  onOpen: () => void;
  onSendComment: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <article className={active ? "feed-card active" : "feed-card"}>
      <div className="feed-card-meta">
        <Avatar name={post.createdByName} photo={post.createdByPhotoURL} size="small" />
        <div>
          <strong>{post.createdByName}</strong>
          <span>{post.subject} · {formatStamp(post.createdAt)}</span>
        </div>
        <em>{post.type === "article" ? "artigo" : "post"}</em>
      </div>
      {post.title && <h3>{post.title}</h3>}
      <p>{post.body}</p>
      <button className="feed-discussion-toggle" onClick={onOpen} type="button">
        {active ? "Fechar discussao" : `${post.commentCount} comentarios · discutir`}
      </button>
      {active && (
        <div className="feed-discussion">
          <div className="comment-list">
            {comments.length === 0 ? (
              <p className="empty-state">Nenhum comentario nesta pasta.</p>
            ) : (
              comments.map((comment) => (
                <article className="comment-item" key={comment.id}>
                  <Avatar name={comment.authorName} photo={comment.authorPhotoURL} size="small" />
                  <div>
                    <strong>{comment.authorName}</strong>
                    <span>{formatStamp(comment.createdAt)}</span>
                    <p>{comment.text}</p>
                  </div>
                </article>
              ))
            )}
          </div>
          <form className="comment-composer" onSubmit={onSendComment}>
            <textarea disabled={disabled} value={commentDraft} maxLength={1200} onChange={(event) => onCommentDraft(event.target.value)} placeholder={disabled ? "Entre para comentar." : "Responder discussao..."} />
            <button className="primary-action" disabled={disabled || !commentDraft.trim()} type="submit">Responder</button>
          </form>
        </div>
      )}
    </article>
  );
}
