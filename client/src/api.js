const API_BASE = import.meta.env.VITE_API_URL || '';

export async function createBooking(payload) {
  const response = await fetch(`${API_BASE}/api/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return parseResponse(response);
}

export async function createFareEnquiry(payload) {
  const response = await fetch(`${API_BASE}/api/fares`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return parseResponse(response);
}

export async function loginAdmin(payload) {
  const response = await fetch(`${API_BASE}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return parseResponse(response);
}

export async function fetchDashboard(token) {
  const response = await fetch(`${API_BASE}/api/admin/bookings`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return parseResponse(response);
}

export async function updateBookingStatus(id, status, token) {
  const response = await fetch(`${API_BASE}/api/admin/bookings/${id}/status`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ status })
  });
  return parseResponse(response);
}

async function parseResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
}
