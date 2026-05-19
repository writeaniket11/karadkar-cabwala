import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { displayPhone, navItems, phone, whatsappUrl } from '../data/content.js';
import BrandLogo from './BrandLogo.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-taxi/20 text-navy' : 'text-slate-600 hover:bg-slate-50 hover:text-navy'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a className="btn-secondary px-4 py-2" href={`tel:${phone}`}>
            <Phone size={17} /> {displayPhone}
          </a>
          <a className="btn-primary px-4 py-2" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 lg:hidden">
          <nav className="container-page grid gap-1 py-3">
            {navItems.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="container-page grid grid-cols-2 gap-2">
            <a className="btn-secondary py-2" href={`tel:${phone}`}>
              <Phone size={17} /> Call
            </a>
            <a className="btn-primary py-2" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
