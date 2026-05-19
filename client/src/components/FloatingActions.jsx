import { MessageCircle, Phone } from 'lucide-react';
import { phone, whatsappUrl } from '../data/content.js';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        className="grid h-12 w-12 place-items-center rounded-full bg-green-500 text-white shadow-soft transition hover:scale-105"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Book on WhatsApp"
      >
        <MessageCircle />
      </a>
      <a
        className="grid h-12 w-12 place-items-center rounded-full bg-taxi text-navy shadow-soft transition hover:scale-105 sm:hidden"
        href={`tel:${phone}`}
        aria-label="Call now"
      >
        <Phone />
      </a>
    </div>
  );
}
