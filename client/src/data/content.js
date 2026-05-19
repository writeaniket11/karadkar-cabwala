import {
  BadgeIndianRupee,
  BriefcaseBusiness,
  CalendarClock,
  CarTaxiFront,
  Clock3,
  HeartHandshake,
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
  ['Routes', '/routes'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['Booking', '/booking']
];

export const services = [
  { title: 'One Way Trips', text: 'Pay for what you need from Karad to major Maharashtra cities.', icon: Route },
  { title: 'Outstation Cab', text: 'Comfortable long-distance travel with polite local drivers.', icon: CarTaxiFront },
  { title: 'Airport Pickup', text: 'Pune and Mumbai airport pickup and drop with timely service.', icon: Plane },
  { title: 'Emergency Travel', text: 'Quick cab support for urgent travel, day or night.', icon: CalendarClock },
  { title: 'Corporate Travel', text: 'Reliable cabs for office visits, guests, and business trips.', icon: BriefcaseBusiness },
  { title: 'Holiday Tours', text: 'Family-friendly cars for trips across Maharashtra.', icon: Sparkles }
];

export const routes = [
  'Karad to Pune',
  'Karad to Mumbai',
  'Karad to Kolhapur',
  'Karad to Sangli',
  'Karad to Satara',
  'Karad to Ratnagiri',
  'Karad to Chiplun'
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

export const languages = {
  en: 'Affordable One Way Cab Service from Karad',
  mr: 'Karad hun affordable one way cab seva',
  hi: 'Karad se affordable one way cab seva'
};
