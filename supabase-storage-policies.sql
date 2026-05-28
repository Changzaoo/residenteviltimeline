-- Supabase Storage policies for the community media buckets.
-- Use the Supabase SQL editor after creating these buckets:
--   profile-images
--   forum-post-images
--
-- This project authenticates users with Firebase. The browser never writes to
-- Supabase directly; profile and forum writes go through /api/community/*
-- routes on Render, where the Firebase ID token is verified and image
-- moderation runs before Storage.
-- The server uses SUPABASE_SERVICE_ROLE_KEY, so buckets only need public read
-- if you want direct public image URLs in cards/messages.

create policy "Public read community profile images"
on storage.objects for select
to public
using (bucket_id = 'profile-images');

create policy "Public read forum post images"
on storage.objects for select
to public
using (bucket_id = 'forum-post-images');
