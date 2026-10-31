# Changelog — Minesweeper Odyssey: Ultimate Edition

All notable changes to this project will be documented in this file.

## [v1.0.0] — Official First Release (MVP / Production Release 1.0)

### Highlights
- **Pure-Local V4 No-Guess Constraint Solver (`100%` Fair-Play Guarantee)**:
  - Iterative Subset Reduction (`B = B \ A`) across overlapping frontier constraints.
  - Coupled Multi-Component Local CSP Mine Swapper (`tryFairPlayMineSwap`) ensuring even massive boards (`30×20` and `36×26`) never force a 50/50 guess when No-Guess mode is active.
  - Detailed Arabic deduction hints (`💡 تلميح ذكي`) citing both the primary anchor cell and any secondary helper cell used in subset reduction.
- **Full Gameplay Recorder & Interactive Replay Theater (`🎬 مسجل الألعاب`)**:
  - Automatic millisecond-precision recording of every completed game (`dig`, `flag`, `unflag`, `easy_flag`, `chord`, `defuse`, `boom`).
  - Smart categorization into **Recent Games (الألعاب السابقة)**, **Best Victories by Board Size (أفضل الألعاب)**, and **Pinned Favorites (المفضلة)**.
  - Interactive Replay Theater bar with **6 playback speeds (`0.25x`, `0.5x`, `1x`, `2x`, `4x`, `8x`)**, timeline scrubber, step-by-step navigation (`⏪` / `⏩`), and live target highlight ring.
- **Tactile 3D Cell Design & Zero-Lag Mobile Architecture**:
  - Classic multi-layered 3D bevels with responsive retina scaling (`--cell-scale`) across 8 board sizes from `8×8` up to `36×26`.
  - Compositor-friendly CSS containment, zero-reflow dynamic pinch-zoom & pan, and exact sub-pixel viewport VFX alignment (`getCellScreenCenter`).
- **6 Dynamic 3D Worlds & Progression Economy**:
  - 6 unlockable visual themes (*Ocean Abyss, Cyber Neon, Royal Gold, Crystal Frost, Emerald Forest, Crimson Lava*) with customizable 3D background parallax and performance controls (`الأداء الفائق`).
  - 50-level campaign map, daily seeded challenges, achievements, and coin shop (`DEV_PREVIEW_UNLOCK_ALL = false` in production build).
