# Fotografia — Supabase setup

The photo gallery used to save uploads to the browser's IndexedDB, which is
local to whichever browser did the upload — that's why photos "disappeared"
for anyone else, or after clearing site data. It now uses
[Supabase](https://supabase.com) (a free-tier Postgres database + file
storage + auth) so photos are saved centrally and visible to every visitor,
and only you can add or remove photos.

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) → sign up → **New project**.
2. Pick any name/region and a database password (you won't need the password
   day-to-day, Supabase manages the connection for you).

## 2. Create your owner account

1. In the dashboard: **Authentication → Users → Add user → Create new user**.
2. Enter the email + password you'll use to sign in on the site. Check
   "Auto Confirm User" so it doesn't need an email confirmation step.
3. Click into the user you just created and copy the **User UID** (a UUID
   like `a1b2c3d4-...`) — you'll need it in the next step.
4. Also disable public sign-ups so no one else can ever create an account:
   **Authentication → Providers → Email → toggle "Allow new users to sign
   up" off**, then save.

## 3. Create the database table + storage bucket

1. Open `supabase/schema.sql` in this repo.
2. Replace both occurrences of the placeholder UUID
   (`00000000-0000-0000-0000-000000000000`) with the User UID from step 2.
3. In the Supabase dashboard: **SQL Editor → New query**, paste the edited
   file, and click **Run**.

This creates the `photos` table and a public `fotografia` storage bucket,
with rules (row-level security policies) saying: anyone can *view* photos,
but only your user id can *insert* or *delete* them.

## 4. Get your API keys

In the dashboard: **Settings → API**. You need:
- **Project URL**
- **anon / public key** (safe to expose in client-side code — it's the
  security policies from step 3 that actually restrict writes, not secrecy
  of this key)

## 5. Local development

```
cp .env.example .env.local
```

Fill in `REACT_APP_SUPABASE_URL` and `REACT_APP_SUPABASE_ANON_KEY` in
`.env.local` (already gitignored, so it won't be committed). Then
`npm start` as usual.

## 6. Production (GitHub Pages via GitHub Actions)

Add the same two values as repository secrets so the build step can bake
them in:

**Repo → Settings → Secrets and variables → Actions → New repository
secret**, add:
- `REACT_APP_SUPABASE_URL`
- `REACT_APP_SUPABASE_ANON_KEY`

The workflow at `.github/workflows/static.yml` already reads these into the
build. Push to `main` and the next deploy will use them.

## Using it

- The camera/upload button and the delete buttons are hidden for everyone
  by default.
- Click the small lock icon in the Fotografia header and sign in with the
  owner email/password from step 2 to reveal upload and delete controls.
- Signing out (icon next to "upload") hides them again.
