const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'ms-odyssey-secret-key-change-in-prod';

// POST /api/v1/auth/login
// Supports Google Play Games token or Email login and returns deterministic playerSyncId + JWT
router.post('/login', async (req, res) => {
  try {
    const { provider, email, displayName, playerSyncId } = req.body;
    if (!email || !playerSyncId) {
      return res.status(400).json({ error: 'Missing email or playerSyncId' });
    }
    const token = jwt.sign(
      { playerSyncId, email: email.toLowerCase(), provider: provider || 'email' },
      JWT_SECRET,
      { expiresIn: '90d' }
    );
    return res.json({
      authenticated: true,
      playerSyncId,
      email: email.toLowerCase(),
      displayName: displayName || email.split('@')[0],
      provider: provider || 'email',
      token
    });
  } catch (err) {
    return res.status(500).json({ error: 'Authentication failed' });
  }
});

module.exports = router;
