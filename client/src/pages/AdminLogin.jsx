import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { loginAdmin } from '../api.js';
import BrandLogo from '../components/BrandLogo.jsx';
import Seo from '../components/Seo.jsx';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await loginAdmin(form);
      localStorage.setItem('adminToken', data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-mist px-4">
      <Seo title="Admin Login | KARAD ONE WAY CAB" description="Admin login for booking dashboard." />
      <form onSubmit={submit} className="w-full max-w-md rounded-lg bg-white p-6 shadow-soft">
        <div className="mb-6 flex items-center gap-3">
          <BrandLogo showText={false} variant="mark" />
          <div className="min-w-0">
            <h1 className="text-2xl font-black text-navy">Admin Login</h1>
            <p className="text-sm text-slate-500">View booking enquiries</p>
          </div>
        </div>
        <div className="grid gap-3">
          <input className="field" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <input className="field" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p>}
          <button className="btn-primary" disabled={loading} type="submit"><Lock size={17} /> {loading ? 'Checking...' : 'Login'}</button>
        </div>
      </form>
    </main>
  );
}
