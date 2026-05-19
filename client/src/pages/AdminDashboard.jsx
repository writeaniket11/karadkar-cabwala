import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, RefreshCw } from 'lucide-react';
import { fetchDashboard, updateBookingStatus } from '../api.js';
import Seo from '../components/Seo.jsx';

const statuses = ['New', 'Contacted', 'Confirmed', 'Cancelled'];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({ stats: {}, bookings: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const token = localStorage.getItem('adminToken');

  const total = useMemo(() => data.bookings.length, [data.bookings]);

  async function load() {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    setLoading(true);
    setError('');
    try {
      setData(await fetchDashboard(token));
    } catch (err) {
      setError(err.message);
      if (err.message.toLowerCase().includes('token')) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      }
    } finally {
      setLoading(false);
    }
  }

  async function changeStatus(id, status) {
    await updateBookingStatus(id, status, token);
    setData((current) => ({
      ...current,
      bookings: current.bookings.map((booking) => (booking.id === id ? { ...booking, status } : booking))
    }));
  }

  useEffect(() => {
    load();
  }, []);

  function logout() {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  }

  return (
    <main className="min-h-screen bg-mist">
      <Seo title="Admin Dashboard | KARAD ONE WAY CAB" description="Booking admin dashboard." />
      <header className="border-b border-slate-200 bg-white px-4 py-4">
        <div className="container-page flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-black text-navy">Booking Dashboard</h1>
            <p className="text-sm text-slate-500">Manage cab enquiries and status</p>
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary py-2" onClick={load}><RefreshCw size={17} /> Refresh</button>
            <button className="btn-primary py-2" onClick={logout}><LogOut size={17} /> Logout</button>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container-page">
          {error && <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p>}
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <Stat title="Total" value={total} />
            {statuses.map((status) => <Stat key={status} title={status} value={data.stats?.[status] || 0} />)}
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[920px] text-left text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Mobile</th>
                    <th className="px-4 py-3">Trip</th>
                    <th className="px-4 py-3">Pickup</th>
                    <th className="px-4 py-3">Drop</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td className="px-4 py-8 text-center" colSpan="7">Loading bookings...</td></tr>
                  ) : data.bookings.length === 0 ? (
                    <tr><td className="px-4 py-8 text-center" colSpan="7">No bookings yet.</td></tr>
                  ) : (
                    data.bookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-slate-100">
                        <td className="px-4 py-3 font-bold text-navy">{booking.name}</td>
                        <td className="px-4 py-3"><a className="font-semibold text-flame" href={`tel:${booking.mobile}`}>{booking.mobile}</a></td>
                        <td className="px-4 py-3">{booking.tripType}</td>
                        <td className="px-4 py-3">{booking.pickup}</td>
                        <td className="px-4 py-3">{booking.dropLocation}</td>
                        <td className="px-4 py-3">{booking.date || '-'} {booking.time || ''}</td>
                        <td className="px-4 py-3">
                          <select className="field py-2" value={booking.status} onChange={(event) => changeStatus(booking.id, event.target.value)}>
                            {statuses.map((status) => <option key={status}>{status}</option>)}
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <p className="text-sm font-bold text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-black text-navy">{value}</p>
    </div>
  );
}
