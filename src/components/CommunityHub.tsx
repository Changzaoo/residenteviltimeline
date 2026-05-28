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
  getDoc,
  increment,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  type Timestamp
} from "firebase/firestore";
import { firebaseAuth, firestore } from "@/lib/firebase";

type AuthMode = "login" | "register";
type RoomMode = "general" | "forum";

interface CommunityProfile {
  uid: string;
  displayName: string;
  bio: string;
  favoriteGame: string;
  avatarSeed: string;
  isAnonymous: boolean;
}

interface CommunityMessage {
  id: string;
  text: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  createdAt?: Timestamp;
}

interface ForumTopic {
  id: string;
  title: string;
  subject: string;
  description: string;
  createdBy: string;
  createdByName: string;
  messageCount: number;
  createdAt?: Timestamp;
  lastMessageAt?: Timestamp;
}

const forumSubjects = ["Lore", "Teorias", "Builds", "Remakes", "Filmes", "Ajuda", "Colecionaveis"];

function shortId(uid: string) {
  return uid.slice(0, 6).toUpperCase();
}

function safeName(user: User | null, profile?: CommunityProfile | null) {
  if (profile?.displayName) return profile.displayName;
  if (user?.displayName) return user.displayName;
  if (user?.isAnonymous) return `Operador anonimo ${shortId(user.uid)}`;
  return "Visitante";
}

function avatarCode(seed: string) {
  return seed.slice(0, 2).toUpperCase();
}

function formatStamp(value?: Timestamp) {
  if (!value?.toDate) return "agora";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(value.toDate());
}

function mapMessage(id: string, data: Record<string, unknown>): CommunityMessage {
  return {
    id,
    text: String(data.text ?? ""),
    authorId: String(data.authorId ?? ""),
    authorName: String(data.authorName ?? "Operador anonimo"),
    authorRole: String(data.authorRole ?? "registrado"),
    createdAt: data.createdAt as Timestamp | undefined
  };
}

function mapTopic(id: string, data: Record<string, unknown>): ForumTopic {
  return {
    id,
    title: String(data.title ?? "Topico sem titulo"),
    subject: String(data.subject ?? "Lore"),
    description: String(data.description ?? ""),
    createdBy: String(data.createdBy ?? ""),
    createdByName: String(data.createdByName ?? "Operador anonimo"),
    messageCount: Number(data.messageCount ?? 0),
    createdAt: data.createdAt as Timestamp | undefined,
    lastMessageAt: data.lastMessageAt as Timestamp | undefined
  };
}

