import { ArrowRight, AtSign, BadgeCheck, Gem, MessageCircle, Phone, Sparkles } from "lucide-react";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LogoMark } from "@/components/LogoMark";
import { ProductGallery } from "@/components/ProductGallery";
import {
  BUSINESS,
  CATEGORIES,
  CATEGORY_IMAGES,
  getCallLink,
  getWhatsAppLink,
} from "@/lib/constants";

const proofPoints = [
  "Gold Jewellery",
  "Imitation Jewellery",
  "New Designs",
];

export function HomePage() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      <Header />

      <section className="relative isolate overflow-hidden bg-night text-ivory">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${BUSINESS.heroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,16,13,0.93),rgba(17,16,13,0.72),rgba(17,16,13,0.22))]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,#fffaf0,rgba(255,250,240,0))]" />

        <div className="relative mx-auto flex min-h-[78svh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <LogoMark inverse compact />
            <p className="mt-8 text-sm font-semibold uppercase text-champagne">
              Premium Jewellery Wholesaler · Karad
            </p>
            <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-none text-ivory sm:text-6xl lg:text-7xl">
              Shree Siddhivinayak Jewellery
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-ivory/75 sm:text-lg">
              Ganpati-blessed jewellery curation with refined gold designs,
              imitation collections, and fresh arrivals for retailers and
              occasion-ready buyers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-6 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-ivory"
              >
                <MessageCircle className="size-4" />
                WhatsApp Enquiry
              </a>
              <a
                href={getCallLink()}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 bg-ivory/10 px-6 py-3 text-sm font-bold text-ivory backdrop-blur transition hover:bg-ivory hover:text-ink"
              >
                <Phone className="size-4" />
                Call Now
              </a>
              <a
                href="#designs"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-champagne/40 bg-transparent px-6 py-3 text-sm font-bold text-champagne transition hover:bg-champagne hover:text-ink"
              >
                View Designs
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-ivory px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto -mt-8 grid max-w-7xl gap-3 rounded-[8px] border border-champagne/30 bg-white p-3 shadow-luxe sm:grid-cols-3">
          {proofPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-[8px] bg-ivory px-4 py-4"
            >
              <BadgeCheck className="size-5 text-emerald" />
              <p className="text-sm font-bold text-ink">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="collections" className="bg-ivory px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase text-antique">
                Signature Collections
              </p>
              <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Catalogue categories for every counter
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-ink/65">
              Minimal, fast-moving, festive, bridal, and wholesale-ready designs
              arranged for easy enquiry.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => (
              <a
                key={category}
                href="#designs"
                className="group relative min-h-56 overflow-hidden rounded-[8px] bg-ink shadow-sm"
              >
                <img
                  src={CATEGORY_IMAGES[category]}
                  alt={`${category} jewellery`}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(17,16,13,0.82),rgba(17,16,13,0.08))]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                  <Sparkles className="mb-3 size-5 text-champagne" />
                  <p className="font-display text-2xl font-semibold">{category}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ProductGallery />

      <section
        id="instagram"
        className="overflow-hidden bg-ink px-4 py-16 text-ivory sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-champagne">
              <AtSign className="size-4" />
              Instagram
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Follow the latest design drops
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ivory/70">
              New arrivals, festive sets, and wholesale-ready jewellery updates
              are shared on Instagram.
            </p>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-bold text-ink transition hover:bg-champagne"
            >
              @{BUSINESS.instagramHandle}
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CATEGORIES.slice(0, 6).map((category, index) => (
              <div
                key={category}
                className={`group overflow-hidden rounded-[8px] border border-white/10 bg-white/5 ${
                  index === 1 ? "sm:translate-y-6" : ""
                } ${index === 4 ? "sm:-translate-y-5" : ""}`}
              >
                <img
                  src={CATEGORY_IMAGES[category]}
                  alt={`${category} preview`}
                  className="aspect-square h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-[8px] border border-ink/10 bg-white p-6">
            <Gem className="size-7 text-antique" />
            <p className="mt-4 font-display text-2xl font-semibold">
              Wholesale Focus
            </p>
            <p className="mt-2 text-sm leading-6 text-ink/65">
              Product-led catalogue for retailers looking for repeatable,
              high-demand jewellery designs.
            </p>
          </div>
          <div className="rounded-[8px] border border-ink/10 bg-white p-6">
            <Sparkles className="size-7 text-wine" />
            <p className="mt-4 font-display text-2xl font-semibold">
              New Design Flow
            </p>
            <p className="mt-2 text-sm leading-6 text-ink/65">
              Owner-managed uploads keep the public gallery fresh as new
              jewellery arrives.
            </p>
          </div>
          <div className="rounded-[8px] border border-ink/10 bg-white p-6">
            <MessageCircle className="size-7 text-emerald" />
            <p className="mt-4 font-display text-2xl font-semibold">
              Enquiry First
            </p>
            <p className="mt-2 text-sm leading-6 text-ink/65">
              Every design leads customers directly to WhatsApp for quick
              pricing and availability conversations.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
