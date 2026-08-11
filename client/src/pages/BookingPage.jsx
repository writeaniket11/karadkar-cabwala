import BookingForm from '../components/BookingForm.jsx';
import FareForm from '../components/FareForm.jsx';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';

export default function BookingPage() {
  return (
    <>
      <Seo title="Book a Cab Across Maharashtra & Goa | Karadkar Cabwala" description="Book one-way, round-trip, airport, outstation or pilgrimage cabs from Pune, Mumbai, Karad, Satara, Sangli and across Maharashtra." />
      <PageHero title="Book your cab in one minute" eyebrow="Booking">
        Enter any pickup and drop location. We will confirm availability, car, driver and fare.
      </PageHero>
      <section className="section bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <BookingForm />
          <FareForm />
        </div>
      </section>
    </>
  );
}
