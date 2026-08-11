import { Router } from 'express';
import { z } from 'zod';
import { createBooking } from '../lib/database.js';

const router = Router();

const bookingSchema = z.object({
  name: z.string().min(2).max(80),
  mobile: z.string().min(8).max(20),
  pickup: z.string().min(2).max(120),
  dropLocation: z.string().min(2).max(120),
  date: z.string().optional().default(''),
  time: z.string().optional().default(''),
  tripType: z.enum(['One Way', 'Round Trip', 'Local', 'Airport', 'Emergency', 'Pilgrimage Tour']),
  message: z.string().max(500).optional().default('')
});

router.post('/bookings', (req, res) => {
  const parsed = bookingSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: 'Please fill all required booking details correctly.' });
  }

  const booking = createBooking({ ...parsed.data, enquiryType: 'Booking' });

  res.status(201).json({ id: booking.id, message: 'Booking enquiry saved.' });
});

router.post('/fares', (req, res) => {
  const parsed = bookingSchema.pick({
    name: true,
    mobile: true,
    pickup: true,
    dropLocation: true,
    tripType: true
  }).safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: 'Please fill all fare enquiry details correctly.' });
  }

  const booking = createBooking({
    ...parsed.data,
    date: '',
    time: '',
    message: 'Fare enquiry',
    enquiryType: 'Fare'
  });

  res.status(201).json({ id: booking.id, message: 'Fare enquiry saved.' });
});

export default router;
