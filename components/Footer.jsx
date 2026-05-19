import { AtSign, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  BUSINESS,
  getCallLink,
  getMapsUrl,
  getWhatsAppLink,
} from "@/lib/constants";
import { LogoMark } from "@/components/LogoMark";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <LogoMark inverse />
          <p className="mt-4 max-w-md text-sm leading-6 text-ivory/70">
            Premium gold jewellery, imitation jewellery, and new designs for
            retailers and occasion buyers in Karad.
          </p>
        </div>

        <div>
          <p className="font-display text-xl font-semibold">Visit</p>
          <a
            className="mt-3 flex gap-2 text-sm leading-6 text-ivory/70 transition hover:text-champagne"
            href={getMapsUrl()}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin className="mt-1 size-4 shrink-0" />
            {BUSINESS.address}
          </a>
        </div>

        <div>
          <p className="font-display text-xl font-semibold">Connect</p>
          <div className="mt-3 grid gap-2 text-sm text-ivory/70">
            <a
              className="inline-flex items-center gap-2 transition hover:text-champagne"
              href={getCallLink()}
            >
              <Phone className="size-4" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              className="inline-flex items-center gap-2 transition hover:text-champagne"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-4" />
              WhatsApp Enquiry
            </a>
            <a
              className="inline-flex items-center gap-2 transition hover:text-champagne"
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <AtSign className="size-4" />
              @{BUSINESS.instagramHandle}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} {BUSINESS.name}. Enquiry-based catalogue.
      </div>
    </footer>
  );
}
