import { Link } from 'react-router-dom';
import { address, displayPhone, displaySecondaryPhone, legalBusinessName, navItems, phone, secondaryPhone, whatsappUrl } from '../data/content.js';
import BrandLogo from './BrandLogo.jsx';

export default function Footer() {
  return (
    <footer className="bg-navy px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <BrandLogo showText={false} variant="full" />
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
            Local taxi, one-way cab, airport transfer, outstation travel and family tours from Kolhapur.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-primary" href={`tel:${phone}`}>Call {displayPhone}</a>
            <a className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy" href={`tel:${secondaryPhone}`}>{displaySecondaryPhone}</a>
            <a className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy" href={whatsappUrl} target="_blank" rel="noreferrer">Book on WhatsApp</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Pages</h3>
          <div className="mt-3 grid gap-2">
            {navItems.map(([label, href]) => (
              <Link className="text-sm text-white/70 hover:text-taxi" key={href} to={href}>{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Service Areas</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Kolhapur, Pune, Mumbai, Goa, Sangli, Satara, Ratnagiri and nearby Maharashtra locations.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/70">{address}</p>
          <Link className="mt-3 inline-block text-sm font-bold text-taxi" to="/services#pilgrimage">Pilgrimage tours across India</Link>
        </div>
      </div>
      <div className="container-page mt-8 border-t border-white/10 pt-5 text-xs text-white/50">
        (c) {new Date().getFullYear()} {legalBusinessName}. All rights reserved.
      </div>
    </footer>
  );
}
