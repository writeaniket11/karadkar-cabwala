import { services } from '../data/content.js';

export default function ServiceCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, text, icon: Icon }) => (
        <article key={title} className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
          <div className="grid h-11 w-11 place-items-center rounded-md bg-taxi/20 text-navy">
            <Icon size={23} />
          </div>
          <h3 className="mt-4 text-lg font-black text-navy">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
        </article>
      ))}
    </div>
  );
}
