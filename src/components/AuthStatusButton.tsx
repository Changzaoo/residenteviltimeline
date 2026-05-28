"use client";

import { FormEvent, useEffect, useState } from "react";
import type { User } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { ensureProfile, avatarCode, profilePhoto, safeName, type CommunityProfile } from "@/lib/communityAuth";
import { firebaseAuth, firestore } from "@/lib/firebase";

type AuthMode = "login" | "register";

function mapProfile(uid: string, data: Record<string, unknown>, user: User): CommunityProfile {
  return {
    uid,
    displayName: String(data.displayName ?? safeName(user)),
    bio: String(data.bio ?? ""),
    favoriteGame: String(data.favoriteGame ?? ""),
    avatarSeed: String(data.avatarSeed ?? data.displayName ?? uid),
    isAnonymous: Boolean(data.isAnonymous ?? user.isAnonymous),
    photoURL: String(data.photoURL ?? user.photoURL ?? ""),
    photoPath: String(data.photoPath ?? "")
  };
}

export function AuthStatusButton({ onOpenCommunity }: { onOpenCommunity?: () => void }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<CommunityProfile | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [form, setForm] = useState({ displayName: "", email: "", password: "" });
  const [feedback, setFeedback] = useState("");
  const [busy, setBusy] = useState(false);

  const currentName = safeName(user, profile);
  const currentPhoto = profilePhoto(user, profile);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
      if (!nextUser) setProfile(null);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;

    ensureProfile(user).catch((error) => setFeedback(error.message));

    const unsubscribe = onSnapshot(doc(firestore, "profiles", user.uid), (snapshot) => {
      if (!snapshot.exists()) return;
      setProfile(mapProfile(user.uid, snapshot.data(), user));
    });

    return unsubscribe;
  }, [user]);

  async function handleAuthSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback("");
    setBusy(true);

    try {
      const displayName = form.displayName.trim().slice(0, 42);

      if (authMode === "register") {
        const credential = await createUserWithEmailAndPassword(firebaseAuth, form.email.trim(), form.password);
        if (displayName) await updateProfile(credential.user, { displayName });
        await ensureProfile(credential.user, displayName);
      } else {
        const credential = await signInWithEmailAndPassword(firebaseAuth, form.email.trim(), form.password);
        await ensureProfile(credential.user);
      }

      setForm({ displayName: "", email: "", password: "" });
      setModalOpen(false);
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel autenticar.");
    } finally {
      setBusy(false);
    }
  }

  async function handleAnonymous() {
    setFeedback("");
    setBusy(true);

    try {
      const credential = await signInAnonymously(firebaseAuth);
      await ensureProfile(credential.user);
      setModalOpen(false);
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Nao foi possivel entrar como anonimo.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="topbar-auth">
      <button className={user ? "auth-status logged" : "auth-status"} onClick={() => setModalOpen(true)} type="button">
        <span className="auth-avatar" aria-hidden="true">
          {currentPhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={currentPhoto} alt="" loading="lazy" />
          ) : (
            avatarCode(currentName)
          )}
        </span>
        <span className="auth-copy">
          <strong>{authReady ? (user ? currentName : "Login / Registrar-se") : "Inicializando"}</strong>
          <small>{user ? (user.isAnonymous ? "Operador anonimo" : "Sessao ativa") : "Acesso comunitario"}</small>
        </span>
      </button>

      {modalOpen && (
        <div className="auth-popover" role="dialog" aria-modal="true" aria-label="Acesso da comunidade">
          <button className="auth-popover-backdrop" aria-label="Fechar acesso" onClick={() => setModalOpen(false)} type="button" />
          <div className="auth-popover-card">
            <div className="auth-popover-head">
              <div>
                <span className="panel-kicker">credencial</span>
                <strong>{user ? "Perfil ativo" : "Entrar no arquivo"}</strong>
              </div>
              <button className="mobile-menu-close" aria-label="Fechar" onClick={() => setModalOpen(false)} type="button">
                X
              </button>
            </div>

            {user ? (
              <div className="auth-mini-profile">
                <span className="auth-avatar large" aria-hidden="true">
                  {currentPhoto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={currentPhoto} alt="" loading="lazy" />
                  ) : (
                    avatarCode(currentName)
                  )}
                </span>
                <strong>{currentName}</strong>
                <p>{profile?.favoriteGame ? `Jogo favorito: ${profile.favoriteGame}` : "Perfil comunitario ativo."}</p>
                <button
                  className="primary-action"
                  onClick={() => {
                    onOpenCommunity?.();
                    setModalOpen(false);
                  }}
                  type="button"
                >
                  Abrir comunidade
                </button>
                <button className="secondary-action" onClick={() => signOut(firebaseAuth)} type="button">
                  Sair da conta
                </button>
              </div>
            ) : (
              <>
                <div className="auth-switch">
                  <button className={authMode === "login" ? "active" : ""} onClick={() => setAuthMode("login")} type="button">
                    Login
                  </button>
                  <button className={authMode === "register" ? "active" : ""} onClick={() => setAuthMode("register")} type="button">
                    Criar conta
                  </button>
                </div>
                <form className="community-form" onSubmit={handleAuthSubmit}>
                  {authMode === "register" && (
                    <label>
                      Nome publico
                      <input
                        value={form.displayName}
                        maxLength={42}
                        onChange={(event) => setForm((state) => ({ ...state, displayName: event.target.value }))}
                        placeholder="Ex.: S.T.A.R.S. Rookie"
                      />
                    </label>
                  )}
                  <label>
                    E-mail
                    <input autoComplete="email" type="email" value={form.email} onChange={(event) => setForm((state) => ({ ...state, email: event.target.value }))} />
                  </label>
                  <label>
                    Senha
                    <input
                      autoComplete={authMode === "login" ? "current-password" : "new-password"}
                      minLength={6}
                      type="password"
                      value={form.password}
                      onChange={(event) => setForm((state) => ({ ...state, password: event.target.value }))}
                    />
                  </label>
                  <button className="primary-action" disabled={busy} type="submit">
                    {authMode === "login" ? "Entrar" : "Criar conta"}
                  </button>
                </form>
                <button className="anonymous-action" disabled={busy} onClick={handleAnonymous} type="button">
                  Entrar como anonimo
                </button>
              </>
            )}

            {feedback && <p className="community-feedback">{feedback}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
