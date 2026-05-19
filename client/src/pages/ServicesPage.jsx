import BookingForm from '../components/BookingForm.jsx';
import PageHero from '../components/PageHero.jsx';
import Seo from '../components/Seo.jsx';
import ServiceCards from '../components/ServiceCards.jsx';

export default function ServicesPage() {
  return (
    <>
      <Seo title="Karad Taxi Services | Local, Outstation, Airport Cab" description="Book local cab service, outstation trips, airport pickup, emergency travel and one way cab from Karad." />
      <PageHero title="Karad taxi service for local and outstation travel" eyebrow="Services">
        One way, round trip, local travel, airport pickup, emergency trips, weddings, corporate travel and daily commute.
      </PageHero>
      <section className="section bg-white">
        <div className="container-page">
          <ServiceCards />
        </div>
      </section>
      <section className="section bg-mist">
        <div className="container-page max-w-3xl">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
