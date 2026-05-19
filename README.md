# KARAD ONE WAY CAB TAXI RENTALS

Modern full-stack website for a Karad-based one way cab and taxi rental service.

## Features

- React + Tailwind CSS responsive frontend
- Express API backend
- File-based JSON booking/enquiry database
- Booking and fare enquiry forms
- WhatsApp and call CTA integration for `+91 92707 59955`
- Admin login and dashboard
- Booking statuses: New, Contacted, Confirmed, Cancelled
- SEO metadata, local business schema, route-focused content
- Mobile floating call and WhatsApp buttons

## Local Setup

```bash
npm run install:all
cp server/.env.example server/.env
npm run dev
```

Frontend: `http://localhost:5173`
Backend API: `http://localhost:5000`

## Default Admin Login

Set these in `server/.env` before production use:

```env
ADMIN_EMAIL=admin@karadcab.com
ADMIN_PASSWORD=ChangeThisStrongPassword
JWT_SECRET=replace-with-a-long-random-secret
```

The first server start creates the admin user if it does not exist.

## Production Build

```bash
npm run install:all
npm run build
npm start
```

The Express server serves the built frontend from `client/dist`.

## Deployment Notes

1. Deploy to a Node.js host such as Render, Railway, VPS, or cPanel Node app.
2. Set environment variables from `server/.env.example`.
3. Use persistent disk storage for `server/data/karad-cab.json`.
4. Point the domain DNS to your host after client approval.
