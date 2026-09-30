import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';
import { whyChoose } from '../data/content.js';

export default function AboutPage() {
  return (
    <>
      <Seo title="About Harsh Tours & Travels | Kolhapur Cab Service" description="Kolhapur-based tours and travels service providing reliable local taxi, airport transfer, one-way cab and outstation tours." />
      <PageHero title="Trusted tours and cab service in Kolhapur" eyebrow="About">
        Clean vehicles, polite drivers, fair pricing and booking support for families, tourists and business travelers.
      </PageHero>
      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-navy">Affordable travel with local trust</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Harsh Tours & Travels is based at Shahu Stadium Complex, Gokhale College Road, Kolhapur. We coordinate local taxi, one-way cab, airport transfers, outstation tours and pilgrimage trips across Maharashtra, Goa and India. Book by call, WhatsApp or the online form.
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
