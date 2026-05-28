import "server-only";

import { createClient } from "@supabase/supabase-js";
import { sanitizeStorageName } from "./mediaSafety";

export const PROFILE_IMAGES_BUCKET = "profile-images";
export const FORUM_POST_IMAGES_BUCKET = "forum-post-images";

const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServerKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_STORAGE_KEY;

export function storagePath(scope: "profiles" | "forum-posts", ownerId: string, fileName: string) {
  const safeName = sanitizeStorageName(fileName);
  return `${scope}/${ownerId}/${Date.now()}-${safeName}`;
}

function getSupabaseServerClient() {
  if (!supabaseUrl || !supabaseServerKey) {
    throw new Error("Supabase Storage nao configurado no servidor.");
  }

  return createClient(supabaseUrl, supabaseServerKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export async function uploadServerImage(bucket: string, path: string, file: File) {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: "3600",
    contentType: file.type,
    upsert: true
  });

  if (error) {
    throw new Error(`Supabase Storage: ${error.message}`);
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}
