export const fullLogoPath = '/assets/harsh-tours-logo.jpeg';
export const markLogoPath = '/assets/harsh-tours-logo.jpeg';

export default function BrandLogo({ className = '', showText = true, invert = false, variant = 'mark' }) {
  const logoPath = variant === 'full' ? fullLogoPath : markLogoPath;
  const logoSize = variant === 'full' ? 'h-16 w-32 sm:h-20 sm:w-40' : 'h-12 w-16 sm:h-14 sm:w-20';

  return (
    <span className={`flex min-w-0 items-center gap-3 ${className}`}>
      <span className={`grid ${logoSize} shrink-0 place-items-center overflow-hidden rounded-md bg-white ring-1 ring-slate-200`}>
        <img className="h-full w-full object-contain p-1" src={logoPath} alt="Harsh Tours and Travels logo" />
      </span>
      {showText && (
        <span className="min-w-0">
          <span className={`block text-sm font-black leading-tight sm:text-base ${invert ? 'text-white' : 'text-navy'}`}>
            HARSH TOURS & TRAVELS
          </span>
          <span className={`block text-xs font-semibold ${invert ? 'text-white/65' : 'text-slate-500'}`}>
            Tours, Travels & Cab Service
          </span>
        </span>
      )}
    </span>
  );
}
