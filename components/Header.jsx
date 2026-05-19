"use client";

import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { BUSINESS, getCallLink, getWhatsAppLink } from "@/lib/constants";
import { LogoMark } from "@/components/LogoMark";

const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#designs", label: "Designs" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-champagne/20 bg-ivory/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" aria-label={BUSINESS.name}>
          <LogoMark />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="transition hover:text-antique"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a className="transition hover:text-antique" href="/admin/login">
            Admin
          </a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={getCallLink()}
            className="inline-flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink transition hover:border-antique hover:text-antique"
            aria-label="Call now"
          >
            <Phone className="size-4" />
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ivory shadow-luxe transition hover:bg-emerald"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
        </div>

        <button
          className="inline-flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink md:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-champagne/20 bg-ivory px-4 pb-5 md:hidden">
          <nav className="flex flex-col gap-1 py-3 text-sm font-semibold text-ink">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-[8px] px-3 py-3 hover:bg-pearl"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="rounded-[8px] px-3 py-3 hover:bg-pearl"
              href="/admin/login"
              onClick={() => setOpen(false)}
            >
              Admin
            </a>
          </nav>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={getCallLink()}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 px-4 py-3 text-sm font-semibold text-ink"
            >
              <Phone className="size-4" />
              Call
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
