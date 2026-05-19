export default function MapSection() {
  return (
    <section className="section bg-mist">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-flame">Karad Location</p>
          <h2 className="mt-2 text-3xl font-black text-navy">Cab service from Karad to all over Maharashtra</h2>
          <p className="mt-3 text-slate-600">Call before pickup for exact driver and car details. We serve local customers, tourists, families, and business travelers.</p>
        </div>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <iframe
            title="Karad map"
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
