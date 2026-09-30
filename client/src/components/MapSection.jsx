import { address, addressMarathi } from '../data/content.js';

export default function MapSection() {
  return (
    <section className="section bg-mist">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-flame">Kolhapur Office</p>
          <h2 className="mt-2 text-3xl font-black text-navy">Harsh Tours & Travels in Kolhapur</h2>
          <p className="mt-3 text-slate-600">{address}</p>
          <p className="mt-2 text-slate-600">{addressMarathi}</p>
        </div>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <iframe
            title="Harsh Tours and Travels office in Kolhapur"
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Shahu%20Stadium%20Complex%20Gokhale%20College%20Road%20Kolhapur&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
