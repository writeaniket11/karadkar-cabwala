import { AtSign, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  BUSINESS,
  getCallLink,
  getMapsEmbedUrl,
  getMapsUrl,
  getWhatsAppLink,
} from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="flex flex-col justify-between rounded-[8px] border border-ink/10 bg-ivory p-6 shadow-sm sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase text-antique">Visit Us</p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Jewellery wholesale address in Karad
            </h2>
            <p className="mt-5 flex gap-3 text-base leading-7 text-ink/70">
              <MapPin className="mt-1 size-5 shrink-0 text-antique" />
              {BUSINESS.address}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={getWhatsAppLink("new jewellery designs")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
            <a
              href={getCallLink()}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-antique hover:text-antique"
            >
              <Phone className="size-4" />
              Call Now
            </a>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-wine hover:text-wine sm:col-span-2"
            >
              <AtSign className="size-4" />
              @{BUSINESS.instagramHandle}
            </a>
          </div>
        </div>

        <div className="min-h-[360px] overflow-hidden rounded-[8px] border border-ink/10 bg-pearl shadow-luxe">
          <iframe
            title={`${BUSINESS.name} map`}
            src={getMapsEmbedUrl()}
            className="h-full min-h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="mx-auto mt-5 max-w-7xl text-right">
        <a
          href={getMapsUrl()}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-antique hover:text-ink"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
}
