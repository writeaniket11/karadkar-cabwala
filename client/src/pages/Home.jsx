import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import BookingForm from '../components/BookingForm.jsx';
import BrandLogo from '../components/BrandLogo.jsx';
import FareForm from '../components/FareForm.jsx';
import MapSection from '../components/MapSection.jsx';
import Seo from '../components/Seo.jsx';
import ServiceCards from '../components/ServiceCards.jsx';
import { displayPhone, languages, phone, routes, testimonials, whatsappUrl, whyChoose } from '../data/content.js';

export default function Home() {
  return (
    <>
      <Seo
        title="Affordable One Way Cab Service from Karad | KARAD ONE WAY CAB TAXI RENTALS"
        description="Book affordable one way cab in Karad for Pune, Mumbai, Kolhapur, Sangli, Satara, Ratnagiri, Chiplun and all over Maharashtra."
      />
      <section className="section overflow-hidden bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="reveal">
            <p className="inline-flex rounded-md bg-taxi/20 px-3 py-2 text-sm font-black text-navy">Since 2018 | 24/7 Cab Service</p>
            <h1 className="mt-5 text-4xl font-black leading-tight text-navy sm:text-6xl">Affordable One Way Cab Service from Karad</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Clean cars. Polite drivers. 24/7 cab service across Maharashtra.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href={`tel:${phone}`}><Phone size={18} /> Call Now</a>
              <a className="btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Book on WhatsApp</a>
            </div>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
              <span className="flex items-center gap-2"><CheckCircle2 className="text-flame" size={18} /> One way trips</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-flame" size={18} /> Airport taxi</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-flame" size={18} /> Local cab</span>
            </div>
            <p className="mt-5 text-sm text-slate-500">{languages.en} | {languages.mr} | {languages.hi}</p>
          </div>

          <div className="relative rounded-lg bg-mist p-5 shadow-soft">
            <div className="rounded-lg bg-white p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase text-flame">Karad Taxi</p>
                  <h2 className="mt-2 text-2xl font-black text-navy">Fast booking, fair price</h2>
                </div>
                <div className="hidden sm:block">
                  <BrandLogo showText={false} variant="mark" />
                </div>
              </div>
              <div className="mt-8 rounded-lg border-2 border-dashed border-slate-200 bg-white p-5">
                <div className="h-20 rounded-t-full bg-taxi" />
                <div className="mx-auto -mt-7 grid h-20 w-52 place-items-center rounded-lg bg-navy text-white shadow-soft">
                  <span className="text-lg font-black">CAB READY</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-md bg-mist p-3 text-center">
                    <p className="text-xl font-black text-navy">24/7</p>
                    <p className="text-xs font-semibold text-slate-500">Available</p>
                  </div>
                  <div className="rounded-md bg-mist p-3 text-center">
                    <p className="text-xl font-black text-navy">2018</p>
                    <p className="text-xs font-semibold text-slate-500">Trusted Since</p>
                  </div>
                </div>
              </div>
              <a className="mt-5 flex items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-3 text-sm font-black text-white" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp {displayPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-page">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase text-flame">Services</p>
            <h2 className="mt-2 text-3xl font-black text-navy">Taxi service for every trip</h2>
          </div>
          <ServiceCards />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <BookingForm />
          <FareForm />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-flame">Popular Routes</p>
            <h2 className="mt-2 text-3xl font-black text-navy">Karad cab routes people book daily</h2>
            <p className="mt-3 text-slate-600">Ask fare on call or WhatsApp. One way and round trip options are available.</p>
            <Link className="btn-primary mt-6" to="/routes">View Routes</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {routes.map((route) => (
              <a key={route} className="rounded-md border border-slate-100 bg-mist px-4 py-4 text-sm font-black text-navy transition hover:border-taxi hover:bg-taxi/10" href={whatsappUrl} target="_blank" rel="noreferrer">
                {route}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-page">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase text-taxi">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-black">Affordable, safe, and easy to book</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map(({ title, icon: Icon }) => (
              <div key={title} className="flex items-center gap-3 rounded-lg bg-white/8 p-4">
                <Icon className="text-taxi" size={22} />
                <span className="font-bold">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase text-flame">Reviews</p>
              <h2 className="mt-2 text-3xl font-black text-navy">Trusted by local travelers</h2>
            </div>
            <ShieldCheck className="hidden text-taxi sm:block" size={42} />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm">
                <p className="text-sm leading-6 text-slate-600">"{item.text}"</p>
                <p className="mt-4 font-black text-navy">{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
