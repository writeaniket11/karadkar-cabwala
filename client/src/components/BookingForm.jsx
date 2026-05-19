import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { createBooking } from '../api.js';
import { whatsappUrl } from '../data/content.js';

const initialForm = {
  name: '',
  mobile: '',
  pickup: '',
  dropLocation: '',
  date: '',
  time: '',
  tripType: 'One Way',
  message: ''
};

export default function BookingForm({ compact = false }) {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState({ loading: false, message: '', error: '' });

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submit(event) {
    event.preventDefault();
    setState({ loading: true, message: '', error: '' });
    try {
      await createBooking(form);
      setForm(initialForm);
      setState({ loading: false, message: 'Booking enquiry sent. We will call you shortly.', error: '' });
    } catch (error) {
      setState({ loading: false, message: '', error: error.message });
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-soft sm:p-6">
      <div>
        <p className="text-sm font-black uppercase text-flame">Quick Booking</p>
        <h2 className="mt-1 text-2xl font-black text-navy">Book your cab</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="field" name="name" placeholder="Name" value={form.name} onChange={updateField} required />
        <input className="field" name="mobile" placeholder="Mobile number" value={form.mobile} onChange={updateField} required />
        <input className="field" name="pickup" placeholder="Pickup location" value={form.pickup} onChange={updateField} required />
        <input className="field" name="dropLocation" placeholder="Drop location" value={form.dropLocation} onChange={updateField} required />
        <input className="field" name="date" type="date" value={form.date} onChange={updateField} required />
        <input className="field" name="time" type="time" value={form.time} onChange={updateField} required />
        <select className="field" name="tripType" value={form.tripType} onChange={updateField}>
          <option>One Way</option>
          <option>Round Trip</option>
          <option>Local</option>
          <option>Airport</option>
          <option>Emergency</option>
        </select>
      </div>
      {!compact && (
        <textarea
          className="field min-h-24"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={updateField}
        />
      )}
      {state.message && <p className="rounded-md bg-green-50 px-3 py-2 text-sm font-semibold text-green-700">{state.message}</p>}
      {state.error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{state.error}</p>}
      <div className="grid gap-2 sm:grid-cols-2">
        <button className="btn-primary" type="submit" disabled={state.loading}>
          <Send size={17} /> {state.loading ? 'Sending...' : 'Submit Enquiry'}
        </button>
        <a className="btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> Book on WhatsApp
        </a>
      </div>
    </form>
  );
}
