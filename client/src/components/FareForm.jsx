import { useState } from 'react';
import { BadgeIndianRupee } from 'lucide-react';
import { createFareEnquiry } from '../api.js';

const initialForm = { name: '', mobile: '', pickup: '', dropLocation: '', tripType: 'One Way' };

export default function FareForm() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState({ loading: false, message: '', error: '' });

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submit(event) {
    event.preventDefault();
    setState({ loading: true, message: '', error: '' });
    try {
      await createFareEnquiry(form);
      setForm(initialForm);
      setState({ loading: false, message: 'Fare enquiry received. We will share the best price soon.', error: '' });
    } catch (error) {
      setState({ loading: false, message: '', error: error.message });
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-3 rounded-lg bg-navy p-4 text-white shadow-soft sm:p-6">
      <div>
        <p className="text-sm font-black uppercase text-taxi">Fare Enquiry</p>
        <h2 className="mt-1 text-2xl font-black">Get best price</h2>
      </div>
      <input className="field text-ink" name="name" placeholder="Name" value={form.name} onChange={updateField} required />
      <input className="field text-ink" name="mobile" placeholder="Mobile number" value={form.mobile} onChange={updateField} required />
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="field text-ink" name="pickup" placeholder="Pickup" value={form.pickup} onChange={updateField} required />
        <input className="field text-ink" name="dropLocation" placeholder="Drop" value={form.dropLocation} onChange={updateField} required />
      </div>
      <select className="field text-ink" name="tripType" value={form.tripType} onChange={updateField}>
        <option>One Way</option>
        <option>Round Trip</option>
        <option>Local</option>
        <option>Airport</option>
        <option>Emergency</option>
      </select>
      {state.message && <p className="rounded-md bg-green-100 px-3 py-2 text-sm font-semibold text-green-800">{state.message}</p>}
      {state.error && <p className="rounded-md bg-red-100 px-3 py-2 text-sm font-semibold text-red-800">{state.error}</p>}
      <button className="btn-primary" type="submit" disabled={state.loading}>
        <BadgeIndianRupee size={17} /> {state.loading ? 'Sending...' : 'Ask Fare'}
      </button>
    </form>
  );
}
