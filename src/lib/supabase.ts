"use client";

import { createClient } from "@supabase/supabase-js";
import { sanitizeStorageName } from "./mediaSafety";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://xmuawzcpydmbcqackgoz.supabase.co";
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "sb_publishable_62p9uRxDRS6I2P5LnnEhsw_0b5b9kOC";

export const PROFILE_IMAGES_BUCKET = "profile-images";
export const FORUM_POST_IMAGES_BUCKET = "forum-post-images";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

export function storagePath(scope: "profiles" | "forum-posts", ownerId: string, fileName: string) {
  const safeName = sanitizeStorageName(fileName);
  return `${scope}/${ownerId}/${Date.now()}-${safeName}`;
}

export async function uploadPublicImage(bucket: string, path: string, file: File) {
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
