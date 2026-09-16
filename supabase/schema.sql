-- Fotografia database setup
--
-- Run this in your Supabase project's SQL editor (Supabase dashboard →
-- SQL Editor → New query → paste → Run). Safe to run more than once — it
-- drops and recreates its own policies rather than erroring if they already
-- exist. See README-fotografia.md for the full step-by-step setup.

-- 1. Table that stores photo metadata. The actual image files live in
--    Storage (bucket "fotografia"); this table just points at them.
create table if not exists public.photos (
    id bigint generated always as identity primary key,
    title text not null,
    date date,
    location text,
    image_path text not null,   -- path inside the "fotografia" storage bucket
    image_url text not null,    -- public URL, cached at upload time
    created_at timestamptz not null default now()
);

alter table public.photos enable row level security;

-- Anyone can view photos (the gallery is public).
drop policy if exists "Public can view photos" on public.photos;
create policy "Public can view photos"
    on public.photos for select
    to anon, authenticated
    using (true);

-- Only the signed-in owner can add/remove photos. Replace the UUID below
-- with your own user id (Supabase dashboard → Authentication → Users →
-- click your user → copy the "User UID") after you create your account.
drop policy if exists "Owner can insert photos" on public.photos;
create policy "Owner can insert photos"
    on public.photos for insert
    to authenticated
    with check (auth.uid() = '933bf12c-e748-4ab4-b577-a11cc9d88876');

drop policy if exists "Owner can delete photos" on public.photos;
create policy "Owner can delete photos"
    on public.photos for delete
    to authenticated
    using (auth.uid() = '933bf12c-e748-4ab4-b577-a11cc9d88876');

-- 2. Storage bucket for the actual image files.
insert into storage.buckets (id, name, public)
values ('fotografia', 'fotografia', true)
on conflict (id) do nothing;

-- Public read (so <img src="..."> works for every visitor).
drop policy if exists "Public can view fotografia files" on storage.objects;
create policy "Public can view fotografia files"
    on storage.objects for select
    to anon, authenticated
    using (bucket_id = 'fotografia');

-- Only the owner can upload/delete files in the bucket. Same UUID as above.
drop policy if exists "Owner can upload fotografia files" on storage.objects;
create policy "Owner can upload fotografia files"
    on storage.objects for insert
    to authenticated
    with check (
        bucket_id = 'fotografia'
        and auth.uid() = '933bf12c-e748-4ab4-b577-a11cc9d88876'
    );

drop policy if exists "Owner can delete fotografia files" on storage.objects;
create policy "Owner can delete fotografia files"
    on storage.objects for delete
    to authenticated
    using (
        bucket_id = 'fotografia'
        and auth.uid() = '933bf12c-e748-4ab4-b577-a11cc9d88876'
    );
