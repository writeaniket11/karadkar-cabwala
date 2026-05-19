import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { initDatabase } from './lib/database.js';
import publicRoutes from './routes/public.js';
import adminRoutes from './routes/admin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 5000;
const clientDist = path.resolve(__dirname, '../../client/dist');

initDatabase();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('tiny'));
app.use('/api', rateLimit({ windowMs: 60 * 1000, limit: 80 }));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'karad-cab-api' });
});

app.use('/api', publicRoutes);
app.use('/api/admin', adminRoutes);

app.use(express.static(clientDist));
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

app.listen(port, () => {
  console.log(`Karad cab server running on port ${port}`);
});
