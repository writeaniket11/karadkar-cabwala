import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';
import { whyChoose } from '../data/content.js';

export default function AboutPage() {
  return (
    <>
      <Seo title="About KARAD ONE WAY CAB TAXI RENTALS" description="Reliable and affordable taxi rental business in Karad providing cab service across Maharashtra since 2018." />
      <PageHero title="Reliable cab service in Karad since 2018" eyebrow="About">
        We provide clean vehicles, polite drivers, safe travel, affordable pricing and 24/7 availability for locals and tourists.
      </PageHero>
      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-navy">Affordable travel with local trust</h2>
            <p className="mt-4 leading-7 text-slate-600">
              KARAD ONE WAY CAB TAXI RENTALS serves Karad, Satara, Sangli, Kolhapur, Pune, Mumbai, Ratnagiri, Chiplun and all over Maharashtra. Book by call, WhatsApp, or online form.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyChoose.map(({ title }) => (
              <div key={title} className="flex items-center gap-3 rounded-md bg-mist p-4 font-bold text-navy">
                <CheckCircle2 className="text-flame" size={20} /> {title}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
