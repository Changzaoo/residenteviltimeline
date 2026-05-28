-- Supabase Storage policies for the community media buckets.
-- Use the Supabase SQL editor after creating these buckets:
--   profile-images
--   forum-post-images
--
-- This project authenticates users with Firebase, so the browser uses only the
-- Supabase publishable key for Storage. These policies allow public read and
-- anon insert. For a hardened production forum, replace anon insert with an
-- Edge Function that verifies Firebase ID tokens and runs server-side image
-- moderation before writing to Storage.

create policy "Public read community profile images"
on storage.objects for select
to public
using (bucket_id = 'profile-images');

create policy "Anon upload community profile images"
on storage.objects for insert
to anon
with check (bucket_id = 'profile-images');

create policy "Public read forum post images"
on storage.objects for select
to public
using (bucket_id = 'forum-post-images');

create policy "Anon upload forum post images"
on storage.objects for insert
to anon
with check (bucket_id = 'forum-post-images');
