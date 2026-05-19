import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-[8px] border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-luxe">
      <div className="image-sheen aspect-[4/5] bg-pearl">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase text-antique">
              {product.category}
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-ink">
              {product.title}
            </h3>
          </div>
          <span className="rounded-full bg-pearl px-3 py-1 text-xs font-semibold text-ink/70">
            Enquiry
          </span>
        </div>
        <p className="mt-3 min-h-12 text-sm leading-6 text-ink/65">
          {product.description}
        </p>
        <a
          href={getWhatsAppLink(product.title)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-4 py-3 text-sm font-semibold text-white transition hover:bg-ink"
        >
          <MessageCircle className="size-4" />
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}
