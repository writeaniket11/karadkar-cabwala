# Shree Siddhivinayak Jewellery

Premium enquiry-based jewellery catalogue for **Shree Siddhivinayak Jewellery**, a jewellery wholesaler in Karad.

## Features

- Next.js App Router + Tailwind CSS
- Luxury mobile-first home page with WhatsApp, call, and design CTAs
- Searchable product gallery with category filters
- Product cards with WhatsApp enquiry links
- Admin login and protected dashboard
- Upload, edit, and delete jewellery posts
- Supabase Auth, Database, and Storage integration
- Local demo fallback when Supabase env vars are not configured
- Contact section with Google Maps embed, Instagram, WhatsApp, and call actions

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Demo Admin

When Supabase is not configured, the dashboard uses local browser storage.

```text
Email: owner@shreesiddhivinayakjewellery.com
Password: admin12345
```

## Supabase Setup

Create a Supabase project, enable email/password auth, create one admin user, then add the env vars from `.env.example`.

Run this SQL in Supabase:

```sql
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  description text not null,
  image_url text not null,
  image_path text,
  created_at timestamptz not null default now()
);

alter table public.products enable row level security;

create policy "Public can read products"
on public.products for select
using (true);

create policy "Authenticated admins can insert products"
on public.products for insert
to authenticated
with check (true);

create policy "Authenticated admins can update products"
on public.products for update
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can delete products"
on public.products for delete
to authenticated
using (true);
```

Create a public storage bucket named `jewellery-products`, then add storage policies:

```sql
create policy "Public can read jewellery images"
on storage.objects for select
using (bucket_id = 'jewellery-products');

create policy "Authenticated admins can upload jewellery images"
on storage.objects for insert
to authenticated
with check (bucket_id = 'jewellery-products');

create policy "Authenticated admins can update jewellery images"
on storage.objects for update
to authenticated
using (bucket_id = 'jewellery-products')
with check (bucket_id = 'jewellery-products');

create policy "Authenticated admins can delete jewellery images"
on storage.objects for delete
to authenticated
using (bucket_id = 'jewellery-products');
```

## Production

```bash
npm run build
npm start
```

Set these environment variables on your host:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SUPABASE_PRODUCTS_TABLE`
- `NEXT_PUBLIC_SUPABASE_PRODUCTS_BUCKET`
