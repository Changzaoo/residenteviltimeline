import { NextResponse, type NextRequest } from "next/server";
import { verifyFirebaseAdminToken, firebaseAdminDb, FieldValue } from "@/lib/firebaseAdmin";
import { moderateImageOnServer } from "@/lib/imageModerationServer";
import { FORUM_POST_IMAGES_BUCKET, storagePath, uploadServerImage } from "@/lib/supabaseServer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.COMMUNITY_ALLOWED_ORIGIN ?? "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Authorization, Content-Type"
};

function json(payload: unknown, init?: ResponseInit) {
  return NextResponse.json(payload, {
    ...init,
    headers: {
      ...corsHeaders,
      ...(init?.headers ?? {})
    }
  });
}

function bearerToken(request: NextRequest) {
  const authorization = request.headers.get("authorization") ?? "";
  return authorization.replace(/^Bearer\s+/i, "").trim();
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders
  });
}

export async function POST(request: NextRequest) {
  try {
    const token = await verifyFirebaseAdminToken(bearerToken(request));
    const formData = await request.formData();
    const text = String(formData.get("text") ?? "").trim().slice(0, 900);
    const topicId = String(formData.get("topicId") ?? "").trim();
    const file = formData.get("file");

    if (!topicId) {
      return json({ error: "Topico do forum ausente." }, { status: 400 });
    }

    if (!text) {
      return json({ error: "Mensagem vazia." }, { status: 400 });
    }

    const db = firebaseAdminDb();
    const profileSnapshot = await db.collection("profiles").doc(token.uid).get();
    const profile = profileSnapshot.exists ? profileSnapshot.data() : {};
    const authorName = String(profile?.displayName ?? token.name ?? "Operador anonimo").slice(0, 42);
    const authorPhotoURL = String(profile?.photoURL ?? token.picture ?? "");
    const authorRole = token.firebase.sign_in_provider === "anonymous" ? "anonimo" : "registrado";
    let imageUrl = "";
    let moderationStatus = "";

    if (file instanceof File) {
      const moderation = await moderateImageOnServer(file, "forum-post");
      const path = storagePath("forum-posts", `${topicId}/${token.uid}`, file.name);
      imageUrl = await uploadServerImage(FORUM_POST_IMAGES_BUCKET, path, file);
      moderationStatus = moderation.moderationStatus;
    }

    const topicRef = db.collection("forumTopics").doc(topicId);
    const messageRef = await topicRef.collection("messages").add({
      text,
      authorId: token.uid,
      authorName,
      authorRole,
      authorPhotoURL,
      ...(imageUrl ? { imageUrl, moderationStatus } : {}),
      createdAt: FieldValue.serverTimestamp()
    });

    await topicRef.set(
      {
        lastMessageAt: FieldValue.serverTimestamp(),
        messageCount: FieldValue.increment(1)
      },
      { merge: true }
    );

    return json({ messageId: messageRef.id, imageUrl, moderationStatus });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Mensagem recusada pelo servidor.";
    const status = message.toLowerCase().includes("token") || message.toLowerCase().includes("admin") ? 401 : 400;
    return json({ error: message }, { status });
  }
}
