import BookingForm from '../components/BookingForm.jsx';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';
import ServiceCards from '../components/ServiceCards.jsx';
import { pilgrimageDestinations } from '../data/content.js';

export default function ServicesPage() {
  return (
    <>
      <Seo title="One Way, Airport & Pilgrimage Cab Services | Karadkar Cabwala" description="Book local, one-way, round-trip, airport and outstation cabs across Maharashtra and Goa, plus pilgrimage tour cabs across India." />
      <PageHero title="Cab services for Maharashtra, Goa and India tours" eyebrow="Services">
        One-way, round-trip, local, airport, corporate, emergency and pilgrimage travel with convenient pickup.
      </PageHero>
      <section className="section bg-white">
        <div className="container-page">
          <ServiceCards />
        </div>
      </section>
      <section id="pilgrimage" className="section scroll-mt-24 bg-mist">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase text-flame">All-India Travel</p>
            <h2 className="mt-2 text-3xl font-black text-navy">Pilgrimage tour cabs across India</h2>
            <p className="mt-3 leading-7 text-slate-600">Tell us your pickup point, destinations, travel dates and number of passengers. We will help plan a custom route and fare for your family or group.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {pilgrimageDestinations.map((destination) => (
                <div key={destination} className="rounded-md bg-white px-4 py-3 text-sm font-bold text-navy shadow-sm">{destination}</div>
              ))}
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
