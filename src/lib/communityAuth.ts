"use client";

import type { User } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { firestore } from "./firebase";

export interface CommunityProfile {
  uid: string;
  displayName: string;
  bio: string;
  favoriteGame: string;
  avatarSeed: string;
  isAnonymous: boolean;
  photoURL: string;
  photoPath: string;
}

export function shortId(uid: string) {
  return uid.slice(0, 6).toUpperCase();
}

export function safeName(user: User | null, profile?: Pick<CommunityProfile, "displayName"> | null) {
  if (profile?.displayName) return profile.displayName;
  if (user?.displayName) return user.displayName;
  if (user?.isAnonymous) return `Operador anonimo ${shortId(user.uid)}`;
  return "Visitante";
}

export function avatarCode(seed: string) {
  return seed.slice(0, 2).toUpperCase();
}

export function profilePhoto(user: User | null, profile?: Pick<CommunityProfile, "photoURL"> | null) {
  return profile?.photoURL || user?.photoURL || "";
}

export async function ensureProfile(user: User, preferredName?: string) {
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
