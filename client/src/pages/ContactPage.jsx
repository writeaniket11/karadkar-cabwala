import { Mail, MessageCircle, Phone } from 'lucide-react';
import BookingForm from '../components/BookingForm.jsx';
import MapSection from '../components/MapSection.jsx';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';
import { displayPhone, phone, whatsappUrl } from '../data/content.js';

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Karad Cab Service | Call +91 92707 59955" description="Contact KARAD ONE WAY CAB TAXI RENTALS for one way cab, local taxi, airport taxi and outstation cab from Karad." />
      <PageHero title="Call or WhatsApp for fast cab booking" eyebrow="Contact">
        24/7 cab service from Karad across Maharashtra.
      </PageHero>
      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div className="grid gap-4">
            <a className="rounded-lg border border-slate-100 bg-mist p-5 text-navy" href={`tel:${phone}`}>
              <Phone className="text-flame" />
              <h2 className="mt-3 text-xl font-black">Call Now</h2>
              <p className="mt-1 font-bold">{displayPhone}</p>
            </a>
            <a className="rounded-lg border border-slate-100 bg-mist p-5 text-navy" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="text-green-500" />
              <h2 className="mt-3 text-xl font-black">WhatsApp Booking</h2>
              <p className="mt-1 font-bold">Send pickup and drop location</p>
            </a>
            <div className="rounded-lg border border-slate-100 bg-mist p-5 text-navy">
              <Mail className="text-flame" />
              <h2 className="mt-3 text-xl font-black">Service Area</h2>
              <p className="mt-1 text-sm text-slate-600">Karad and all over Maharashtra</p>
            </div>
          </div>
          <BookingForm compact />
        </div>
      </section>
      <MapSection />
    </>
  );
}
