import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';
import { whyChoose } from '../data/content.js';

export default function AboutPage() {
  return (
    <>
      <Seo title="About Karadkar Cabwala | Maharashtra Cab Service" description="Karad-based cab team providing reliable pickup across Maharashtra, Goa connections and pilgrimage tours across India since 2018." />
      <PageHero title="Trusted Maharashtra cab service since 2018" eyebrow="About">
        Clean vehicles, polite drivers, fair pricing and 24/7 booking support for families, tourists and business travelers.
      </PageHero>
      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-navy">Affordable travel with local trust</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Based in Karad, KARAD ONE WAY CAB TAXI RENTALS coordinates pickups from Pune, Mumbai, Karad, Satara, Sangli and locations across Maharashtra. We also provide Goa connections and custom pilgrimage tours across India. Book by call, WhatsApp or the online form.
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
