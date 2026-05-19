import { Gem } from "lucide-react";

export function LogoMark({ inverse = false, compact = false }) {
  const textColor = inverse ? "text-ivory" : "text-ink";
  const subColor = inverse ? "text-ivory/70" : "text-ink/60";
  const ringColor = inverse ? "border-champagne/70" : "border-antique/40";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative grid size-12 shrink-0 place-items-center rounded-full border ${ringColor} bg-gradient-to-br from-champagne via-[#f2d58b] to-antique text-ink shadow-glow`}
        aria-hidden="true"
      >
        <span className="font-display text-2xl font-semibold leading-none">श्री</span>
        <Gem className="absolute -bottom-1 -right-1 size-5 rounded-full bg-ink p-1 text-champagne" />
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className={`font-display text-xl font-semibold ${textColor}`}>
            Shree Siddhivinayak
          </p>
          <p className={`text-xs font-medium ${subColor}`}>Jewellery Wholesaler</p>
        </div>
      )}
    </div>
  );
}
