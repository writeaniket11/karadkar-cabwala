"use client";

import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase/client";

const LOCAL_ADMIN_KEY = "ssj-admin-session";
const AUTH_EVENT = "ssj-admin-auth-updated";

export const demoAdminEmail =
  process.env.NEXT_PUBLIC_DEMO_ADMIN_EMAIL ||
  "owner@shreesiddhivinayakjewellery.com";
export const demoAdminPassword =
  process.env.NEXT_PUBLIC_DEMO_ADMIN_PASSWORD || "admin12345";

function notifyAuthChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(AUTH_EVENT));
  }
}

function getLocalAdmin() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(LOCAL_ADMIN_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function signInAdmin(email, password) {
  if (isSupabaseConfigured()) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return data.user;
  }

  if (email === demoAdminEmail && password === demoAdminPassword) {
    const admin = {
      id: "local-admin",
      email,
      signedInAt: new Date().toISOString(),
    };
    window.localStorage.setItem(LOCAL_ADMIN_KEY, JSON.stringify(admin));
    notifyAuthChange();
    return admin;
  }

  throw new Error("Invalid admin email or password.");
}

export async function getCurrentAdmin() {
  if (isSupabaseConfigured()) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      return null;
    }

    return data.user;
  }

  return getLocalAdmin();
}

export async function signOutAdmin() {
  if (isSupabaseConfigured()) {
    await getSupabaseClient().auth.signOut();
    return;
  }

  window.localStorage.removeItem(LOCAL_ADMIN_KEY);
  notifyAuthChange();
}

export function onAdminAuthChange(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleLocalChange = () => callback(getLocalAdmin());
  window.addEventListener(AUTH_EVENT, handleLocalChange);
  window.addEventListener("storage", handleLocalChange);

  let subscription;
  if (isSupabaseConfigured()) {
    const supabase = getSupabaseClient();
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      callback(session?.user || null);
    });
    subscription = data.subscription;
  }

  return () => {
    window.removeEventListener(AUTH_EVENT, handleLocalChange);
    window.removeEventListener("storage", handleLocalChange);
    subscription?.unsubscribe();
  };
}
