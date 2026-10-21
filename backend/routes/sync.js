const express = require('express');
const router = express.Router();

const memoryStore = new Map();
const VALID_PLAYER_ID_REGEX = /^(MS|ACC)-[A-Z0-9]{4,12}$/;

function clampInt(val, minV, maxV, fallback) {
  const n = Number(val);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(minV, Math.min(maxV, Math.floor(n)));
}

function mergeProfilesSecure(existing, incoming) {
  const base = existing || {};
  const merged = {
    version: 2,
    hintCoins: Math.max(clampInt(base.hintCoins, 0, 9999, 5), clampInt(incoming.hintCoins, 0, 9999, 5)),
    isVipSupporter: Boolean(base.isVipSupporter || incoming.isVipSupporter),
    unlockedThemes: Object.assign({ retro: true, retro_dark: true }, base.unlockedThemes || {}, incoming.unlockedThemes || {})
  };

  const exStats = base.stats || {};
  const inStats = incoming.stats || {};
  const mergedStars = {};
  for (let lvl = 1; lvl <= 50; lvl++) {
    mergedStars[lvl] = Math.max(
      clampInt((exStats.storyStars || {})[lvl], 0, 3, 0),
      clampInt((inStats.storyStars || {})[lvl], 0, 3, 0)
    );
  }

  const allowedDiffs = ['beginner', 'intermediate', 'expert', 'master', 'grandmaster', 'legend', 'nightmare'];
  const mergedBestTimes = {};
  allowedDiffs.forEach((diff) => {
    const tOld = clampInt((exStats.bestTimes || {})[diff], 0, 99999, 0);
    const tNew = clampInt((inStats.bestTimes || {})[diff], 0, 99999, 0);
    if (tOld > 0 && tNew > 0) mergedBestTimes[diff] = Math.min(tOld, tNew);
    else mergedBestTimes[diff] = (tOld || tNew || null);
  });

  merged.stats = {
    gamesPlayed: Math.max(clampInt(exStats.gamesPlayed, 0, 1000000, 0), clampInt(inStats.gamesPlayed, 0, 1000000, 0)),
    gamesWon: Math.max(clampInt(exStats.gamesWon, 0, 1000000, 0), clampInt(inStats.gamesWon, 0, 1000000, 0)),
    dailyStreak: Math.max(clampInt(exStats.dailyStreak, 0, 36500, 0), clampInt(inStats.dailyStreak, 0, 36500, 0)),
    bestTimes: mergedBestTimes,
    storyStars: mergedStars
  };
  merged.lastUpdatedAt = Date.now();
  return merged;
}

router.get('/:playerId', async (req, res) => {
  const { playerId } = req.params;
  if (!VALID_PLAYER_ID_REGEX.test(playerId)) {
    return res.status(400).json({ error: 'Invalid playerId format' });
  }
  const record = memoryStore.get(playerId) || null;
  return res.json(record || {});
});

router.put('/:playerId', async (req, res) => {
  const { playerId } = req.params;
  if (!VALID_PLAYER_ID_REGEX.test(playerId)) {
    return res.status(400).json({ error: 'Invalid playerId format' });
  }
  const incoming = req.body || {};
  const existing = memoryStore.get(playerId);
  const merged = mergeProfilesSecure(existing, incoming);
  memoryStore.set(playerId, merged);
  return res.json(merged);
});

module.exports = router;
