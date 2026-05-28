import "server-only";

import { validateCommunityImage, type CommunityImageKind } from "./mediaSafety";

interface RemoteModerationResponse {
  allowed?: boolean;
  safe?: boolean;
  blocked?: boolean;
  reason?: string;
  status?: string;
}

const imageModerationEndpoint = process.env.IMAGE_MODERATION_ENDPOINT;
const imageModerationToken = process.env.IMAGE_MODERATION_TOKEN;
const requireRemoteModeration = process.env.REQUIRE_IMAGE_MODERATION === "true";

function readAscii(bytes: Uint8Array, start: number, length: number) {
  return Array.from(bytes.slice(start, start + length))
    .map((byte) => String.fromCharCode(byte))
    .join("");
}

async function assertImageSignature(file: File) {
  const header = new Uint8Array(await file.slice(0, 16).arrayBuffer());
  const isJpeg = header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff;
  const isPng =
    header[0] === 0x89 &&
    header[1] === 0x50 &&
    header[2] === 0x4e &&
    header[3] === 0x47 &&
    header[4] === 0x0d &&
    header[5] === 0x0a &&
    header[6] === 0x1a &&
    header[7] === 0x0a;
  const isWebp = readAscii(header, 0, 4) === "RIFF" && readAscii(header, 8, 4) === "WEBP";

  if (!isJpeg && !isPng && !isWebp) {
    throw new Error("Assinatura real da imagem nao corresponde a JPG, PNG ou WebP.");
  }
}

async function runRemoteModeration(file: File, kind: CommunityImageKind) {
  if (!imageModerationEndpoint) {
    if (requireRemoteModeration) {
      throw new Error("Moderacao visual remota nao configurada no servidor.");
    }

    return "aprovado-servidor-regras-locais";
  }

  const formData = new FormData();
  formData.set("file", file);
  formData.set("usage", kind);

  const headers: HeadersInit = {};
  if (imageModerationToken) headers.Authorization = `Bearer ${imageModerationToken}`;

  const response = await fetch(imageModerationEndpoint, {
    method: "POST",
    headers,
    body: formData,
    cache: "no-store"
  });

  const payload = (await response.json().catch(() => ({}))) as RemoteModerationResponse;

  if (!response.ok) {
    throw new Error(payload.reason ?? "Moderacao visual recusou a imagem.");
  }

  if (payload.blocked || payload.allowed === false || payload.safe === false) {
    throw new Error(payload.reason ?? "Imagem bloqueada pela moderacao visual.");
  }

  return payload.status ?? "aprovado-servidor-moderacao-remota";
}

export async function moderateImageOnServer(file: File, kind: CommunityImageKind) {
  const validation = validateCommunityImage(file, kind);
  if (!validation.ok) {
    throw new Error(validation.reason);
  }

  await assertImageSignature(file);
  const moderationStatus = await runRemoteModeration(file, kind);

  return {
    moderationStatus
  };
}
