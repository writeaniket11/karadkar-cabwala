export default function MapSection() {
  return (
    <section className="section bg-mist">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-flame">Maharashtra-wide Coverage</p>
          <h2 className="mt-2 text-3xl font-black text-navy">Karad-based team with pickup across Maharashtra</h2>
          <p className="mt-3 text-slate-600">Pre-book a pickup from Pune, Mumbai, Karad, Satara, Sangli or another Maharashtra location. Goa connections and all-India pilgrimage tours are also available.</p>
        </div>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <iframe
            title="Karadkar Cabwala base in Karad"
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Karad%2C%20Maharashtra&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
