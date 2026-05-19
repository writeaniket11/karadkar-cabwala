import { createClient } from "@supabase/supabase-js";

export const PRODUCTS_TABLE =
  process.env.NEXT_PUBLIC_SUPABASE_PRODUCTS_TABLE || "products";
export const PRODUCTS_BUCKET =
  process.env.NEXT_PUBLIC_SUPABASE_PRODUCTS_BUCKET || "jewellery-products";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabaseClient;

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function getSupabaseClient() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }

  return supabaseClient;
}
