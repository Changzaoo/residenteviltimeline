"use client";

export interface CommunityProfileSaveResult {
  displayName: string;
  bio: string;
  favoriteGame: string;
  photoURL: string;
  photoPath: string;
}

const renderApiBase = process.env.NEXT_PUBLIC_RENDER_API_BASE?.replace(/\/$/, "") ?? "";

export async function saveCommunityProfile({
  idToken,
  displayName,
  bio,
  favoriteGame,
  file
}: {
  idToken: string;
  displayName: string;
  bio: string;
  favoriteGame: string;
  file?: File | null;
}): Promise<CommunityProfileSaveResult> {
  const formData = new FormData();
  formData.set("displayName", displayName);
  formData.set("bio", bio);
  formData.set("favoriteGame", favoriteGame);
  if (file) formData.set("file", file);

  const response = await fetch(`${renderApiBase}/api/community/profile`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`
    },
    body: formData
  });

  const payload = (await response.json().catch(() => ({}))) as Partial<CommunityProfileSaveResult> & { error?: string };

  if (!response.ok) {
    throw new Error(payload.error ?? "Perfil recusado pelo servidor.");
  }

  return {
    displayName: payload.displayName ?? displayName,
    bio: payload.bio ?? bio,
    favoriteGame: payload.favoriteGame ?? favoriteGame,
    photoURL: payload.photoURL ?? "",
    photoPath: payload.photoPath ?? ""
  };
}

export async function sendForumMessageOnServer({
  idToken,
  topicId,
  text,
  file
}: {
  idToken: string;
  topicId: string;
  text: string;
  file?: File | null;
}) {
  const formData = new FormData();
  formData.set("topicId", topicId);
  formData.set("text", text);
  if (file) formData.set("file", file);

  const response = await fetch(`${renderApiBase}/api/community/forum-message`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`
    },
    body: formData
  });

  const payload = (await response.json().catch(() => ({}))) as { error?: string };

  if (!response.ok) {
    throw new Error(payload.error ?? "Mensagem recusada pelo servidor.");
  }

  return payload;
}
