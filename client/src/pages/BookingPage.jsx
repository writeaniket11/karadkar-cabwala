import BookingForm from '../components/BookingForm.jsx';
import FareForm from '../components/FareForm.jsx';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';

export default function BookingPage() {
  return (
    <>
      <Seo title="Book One Way Cab from Karad" description="Book one way cab, round trip taxi, airport pickup and outstation cab from Karad online." />
      <PageHero title="Book cab from Karad in one minute" eyebrow="Booking">
        Fill the form or send details on WhatsApp. We will confirm car, driver and fare.
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
