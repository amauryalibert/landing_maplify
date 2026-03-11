# Maplify Landing

Landing page pour Maplify (Next.js App Router, Tailwind CSS).

## Développement local

```bash
npm install
npm run dev
```

## Variables d'environnement

Crée un fichier `.env.local` avec :

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=...
```

## Supabase

Table `waitlist` :

```sql
create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  usage text,
  source text,
  created_at timestamptz default now()
);

alter table waitlist enable row level security;

create policy "allow insert from anon"
on waitlist
for insert
to anon
with check (true);
```