async function ensureProfile(user: User, preferredName?: string) {
  const profileRef = doc(firestore, "profiles", user.uid);
  const profileSnap = await getDoc(profileRef);

  if (profileSnap.exists()) return;

  const displayName = preferredName?.trim() || user.displayName || `Operador anonimo ${shortId(user.uid)}`;

  await setDoc(profileRef, {
    uid: user.uid,
    displayName,
    bio: "",
    favoriteGame: "",
    avatarSeed: displayName,
    isAnonymous: user.isAnonymous,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export function CommunityHub() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [roomMode, setRoomMode] = useState<RoomMode>("general");
  const [authForm, setAuthForm] = useState({ displayName: "", email: "", password: "" });
  const [profile, setProfile] = useState<CommunityProfile | null>(null);
  const [profileForm, setProfileForm] = useState({ displayName: "", bio: "", favoriteGame: "" });
  const [generalMessages, setGeneralMessages] = useState<CommunityMessage[]>([]);
  const [generalDraft, setGeneralDraft] = useState("");
  const [topics, setTopics] = useState<ForumTopic[]>([]);
  const [topicForm, setTopicForm] = useState({ title: "", subject: "Lore", description: "" });
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [topicMessages, setTopicMessages] = useState<CommunityMessage[]>([]);
  const [topicDraft, setTopicDraft] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const activeTopic = useMemo(() => topics.find((topic) => topic.id === activeTopicId) ?? null, [activeTopicId, topics]);
  const currentName = safeName(user, profile);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (nextUser) => {
      setUser(nextUser);
      if (!nextUser) {
        setProfile(null);
        setProfileForm({ displayName: "", bio: "", favoriteGame: "" });
      }
      setAuthReady(true);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;

    const profileRef = doc(firestore, "profiles", user.uid);
    let cancelled = false;

    ensureProfile(user).catch((error) => {
      if (!cancelled) setFeedback(error.message);
    });

    const unsubscribe = onSnapshot(profileRef, (snapshot) => {
      if (!snapshot.exists()) return;
      const data = snapshot.data();
      setProfile({
        uid: user.uid,
        displayName: String(data.displayName ?? safeName(user)),
        bio: String(data.bio ?? ""),
        favoriteGame: String(data.favoriteGame ?? ""),
        avatarSeed: String(data.avatarSeed ?? data.displayName ?? user.uid),
        isAnonymous: Boolean(data.isAnonymous ?? user.isAnonymous)
      });
      setProfileForm({
        displayName: String(data.displayName ?? safeName(user)),
        bio: String(data.bio ?? ""),
        favoriteGame: String(data.favoriteGame ?? "")
      });
    });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    const messagesQuery = query(collection(firestore, "communityRooms", "general", "messages"), orderBy("createdAt", "desc"), limit(60));
    const unsubscribe = onSnapshot(
      messagesQuery,
      (snapshot) => {
        setGeneralMessages(snapshot.docs.map((message) => mapMessage(message.id, message.data())).reverse());
      },
      (error) => setFeedback(error.message)
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    const topicsQuery = query(collection(firestore, "forumTopics"), orderBy("lastMessageAt", "desc"), limit(40));
    const unsubscribe = onSnapshot(
      topicsQuery,
      (snapshot) => {
        const nextTopics = snapshot.docs.map((topic) => mapTopic(topic.id, topic.data()));
        setTopics(nextTopics);
        setActiveTopicId((current) => current ?? nextTopics[0]?.id ?? null);
      },
      (error) => setFeedback(error.message)
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!activeTopicId) return;

    const topicMessagesQuery = query(collection(firestore, "forumTopics", activeTopicId, "messages"), orderBy("createdAt", "desc"), limit(60));
    const unsubscribe = onSnapshot(
      topicMessagesQuery,
      (snapshot) => setTopicMessages(snapshot.docs.map((message) => mapMessage(message.id, message.data())).reverse()),
      (error) => setFeedback(error.message)
    );

    return unsubscribe;
  }, [activeTopicId]);

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

  async function handleProfileSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!user) return;
    setFeedback("");
    setIsBusy(true);

    try {
      const displayName = profileForm.displayName.trim().slice(0, 42) || currentName;
      await updateProfile(user, { displayName });
      await setDoc(
        doc(firestore, "profiles", user.uid),
        {
          uid: user.uid,
          displayName,
          bio: profileForm.bio.trim().slice(0, 180),
          favoriteGame: profileForm.favoriteGame.trim().slice(0, 60),
          avatarSeed: displayName,
          isAnonymous: user.isAnonymous,
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );
      setFeedback("Perfil atualizado.");
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel salvar o perfil.");
    } finally {
      setIsBusy(false);
    }
  }

  async function sendMessage(room: "general" | "topic") {
    if (!user) {
      setFeedback("Entre com conta ou anonimamente para escrever.");
      return;
    }

    const draft = room === "general" ? generalDraft : topicDraft;
    const text = draft.trim().slice(0, 900);
    if (!text) return;

    const payload = {
      text,
      authorId: user.uid,
      authorName: currentName,
      authorRole: user.isAnonymous ? "anonimo" : "registrado",
      createdAt: serverTimestamp()
    };

    try {
      if (room === "general") {
        setGeneralDraft("");
        await addDoc(collection(firestore, "communityRooms", "general", "messages"), payload);
      } else if (activeTopicId) {
        setTopicDraft("");
        await addDoc(collection(firestore, "forumTopics", activeTopicId, "messages"), payload);
        await updateDoc(doc(firestore, "forumTopics", activeTopicId), {
          lastMessageAt: serverTimestamp(),
          messageCount: increment(1)
        });
      }
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel enviar.");
    }
  }

  async function createTopic(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!user) {
      setFeedback("Entre com conta ou anonimamente para criar topicos.");
      return;
    }

    const title = topicForm.title.trim().slice(0, 90);
    const description = topicForm.description.trim().slice(0, 260);
    if (!title) return;

    setFeedback("");
    setIsBusy(true);

    try {
      const topicRef = await addDoc(collection(firestore, "forumTopics"), {
        title,
        subject: topicForm.subject,
        description,
        createdBy: user.uid,
        createdByName: currentName,
        messageCount: 0,
        createdAt: serverTimestamp(),
        lastMessageAt: serverTimestamp()
      });
      setActiveTopicId(topicRef.id);
      setTopicForm({ title: "", subject: "Lore", description: "" });
      setRoomMode("forum");
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel criar o topico.");
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

      <div className="community-layout">
        <aside className="community-panel profile-panel">
          <div className="community-panel-head">
            <span className="panel-kicker">identidade</span>
            <strong>{authReady ? (user ? "Sessao ativa" : "Acesso restrito") : "Inicializando"}</strong>
          </div>

          {user ? (
            <>
              <div className="profile-card">
                <span className="profile-avatar">{avatarCode(profile?.avatarSeed ?? currentName)}</span>
                <div>
                  <strong>{currentName}</strong>
                  <span>{user.isAnonymous ? "Operador anonimo" : "Conta registrada"}</span>
                </div>
              </div>

              <form className="community-form" onSubmit={handleProfileSave}>
                <label>
                  Nome publico
                  <input value={profileForm.displayName} maxLength={42} onChange={(event) => setProfileForm((state) => ({ ...state, displayName: event.target.value }))} />
                </label>
                <label>
                  Jogo favorito
                  <input value={profileForm.favoriteGame} maxLength={60} onChange={(event) => setProfileForm((state) => ({ ...state, favoriteGame: event.target.value }))} placeholder="Ex.: Resident Evil 2" />
                </label>
                <label>
                  Bio
                  <textarea value={profileForm.bio} maxLength={180} onChange={(event) => setProfileForm((state) => ({ ...state, bio: event.target.value }))} placeholder="Sobrevivente de Raccoon, teorico de Plagas..." />
                </label>
                <button className="primary-action" disabled={isBusy} type="submit">Salvar perfil</button>
              </form>

              <button className="secondary-action" onClick={() => signOut(firebaseAuth)} type="button">Sair da conta</button>
            </>
          ) : (
            <>
              <div className="auth-switch">
                <button className={authMode === "login" ? "active" : ""} onClick={() => setAuthMode("login")} type="button">Login</button>
                <button className={authMode === "register" ? "active" : ""} onClick={() => setAuthMode("register")} type="button">Criar conta</button>
              </div>
              <form className="community-form" onSubmit={handleAuthSubmit}>
                {authMode === "register" && (
                  <label>
                    Nome publico
                    <input value={authForm.displayName} maxLength={42} onChange={(event) => setAuthForm((state) => ({ ...state, displayName: event.target.value }))} placeholder="Ex.: S.T.A.R.S. Rookie" />
                  </label>
                )}
                <label>
                  E-mail
                  <input autoComplete="email" type="email" value={authForm.email} onChange={(event) => setAuthForm((state) => ({ ...state, email: event.target.value }))} />
                </label>
                <label>
                  Senha
                  <input autoComplete={authMode === "login" ? "current-password" : "new-password"} minLength={6} type="password" value={authForm.password} onChange={(event) => setAuthForm((state) => ({ ...state, password: event.target.value }))} />
                </label>
                <button className="primary-action" disabled={isBusy} type="submit">{authMode === "login" ? "Entrar" : "Criar conta"}</button>
              </form>
              <button className="anonymous-action" disabled={isBusy} onClick={handleAnonymous} type="button">Entrar como anonimo</button>
            </>
          )}

          {feedback && <p className="community-feedback">{feedback}</p>}

          <div className="community-rules">
            <strong>Protocolo</strong>
            <span>Sem spam, sem dados pessoais, marque spoilers e mantenha teorias como teorias.</span>
          </div>
        </aside>

        <div className="community-panel community-main">
          <div className="room-switch">
            <button className={roomMode === "general" ? "active" : ""} onClick={() => setRoomMode("general")} type="button">Chat geral</button>
            <button className={roomMode === "forum" ? "active" : ""} onClick={() => setRoomMode("forum")} type="button">Forum por assunto</button>
          </div>

          {roomMode === "general" ? (
            <ChatWindow
              title="Chat geral"
              subtitle="Linha aberta para teorias, achados e conversas rapidas."
              messages={generalMessages}
              draft={generalDraft}
              disabled={!user}
              onDraft={setGeneralDraft}
              onSend={() => sendMessage("general")}
            />
          ) : (
            <div className="forum-layout">
              <form className="topic-form" onSubmit={createTopic}>
                <div className="topic-form-grid">
                  <label>
                    Assunto
                    <select value={topicForm.subject} onChange={(event) => setTopicForm((state) => ({ ...state, subject: event.target.value }))}>
                      {forumSubjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Novo topico
                    <input value={topicForm.title} maxLength={90} onChange={(event) => setTopicForm((state) => ({ ...state, title: event.target.value }))} placeholder="Ex.: Blue Umbrella ainda e confiavel?" />
                  </label>
                </div>
                <textarea value={topicForm.description} maxLength={260} onChange={(event) => setTopicForm((state) => ({ ...state, description: event.target.value }))} placeholder="Contexto inicial do arquivo..." />
                <button className="primary-action" disabled={!user || isBusy} type="submit">Criar topico</button>
              </form>

              <div className="topic-board">
                <div className="topic-list" aria-label="Topicos do forum">
                  {topics.length === 0 ? (
                    <p className="empty-state">Nenhum topico aberto ainda.</p>
                  ) : (
                    topics.map((topic) => (
                      <button className={topic.id === activeTopicId ? "topic-card active" : "topic-card"} key={topic.id} onClick={() => setActiveTopicId(topic.id)} type="button">
                        <span>{topic.subject}</span>
                        <strong>{topic.title}</strong>
                        {topic.description && <em>{topic.description}</em>}
                        <small>{topic.messageCount} mensagens · {formatStamp(topic.lastMessageAt ?? topic.createdAt)}</small>
                      </button>
                    ))
                  )}
                </div>

                <ChatWindow
                  title={activeTopic?.title ?? "Selecione um topico"}
                  subtitle={activeTopic ? `${activeTopic.subject} · criado por ${activeTopic.createdByName}` : "Crie ou selecione uma pasta de investigacao."}
                  messages={topicMessages}
                  draft={topicDraft}
                  disabled={!user || !activeTopic}
                  onDraft={setTopicDraft}
                  onSend={() => sendMessage("topic")}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ChatWindow({
  title,
  subtitle,
  messages,
  draft,
  disabled,
  onDraft,
  onSend
}: {
  title: string;
  subtitle: string;
  messages: CommunityMessage[];
  draft: string;
  disabled: boolean;
  onDraft: (value: string) => void;
  onSend: () => void;
}) {
  return (
    <div className="chat-window">
      <div className="chat-head">
        <div>
          <span className="panel-kicker">canal aberto</span>
          <strong>{title}</strong>
        </div>
        <p>{subtitle}</p>
      </div>

      <div className="message-list" aria-live="polite">
        {messages.length === 0 ? (
          <p className="empty-state">Nenhuma transmissao registrada.</p>
        ) : (
          messages.map((message) => (
            <article className="message-item" key={message.id}>
              <div>
                <strong>{message.authorName}</strong>
                <span>{message.authorRole} · {formatStamp(message.createdAt)}</span>
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
    </div>
  );
}
