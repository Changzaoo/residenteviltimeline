import { NextResponse, type NextRequest } from "next/server";
import { verifyFirebaseAdminToken, firebaseAdminAuth, firebaseAdminDb, FieldValue } from "@/lib/firebaseAdmin";
import { moderateImageOnServer } from "@/lib/imageModerationServer";
import { PROFILE_IMAGES_BUCKET, storagePath, uploadServerImage } from "@/lib/supabaseServer";

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
    const displayName = String(formData.get("displayName") ?? "").trim().slice(0, 42);
    const bio = String(formData.get("bio") ?? "").trim().slice(0, 180);
    const favoriteGame = String(formData.get("favoriteGame") ?? "").trim().slice(0, 60);
    const file = formData.get("file");

    if (!displayName) {
      return json({ error: "Nome publico obrigatorio." }, { status: 400 });
    }

    const db = firebaseAdminDb();
    const profileRef = db.collection("profiles").doc(token.uid);
    const profileSnapshot = await profileRef.get();
    const currentProfile = profileSnapshot.exists ? profileSnapshot.data() : {};
    let photoURL = String(currentProfile?.photoURL ?? "");
    let photoPath = String(currentProfile?.photoPath ?? "");

    if (file instanceof File) {
      const moderation = await moderateImageOnServer(file, "profile");
      photoPath = storagePath("profiles", token.uid, file.name);
      photoURL = await uploadServerImage(PROFILE_IMAGES_BUCKET, photoPath, file);
      await profileRef.set({ avatarModerationStatus: moderation.moderationStatus }, { merge: true });
    }

    await firebaseAdminAuth().updateUser(token.uid, {
      displayName,
      ...(photoURL ? { photoURL } : {})
    });

    await profileRef.set(
      {
        uid: token.uid,
        displayName,
        bio,
        favoriteGame,
        avatarSeed: displayName,
        isAnonymous: token.firebase.sign_in_provider === "anonymous",
        photoURL,
        photoPath,
        updatedAt: FieldValue.serverTimestamp(),
        ...(profileSnapshot.exists ? {} : { createdAt: FieldValue.serverTimestamp() })
      },
      { merge: true }
    );

    return json({ displayName, bio, favoriteGame, photoURL, photoPath });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Perfil recusado pelo servidor.";
    const status = message.toLowerCase().includes("token") || message.toLowerCase().includes("admin") ? 401 : 400;
    return json({ error: message }, { status });
  }
}
