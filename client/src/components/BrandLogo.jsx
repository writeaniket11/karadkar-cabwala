export const fullLogoPath = '/assets/harsh-tours-logo.jpeg';
export const markLogoPath = '/assets/harsh-tours-logo.jpeg';

export default function BrandLogo({ className = '', showText = true, invert = false, variant = 'mark' }) {
  const logoPath = variant === 'full' ? fullLogoPath : markLogoPath;

  return (
    <span className={`brand-logo ${className}`}>
      <span className={variant === 'full' ? 'brand-logo-full' : 'brand-logo-mark'}>
        <img width="1254" height="1254" src={logoPath} alt={showText ? '' : 'Harsh Tours & Travels'} />
      </span>
      {showText && (
        <span className="min-w-0">
          <span className={`brand-logo-name ${invert ? 'text-white' : 'text-navy'}`}>
            Harsh
          </span>
          <span className={`brand-logo-description ${invert ? 'text-white/80' : 'text-slate-700'}`}>
            Tours & Travels
          </span>
        </span>
      )}
    </span>
  );
}
