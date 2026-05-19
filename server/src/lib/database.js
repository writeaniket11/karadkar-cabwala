import fs from 'node:fs';
import path from 'node:path';
import bcrypt from 'bcryptjs';

const dbPath = process.env.DATABASE_PATH || './data/karad-cab.json';
const resolvedDbPath = path.resolve(process.cwd(), dbPath);

const initialData = {
  bookings: [],
  admins: [],
  counters: {
    bookings: 0,
    admins: 0
  }
};

function ensureDataFile() {
  fs.mkdirSync(path.dirname(resolvedDbPath), { recursive: true });
  if (!fs.existsSync(resolvedDbPath)) {
    fs.writeFileSync(resolvedDbPath, JSON.stringify(initialData, null, 2));
  }
}

function readData() {
  ensureDataFile();
  const data = JSON.parse(fs.readFileSync(resolvedDbPath, 'utf8'));
  return {
    ...initialData,
    ...data,
    counters: { ...initialData.counters, ...(data.counters || {}) }
  };
}

function writeData(data) {
  fs.writeFileSync(resolvedDbPath, JSON.stringify(data, null, 2));
}

export function initDatabase() {
  const data = readData();
  const email = process.env.ADMIN_EMAIL || 'admin@karadcab.com';
  const password = process.env.ADMIN_PASSWORD || 'ChangeThisStrongPassword';
  const existing = data.admins.find((admin) => admin.email === email);

  if (!existing) {
    data.counters.admins += 1;
    data.admins.push({
      id: data.counters.admins,
      email,
      passwordHash: bcrypt.hashSync(password, 12),
      createdAt: new Date().toISOString()
    });
    writeData(data);
  }
}

export function findAdminByEmail(email) {
  return readData().admins.find((admin) => admin.email === email);
}

export function createBooking(booking) {
  const data = readData();
  data.counters.bookings += 1;
  const savedBooking = {
    id: data.counters.bookings,
    status: 'New',
    createdAt: new Date().toISOString(),
    ...booking
  };
  data.bookings.push(savedBooking);
  writeData(data);
  return savedBooking;
}

export function listBookings() {
  return readData().bookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function getBookingStats() {
  return readData().bookings.reduce((stats, booking) => {
    stats[booking.status] = (stats[booking.status] || 0) + 1;
    return stats;
  }, {});
}

export function updateBookingStatus(id, status) {
  const data = readData();
  const booking = data.bookings.find((item) => item.id === Number(id));
  if (!booking) {
    return false;
  }
  booking.status = status;
  writeData(data);
  return true;
}
