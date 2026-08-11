import {
  BadgeIndianRupee,
  BriefcaseBusiness,
  CalendarClock,
  CarTaxiFront,
  Clock3,
  HeartHandshake,
  Landmark,
  MapPin,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';

export const phone = '+919270759955';
export const displayPhone = '+91 92707 59955';
export const whatsappUrl = 'https://wa.me/919270759955';

export const navItems = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Service Areas', '/routes'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['Booking', '/booking']
];

export const services = [
  { title: 'One Way Cabs', text: 'Book one-way pickup from Pune, Mumbai, Karad, Satara, Sangli and across Maharashtra.', icon: Route },
  { title: 'Outstation Cab', text: 'Comfortable intercity travel across Maharashtra with Goa pickup and drop connections.', icon: CarTaxiFront },
  { title: 'Airport Transfers', text: 'Timely pickup and drop for Pune, Mumbai and Goa airports.', icon: Plane },
  { title: 'Local & Emergency Travel', text: 'Quick cab support for local or urgent travel, day or night.', icon: CalendarClock },
  { title: 'Corporate Travel', text: 'Reliable cabs for office visits, guests, and business trips.', icon: BriefcaseBusiness },
  { title: 'Pilgrimage Tours', text: 'Custom family pilgrimage cab tours to holy destinations across India.', icon: Landmark }
];

export const routes = [
  'Pune to Mumbai',
  'Mumbai to Pune',
  'Pune to Goa',
  'Mumbai to Goa',
  'Karad to Pune',
  'Karad to Mumbai',
  'Karad to Goa',
  'Satara to Pune',
  'Satara to Mumbai',
  'Sangli to Pune',
  'Sangli to Mumbai',
  'Sangli to Goa'
];

export const serviceAreas = [
  { city: 'Pune', text: 'Local pickup, Pune Airport transfers and outstation cabs to Mumbai, Goa and cities across Maharashtra.' },
  { city: 'Mumbai', text: 'Mumbai city and airport pickup for Pune, Goa, Satara, Karad, Sangli and long-distance travel.' },
  { city: 'Karad', text: 'Local, one-way and round-trip cabs from our Karad base to destinations across Maharashtra and beyond.' },
  { city: 'Satara', text: 'Doorstep cab pickup for Pune, Mumbai, Karad, Goa, airport transfers and family journeys.' },
  { city: 'Sangli', text: 'One-way, round-trip and outstation cabs for Pune, Mumbai, Goa and Maharashtra routes.' },
  { city: 'Goa', text: 'Pre-booked Maharashtra-Goa transfers, airport pickup and return trips for families and groups.' }
];

export const pilgrimageDestinations = [
  'Shirdi & Trimbakeshwar',
  'Pandharpur & Tuljapur',
  'Kolhapur & Akkalkot',
  'Tirupati & Srisailam',
  'Ayodhya & Varanasi',
  'Ujjain & Omkareshwar',
  'Dwarka & Somnath',
  'Rameswaram & Madurai'
];

export const whyChoose = [
  { title: 'Since 2018', icon: Clock3 },
  { title: '24/7 Available', icon: CalendarClock },
  { title: 'Affordable pricing', icon: BadgeIndianRupee },
  { title: 'Clean vehicles', icon: Sparkles },
  { title: 'Polite drivers', icon: HeartHandshake },
  { title: 'Safe journeys', icon: ShieldCheck },
  { title: 'Local and outstation', icon: MapPin },
  { title: 'Family friendly', icon: Users }
];

export const testimonials = [
  {
    name: 'Amit Jadhav',
    text: 'Booked Karad to Pune one way. Clean car, fair rate, and driver came on time.'
  },
  {
    name: 'Sneha Patil',
    text: 'Very helpful for airport drop. Easy WhatsApp booking and polite driver.'
  },
  {
    name: 'Rahul Mane',
    text: 'Good local taxi service in Karad. Affordable and available late night.'
  }
];

export const coverageLine = 'Pickup available from Pune, Mumbai, Karad, Satara, Sangli and locations across Maharashtra.';
