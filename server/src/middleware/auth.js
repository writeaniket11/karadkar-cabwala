import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'dev-secret-change-this';

export function requireAdmin(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';

  if (!token) {
    return res.status(401).json({ message: 'Missing admin token.' });
  }

  try {
    req.admin = jwt.verify(token, jwtSecret);
    next();
  } catch {
    res.status(401).json({ message: 'Invalid or expired admin token.' });
  }
}
