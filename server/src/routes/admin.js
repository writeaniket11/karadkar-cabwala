import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { findAdminByEmail, getBookingStats, listBookings, updateBookingStatus } from '../lib/database.js';
import { requireAdmin } from '../middleware/auth.js';

const router = Router();
const jwtSecret = process.env.JWT_SECRET || 'dev-secret-change-this';

router.post('/login', (req, res) => {
  const parsed = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  }).safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: 'Enter valid email and password.' });
  }

  const admin = findAdminByEmail(parsed.data.email);
  if (!admin || !bcrypt.compareSync(parsed.data.password, admin.passwordHash)) {
    return res.status(401).json({ message: 'Invalid login details.' });
  }

  const token = jwt.sign({ id: admin.id, email: admin.email }, jwtSecret, { expiresIn: '12h' });
  res.json({ token });
});

router.get('/bookings', requireAdmin, (req, res) => {
  res.json({ bookings: listBookings(), stats: getBookingStats() });
});

router.patch('/bookings/:id/status', requireAdmin, (req, res) => {
  const parsed = z.object({
    status: z.enum(['New', 'Contacted', 'Confirmed', 'Cancelled'])
  }).safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: 'Invalid booking status.' });
  }

  const updated = updateBookingStatus(req.params.id, parsed.data.status);
  if (!updated) {
    return res.status(404).json({ message: 'Booking not found.' });
  }

  res.json({ message: 'Booking status updated.' });
});

export default router;
