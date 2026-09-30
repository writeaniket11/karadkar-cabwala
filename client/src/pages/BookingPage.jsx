import BookingForm from '../components/BookingForm.jsx';
import FareForm from '../components/FareForm.jsx';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';

export default function BookingPage() {
  return (
    <>
      <Seo title="Book Cab in Kolhapur | Harsh Tours & Travels" description="Book one-way, round-trip, airport, outstation or pilgrimage cab service from Kolhapur." />
      <PageHero title="Book a cab or tour from Kolhapur" eyebrow="Booking">
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
