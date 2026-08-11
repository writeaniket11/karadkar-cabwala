import { MessageCircle } from 'lucide-react';
import FareForm from '../components/FareForm.jsx';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';
import { routes, serviceAreas, whatsappUrl } from '../data/content.js';

export default function RoutesPage() {
  return (
    <>
      <Seo title="Cab Service in Pune, Mumbai, Karad, Satara, Sangli & Goa" description="Book one-way, round-trip, local and airport cabs from Pune, Mumbai, Karad, Satara, Sangli and across Maharashtra, with Goa connections." />
      <PageHero title="Cab pickup across Maharashtra and Goa connections" eyebrow="Service Areas">
        Doorstep pickup, fast fare enquiry and flexible one-way or round-trip travel.
      </PageHero>
      <section className="section bg-white">
        <div className="container-page">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase text-flame">Pickup Coverage</p>
            <h2 className="mt-2 text-3xl font-black text-navy">Cab service in major cities</h2>
            <p className="mt-3 leading-7 text-slate-600">We coordinate pre-booked pickups throughout Maharashtra. Goa services are available for interstate transfers and return journeys.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map(({ city, text }) => (
              <article key={city} className="rounded-lg border border-slate-100 bg-mist p-5">
                <h2 className="text-xl font-black text-navy">Cab service in {city}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-mist">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="mb-5 text-3xl font-black text-navy">Popular one-way and round-trip routes</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {routes.map((route) => (
                <article key={route} className="rounded-lg border border-slate-100 bg-white p-5">
                  <h3 className="text-xl font-black text-navy">{route}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Clean car, polite driver, fair pricing and flexible pickup time.</p>
                  <a className="btn-primary mt-4" href={`${whatsappUrl}?text=${encodeURIComponent(`I want fare for ${route}`)}`} target="_blank" rel="noreferrer">
                    <MessageCircle size={17} /> Ask Fare
                  </a>
                </article>
              ))}
            </div>
          </div>
          <FareForm />
        </div>
      </section>
    </>
  );
}
