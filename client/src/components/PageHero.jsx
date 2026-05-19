export default function PageHero({ title, eyebrow, children }) {
  return (
    <section className="section bg-mist">
      <div className="container-page reveal max-w-4xl">
        <p className="text-sm font-black uppercase text-flame">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-black leading-tight text-navy sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 text-base leading-7 text-slate-600">{children}</div>}
      </div>
    </section>
  );
}
