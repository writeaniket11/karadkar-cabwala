"use client";

import { ArrowLeft, LockKeyhole, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  demoAdminEmail,
  demoAdminPassword,
  getCurrentAdmin,
  signInAdmin,
} from "@/lib/admin-auth";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { LogoMark } from "@/components/LogoMark";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState(demoAdminEmail);
  const [password, setPassword] = useState(
    isSupabaseConfigured() ? "" : demoAdminPassword,
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentAdmin().then((admin) => {
      if (admin) {
        router.replace("/admin");
      }
    });
  }, [router]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInAdmin(email, password);
      router.replace("/admin");
    } catch (loginError) {
      setError(loginError.message || "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen bg-ivory lg:grid-cols-[0.9fr_1.1fr]">
      <section className="flex flex-col justify-between bg-ink px-4 py-6 text-ivory sm:px-8 lg:px-10">
        <a
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-ivory/80 transition hover:border-champagne hover:text-champagne"
        >
          <ArrowLeft className="size-4" />
          Back to site
        </a>

        <div className="my-16 max-w-xl">
          <LogoMark inverse />
          <p className="mt-10 text-sm font-semibold uppercase text-champagne">
            Owner Access
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-tight sm:text-6xl">
            Manage jewellery designs with confidence.
          </h1>
          <p className="mt-5 text-base leading-7 text-ivory/65">
            Upload product photography, publish new arrivals, and keep the
            public catalogue ready for WhatsApp enquiries.
          </p>
        </div>

        <div className="flex items-center gap-3 text-sm text-ivory/60">
          <ShieldCheck className="size-5 text-champagne" />
          Protected admin workspace
        </div>
      </section>

      <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-[8px] border border-ink/10 bg-white p-6 shadow-luxe sm:p-8"
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-pearl text-antique">
            <LockKeyhole className="size-5" />
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold text-ink">
            Admin Login
          </h2>
          <p className="mt-2 text-sm leading-6 text-ink/60">
            Sign in to add, edit, and remove jewellery catalogue posts.
          </p>

          {!isSupabaseConfigured() && (
            <div className="mt-5 rounded-[8px] border border-champagne/30 bg-champagne/10 px-4 py-3 text-xs leading-5 text-ink/70">
              Demo login: {demoAdminEmail} / {demoAdminPassword}
            </div>
          )}

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Email
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-12 rounded-[8px] border border-ink/10 bg-ivory px-4 text-sm font-medium outline-none transition focus:border-antique focus:ring-4 focus:ring-champagne/15"
                type="email"
                autoComplete="email"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Password
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-12 rounded-[8px] border border-ink/10 bg-ivory px-4 text-sm font-medium outline-none transition focus:border-antique focus:ring-4 focus:ring-champagne/15"
                type="password"
                autoComplete="current-password"
                required
              />
            </label>
          </div>

          {error && (
            <div className="mt-5 rounded-[8px] border border-wine/20 bg-wine/5 px-4 py-3 text-sm font-medium text-wine">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-ink px-5 text-sm font-bold text-ivory transition hover:bg-emerald disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </section>
    </main>
  );
}
