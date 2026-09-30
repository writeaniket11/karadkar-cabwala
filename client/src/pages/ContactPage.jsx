import { Mail, MessageCircle, Phone } from 'lucide-react';
import BookingForm from '../components/BookingForm.jsx';
import MapSection from '../components/MapSection.jsx';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';
import { address, addressMarathi, displayPhone, displaySecondaryPhone, phone, secondaryPhone, whatsappUrl } from '../data/content.js';

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Harsh Tours & Travels | Call +91 97666 81372" description="Call or WhatsApp Harsh Tours & Travels for Kolhapur taxi, airport transfer, outstation cab and tour bookings." />
      <PageHero title="Call or WhatsApp for fast cab booking" eyebrow="Contact">
        Booking support for Kolhapur local taxi, outstation travel, airport transfers and family tours.
      </PageHero>
      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div className="grid gap-4">
            <a className="rounded-lg border border-slate-100 bg-mist p-5 text-navy" href={`tel:${phone}`}>
              <Phone className="text-flame" />
              <h2 className="mt-3 text-xl font-black">Call Now</h2>
              <p className="mt-1 font-bold">{displayPhone}</p>
            </a>
            <a className="rounded-lg border border-slate-100 bg-mist p-5 text-navy" href={`tel:${secondaryPhone}`}>
              <Phone className="text-flame" />
              <h2 className="mt-3 text-xl font-black">Alternate Number</h2>
              <p className="mt-1 font-bold">{displaySecondaryPhone}</p>
            </a>
            <a className="rounded-lg border border-slate-100 bg-mist p-5 text-navy" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="text-green-500" />
              <h2 className="mt-3 text-xl font-black">WhatsApp Booking</h2>
              <p className="mt-1 font-bold">Send pickup and drop location</p>
            </a>
            <div className="rounded-lg border border-slate-100 bg-mist p-5 text-navy">
              <Mail className="text-flame" />
              <h2 className="mt-3 text-xl font-black">Office Address</h2>
              <p className="mt-1 text-sm font-semibold text-slate-700">{address}</p>
              <p className="mt-2 text-sm text-slate-600">{addressMarathi}</p>
            </div>
          </div>
          <BookingForm compact />
        </div>
      </section>
      <MapSection />
    </>
  );
}
