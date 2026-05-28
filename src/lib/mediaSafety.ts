"use client";

export type CommunityImageKind = "profile" | "forum-post";

const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxImageSizes: Record<CommunityImageKind, number> = {
  profile: 4 * 1024 * 1024,
  "forum-post": 8 * 1024 * 1024
};

const blockedSensitiveTerms = [
  "porn",
  "porno",
  "pornografia",
  "nude",
  "nudez",
  "xxx",
  "sex",
  "sexo",
  "nsfw",
  "gore",
  "blood",
  "sangue",
  "violent",
  "violencia",
  "violence",
  "dead",
  "death",
  "morto",
  "morte",
  "wound",
  "ferida",
  "ferimento",
  "machucado",
  "injury",
  "acidente",
  "accident",
  "crash",
  "suicide",
  "suicidio",
  "selfharm",
  "automutilacao"
];

export const communityImagePolicy =
  "Nao envie nudez, pornografia, violencia grafica, acidentes, ferimentos, gore, automutilacao, abuso ou qualquer imagem de pessoa em situacao delicada.";

export function sanitizeStorageName(fileName: string) {
  const fallback = "evidencia";
  const normalized = fileName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 82);

  return normalized || fallback;
}

export function validateCommunityImage(file: File, kind: CommunityImageKind) {
  if (!allowedImageTypes.has(file.type)) {
    return { ok: false, reason: "Formato recusado. Use apenas JPG, PNG ou WebP." };
  }

  if (file.size > maxImageSizes[kind]) {
    const mb = Math.round(maxImageSizes[kind] / 1024 / 1024);
    return { ok: false, reason: `Imagem muito grande. Limite desta area: ${mb} MB.` };
  }

  const normalizedName = sanitizeStorageName(file.name);
  const blockedTerm = blockedSensitiveTerms.find((term) => normalizedName.includes(term));

  if (blockedTerm) {
    return {
      ok: false,
      reason: `Arquivo recusado pelo filtro local por conter termo sensivel: ${blockedTerm}.`
    };
  }

  return { ok: true, reason: "" };
}
