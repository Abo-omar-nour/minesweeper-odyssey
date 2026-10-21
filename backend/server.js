/**
 * Minesweeper Odyssey — Hardened Production Backend API Server
 * Includes:
 *  - Security Headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
 *  - Per-IP Rate Limiting against brute-force / DDoS
 *  - Strict JSON payload size cap (100kb)
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const syncRoutes = require('./routes/sync');

const app = express();

// 1. Security Headers Middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('X-XSS-Protection', '0');
  next();
});

// 2. Lightweight In-Memory Rate Limiter (max 60 requests / minute per IP)
const ipHits = new Map();
app.use((req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = Date.now();
  const entry = ipHits.get(ip) || { count: 0, resetAt: now + 60000 };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + 60000;
  }
  entry.count++;
  ipHits.set(ip, entry);
  if (entry.count > 60) {
    return res.status(429).json({ error: 'Too many requests, please try again later.' });
  }
  next();
});

app.use(cors());
app.use(express.json({ limit: '100kb' }));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'minesweeper-odyssey-api', timestamp: Date.now() });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/sync', syncRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`[Minesweeper Odyssey Hardened API] Listening on port ${PORT}`);
});
