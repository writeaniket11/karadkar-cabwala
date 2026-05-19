import { MessageCircle } from 'lucide-react';
import FareForm from '../components/FareForm.jsx';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';
import { routes, whatsappUrl } from '../data/content.js';

export default function RoutesPage() {
  return (
    <>
      <Seo title="Karad to Pune, Mumbai, Kolhapur Cab Routes" description="Affordable cab service from Karad to Pune, Mumbai, Kolhapur, Sangli, Satara, Ratnagiri and Chiplun." />
      <PageHero title="Popular one way cab routes from Karad" eyebrow="Routes">
        Fast fare enquiry for one way and round trips across Maharashtra.
      </PageHero>
      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {routes.map((route) => (
              <article key={route} className="rounded-lg border border-slate-100 bg-mist p-5">
                <h2 className="text-xl font-black text-navy">{route}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">Clean car, polite driver, affordable pricing and flexible pickup time.</p>
                <a className="btn-primary mt-4" href={`${whatsappUrl}?text=${encodeURIComponent(`I want fare for ${route}`)}`} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} /> Ask Fare
                </a>
              </article>
            ))}
          </div>
          <FareForm />
        </div>
      </section>
    </>
  );
}
