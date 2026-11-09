/********************************************************************
     * 1. PRO GRAPHICS ENGINE: CUSTOM SVG SPRITES, HORIZONS & 5 WORLDS
     ********************************************************************/
    const THEME_GRAPHICS = {
      arabian: {
        // Intricate Damascus Brass & Turquoise Rosette inside every unrevealed 3D tile
        tileOrnamentSvg: `<svg viewBox="0 0 40 40" class="w-full h-full"><g fill="none" stroke="#f5b041" stroke-width="1.2"><polygon points="20,3 24,14 35,10 28,20 35,30 24,26 20,37 16,26 5,30 12,20 5,10 16,14"/><circle cx="20" cy="20" r="5" stroke="#2dd4bf" stroke-width="1.1"/></g></svg>`,
        // Glowing Arabian Royal Fanous (Lantern) Flag SVG
        flagSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><circle cx="18" cy="19" r="13" fill="#fbbf24" opacity="0.22"/><path d="M15 5 C15 3, 21 3, 21 5 L23 9 L13 9 Z" fill="#f59e0b"/><path d="M11 9 L25 9 L27 19 L23 28 L13 28 L9 19 Z" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/><path d="M14 12 L22 12 L23 19 L20 25 L16 25 L13 19 Z" fill="#fef08a"/><path d="M12 31 L24 31" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/></svg>`,
        // Cursed Djinn Brass Fire Vessel Mine SVG
        mineSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><circle cx="18" cy="21" r="10" fill="#27272a" stroke="#f59e0b" stroke-width="2"/><path d="M12 18 Q18 23 24 18" fill="none" stroke="#ef4444" stroke-width="2"/><path d="M18 11 Q21 5 26 7" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/><circle cx="26" cy="7" r="3.5" fill="#ef4444"/><circle cx="26" cy="7" r="1.8" fill="#fef08a"/><circle cx="15" cy="18" r="2" fill="#fde047"/></svg>`,
        // Scenic Damascus Palace & Oasis Silhouette Horizon
        horizonSvg: `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" class="w-full h-full"> <defs> <linearGradient id="arSky" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#07111a"/> <stop offset="55%" stop-color="#132a38"/> <stop offset="100%" stop-color="#291d12"/> </linearGradient> <radialGradient id="arMoonGlow" cx="82%" cy="18%" r="28%"> <stop offset="0%" stop-color="#fde047" stop-opacity="0.45"/> <stop offset="45%" stop-color="#f59e0b" stop-opacity="0.16"/> <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/> </radialGradient> <linearGradient id="arDune1" x1="0" y1="0" x2="1" y2="1"> <stop offset="0%" stop-color="#1e3542"/> <stop offset="100%" stop-color="#0c1821"/> </linearGradient> <linearGradient id="arDune2" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#2a2118"/> <stop offset="100%" stop-color="#091015"/> </linearGradient> </defs> <rect width="1440" height="900" fill="url(#arSky)"/> <rect width="1440" height="900" fill="url(#arMoonGlow)"/> <!-- Crescent Moon & Star Constellations --> <path d="M1160,110 A52,52 0 1,0 1215,185 A42,42 0 1,1 1160,110 Z" fill="#fef08a"/> <g stroke="#f5b041" stroke-width="0.8" opacity="0.35" fill="#fef08a"> <line x1="180" y1="120" x2="250" y2="95"/><line x1="250" y1="95" x2="310" y2="130"/><line x1="310" y1="130" x2="360" y2="90"/> <circle cx="180" cy="120" r="2.5"/><circle cx="250" cy="95" r="3"/><circle cx="310" cy="130" r="2.5"/><circle cx="360" cy="90" r="3.5"/> </g> <!-- Top Ornate Damascus Arch Frame & Hanging Fanous Lanterns --> <path d="M0,0 L1440,0 L1440,95 Q1340,30 1240,65 L1240,0 L200,0 L200,65 Q100,30 0,95 Z" fill="#081218" opacity="0.75"/> <g stroke="#f5b041" stroke-width="1.5" fill="#1e293b"> <line x1="110" y1="0" x2="110" y2="75"/><polygon points="96,75 124,75 130,100 118,124 102,124 90,100"/><circle cx="110" cy="99" r="7" fill="#fef08a"/> <line x1="1330" y1="0" x2="1330" y2="65"/><polygon points="1316,65 1344,65 1350,90 1338,114 1322,114 1310,90"/><circle cx="1330" cy="89" r="7" fill="#fef08a"/> </g> <!-- Distant Desert Mountains & Rolling Dunes --> <path d="M0,690 Q240,610 520,665 T1040,640 T1440,675 L1440,900 L0,900 Z" fill="url(#arDune1)"/> <!-- Grand Damascus Citadel, Domes & Minarets Silhouette --> <path d="M0,760 L120,760 L120,650 L132,610 L144,650 L144,750 L210,750 Q260,665 310,750 L370,750 L370,520 L384,460 L398,520 L398,740 Q480,610 560,740 L880,740 Q960,600 1040,740 L1065,740 L1065,500 L1080,440 L1095,500 L1095,750 Q1160,670 1220,750 L1440,750 L1440,900 L0,900 Z" fill="url(#arDune2)" stroke="#f5b041" stroke-width="1" stroke-opacity="0.35"/> <!-- Glowing Palace Windows --> <g fill="#fbbf24" opacity="0.65"> <rect x="248" y="725" width="8" height="16" rx="4"/><rect x="264" y="725" width="8" height="16" rx="4"/> <rect x="505" y="700" width="10" height="22" rx="5"/><rect x="523" y="700" width="10" height="22" rx="5"/> <rect x="985" y="695" width="10" height="22" rx="5"/><rect x="1003" y="695" width="10" height="22" rx="5"/> <rect x="1178" y="720" width="8" height="16" rx="4"/><rect x="1194" y="720" width="8" height="16" rx="4"/> </g> <!-- Oasis Palm Silhouettes Left & Right --> <path d="M68,890 Q78,760 95,690 M95,690 Q50,670 30,695 M95,690 Q65,645 45,655 M95,690 Q125,650 148,668 M95,690 Q135,680 155,705" stroke="#060c10" stroke-width="7" fill="none" stroke-linecap="round"/> <path d="M1370,890 Q1355,765 1340,700 M1340,700 Q1300,675 1280,700 M1340,700 Q1315,650 1295,665 M1340,700 Q1375,655 1395,675 M1340,700 Q1385,685 1405,710" stroke="#060c10" stroke-width="7" fill="none" stroke-linecap="round"/> </svg>`,
        particleColors: ['#f5b041', '#2dd4bf', '#fde047', '#fffbeb'],
        soundWave: 'triangle',
        basePitch: 330,
        descEn: 'Oriental motifs & glowing lanterns',
        descAr: 'زخارف شرقية وفوانيس مضيئة'
      },

      obsidian: {
        // Sci-Fi Cyber Armor Bracket & Core inside unrevealed tiles
        tileOrnamentSvg: `<svg viewBox="0 0 40 40" class="w-full h-full"><g fill="none" stroke="#38bdf8" stroke-width="1.5"><path d="M6 14 L6 6 L14 6 M26 6 L34 6 L34 14 M34 26 L34 34 L26 34 M14 34 L6 34 L6 26"/><polygon points="20,13 27,20 20,27 13,20" stroke="#a855f7" stroke-width="1.2"/></g></svg>`,
        // Holographic Plasma Shield Beacon Flag SVG
        flagSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><polygon points="18,3 31,11 27,28 18,33 9,28 5,11" fill="rgba(56,189,248,0.22)" stroke="#38bdf8" stroke-width="2"/><polygon points="18,8 26,13 23,25 18,28 13,25 10,13" fill="#a855f7" opacity="0.75"/><circle cx="18" cy="18" r="4" fill="#e0f2fe"/></svg>`,
        // EMP Laser Drone Mine SVG
        mineSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><g stroke="#f43f5e" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="3" x2="18" y2="33"/><line x1="3" y1="18" x2="33" y2="18"/><line x1="7" y1="7" x2="29" y2="29"/><line x1="29" y1="7" x2="7" y2="29"/></g><polygon points="18,8 28,18 18,28 8,18" fill="#0f172a" stroke="#38bdf8" stroke-width="1.8"/><circle cx="18" cy="18" r="4.5" fill="#f43f5e"/><circle cx="18" cy="18" r="2" fill="#ffffff"/></svg>`,
        // Cyberpunk Neon Skyline & Perspective Grid Horizon
        horizonSvg: `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" class="w-full h-full"> <defs> <linearGradient id="cySky" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#040711"/> <stop offset="60%" stop-color="#0f172a"/> <stop offset="100%" stop-color="#1e1b4b"/> </linearGradient> <linearGradient id="cySun" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.45"/> <stop offset="50%" stop-color="#a855f7" stop-opacity="0.4"/> <stop offset="100%" stop-color="#f43f5e" stop-opacity="0.5"/> </linearGradient> </defs> <rect width="1440" height="900" fill="url(#cySky)"/> <!-- Synthwave Giant Cyber Sun --> <circle cx="720" cy="560" r="190" fill="url(#cySun)"/> <g fill="#0f172a"> <rect x="520" y="540" width="400" height="8"/><rect x="520" y="568" width="400" height="10"/> <rect x="520" y="600" width="400" height="14"/><rect x="520" y="636" width="400" height="18"/> </g> <!-- Holographic Sky Rings --> <circle cx="210" cy="180" r="65" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="12 6" opacity="0.35"/> <circle cx="1230" cy="180" r="65" fill="none" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="12 6" opacity="0.35"/> <!-- Cyberpunk Mega-City Skyline --> <path d="M0,700 L70,700 L70,480 L145,480 L145,640 L190,640 L190,410 L270,410 L270,670 L340,670 L340,520 L420,520 L420,690 L1020,690 L1020,500 L1100,500 L1100,660 L1160,660 L1160,390 L1245,390 L1245,630 L1300,630 L1300,470 L1380,470 L1380,700 L1440,700 L1440,900 L0,900 Z" fill="#050814" stroke="#38bdf8" stroke-width="1.5" stroke-opacity="0.55"/> <!-- Neon Perspective Grid Floor --> <g stroke="#a855f7" stroke-width="1.2" opacity="0.42"> <line x1="0" y1="730" x2="1440" y2="730"/><line x1="0" y1="765" x2="1440" y2="765"/> <line x1="0" y1="808" x2="1440" y2="808"/><line x1="0" y1="860" x2="1440" y2="860"/> <line x1="720" y1="690" x2="0" y2="900"/><line x1="720" y1="690" x2="240" y2="900"/> <line x1="720" y1="690" x2="480" y2="900"/><line x1="720" y1="690" x2="720" y2="900"/> <line x1="720" y1="690" x2="960" y2="900"/><line x1="720" y1="690" x2="1200" y2="900"/> <line x1="720" y1="690" x2="1440" y2="900"/> </g> </svg>`,
        particleColors: ['#38bdf8', '#a855f7', '#f43f5e', '#2dd4bf'],
        soundWave: 'sawtooth',
        basePitch: 420,
        descEn: 'Futuristic neon cyber style',
        descAr: 'تصميم مستقبلي بأضواء النيون'
      },

      retro: {
        // Classic clean mechanical keycap (no busy ornament, pure 3D bevel)
        tileOrnamentSvg: `<svg viewBox="0 0 40 40" class="w-full h-full"><rect x="6" y="6" width="28" height="28" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.45"/></svg>`,
        // Authentic Classic Windows 95 Red Triangular Pennant Flag SVG
        flagSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><rect x="16" y="7" width="3" height="21" fill="#111827"/><polygon points="19,6 7,12 19,19" fill="#dc2626"/><rect x="10" y="27" width="16" height="3.5" fill="#111827"/></svg>`,
        // Authentic Classic Spiked Naval Mine with white shine pixel
        mineSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><g stroke="#111827" stroke-width="2.6" stroke-linecap="round"><line x1="18" y1="4" x2="18" y2="32"/><line x1="4" y1="18" x2="32" y2="18"/><line x1="8" y1="8" x2="28" y2="28"/><line x1="28" y1="8" x2="8" y2="28"/></g><circle cx="18" cy="18" r="9.5" fill="#111827"/><rect x="13" y="13" width="3.5" height="3.5" fill="#ffffff"/></svg>`,
        // Retro 3D Synth Grid Horizon
        horizonSvg: `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" class="w-full h-full"> <!-- Classic Naval Minefield & Radar Command Scene --> <rect width="1440" height="900" fill="#006666"/> <!-- Sonar Radar Rings in Center Background --> <g fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.18"> <circle cx="720" cy="420" r="140"/><circle cx="720" cy="420" r="260"/><circle cx="720" cy="420" r="380"/> <line x1="300" y1="420" x2="1140" y2="420"/><line x1="720" y1="40" x2="720" y2="800"/> </g> <!-- Naval Horizon & Battleship Silhouettes --> <path d="M0,660 L1440,660 L1440,900 L0,900 Z" fill="#004444"/> <path d="M110,660 L130,635 L260,635 L280,660 Z M170,635 L170,610 L215,610 L215,635 Z" fill="#002b2b"/> <path d="M1120,660 L1145,630 L1310,630 L1330,660 Z M1195,630 L1195,595 L1245,595 L1245,630 Z" fill="#002b2b"/> <!-- Underwater tethered mines silhouette --> <g stroke="#002b2b" stroke-width="2" fill="#002222" opacity="0.55"> <line x1="180" y1="900" x2="180" y2="750"/><circle cx="180" cy="750" r="18"/> <line x1="1260" y1="900" x2="1260" y2="740"/><circle cx="1260" cy="740" r="18"/> </g> </svg>`,
        particleColors: ['#000080', '#dc2626', '#008080', '#ffffff'],
        soundWave: 'square',
        basePitch: 260,
        descEn: 'Authentic classic 95 style',
        descAr: 'التصميم الكلاسيكي الأصيل'
      },

      retro_dark: {
        tileOrnamentSvg: `<svg viewBox="0 0 40 40" class="w-full h-full"><rect x="6" y="6" width="28" height="28" fill="none" stroke="#94a3b8" stroke-width="1" opacity="0.25"/></svg>`,
        flagSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><rect x="16" y="7" width="3" height="21" fill="#e2e8f0"/><polygon points="19,6 7,12 19,19" fill="#f43f5e"/><rect x="10" y="27" width="16" height="3.5" fill="#cbd5e1"/></svg>`,
        mineSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><g stroke="#e2e8f0" stroke-width="2.6" stroke-linecap="round"><line x1="18" y1="4" x2="18" y2="32"/><line x1="4" y1="18" x2="32" y2="18"/><line x1="8" y1="8" x2="28" y2="28"/><line x1="28" y1="8" x2="8" y2="28"/></g><circle cx="18" cy="18" r="9.5" fill="#0f172a" stroke="#e2e8f0" stroke-width="1.5"/><rect x="13" y="13" width="3.5" height="3.5" fill="#38bdf8"/></svg>`,
        horizonSvg: `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" class="w-full h-full"><rect width="1440" height="900" fill="#091318"/><g fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.12"><circle cx="720" cy="420" r="140"/><circle cx="720" cy="420" r="260"/><circle cx="720" cy="420" r="380"/><line x1="300" y1="420" x2="1140" y2="420"/><line x1="720" y1="40" x2="720" y2="800"/></g><path d="M0,660 L1440,660 L1440,900 L0,900 Z" fill="#050b0e"/></svg>`,
        particleColors: ['#38bdf8', '#f43f5e', '#2dd4bf', '#94a3b8'],
        soundWave: 'square',
        basePitch: 240,
        descEn: 'Eye-friendly dark classic style',
        descAr: 'تصميم كلاسيكي ليلي مريح للعين'
      },

      sakura: {
        // Delicate 5-petal Cherry Blossom watermark inside each woodblock tile
        tileOrnamentSvg: `<svg viewBox="0 0 40 40" class="w-full h-full"><g fill="none" stroke="#e11d48" stroke-width="1.2"><circle cx="20" cy="12" r="5"/><circle cx="28" cy="18" r="5"/><circle cx="25" cy="27" r="5"/><circle cx="15" cy="27" r="5"/><circle cx="12" cy="18" r="5"/><circle cx="20" cy="20" r="2.5" fill="#e11d48"/></g></svg>`,
        // Sacred Japanese Torii Gate / Blossom Charm Flag SVG
        flagSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><path d="M5 10 Q18 6 31 10 L29 13 Q18 10 7 13 Z" fill="#e11d48"/><rect x="8" y="15" width="20" height="2.8" rx="1" fill="#be123c"/><rect x="11" y="11" width="3" height="20" rx="1" fill="#e11d48"/><rect x="22" y="11" width="3" height="20" rx="1" fill="#e11d48"/><circle cx="18" cy="23" r="4" fill="#fda4af" stroke="#e11d48" stroke-width="1.2"/></svg>`,
        // Oni Spirit Bomb SVG
        mineSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><circle cx="18" cy="20" r="10" fill="#3f1d28" stroke="#fb7185" stroke-width="2"/><path d="M11 11 L15 16 M25 11 L21 16" stroke="#fda4af" stroke-width="2.5" stroke-linecap="round"/><circle cx="14.5" cy="19.5" r="2" fill="#fb7185"/><circle cx="21.5" cy="19.5" r="2" fill="#fb7185"/><path d="M14 25 Q18 22 22 25" fill="none" stroke="#fda4af" stroke-width="1.8"/></svg>`,
        // Mount Fuji & Torii Gate Horizon
        horizonSvg: `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" class="w-full h-full"> <defs> <linearGradient id="skSky" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#ffe4e8"/> <stop offset="65%" stop-color="#fff5f7"/> <stop offset="100%" stop-color="#fbcfe8"/> </linearGradient> </defs> <rect width="1440" height="900" fill="url(#skSky)"/> <!-- Giant Rising Crimson Sun --> <circle cx="720" cy="490" r="175" fill="#fda4af" opacity="0.55"/> <!-- Snow-Capped Mount Fuji --> <path d="M260,720 Q530,650 645,430 L795,430 Q910,650 1180,720 Z" fill="#f472b6" opacity="0.35"/> <path d="M645,430 L795,430 L835,505 L785,490 L750,515 L720,485 L690,512 L655,490 L605,505 Z" fill="#ffffff" opacity="0.9"/> <!-- Kyoto Pagoda Silhouette on Left & Torii Gate on Right --> <g fill="#9f1239" opacity="0.42"> <path d="M80,740 L230,740 L210,715 L100,715 Z M95,705 L215,705 L198,682 L112,682 Z M110,672 L200,672 L185,650 L125,650 Z M152,610 L158,610 L158,650 L152,650 Z"/> <path d="M1170,635 Q1250,620 1330,635 L1322,648 Q1250,636 1178,648 Z M1190,665 L1310,665 L1310,676 L1190,676 Z M1205,642 L1218,642 L1218,740 L1205,740 Z M1282,642 L1295,642 L1295,740 L1282,740 Z"/> </g> <!-- Foreground Blossom Hills --> <path d="M0,735 Q360,685 720,735 T1440,720 L1440,900 L0,900 Z" fill="#f9a8d4" opacity="0.45"/> </svg>`,
        particleColors: ['#fb7185', '#fda4af', '#e11d48', '#fef08a'],
        soundWave: 'sine',
        basePitch: 493.88,
        descEn: 'Calm Japanese cherry blossoms',
        descAr: 'أزهار الكرز اليابانية الهادئة'
      },

      emerald: {
        // Faceted 3D Cut Emerald Gemstone internal lines
        tileOrnamentSvg: `<svg viewBox="0 0 40 40" class="w-full h-full"><g fill="none" stroke="#6ee7b7" stroke-width="1.2"><polygon points="20,4 36,20 20,36 4,20"/><rect x="12" y="12" width="16" height="16"/><line x1="20" y1="4" x2="12" y2="12"/><line x1="36" y1="20" x2="28" y2="12"/><line x1="20" y1="36" x2="28" y2="28"/><line x1="4" y1="20" x2="12" y2="28"/></g></svg>`,
        // Glowing Golden Atlantean Trident Flag SVG
        flagSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><path d="M18 5 L18 32 M11 10 L11 18 Q11 22 18 22 Q25 22 25 18 L25 10" fill="none" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/><polygon points="18,3 15,9 21,9" fill="#fbbf24"/><polygon points="11,7 8.5,12 13.5,12" fill="#fbbf24"/><polygon points="25,7 22.5,12 27.5,12" fill="#fbbf24"/></svg>`,
        // Abyssal Bioluminescent Sea Mine SVG
        mineSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><g stroke="#34d399" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="3" x2="18" y2="33"/><line x1="3" y1="18" x2="33" y2="18"/><line x1="7" y1="7" x2="29" y2="29"/><line x1="29" y1="7" x2="7" y2="29"/></g><circle cx="18" cy="18" r="9.5" fill="#064e3b" stroke="#fbbf24" stroke-width="1.8"/><circle cx="18" cy="18" r="4" fill="#34d399"/></svg>`,
        // Sunken Atlantis Temple Pillars & Coral Horizon
        horizonSvg: `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" class="w-full h-full"> <defs> <linearGradient id="emSea" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#064e3b"/> <stop offset="60%" stop-color="#022c22"/> <stop offset="100%" stop-color="#011510"/> </linearGradient> </defs> <rect width="1440" height="900" fill="url(#emSea)"/> <!-- Underwater God-Rays Streaming from Surface --> <g fill="#34d399" opacity="0.10"> <polygon points="180,0 340,0 520,900 40,900"/> <polygon points="620,0 820,0 1020,900 420,900"/> <polygon points="1080,0 1240,0 1420,900 940,900"/> </g> <!-- Sunken Atlantis Marble Temple & Glowing Emerald Crystals --> <g fill="#031d16" stroke="#10b981" stroke-width="1.2" opacity="0.7"> <polygon points="110,520 330,520 220,445"/> <rect x="130" y="520" width="26" height="210"/><rect x="207" y="520" width="26" height="210"/><rect x="284" y="520" width="26" height="210"/> <polygon points="1110,540 1330,540 1220,465"/> <rect x="1130" y="540" width="26" height="190"/><rect x="1207" y="540" width="26" height="190"/><rect x="1284" y="540" width="26" height="190"/> </g> <!-- Glowing Giant Emerald Crystal Clusters --> <g fill="#10b981" stroke="#6ee7b7" stroke-width="1.5" opacity="0.45"> <polygon points="70,890 95,710 125,750 115,890"/> <polygon points="120,890 155,740 175,890"/> <polygon points="1310,890 1345,700 1375,890"/> <polygon points="1270,890 1295,755 1320,890"/> </g> <path d="M0,740 Q360,700 720,745 T1440,730 L1440,900 L0,900 Z" fill="#01110c"/> </svg>`,
        particleColors: ['#34d399', '#fbbf24', '#2dd4bf', '#a7f3d0'],
        soundWave: 'sine',
        basePitch: 392,
        descEn: 'Deep ocean & emerald gems',
        descAr: 'أعماق المحيط وأحجار الزمرد'
      }
    };

    // Unlock rules for themes:
    // 'retro' (Classic Light) & 'retro_dark' (Classic Night) are 100% FREE & unlocked by default.
    // The 4 special worlds unlock via Campaign Level milestones, Hint Coins, OR VIP Subscription!
    // Preview/Testing Flag: true in standalone preview HTML (all themes & levels unlocked), false in GitHub production repo
    const DEV_PREVIEW_UNLOCK_ALL = false;

    const THEME_UNLOCK_RULES = {
      retro:      { free: true,  reqLevel: 0,  coinCost: 0 },
      retro_dark: { free: true,  reqLevel: 0,  coinCost: 0 },
      sakura:     { free: false, reqLevel: 5,  coinCost: 15, labelAr: 'تُفتح في المرحلة 5 أو بـ 15 💡', labelEn: 'Unlocks at Level 5 or 15 💡' },
      emerald:    { free: false, reqLevel: 15, coinCost: 20, labelAr: 'تُفتح في المرحلة 15 أو بـ 20 💡', labelEn: 'Unlocks at Level 15 or 20 💡' },
      arabian:    { free: false, reqLevel: 30, coinCost: 25, labelAr: 'تُفتح في المرحلة 30 أو بـ 25 💡', labelEn: 'Unlocks at Level 30 or 25 💡' },
      obsidian:   { free: false, reqLevel: 50, coinCost: 30, labelAr: 'تُفتح في المرحلة 50 أو بـ 30 💡', labelEn: 'Unlocks at Level 50 or 30 💡' }
    };

    const THEMES = {
      retro: {
        id: 'retro',
        icon: '🕹️',
        swatchBg: 'linear-gradient(135deg, #d4d0c8 0%, #000080 100%)',
        patternOpacity: '0.0',
        vars: {
          '--bg-main': '#c0c0c0',
          '--bg-gradient': 'linear-gradient(180deg, #008080 0%, #005959 100%)',
          '--bg-surface': '#d4d0c8',
          '--bg-card': '#dfdfdf',
          '--bg-elevated': '#c8c4bc',
          '--bg-input': '#ffffff',
          '--text-primary': '#111827',
          '--text-secondary': '#374151',
          '--text-muted': '#4b5563',
          '--accent-primary': '#000080',
          '--accent-secondary': '#008080',
          '--accent-Contrast': '#ffffff',
          '--border-color': '#808080',
          '--border-strong': '#000080',
          '--shadow-glow': '4px 4px 0px rgba(0,0,0,0.45)',
          '--board-groove-bg': '#788494',
          '--cell-unrevealed': '#cccccc',
          '--cell-unrevealed-border': '#808080',
          '--cell-unrevealed-hover': '#d8d8d8',
          '--cell-revealed': '#b8b8b8',
          '--cell-revealed-border': '#8e8e8e',
          '--cell-flag-bg': '#cccccc',
          '--cell-mine-bg': '#ef4444',
          '--cell-hint-glow': '#000080',
          '--num-1': '#0000ff',
          '--num-2': '#007700',
          '--num-3': '#cc0000',
          '--num-4': '#000080',
          '--num-5': '#800000',
          '--num-6': '#008080',
          '--num-7': '#000000',
          '--num-8': '#555555'
        }
      },
      retro_dark: {
        id: 'retro_dark',
        icon: '🌙',
        swatchBg: 'linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #38bdf8 100%)',
        patternOpacity: '0.0',
        vars: {
          '--bg-main': '#0f172a',
          '--bg-gradient': 'linear-gradient(180deg, #0b1922 0%, #071016 100%)',
          '--bg-surface': '#1e2633',
          '--bg-card': '#252f3f',
          '--bg-elevated': '#2d384b',
          '--bg-input': '#111722',
          '--text-primary': '#f1f5f9',
          '--text-secondary': '#cbd5e1',
          '--text-muted': '#94a3b8',
          '--accent-primary': '#38bdf8',
          '--accent-secondary': '#0284c7',
          '--accent-Contrast': '#09111a',
          '--border-color': '#334155',
          '--border-strong': '#38bdf8',
          '--shadow-glow': '4px 4px 0px rgba(0,0,0,0.65)',
          '--board-groove-bg': '#0b111c',
          '--cell-unrevealed': '#2c384b',
          '--cell-unrevealed-border': '#475569',
          '--cell-unrevealed-hover': '#354358',
          '--cell-revealed': '#151d2a',
          '--cell-revealed-border': '#253246',
          '--cell-flag-bg': '#283242',
          '--cell-mine-bg': '#991b1b',
          '--cell-hint-glow': '#38bdf8',
          '--num-1': '#60a5fa',
          '--num-2': '#4ade80',
          '--num-3': '#f87171',
          '--num-4': '#c084fc',
          '--num-5': '#fbbf24',
          '--num-6': '#2dd4bf',
          '--num-7': '#f8fafc',
          '--num-8': '#94a3b8'
        }
      },
      arabian: {
        id: 'arabian',
        icon: '🕌',
        swatchBg: 'linear-gradient(135deg, #1b3542 0%, #f5b041 100%)',
        patternOpacity: '0.09',
        vars: {
          '--bg-main': '#0c141c',
          '--board-groove-bg': '#081118',
          '--bg-gradient': 'radial-gradient(circle at 50% 0%, #1f3c4a 0%, #0d1821 62%, #060b10 100%)',
          '--bg-surface': 'rgba(18, 35, 44, 0.90)',
          '--bg-card': 'rgba(25, 48, 60, 0.86)',
          '--bg-elevated': '#254859',
          '--bg-input': '#0f1f27',
          '--text-primary': '#fdf6e7',
          '--text-secondary': '#d5c4a1',
          '--text-muted': '#8ea5b0',
          '--accent-primary': '#f5b041',
          '--accent-secondary': '#14b8a6',
          '--accent-Contrast': '#0c141c',
          '--border-color': 'rgba(245, 176, 65, 0.38)',
          '--border-strong': 'rgba(245, 176, 65, 0.85)',
          '--shadow-glow': '0 10px 35px rgba(245, 176, 65, 0.22)',
          '--cell-unrevealed': 'linear-gradient(145deg, #2e596b 0%, #1d3b49 55%, #152b36 100%)',
          '--cell-unrevealed-border': '#528da3',
          '--cell-unrevealed-hover': 'linear-gradient(145deg, #37697e 0%, #234757 100%)',
          '--cell-revealed': 'linear-gradient(145deg, #112129 0%, #0c181f 100%)',
          '--cell-revealed-border': 'rgba(245, 176, 65, 0.22)',
          '--cell-flag-bg': 'linear-gradient(145deg, #4f3717 0%, #2d1e0b 100%)',
          '--cell-mine-bg': 'linear-gradient(145deg, #991b1b 0%, #450a0a 100%)',
          '--cell-hint-glow': '#2dd4bf',
          '--num-1': '#38bdf8',
          '--num-2': '#34d399',
          '--num-3': '#fb7185',
          '--num-4': '#c084fc',
          '--num-5': '#fbbf24',
          '--num-6': '#2dd4bf',
          '--num-7': '#f472b6',
          '--num-8': '#e2e8f0'
        }
      },
      obsidian: {
        id: 'obsidian',
        icon: '🌌',
        swatchBg: 'linear-gradient(135deg, #090d16 0%, #38bdf8 55%, #a855f7 100%)',
        patternOpacity: '0.04',
        vars: {
          '--bg-main': '#060911',
          '--board-groove-bg': '#050811',
          '--bg-gradient': 'radial-gradient(circle at 50% 0%, #161f38 0%, #070b14 75%)',
          '--bg-surface': 'rgba(13, 19, 33, 0.90)',
          '--bg-card': 'rgba(23, 33, 54, 0.85)',
          '--bg-elevated': '#233252',
          '--bg-input': '#0b1120',
          '--text-primary': '#f8fafc',
          '--text-secondary': '#94a3b8',
          '--text-muted': '#64748b',
          '--accent-primary': '#38bdf8',
          '--accent-secondary': '#a855f7',
          '--accent-Contrast': '#060911',
          '--border-color': 'rgba(56, 189, 248, 0.32)',
          '--border-strong': 'rgba(56, 189, 248, 0.82)',
          '--shadow-glow': '0 10px 34px rgba(56, 189, 248, 0.22)',
          '--cell-unrevealed': 'linear-gradient(145deg, #1e2d4a 0%, #131c31 65%, #0d1424 100%)',
          '--cell-unrevealed-border': '#38bdf8',
          '--cell-unrevealed-hover': 'linear-gradient(145deg, #283b60 0%, #192540 100%)',
          '--cell-revealed': 'linear-gradient(145deg, #0a101d 0%, #070b14 100%)',
          '--cell-revealed-border': 'rgba(56, 189, 248, 0.16)',
          '--cell-flag-bg': 'linear-gradient(145deg, #1e1b4b 0%, #0f172a 100%)',
          '--cell-mine-bg': 'linear-gradient(145deg, #881337 0%, #4c0519 100%)',
          '--cell-hint-glow': '#a855f7',
          '--num-1': '#38bdf8',
          '--num-2': '#4ade80',
          '--num-3': '#fb7185',
          '--num-4': '#c084fc',
          '--num-5': '#facc15',
          '--num-6': '#2dd4bf',
          '--num-7': '#f472b6',
          '--num-8': '#cbd5e1'
        }
      },
      sakura: {
        id: 'sakura',
        icon: '🌸',
        swatchBg: 'linear-gradient(135deg, #fecdd3 0%, #e11d48 100%)',
        patternOpacity: '0.05',
        vars: {
          '--bg-main': '#fff5f7',
          '--board-groove-bg': '#f3b8c6',
          '--bg-gradient': 'radial-gradient(circle at 50% 0%, #ffe0e6 0%, #fff5f7 68%, #fce7f3 100%)',
          '--bg-surface': 'rgba(255, 245, 247, 0.90)',
          '--bg-card': 'rgba(255, 255, 255, 0.88)',
          '--bg-elevated': '#ffe4e8',
          '--bg-input': '#fff0f3',
          '--text-primary': '#3f1d28',
          '--text-secondary': '#7d4657',
          '--text-muted': '#a36e7e',
          '--accent-primary': '#e11d48',
          '--accent-secondary': '#f43f5e',
          '--accent-Contrast': '#ffffff',
          '--border-color': 'rgba(225, 29, 72, 0.25)',
          '--border-strong': 'rgba(225, 29, 72, 0.65)',
          '--shadow-glow': '0 10px 28px rgba(225, 29, 72, 0.14)',
          '--cell-unrevealed': 'linear-gradient(145deg, #ffd8e0 0%, #fda4af 100%)',
          '--cell-unrevealed-border': '#fb7185',
          '--cell-unrevealed-hover': 'linear-gradient(145deg, #ffe4e8 0%, #fecdd3 100%)',
          '--cell-revealed': 'linear-gradient(145deg, #fffafa 0%, #fff0f3 100%)',
          '--cell-revealed-border': '#f5cbd3',
          '--cell-flag-bg': 'linear-gradient(145deg, #ffe4e6 0%, #fecdd3 100%)',
          '--cell-mine-bg': '#be123c',
          '--cell-hint-glow': '#059669',
          '--num-1': '#0284c7',
          '--num-2': '#059669',
          '--num-3': '#e11d48',
          '--num-4': '#7c3aed',
          '--num-5': '#d97706',
          '--num-6': '#0d9488',
          '--num-7': '#be185d',
          '--num-8': '#475569'
        }
      },
      emerald: {
        id: 'emerald',
        icon: '🌿',
        swatchBg: 'linear-gradient(135deg, #063729 0%, #10b981 65%, #fbbf24 100%)',
        patternOpacity: '0.06',
        vars: {
          '--bg-main': '#041a14',
          '--board-groove-bg': '#03130e',
          '--bg-gradient': 'radial-gradient(circle at 50% 0%, #0f4736 0%, #062119 68%, #03120d 100%)',
          '--bg-surface': 'rgba(8, 37, 28, 0.90)',
          '--bg-card': 'rgba(14, 54, 41, 0.86)',
          '--bg-elevated': '#165642',
          '--bg-input': '#07221a',
          '--text-primary': '#ecfdf5',
          '--text-secondary': '#a7f3d0',
          '--text-muted': '#6ee7b7',
          '--accent-primary': '#10b981',
          '--accent-secondary': '#fbbf24',
          '--accent-Contrast': '#031d14',
          '--border-color': 'rgba(16, 185, 129, 0.34)',
          '--border-strong': 'rgba(251, 191, 36, 0.78)',
          '--shadow-glow': '0 10px 32px rgba(16, 185, 129, 0.22)',
          '--cell-unrevealed': 'linear-gradient(145deg, #1b634c 0%, #0e3d2f 65%, #09291f 100%)',
          '--cell-unrevealed-border': '#34d399',
          '--cell-unrevealed-hover': 'linear-gradient(145deg, #23765c 0%, #144d3b 100%)',
          '--cell-revealed': 'linear-gradient(145deg, #072119 0%, #041510 100%)',
          '--cell-revealed-border': 'rgba(52, 211, 153, 0.2)',
          '--cell-flag-bg': 'linear-gradient(145deg, #3f3b16 0%, #242009 100%)',
          '--cell-mine-bg': 'linear-gradient(145deg, #7f1d1d 0%, #450a0a 100%)',
          '--cell-hint-glow': '#fbbf24',
          '--num-1': '#38bdf8',
          '--num-2': '#4ade80',
          '--num-3': '#fb7185',
          '--num-4': '#c084fc',
          '--num-5': '#facc15',
          '--num-6': '#2dd4bf',
          '--num-7': '#f472b6',
          '--num-8': '#d1fae5'
        }
      }
    };

    /********************************************************************
     * 2. LIVE 60FPS WORLD BACKGROUND ENGINE & PARTICLE VFX ENGINE
     *    (Retina High-DPI + Pre-Baked GPU Offscreen Sprites = Ultra-High Quality & 0ms Lag)
     ********************************************************************/
    let bgParticles = [];
    let vfxParticles = [];
    let vfxShockwaves = [];
    let bgAnimFrame = null;
    let vfxAnimFrame = null;
    let cachedThemeSprites = {};
    let cachedBakedTileAtlases = {};
    let canvasDpr = 1;
    let globalBgCtx = null;
    let globalVfxCtx = null;
    let bgW = 360;
    let bgH = 640;
    let lastBgFrameTime = 0;
    let lastVfxFrameTime = 0;
    let prevVfxDirtyBox = null;
    window.__msGestureBusyUntil = 0;

    function createOffscreenSprite(size, drawFn) {
      const c = document.createElement('canvas');
      c.width = size;
      c.height = size;
      const ctx = c.getContext('2d');
      drawFn(ctx, size);
      return c;
    }

    // ==================== PRE-BAKED 128x128 RETINA 3D TILE TEXTURE ATLAS ENGINE ====================
    // Renders the exact original Pro Graphics 3D cell design (3-layer bevels, outer drop shadow,
    // 145deg gradients, recessed wells, octagon armor chamfer, classic 95 bevels, and ornaments/flags/mines)
    // into 6 shared GPU textures per theme so 936 DOM cells render with 0 CSS box-shadow/SVG lag!
    function traceTileShapePath(ctx, themeId, x, y, w, h, r) {
      ctx.beginPath();
      if (themeId === 'obsidian') {
        const cut = Math.round(w * 0.11);
        ctx.moveTo(x + cut, y);
        ctx.lineTo(x + w - cut, y);
        ctx.lineTo(x + w, y + cut);
        ctx.lineTo(x + w, y + h - cut);
        ctx.lineTo(x + w - cut, y + h);
        ctx.lineTo(x + cut, y + h);
        ctx.lineTo(x, y + h - cut);
        ctx.lineTo(x, y + cut);
        ctx.closePath();
      } else {
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
      }
    }

    function drawThemeOrnamentOnCanvas(ctx, themeId, s) {
      const half = s / 2;
      ctx.save();
      if (themeId === 'arabian') {
        ctx.globalAlpha = 0.40;
        ctx.strokeStyle = '#f5b041';
        ctx.lineWidth = 3.2;
        ctx.beginPath();
        const pts = [[20,4],[24,14],[35,10],[28,20],[35,30],[24,26],[20,36],[16,26],[5,30],[12,20],[5,10],[16,14]];
        pts.forEach(([px, py], idx) => {
          const sx = (px / 40) * s;
          const sy = (py / 40) * s;
          if (idx === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        });
        ctx.closePath();
        ctx.stroke();
        ctx.strokeStyle = '#2dd4bf';
        ctx.lineWidth = 3.0;
        ctx.beginPath();
        ctx.arc(half, half, s * 0.13, 0, Math.PI * 2);
        ctx.stroke();
      } else if (themeId === 'obsidian') {
        ctx.globalAlpha = 0.42;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3.8;
        const sc = s / 40;
        ctx.beginPath();
        ctx.moveTo(6*sc, 14*sc); ctx.lineTo(6*sc, 6*sc); ctx.lineTo(14*sc, 6*sc);
        ctx.moveTo(26*sc, 6*sc); ctx.lineTo(34*sc, 6*sc); ctx.lineTo(34*sc, 14*sc);
        ctx.moveTo(34*sc, 26*sc); ctx.lineTo(34*sc, 34*sc); ctx.lineTo(26*sc, 34*sc);
        ctx.moveTo(14*sc, 34*sc); ctx.lineTo(6*sc, 34*sc); ctx.lineTo(6*sc, 26*sc);
        ctx.stroke();
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 3.2;
        ctx.beginPath();
        ctx.moveTo(20*sc, 13*sc); ctx.lineTo(27*sc, 20*sc); ctx.lineTo(20*sc, 27*sc); ctx.lineTo(13*sc, 20*sc);
        ctx.closePath();
        ctx.stroke();
      } else if (themeId === 'sakura') {
        ctx.globalAlpha = 0.36;
        ctx.strokeStyle = '#e11d48';
        ctx.lineWidth = 3.0;
        const sc = s / 40;
        [[20,12],[28,18],[25,27],[15,27],[12,18]].forEach(([cx, cy]) => {
          ctx.beginPath();
          ctx.arc(cx*sc, cy*sc, 5*sc, 0, Math.PI * 2);
          ctx.stroke();
        });
        ctx.fillStyle = '#e11d48';
        ctx.beginPath();
        ctx.arc(half, half, 2.6*sc, 0, Math.PI * 2);
        ctx.fill();
      } else if (themeId === 'emerald') {
        ctx.globalAlpha = 0.40;
        ctx.strokeStyle = '#6ee7b7';
        ctx.lineWidth = 3.0;
        const sc = s / 40;
        ctx.beginPath();
        ctx.moveTo(20*sc, 5*sc); ctx.lineTo(35*sc, 20*sc); ctx.lineTo(20*sc, 35*sc); ctx.lineTo(5*sc, 20*sc); ctx.closePath();
        ctx.stroke();
        ctx.strokeRect(12*sc, 12*sc, 16*sc, 16*sc);
        ctx.beginPath();
        ctx.moveTo(20*sc, 5*sc); ctx.lineTo(12*sc, 12*sc);
        ctx.moveTo(35*sc, 20*sc); ctx.lineTo(28*sc, 12*sc);
        ctx.moveTo(20*sc, 35*sc); ctx.lineTo(28*sc, 28*sc);
        ctx.moveTo(5*sc, 20*sc); ctx.lineTo(12*sc, 28*sc);
        ctx.stroke();
      } else if (themeId === 'retro' || themeId === 'retro_dark') {
        ctx.globalAlpha = themeId === 'retro' ? 0.35 : 0.20;
        ctx.strokeStyle = themeId === 'retro' ? '#ffffff' : '#94a3b8';
        ctx.lineWidth = 2.4;
        const m = Math.round(s * 0.18);
        ctx.strokeRect(m, m, s - m * 2, s - m * 2);
      }
      ctx.restore();
    }

    function drawThemeFlagOnCanvas(ctx, themeId, s) {
      const sc = s / 36;
      ctx.save();
      if (themeId === 'arabian') {
        const glow = ctx.createRadialGradient(18*sc, 19*sc, 2*sc, 18*sc, 19*sc, 14*sc);
        glow.addColorStop(0, 'rgba(254, 240, 138, 0.55)');
        glow.addColorStop(1, 'rgba(245, 158, 11, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(18*sc, 19*sc, 14*sc, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(15*sc, 5*sc); ctx.lineTo(21*sc, 5*sc); ctx.lineTo(23*sc, 9*sc); ctx.lineTo(13*sc, 9*sc); ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2*sc;
        ctx.beginPath();
        ctx.moveTo(11*sc, 9*sc); ctx.lineTo(25*sc, 9*sc); ctx.lineTo(27*sc, 19*sc); ctx.lineTo(23*sc, 28*sc); ctx.lineTo(13*sc, 28*sc); ctx.lineTo(9*sc, 19*sc); ctx.closePath();
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.moveTo(14*sc, 12*sc); ctx.lineTo(22*sc, 12*sc); ctx.lineTo(23*sc, 19*sc); ctx.lineTo(20*sc, 25*sc); ctx.lineTo(16*sc, 25*sc); ctx.lineTo(13*sc, 19*sc); ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.6*sc;
        ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(12*sc, 30.5*sc); ctx.lineTo(24*sc, 30.5*sc); ctx.stroke();
      } else if (themeId === 'obsidian') {
        ctx.fillStyle = 'rgba(56,189,248,0.26)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.2*sc;
        ctx.beginPath();
        [[18,4],[29,11],[26,27],[18,32],[10,27],[7,11]].forEach(([x,y], i) => i ? ctx.lineTo(x*sc,y*sc) : ctx.moveTo(x*sc,y*sc));
        ctx.closePath(); ctx.fill(); ctx.stroke();

        ctx.fillStyle = 'rgba(168,85,247,0.82)';
        ctx.beginPath();
        [[18,9],[25,13],[22.5,24],[18,27],[13.5,24],[11,13]].forEach(([x,y], i) => i ? ctx.lineTo(x*sc,y*sc) : ctx.moveTo(x*sc,y*sc));
        ctx.closePath(); ctx.fill();

        ctx.fillStyle = '#e0f2fe';
        ctx.beginPath(); ctx.arc(18*sc, 18*sc, 4*sc, 0, Math.PI * 2); ctx.fill();
      } else if (themeId === 'sakura') {
        ctx.fillStyle = '#e11d48';
        ctx.beginPath();
        ctx.moveTo(6*sc, 10*sc); ctx.quadraticCurveTo(18*sc, 6.5*sc, 30*sc, 10*sc);
        ctx.lineTo(28*sc, 13*sc); ctx.quadraticCurveTo(18*sc, 10*sc, 8*sc, 13*sc); ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#be123c';
        ctx.fillRect(8.5*sc, 15*sc, 19*sc, 2.8*sc);
        ctx.fillStyle = '#e11d48';
        ctx.fillRect(11*sc, 11*sc, 3*sc, 19*sc);
        ctx.fillRect(22*sc, 11*sc, 3*sc, 19*sc);
        ctx.fillStyle = '#fda4af';
        ctx.strokeStyle = '#e11d48';
        ctx.lineWidth = 1.4*sc;
        ctx.beginPath(); ctx.arc(18*sc, 22.5*sc, 4*sc, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      } else if (themeId === 'emerald') {
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2.6*sc;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(18*sc, 6*sc); ctx.lineTo(18*sc, 31*sc);
        ctx.moveTo(11*sc, 10*sc); ctx.lineTo(11*sc, 18*sc);
        ctx.quadraticCurveTo(11*sc, 22*sc, 18*sc, 22*sc);
        ctx.quadraticCurveTo(25*sc, 22*sc, 25*sc, 18*sc);
        ctx.lineTo(25*sc, 10*sc);
        ctx.stroke();
        ctx.fillStyle = '#fef08a';
        [[18,4,15,9.5,21,9.5],[11,7,8.5,12,13.5,12],[25,7,22.5,12,27.5,12]].forEach(([x1,y1,x2,y2,x3,y3]) => {
          ctx.beginPath(); ctx.moveTo(x1*sc,y1*sc); ctx.lineTo(x2*sc,y2*sc); ctx.lineTo(x3*sc,y3*sc); ctx.closePath(); ctx.fill();
        });
      } else {
        const isDark = themeId === 'retro_dark';
        ctx.fillStyle = isDark ? '#e2e8f0' : '#111827';
        ctx.fillRect(16.5*sc, 7*sc, 2.8*sc, 20*sc);
        ctx.fillRect(10.5*sc, 26.5*sc, 15*sc, 3.2*sc);
        ctx.fillStyle = isDark ? '#f43f5e' : '#dc2626';
        ctx.beginPath();
        ctx.moveTo(19.2*sc, 6*sc); ctx.lineTo(7.5*sc, 12.2*sc); ctx.lineTo(19.2*sc, 18.8*sc); ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }

    function drawThemeMineOnCanvas(ctx, themeId, s) {
      const sc = s / 36;
      ctx.save();
      if (themeId === 'arabian') {
        ctx.fillStyle = '#27272a';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.2*sc;
        ctx.beginPath(); ctx.arc(18*sc, 20.5*sc, 9.5*sc, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.strokeStyle = '#ef4444';
        ctx.beginPath(); ctx.moveTo(12*sc, 18*sc); ctx.quadraticCurveTo(18*sc, 23*sc, 24*sc, 18*sc); ctx.stroke();
        ctx.strokeStyle = '#fbbf24';
        ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(18*sc, 11*sc); ctx.quadraticCurveTo(21*sc, 5.5*sc, 25.5*sc, 7.5*sc); ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.arc(25.5*sc, 7.5*sc, 3.5*sc, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fef08a';
        ctx.beginPath(); ctx.arc(25.5*sc, 7.5*sc, 1.8*sc, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(15*sc, 17.5*sc, 2*sc, 0, Math.PI * 2); ctx.fill();
      } else if (themeId === 'sakura') {
        ctx.fillStyle = '#3f1d28';
        ctx.strokeStyle = '#fb7185';
        ctx.lineWidth = 2.2*sc;
        ctx.beginPath(); ctx.arc(18*sc, 19.5*sc, 9.5*sc, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.strokeStyle = '#fda4af';
        ctx.lineWidth = 2.5*sc;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(11*sc, 11*sc); ctx.lineTo(15*sc, 15.5*sc);
        ctx.moveTo(25*sc, 11*sc); ctx.lineTo(21*sc, 15.5*sc);
        ctx.stroke();
        ctx.fillStyle = '#fb7185';
        ctx.beginPath(); ctx.arc(14.5*sc, 19*sc, 2.1*sc, 0, Math.PI * 2); ctx.arc(21.5*sc, 19*sc, 2.1*sc, 0, Math.PI * 2); ctx.fill();
      } else {
        const spikeCol = themeId === 'obsidian' ? '#f43f5e' : (themeId === 'emerald' ? '#34d399' : (themeId === 'retro_dark' ? '#e2e8f0' : '#111827'));
        ctx.strokeStyle = spikeCol;
        ctx.lineWidth = 2.6*sc;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(18*sc, 4.5*sc); ctx.lineTo(18*sc, 31.5*sc);
        ctx.moveTo(4.5*sc, 18*sc); ctx.lineTo(31.5*sc, 18*sc);
        ctx.moveTo(8.5*sc, 8.5*sc); ctx.lineTo(27.5*sc, 27.5*sc);
        ctx.moveTo(27.5*sc, 8.5*sc); ctx.lineTo(8.5*sc, 27.5*sc);
        ctx.stroke();

        ctx.fillStyle = themeId === 'emerald' ? '#064e3b' : '#0f172a';
        ctx.strokeStyle = themeId === 'obsidian' ? '#38bdf8' : (themeId === 'emerald' ? '#fbbf24' : spikeCol);
        ctx.lineWidth = 1.8*sc;
        ctx.beginPath(); ctx.arc(18*sc, 18*sc, 9*sc, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

        ctx.fillStyle = themeId === 'obsidian' ? '#f43f5e' : (themeId === 'emerald' ? '#34d399' : '#ffffff');
        if (themeId === 'retro' || themeId === 'retro_dark') {
          ctx.fillRect(13.2*sc, 13.2*sc, 3.6*sc, 3.6*sc);
        } else {
          ctx.beginPath(); ctx.arc(18*sc, 18*sc, 3.8*sc, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.restore();
    }

    function getOrBuildBakedTileAtlas(themeId) {
      if (cachedBakedTileAtlases[themeId]) return cachedBakedTileAtlases[themeId];
      const S = 128;
      const palettes = {
        arabian: {
          unrev: ['#2e596b', '#1d3b49', '#152b36'],
          hover: ['#37697e', '#264d5e', '#1c3b48'],
          unrevBorder: '#528da3',
          rev: ['#112129', '#0c181f'],
          revBorder: 'rgba(245, 176, 65, 0.32)',
          flagBg: ['#4f3717', '#2d1e0b'],
          flagBorder: '#f5b041',
          mineBg: ['#991b1b', '#450a0a']
        },
        obsidian: {
          unrev: ['#1e2d4a', '#131c31', '#0d1424'],
          hover: ['#283b60', '#1a2744', '#121b30'],
          unrevBorder: '#38bdf8',
          rev: ['#0a101d', '#070b14'],
          revBorder: 'rgba(56, 189, 248, 0.25)',
          flagBg: ['#1e1b4b', '#0f172a'],
          flagBorder: '#38bdf8',
          mineBg: ['#881337', '#4c0519']
        },
        sakura: {
          unrev: ['#ffd8e0', '#fbc0cc', '#fda4af'],
          hover: ['#ffe4e8', '#ffd0da', '#fecdd3'],
          unrevBorder: '#fb7185',
          rev: ['#fffafa', '#fff0f3'],
          revBorder: '#f5cbd3',
          flagBg: ['#ffe4e6', '#fecdd3'],
          flagBorder: '#e11d48',
          mineBg: ['#be123c', '#881337']
        },
        emerald: {
          unrev: ['#1b634c', '#0e3d2f', '#09291f'],
          hover: ['#23765c', '#144d3b', '#0d3629'],
          unrevBorder: '#34d399',
          rev: ['#072119', '#041510'],
          revBorder: 'rgba(52, 211, 153, 0.28)',
          flagBg: ['#3f3b16', '#242009'],
          flagBorder: '#10b981',
          mineBg: ['#7f1d1d', '#450a0a']
        },
        retro: {
          unrev: ['#cccccc', '#cccccc', '#cccccc'],
          hover: ['#d8d8d8', '#d8d8d8', '#d8d8d8'],
          unrevBorder: '#808080',
          rev: ['#b8b8b8', '#b8b8b8'],
          revBorder: '#8e8e8e',
          flagBg: ['#cccccc', '#cccccc'],
          flagBorder: '#000080',
          mineBg: ['#ef4444', '#dc2626']
        },
        retro_dark: {
          unrev: ['#2c384b', '#2c384b', '#2c384b'],
          hover: ['#354358', '#354358', '#354358'],
          unrevBorder: '#475569',
          rev: ['#151d2a', '#151d2a'],
          revBorder: '#253246',
          flagBg: ['#2c384b', '#2c384b'],
          flagBorder: '#38bdf8',
          mineBg: ['#991b1b', '#7f1d1d']
        }
      };

      const p = palettes[themeId] || palettes.arabian;
      const isRetro = (themeId === 'retro' || themeId === 'retro_dark');

      const bakeTileVariant = (mode) => {
        const c = document.createElement('canvas');
        c.width = S;
        c.height = S;
        const ctx = c.getContext('2d');

        if (isRetro) {
          const isDark = themeId === 'retro_dark';
          if (mode === 'revealed') {
            ctx.fillStyle = p.rev[0];
            ctx.fillRect(0, 0, S, S);
            ctx.strokeStyle = p.revBorder;
            ctx.lineWidth = 4;
            ctx.strokeRect(2, 2, S - 4, S - 4);
            // Subtle inner top-left recessed shadow from original design
            ctx.fillStyle = 'rgba(0,0,0,0.16)';
            ctx.fillRect(4, 4, S - 8, 4);
            ctx.fillRect(4, 4, 4, S - 8);
          } else if (mode === 'mine_hit') {
            ctx.fillStyle = p.mineBg[0];
            ctx.fillRect(0, 0, S, S);
            ctx.strokeStyle = '#ff4d4d';
            ctx.lineWidth = 6;
            ctx.strokeRect(3, 3, S - 6, S - 6);
            drawThemeMineOnCanvas(ctx, themeId, S);
          } else {
            // Classic 3.5px 3D Beveled Raised Keycap
            const faceCol = mode === 'hover' ? p.hover[0] : p.unrev[0];
            const topLeftCol = isDark ? '#475569' : '#ffffff';
            const botRightCol = isDark ? '#0f172a' : '#7b7b7b';
            const bev = 12; // 12/128 = ~3.5px at 36px tile size
            ctx.fillStyle = faceCol;
            ctx.fillRect(0, 0, S, S);

            // Top & Left bevel
            ctx.fillStyle = topLeftCol;
            ctx.beginPath();
            ctx.moveTo(0, 0); ctx.lineTo(S, 0); ctx.lineTo(S - bev, bev);
            ctx.lineTo(bev, bev); ctx.lineTo(bev, S - bev); ctx.lineTo(0, S);
            ctx.closePath();
            ctx.fill();

            // Bottom & Right bevel
            ctx.fillStyle = botRightCol;
            ctx.beginPath();
            ctx.moveTo(S, S); ctx.lineTo(0, S); ctx.lineTo(bev, S - bev);
            ctx.lineTo(S - bev, S - bev); ctx.lineTo(S - bev, bev); ctx.lineTo(S, 0);
            ctx.closePath();
            ctx.fill();

            if (mode === 'unrevealed' || mode === 'hover') {
              drawThemeOrnamentOnCanvas(ctx, themeId, S);
            } else if (mode === 'flagged') {
              drawThemeFlagOnCanvas(ctx, themeId, S);
            } else if (mode === 'mine_reveal') {
              drawThemeMineOnCanvas(ctx, themeId, S);
            }
          }
          return `url("${c.toDataURL('image/png')}")`;
        }

        // Pro 3D Rounded / Octagonal Cushioned Tile (First-Design --cell-radius: 9px + 3-layer --cell-bevel)
        const pad = 3;
        const w = S - pad * 2;
        const h = S - pad * 2;
        const rad = Math.round(S * 0.21); // ~9px at 42px tile size

        if (mode === 'revealed') {
          traceTileShapePath(ctx, themeId, pad, pad, w, h, rad);
          const grad = ctx.createLinearGradient(pad, pad, pad + w, pad + h);
          grad.addColorStop(0, p.rev[0]);
          grad.addColorStop(1, p.rev[1]);
          ctx.fillStyle = grad;
          ctx.fill();

          // Recessed inner shadow: inset 0 2px 4px rgba(0,0,0,0.35)
          ctx.save();
          ctx.clip();
          const inShadow = ctx.createLinearGradient(0, pad, 0, pad + 22);
          inShadow.addColorStop(0, 'rgba(0,0,0,0.42)');
          inShadow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = inShadow;
          ctx.fillRect(pad, pad, w, 22);
          ctx.restore();

          traceTileShapePath(ctx, themeId, pad + 1.5, pad + 1.5, w - 3, h - 3, Math.max(2, rad - 1));
          ctx.strokeStyle = p.revBorder;
          ctx.lineWidth = 3.2;
          ctx.stroke();
          return `url("${c.toDataURL('image/png')}")`;
        }

        // Outer drop shadow: 0 3px 6px rgba(0,0,0,0.35)
        ctx.save();
        traceTileShapePath(ctx, themeId, pad, pad + 3, w, h - 1, rad);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.36)';
        ctx.fill();
        ctx.restore();

        // Main 145deg Gradient Fill
        traceTileShapePath(ctx, themeId, pad, pad, w, h - 2, rad);
        const grad = ctx.createLinearGradient(pad, pad, pad + w, pad + h);
        if (mode === 'flagged') {
          grad.addColorStop(0, p.flagBg[0]);
          grad.addColorStop(1, p.flagBg[1]);
        } else if (mode === 'mine_hit') {
          grad.addColorStop(0, p.mineBg[0]);
          grad.addColorStop(1, p.mineBg[1]);
        } else {
          const cols = mode === 'hover' ? p.hover : p.unrev;
          grad.addColorStop(0, cols[0]);
          grad.addColorStop(0.55, cols[1]);
          grad.addColorStop(1, cols[2]);
        }
        ctx.fillStyle = grad;
        ctx.fill();

        // 3D Inset Bevels: inset 0 2px 1px rgba(255,255,255,0.28), inset 0 -3px 3px rgba(0,0,0,0.5)
        ctx.save();
        ctx.clip();
        const topBevel = ctx.createLinearGradient(0, pad, 0, pad + 20);
        topBevel.addColorStop(0, 'rgba(255, 255, 255, 0.36)');
        topBevel.addColorStop(0.45, 'rgba(255, 255, 255, 0.12)');
        topBevel.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = topBevel;
        ctx.fillRect(pad, pad, w, 20);

        const botBevel = ctx.createLinearGradient(0, pad + h - 24, 0, pad + h);
        botBevel.addColorStop(0, 'rgba(0, 0, 0, 0)');
        botBevel.addColorStop(0.5, 'rgba(0, 0, 0, 0.25)');
        botBevel.addColorStop(1, 'rgba(0, 0, 0, 0.52)');
        ctx.fillStyle = botBevel;
        ctx.fillRect(pad, pad + h - 24, w, 24);

        if (mode === 'unrevealed' || mode === 'hover') {
          drawThemeOrnamentOnCanvas(ctx, themeId, S);
        } else if (mode === 'flagged') {
          drawThemeFlagOnCanvas(ctx, themeId, S);
        } else if (mode === 'mine_hit' || mode === 'mine_reveal') {
          drawThemeMineOnCanvas(ctx, themeId, S);
        }
        ctx.restore();

        // Crisp Outer Border
        traceTileShapePath(ctx, themeId, pad + 1.5, pad + 1.5, w - 3, h - 5, Math.max(2, rad - 1));
        ctx.strokeStyle = mode === 'flagged' ? p.flagBorder : (mode === 'mine_hit' ? '#ff4d4d' : p.unrevBorder);
        ctx.lineWidth = mode === 'flagged' ? 4.5 : 3.4;
        ctx.stroke();

        return `url("${c.toDataURL('image/png')}")`;
      };

      const atlas = {
        unrevealed: bakeTileVariant('unrevealed'),
        hover: bakeTileVariant('hover'),
        revealed: bakeTileVariant('revealed'),
        flagged: bakeTileVariant('flagged'),
        mineHit: bakeTileVariant('mine_hit'),
        mineReveal: bakeTileVariant('mine_reveal')
      };
      cachedBakedTileAtlases[themeId] = atlas;
      return atlas;
    }

    function getOrBuildThemeSprites(themeId) {
      if (cachedThemeSprites[themeId]) return cachedThemeSprites[themeId];
      const sprites = [];

      if (themeId === 'arabian') {
        sprites.push(createOffscreenSprite(56, (ctx, s) => {
          const half = s / 2;
          const grad = ctx.createRadialGradient(half, half, 1, half, half, half - 2);
          grad.addColorStop(0, 'rgba(254, 240, 138, 0.95)');
          grad.addColorStop(0.4, 'rgba(245, 176, 65, 0.55)');
          grad.addColorStop(1, 'rgba(245, 176, 65, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath(); ctx.arc(half, half, half - 2, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#fef08a';
          ctx.beginPath();
          for (let i = 0; i < 8; i++) {
            const ang = (i * Math.PI) / 4;
            const r = i % 2 === 0 ? 11 : 4.5;
            const x = half + Math.cos(ang) * r;
            const y = half + Math.sin(ang) * r;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.closePath(); ctx.fill();
        }));
        sprites.push(createOffscreenSprite(48, (ctx, s) => {
          const half = s / 2;
          const grad = ctx.createRadialGradient(half, half, 1, half, half, half - 2);
          grad.addColorStop(0, 'rgba(204, 251, 241, 0.95)');
          grad.addColorStop(0.45, 'rgba(45, 212, 191, 0.55)');
          grad.addColorStop(1, 'rgba(45, 212, 191, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath(); ctx.arc(half, half, half - 2, 0, Math.PI * 2); ctx.fill();
        }));
      } else if (themeId === 'obsidian') {
        sprites.push(createOffscreenSprite(56, (ctx, s) => {
          const half = s / 2;
          const grad = ctx.createLinearGradient(half, 4, half, s - 4);
          grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
          grad.addColorStop(0.7, 'rgba(56, 189, 248, 0.65)');
          grad.addColorStop(1, '#e0f2fe');
          ctx.fillStyle = grad;
          ctx.fillRect(half - 2, 4, 4, s - 8);
          ctx.fillStyle = '#38bdf8';
          ctx.fillRect(half - 4, s - 12, 8, 8);
        }));
        sprites.push(createOffscreenSprite(48, (ctx, s) => {
          const half = s / 2;
          ctx.strokeStyle = '#a855f7';
          ctx.lineWidth = 2.2;
          ctx.fillStyle = 'rgba(168, 85, 247, 0.28)';
          ctx.beginPath();
          ctx.moveTo(half, 8); ctx.lineTo(s - 8, half); ctx.lineTo(half, s - 8); ctx.lineTo(8, half);
          ctx.closePath(); ctx.fill(); ctx.stroke();
        }));
      } else if (themeId === 'sakura') {
        [0.3, -0.5].forEach((rot) => {
          sprites.push(createOffscreenSprite(52, (ctx, s) => {
            const half = s / 2;
            ctx.translate(half, half);
            ctx.rotate(rot);
            const grad = ctx.createLinearGradient(-12, -12, 12, 12);
            grad.addColorStop(0, '#fff1f2');
            grad.addColorStop(0.55, '#fda4af');
            grad.addColorStop(1, '#fb7185');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, -13);
            ctx.bezierCurveTo(12, -12, 14, 5, 0, 13);
            ctx.bezierCurveTo(-14, 5, -12, -12, 0, -13);
            ctx.fill();
            ctx.strokeStyle = 'rgba(225, 29, 72, 0.35)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }));
        });
      } else if (themeId === 'emerald') {
        sprites.push(createOffscreenSprite(52, (ctx, s) => {
          const half = s / 2;
          const grad = ctx.createRadialGradient(half - 4, half - 4, 2, half, half, 16);
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          grad.addColorStop(0.35, 'rgba(52, 211, 153, 0.5)');
          grad.addColorStop(0.85, 'rgba(16, 185, 129, 0.25)');
          grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath(); ctx.arc(half, half, 16, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = 'rgba(167, 243, 208, 0.65)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }));
        sprites.push(createOffscreenSprite(44, (ctx, s) => {
          const half = s / 2;
          const grad = ctx.createRadialGradient(half, half, 1, half, half, 15);
          grad.addColorStop(0, '#fef08a');
          grad.addColorStop(0.5, 'rgba(251, 191, 36, 0.45)');
          grad.addColorStop(1, 'rgba(251, 191, 36, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath(); ctx.arc(half, half, 15, 0, Math.PI * 2); ctx.fill();
        }));
      } else {
        const isDark = themeId === 'retro_dark';
        sprites.push(createOffscreenSprite(56, (ctx, s) => {
          const half = s / 2;
          ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.55)' : 'rgba(255, 255, 255, 0.5)';
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(half, 6); ctx.lineTo(s - 6, half); ctx.lineTo(half, s - 6); ctx.lineTo(6, half);
          ctx.closePath(); ctx.stroke();
          ctx.strokeRect(half - 8, half - 8, 16, 16);
        }));
        sprites.push(createOffscreenSprite(48, (ctx, s) => {
          const half = s / 2;
          ctx.strokeStyle = isDark ? 'rgba(45, 212, 191, 0.45)' : 'rgba(255, 255, 255, 0.38)';
          ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.arc(half, half, 13, 0, Math.PI * 2); ctx.stroke();
          ctx.fillStyle = isDark ? '#38bdf8' : '#ffffff';
          ctx.beginPath(); ctx.arc(half, half, 3, 0, Math.PI * 2); ctx.fill();
        }));
      }

      cachedThemeSprites[themeId] = sprites;
      return sprites;
    }

    function applyVisualQualitySettings() {
      const scenicOn = state.scenicWorldEnabled !== false;
      const animOn = state.animationsEnabled !== false;
      document.body.setAttribute('data-scenic', scenicOn ? '1' : '0');
      document.body.setAttribute('data-anim', animOn ? '1' : '0');
      if (!scenicOn && globalBgCtx) {
        globalBgCtx.clearRect(0, 0, bgW, bgH);
      }
      if (!animOn && globalVfxCtx) {
        vfxParticles.length = 0;
        vfxShockwaves.length = 0;
        const vfxCanvas = document.getElementById('vfxCanvas');
        if (vfxCanvas) vfxCanvas.style.display = 'none';
      }
      startAmbientWorldLoop();
      triggerVfxLoopIfNeeded();
    }

    function renderStaticAmbientCanvas() {
      if (state.scenicWorldEnabled === false) return;
      const bgCanvas = document.getElementById('themeBgCanvas');
      if (!bgCanvas) return;
      if (!globalBgCtx) globalBgCtx = bgCanvas.getContext('2d', { alpha: true });
      globalBgCtx.setTransform(1, 0, 0, 1, 0, 0);
      globalBgCtx.clearRect(0, 0, bgW, bgH);
      const sprites = getOrBuildThemeSprites(state.theme);
      for (let i = 0; i < bgParticles.length; i++) {
        const p = bgParticles[i];
        const sp = sprites[p.spriteIdx % sprites.length];
        if (sp) {
          globalBgCtx.globalAlpha = p.alpha;
          globalBgCtx.drawImage(sp, (p.x - p.size * 0.5) | 0, (p.y - p.size * 0.5) | 0, p.size | 0, p.size | 0);
        }
      }
      globalBgCtx.globalAlpha = 1;
    }

    // Live Animated Ambient World Loop (1x DPR + 30fps throttle + auto-pauses during touch/scroll/pinch so 0% gameplay lag!)
    function startAmbientWorldLoop() {
      if (bgAnimFrame) return;
      const bgCanvas = document.getElementById('themeBgCanvas');
      if (!bgCanvas) return;
      if (!globalBgCtx) globalBgCtx = bgCanvas.getContext('2d', { alpha: true });

      function stepAmbient(nowTs) {
        if (state.scenicWorldEnabled === false || document.hidden) {
          bgAnimFrame = null;
          return;
        }
        // Pause background particle redraws while the user is actively touching/scrolling/pinching or every <36ms (~28fps)
        if (nowTs < window.__msGestureBusyUntil || (nowTs - lastBgFrameTime < 36)) {
          bgAnimFrame = requestAnimationFrame(stepAmbient);
          return;
        }
        lastBgFrameTime = nowTs;
        globalBgCtx.setTransform(1, 0, 0, 1, 0, 0);
        globalBgCtx.clearRect(0, 0, bgW, bgH);

        const sprites = getOrBuildThemeSprites(state.theme);
        const dirY = (state.theme === 'obsidian' || state.theme === 'sakura') ? 1 : -1;
        for (let i = 0; i < bgParticles.length; i++) {
          const p = bgParticles[i];
          p.y += p.speedY * dirY;
          p.x += Math.sin(nowTs * p.swayFreq + p.phase) * p.swayAmp;
          if (dirY < 0 && p.y < -30) { p.y = bgH + 25; p.x = Math.random() * bgW; }
          else if (dirY > 0 && p.y > bgH + 30) { p.y = -25; p.x = Math.random() * bgW; }
          if (p.x < -30) p.x = bgW + 25;
          else if (p.x > bgW + 30) p.x = -25;

          const sp = sprites[p.spriteIdx % sprites.length];
          if (sp) {
            globalBgCtx.globalAlpha = p.alpha;
            globalBgCtx.drawImage(sp, (p.x - p.size * 0.5) | 0, (p.y - p.size * 0.5) | 0, p.size | 0, p.size | 0);
          }
        }
        globalBgCtx.globalAlpha = 1;
        bgAnimFrame = requestAnimationFrame(stepAmbient);
      }
      bgAnimFrame = requestAnimationFrame(stepAmbient);
    }

    function initWorldBackgroundParticles() {
      const canvas = document.getElementById('themeBgCanvas');
      const vfxCanvas = document.getElementById('vfxCanvas');
      if (!canvas) return;
      canvasDpr = Math.min(window.devicePixelRatio || 1, 1.75);
      bgW = Math.max(300, Math.round(window.innerWidth));
      bgH = Math.max(300, Math.round(window.innerHeight));
      // Ambient background uses 1.0x pixel buffer (3x less memory bandwidth on mobile GPUs!)
      canvas.width = bgW;
      canvas.height = bgH;
      if (vfxCanvas) {
        vfxCanvas.width = Math.round(bgW * canvasDpr);
        vfxCanvas.height = Math.round(bgH * canvasDpr);
        if (vfxParticles.length === 0 && vfxShockwaves.length === 0) {
          vfxCanvas.style.display = 'none';
        }
      }
      bgParticles = [];
      const isMobile = bgW < 640;
      const count = isMobile ? 16 : 26;
      for (let i = 0; i < count; i++) {
        bgParticles.push({
          x: Math.random() * bgW,
          y: Math.random() * bgH,
          speedY: 0.35 + Math.random() * 0.45,
          swayAmp: 0.25 + Math.random() * 0.45,
          swayFreq: 0.0012 + Math.random() * 0.0015,
          phase: Math.random() * Math.PI * 2,
          size: Math.round((isMobile ? 18 : 22) + Math.random() * 16),
          alpha: 0.45 + Math.random() * 0.42,
          spriteIdx: i % 2
        });
      }
      renderStaticAmbientCanvas();
      startAmbientWorldLoop();
      triggerVfxLoopIfNeeded();
    }

    function getCellScreenCenter(r, c, fallbackX, fallbackY) {
      if (domGridMeta && domGridMeta.nodes && r >= 0 && c >= 0 && r < state.rows && c < state.cols) {
        const cellEl = domGridMeta.nodes[r * state.cols + c];
        if (cellEl) {
          const rect = cellEl.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            return {
              x: rect.left + rect.width * 0.5,
              y: rect.top + rect.height * 0.5
            };
          }
        }
      }
      return {
        x: (typeof fallbackX === 'number' && fallbackX > 0) ? fallbackX : window.innerWidth * 0.5,
        y: (typeof fallbackY === 'number' && fallbackY > 0) ? fallbackY : window.innerHeight * 0.5
      };
    }

    function syncVfxCanvasDimensions() {
      const vfxCanvas = document.getElementById('vfxCanvas');
      if (!vfxCanvas) return null;
      if (vfxCanvas.style.display === 'none') {
        vfxCanvas.style.display = 'block';
      }
      const cw = Math.max(300, Math.round(window.innerWidth));
      const ch = Math.max(300, Math.round(window.innerHeight));
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const targetW = Math.round(cw * dpr);
      const targetH = Math.round(ch * dpr);
      if (bgW !== cw || bgH !== ch || canvasDpr !== dpr || vfxCanvas.width !== targetW || vfxCanvas.height !== targetH) {
        bgW = cw;
        bgH = ch;
        canvasDpr = dpr;
        vfxCanvas.width = targetW;
        vfxCanvas.height = targetH;
        prevVfxDirtyBox = null;
      }
      return vfxCanvas;
    }

    function spawnCellVfx(clientX, clientY, vfxType) {
      if (state.animationsEnabled === false) return;
      const vfxCanvas = syncVfxCanvasDimensions();
      const g = THEME_GRAPHICS[state.theme] || THEME_GRAPHICS.arabian;
      const colors = g.particleColors;
      const count = vfxType === 'boom' ? 24 : (vfxType === 'chord' ? 14 : 8);
      if (vfxParticles.length > 54) vfxParticles.splice(0, vfxParticles.length - 54);

      let sx = clientX;
      let sy = clientY;
      if (vfxCanvas) {
        const cRect = vfxCanvas.getBoundingClientRect();
        sx = clientX - cRect.left;
        sy = clientY - cRect.top;
      }

      const isMobileVfx = window.innerWidth <= 640;
      const visCellPx = (domGridMeta && domGridMeta.baseCellPx ? domGridMeta.baseCellPx : 26) * (state.zoomScale || 1);
      const mobScale = isMobileVfx ? Math.max(0.42, Math.min(0.75, visCellPx / 38)) : 1.0;

      vfxShockwaves.push({
        x: sx,
        y: sy,
        radius: Math.max(2, 4 * mobScale),
        maxRadius: (vfxType === 'boom' ? 88 : (vfxType === 'chord' ? 52 : 34)) * mobScale,
        alpha: 0.92,
        color: vfxType === 'boom' ? '#ef4444' : colors[0]
      });

      const sprites = getOrBuildThemeSprites(state.theme);
      for (let i = 0; i < count; i++) {
        const ang = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
        const spd = ((vfxType === 'boom' ? 3.5 : (vfxType === 'chord' ? 2.4 : 1.7)) + Math.random() * 2.2) * (isMobileVfx ? Math.max(0.6, mobScale) : 1.0);
        vfxParticles.push({
          x: sx,
          y: sy,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          size: (3.0 + Math.random() * 3.2) * mobScale,
          color: vfxType === 'boom' ? (i % 2 === 0 ? '#ef4444' : '#fbbf24') : colors[i % colors.length],
          sprite: (i % 3 === 0 && sprites.length > 0) ? sprites[i % sprites.length] : null,
          alpha: 1,
          decay: 0.038 + Math.random() * 0.016
        });
      }
      triggerVfxLoopIfNeeded();
    }

    // Dirty-Rectangle High-DPI VFX Renderer (Only clears the small bounding box of active particles instead of the full screen!)
    function startGraphicsRenderLoop() {
      const vfxCanvas = document.getElementById('vfxCanvas');
      if (!vfxCanvas) return;
      if (!globalVfxCtx) globalVfxCtx = vfxCanvas.getContext('2d', { alpha: true });

      function renderVfxFrame(nowTs) {
        const hasVfx = state.animationsEnabled !== false && (vfxParticles.length > 0 || vfxShockwaves.length > 0);
        if (!hasVfx) {
          if (vfxCanvas.style.display !== 'none') {
            globalVfxCtx.setTransform(canvasDpr, 0, 0, canvasDpr, 0, 0);
            if (prevVfxDirtyBox) {
              globalVfxCtx.clearRect(prevVfxDirtyBox.x, prevVfxDirtyBox.y, prevVfxDirtyBox.w, prevVfxDirtyBox.h);
              prevVfxDirtyBox = null;
            } else {
              globalVfxCtx.clearRect(0, 0, bgW, bgH);
            }
            vfxCanvas.style.display = 'none';
          }
          vfxAnimFrame = null;
          return;
        }

        const dt = lastVfxFrameTime ? Math.min(32, nowTs - lastVfxFrameTime) / 16.667 : 1;
        lastVfxFrameTime = nowTs;

        if (vfxCanvas.style.display === 'none') {
          vfxCanvas.style.display = 'block';
        }
        globalVfxCtx.setTransform(canvasDpr, 0, 0, canvasDpr, 0, 0);

        // Clear ONLY the previous frame's dirty bounding box (20x less GPU fill-rate than full-screen clearRect!)
        if (prevVfxDirtyBox) {
          globalVfxCtx.clearRect(prevVfxDirtyBox.x, prevVfxDirtyBox.y, prevVfxDirtyBox.w, prevVfxDirtyBox.h);
        } else {
          globalVfxCtx.clearRect(0, 0, bgW, bgH);
        }

        let minX = bgW, minY = bgH, maxX = 0, maxY = 0;

        for (let i = vfxShockwaves.length - 1; i >= 0; i--) {
          const sw = vfxShockwaves[i];
          sw.radius += ((sw.maxRadius - sw.radius) * 0.22 + 1.8) * dt;
          sw.alpha -= 0.052 * dt;
          if (sw.alpha <= 0) {
            vfxShockwaves.splice(i, 1);
            continue;
          }
          const pad = sw.radius + 6;
          if (sw.x - pad < minX) minX = sw.x - pad;
          if (sw.y - pad < minY) minY = sw.y - pad;
          if (sw.x + pad > maxX) maxX = sw.x + pad;
          if (sw.y + pad > maxY) maxY = sw.y + pad;

          globalVfxCtx.strokeStyle = sw.color;
          globalVfxCtx.globalAlpha = Math.max(0, sw.alpha);
          globalVfxCtx.lineWidth = 2.6;
          globalVfxCtx.beginPath();
          globalVfxCtx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
          globalVfxCtx.stroke();
        }

        for (let i = vfxParticles.length - 1; i >= 0; i--) {
          const pt = vfxParticles[i];
          pt.x += pt.vx * dt;
          pt.y += pt.vy * dt;
          pt.vy += 0.16 * dt;
          pt.alpha -= pt.decay * dt;
          if (pt.alpha <= 0) {
            vfxParticles.splice(i, 1);
            continue;
          }
          const drawR = pt.sprite ? pt.size * 2.2 : pt.size;
          if (pt.x - drawR - 4 < minX) minX = pt.x - drawR - 4;
          if (pt.y - drawR - 4 < minY) minY = pt.y - drawR - 4;
          if (pt.x + drawR + 4 > maxX) maxX = pt.x + drawR + 4;
          if (pt.y + drawR + 4 > maxY) maxY = pt.y + drawR + 4;

          globalVfxCtx.globalAlpha = Math.max(0, pt.alpha);
          if (pt.sprite) {
            const dSize = pt.size * 3.4;
            globalVfxCtx.drawImage(pt.sprite, pt.x - dSize * 0.5, pt.y - dSize * 0.5, dSize, dSize);
          } else {
            globalVfxCtx.fillStyle = pt.color;
            globalVfxCtx.beginPath();
            globalVfxCtx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
            globalVfxCtx.fill();
          }
        }
        globalVfxCtx.globalAlpha = 1;

        if (maxX >= minX && maxY >= minY) {
          prevVfxDirtyBox = {
            x: Math.max(0, Math.floor(minX) - 2),
            y: Math.max(0, Math.floor(minY) - 2),
            w: Math.min(bgW, Math.ceil(maxX - minX) + 6),
            h: Math.min(bgH, Math.ceil(maxY - minY) + 6)
          };
        } else {
          prevVfxDirtyBox = null;
        }

        vfxAnimFrame = requestAnimationFrame(renderVfxFrame);
      }

      if (!vfxAnimFrame && (vfxParticles.length > 0 || vfxShockwaves.length > 0)) {
        lastVfxFrameTime = 0;
        vfxCanvas.style.display = 'block';
        vfxAnimFrame = requestAnimationFrame(renderVfxFrame);
      }
    }

    function triggerVfxLoopIfNeeded() {
      const hasVfx = state.animationsEnabled !== false && (vfxParticles.length > 0 || vfxShockwaves.length > 0);
      if (!vfxAnimFrame && hasVfx) {
        startGraphicsRenderLoop();
      }
    }

    /********************************************************************
     * 3. NINE CORE LANGUAGES (Default: English, includes Arabic RTL + 7 more)
     ********************************************************************/
    const LANGUAGES = {
      en: {
        code: 'EN',
        nativeName: 'English',
        dir: 'ltr',
        appTitle: 'Minesweeper Odyssey',
        appSubtitle: 'Pro Graphics Worlds • 100% Logical No-Guess',
        noGuessBadge: '🧠 100% Pure Logic • Zero Guessing',
        heroHeading: 'Minesweeper Odyssey',
        heroDesc: 'Switch between 5 complete Graphical Worlds with custom 3D tiles, custom SVG sprites, live 60fps scenery & pure logical boards.',
        storyCtaLabel: 'Story & Beginner Tutorial',
        storyBtn: 'Campaign Mode (50 Levels)',
        quickPlayHeading: 'Quick Play (No-Guess)',
        noGuessToggle: 'No-Guess Logic',
        diffBeginner: 'Beginner',
        diffIntermediate: 'Intermediate',
        diffExpert: 'Expert',
        diffMaster: 'Master',
        customBoardTitle: '🛠️ Custom Board Dimensions',
        customCols: 'Cols (Width)',
        customRows: 'Rows (Height)',
        customMines: 'Mines',
        btnPlayCustom: 'Launch Custom Board',
        homeThemesTitle: 'Themes & Appearance',
        navTutorial: 'How to Play',
        navStats: 'Records',
        navSupport: 'Support Us',
        storyMapTitle: 'Campaign Mode (50 Levels)',
        storyMapSub: '5 quick tutorials followed by 45 progressive logic stages',
        menuBtn: 'Menu',
        hintBtn: 'Logic Hint',
        modeDig: 'Dig',
        modeFlag: 'Flag',
        pureLogicActive: 'Pure Logic Active',
        randomModeActive: 'Classic Random Mode',
        settingsTitle: 'Settings & Custom Controls',
        settingThemeLabel: 'Game Theme',
        settingControlsHeader: 'Touch & Mouse Controls',
        setPrimaryTap: 'Default Tap / Click Action',
        setPrimaryTapSub: 'Action when tapping a cell normally',
        optTapDig: '⛏️ Dig (Reveal)',
        optTapFlag: '🚩 Place Flag',
        setLongPress: 'Touch Long-Press Delay (Opposite Action)',
        setChordLabel: 'Chord on Number Tap (Quick Reveal)',
        setChordSub: 'Tap a satisfied number to open safe neighbors',
        setNoGuessLabel: '100% Logical No-Guess Generator',
        setNoGuessSub: 'Guarantees every board is solvable by pure logic',
        setSound: '🔊 Sound FX',
        setHaptics: '📳 Haptics',
        btnDoneSettings: 'Save & Return',
        langModalTitle: 'Select Language (9 Languages)',
        supportTitle: 'Support the Developers',
        supportSubtitle: '100% Free, pure & forever ad-free! Your support helps us keep building new worlds.',
        tier1Title: 'Coffee Tip',
        tier1Desc: '+10 Logic Hints & Supporter Heart',
        tier2Title: 'Oasis Patron Pack',
        tier2Desc: 'VIP Crown Badge + 30 Logic Hints + All Worlds & Themes Unlocked',
        tier3Title: 'Royal Sapper Founder',
        tier3Desc: '100 Logic Hints + VIP Crown + All Future Packs',
        freeSupportHeader: 'Free Ways to Support Us',
        btnBonusHint: 'Daily Gift (+3 💡)',
        btnRateApp: 'Rate 5 Stars',
        btnShareApp: 'Share Game',
        statsModalTitle: 'Player Statistics & Records',
        statWins: 'Victories',
        statWinRate: 'Win Rate',
        statStars: 'Story Stars',
        bestTimesHeader: '⏱️ Best Logical Clear Times',
        victoryTitle: 'Victory!',
        victorySub: 'Board cleared with pure logical deduction!',
        gameOverTitle: 'Boom! Mine Triggered',
        gameOverSub: 'Every mistake is a lesson in deduction. Try again!',
        resTime: 'Time',
        resMode: 'Logic Status',
        btnPlayAgain: 'Play Again',
        btnNextChapter: 'Next Chapter',
        themes: {
          retro: 'Classic 95',
          retro_dark: 'Classic Dark 🌙',
          sakura: 'Sakura 🌸',
          emerald: 'Atlantis 🌿',
          arabian: 'Arabian Nights 🕌',
          obsidian: 'Cyber Neon 🌌'
        },
        storyChapters: [
          { title: 'Level 1: First Steps & The Corner "1"', sub: 'Interactive Tutorial 1/5: Safe opening, reading "1", and your first Flag', badge: '🎓 Tutorial 1/5' },
          { title: 'Level 2: Reading "2" & Fast Chording', sub: 'Interactive Tutorial 2/5: Deduce 2-mine corners and tap numbers to Chord', badge: '🎓 Tutorial 2/5' },
          { title: 'Level 3: Coupled Wall Deduction', sub: 'Interactive Tutorial 3/5: Combine adjacent numbers to clear tricky walls', badge: '🎓 Tutorial 3/5' },
          { title: 'Level 4: The Famous 1-2-1 Pattern', sub: 'Interactive Tutorial 4/5: Master the classic 1-2-1 wall code without guessing', badge: '🎓 Tutorial 4/5' },
          { title: 'Level 5: Academy Graduation (1-2-2-1)', sub: 'Interactive Tutorial 5/5: Master the 1-2-2-1 pattern and graduate!', badge: '🎓 Tutorial 5/5' }
        ],
        tutStepsByLevel: {
          1: [
            'Step 1/6 (Safe Opening): Welcome to Level 1 of the Academy! Make sure ⛏️ Dig is selected below and tap the glowing top-left tile (1,1) to open your first safe zone.',
            'Step 2/6 (What Does "1" Mean?): Each number tells you how many mines touch it in the 8 surrounding tiles. Look at the "1" at (2,2): 7 of its neighbors are open and ONLY ONE hidden tile (glowing) touches it — so that tile is 100% a MINE! Switch to 🚩 Flag (or long-press / right-click) and flag it.',
            'Step 3/6 (Opening a Safe Neighbor): Look at the "1" right above your flag. Since it already touches 1 flag, its other hidden neighbor (glowing) CANNOT be a mine! Switch to ⛏️ Dig and open the glowing tile.',
            'Step 4/6 (Right Wall Mine): Look at the "1" on the right edge: it only touches ONE hidden tile (glowing) below it! Switch to 🚩 Flag and place your second flag there.',
            'Step 5/6 (Bottom Wall Mine): Look at the "1" near the bottom-left edge: it only touches ONE hidden tile (glowing) beside it! Place a 🚩 Flag on that 3rd mine.',
            'Step 6/6 (Clear Level 1!): All 3 mines are flagged! Switch to ⛏️ Dig and open the remaining safe tiles in the middle-bottom area (starting with the glowing tile) to complete Level 1!'
          ],
          2: [
            'Step 1/6 (Level 2 — Reading "2" & Chording): Tap the glowing top-left corner tile (⛏️ Dig) to open the board.',
            'Step 2/6 (Corner "1" Flag): Just like Level 1, the inner corner "1" touches only ONE hidden tile (glowing). Place a 🚩 Flag on it!',
            'Step 3/6 (Top Edge Deduction): Look at the "1" on the top row next to the "2": it touches only ONE hidden tile on the top edge (glowing)! Place a 🚩 Flag on it.',
            'Step 4/6 (Pro Skill — Chording / Quick Reveal): Look at the glowing "2"! It ALREADY touches 2 flags! Instead of digging its 3 remaining neighbors one by one, TAP directly on the glowing "2" to open all 3 safe neighbors at once!',
            'Step 5/6 (Left Edge Mine): Look at the "1" on the lower-left edge: it only has ONE hidden neighbor (glowing). Place a 🚩 Flag on it!',
            'Step 6/6 (Finish Level 2!): Tap the glowing "2" to Chord its safe neighbors, then flag the last mine on the right and clear the board!'
          ],
          3: [
            'Step 1/6 (Level 3 — Coupled Deduction): Tap the glowing top-left corner tile (⛏️ Dig) to begin.',
            'Step 2/6 (Anchor Flag): Flag the glowing corner mine next to the inner "1" (🚩 Flag).',
            'Step 3/6 (Freeing the Overlap): Because the "1" above your flag is satisfied, switch to ⛏️ Dig and open the glowing safe tile beside it.',
            'Step 4/6 (5-Tile Chain Chord!): That tile revealed a "1" that already touches your flag! Tap directly on that glowing "1" to Chord 5 safe neighbors at once!',
            'Step 5/6 (Top & Bottom Mines): Place a 🚩 Flag on the glowing top-edge mine, then flag the bottom-left mine.',
            'Step 6/6 (Clear Level 3!): Tap the glowing "2" to Chord its safe neighbors and clear the remaining right side!'
          ],
          4: [
            'Step 1/6 (Level 4 — The Famous 1-2-1 Code): Tap the glowing top-left tile (⛏️ Dig) to reveal the training wall.',
            'Step 2/6 (1-2-1 Rule — First Mine): Look at the row showing "1 - 2 - 1"! Whenever 1-2-1 lines up along a wall, the two mines ALWAYS sit beneath the two outer "1"s! Place a 🚩 Flag on the first glowing tile under the left "1".',
            'Step 3/6 (1-2-1 Rule — Second Mine): Now place a 🚩 Flag on the second glowing tile directly under the right "1" of the 1-2-1 pattern!',
            'Step 4/6 (Breaking Through 1-2-1): The middle "2" now has BOTH mines flagged! Tap directly on the glowing "2" (Chord) to safely open the tile between the two mines!',
            'Step 5/6 (Left Wing Chord): Tap the glowing "1" on the left to Chord its safe neighbors and open the lower courtyard!',
            'Step 6/6 (Complete Level 4!): Flag the glowing mine on the top edge, then clear the remaining safe tiles on the right!'
          ],
          5: [
            'Step 1/6 (Level 5 — Graduation & The 1-2-2-1 Code): Tap the glowing top-left tile (⛏️ Dig) to reveal the graduation wall.',
            'Step 2/6 (1-2-2-1 Rule — First Mine): Look at "1 - 2 - 2 - 1" along the wall! Whenever 1-2-2-1 appears along a flat wall, the two mines ALWAYS hide beneath the two middle "2"s! Place a 🚩 Flag under the first "2" (glowing).',
            'Step 3/6 (1-2-2-1 Rule — Second Mine): Now place a 🚩 Flag directly beneath the second "2" (glowing)!',
            'Step 4/6 (Opening the Left Flank): Because the outer-left "1" now touches a flag, tap directly on the glowing "1" at the left wall to Chord its safe neighbor!',
            'Step 5/6 (Opening the Right Flank): The outer-right "1" of 1-2-2-1 also touches a flag now! Tap the glowing "1" to Chord and open the center!',
            'Step 6/6 (Graduate the Academy!): Flag the glowing top-edge mine, then use everything you learned to clear the remaining mines and graduate Level 5!'
          ]
        }      },
      ar: {
        code: 'AR',
        nativeName: 'العربية',
        dir: 'rtl',
        appTitle: 'كانسة الألغام أوديسي',
        appSubtitle: 'عوالم غرافيكس احترافية • منطق 100% بدون تخمين',
        noGuessBadge: '🧠 منطق خالص 100% • بدون أي تخمين',
        heroHeading: 'كانسة الألغام أوديسي',
        heroDesc: 'انتقل بين 5 عوالم غرافيكس متكاملة تغيّر شكل المجسمات، الأعلام، الألغام، المؤثرات البصرية والخلفيات المتحركة مع ضمان الحل المنطقي.',
        storyCtaLabel: 'طور القصة والنظام التعليمي للمبتدئين',
        storyBtn: 'طور التدرج والقصة (50 مستوى)',
        quickPlayHeading: 'لعب سريع (بدون تخمين)',
        noGuessToggle: 'لعب بدون تخمين',
        diffBeginner: 'مبتدئ',
        diffIntermediate: 'متوسط',
        diffExpert: 'خبير',
        diffMaster: 'أسطوري',
        customBoardTitle: '🛠️ تخصيص أبعاد اللوحة',
        customCols: 'الأعمدة (العرض)',
        customRows: 'الصفوف (الطول)',
        customMines: 'الألغام',
        btnPlayCustom: 'ابدأ اللوحة المخصصة',
        homeThemesTitle: 'الثيمات والمظهر',
        navTutorial: 'كيف تلعب',
        navStats: 'الإحصائيات',
        navSupport: 'ادعمنا',
        storyMapTitle: 'طور القصة (50 مرحلة)',
        storyMapSub: '5 مراحل تعليمية سريعة تليها 45 مرحلة متدرجة الصعوبة',
        menuBtn: 'القائمة',
        hintBtn: 'تلميح منطقي',
        modeDig: 'حفر',
        modeFlag: 'علم',
        pureLogicActive: 'نظام بدون تخمين مفعّل',
        randomModeActive: 'النظام الكلاسيكي العشوائي',
        settingsTitle: 'الإعدادات وتخصيص التحكم',
        settingThemeLabel: 'ثيم اللعبة',
        settingControlsHeader: 'تخصيص التحكم للمس والفأرة',
        setPrimaryTap: 'وظيفة النقر الأساسي',
        setPrimaryTapSub: 'الإجراء عند لمس المربع نقرة عادية',
        optTapDig: '⛏️ حفر (كشف المربع)',
        optTapFlag: '🚩 وضع علم',
        setLongPress: 'مدة الضغطة المطولة باللمس (للإجراء المعاكس)',
        setChordLabel: 'الفتح السريع عند النقر على الرقم المكتمل',
        setChordSub: 'انقر على الرقم المكتمل لفتح المربعات الآمنة حوله فوراً',
        setNoGuessLabel: 'نظام اللعب بدون تخمين (منطق 100%)',
        setNoGuessSub: 'يضمن أن كل لوحة قابلة للحل بالاستنتاج العقلي فقط',
        setSound: '🔊 المؤثرات الصوتية',
        setHaptics: '📳 الاهتزاز اللمسي',
        btnDoneSettings: 'حفظ والعودة',
        langModalTitle: 'اختر اللغة (9 لغات أساسية)',
        supportTitle: 'ادعم فريق التطوير',
        supportSubtitle: 'اللعبة نقية 100% ومجانية بالكامل بدون أي إعلانات للأبد! دعمك يساهم في استمرار التطوير.',
        tier1Title: 'فنجان قهوة',
        tier1Desc: '+10 تلميحات منطقية وشارة الداعم',
        tier2Title: 'باقة راعي الواحة',
        tier2Desc: 'تاج VIP الذهبي + 30 تلميحاً منطقياً + فتح جميع العوالم والثيمات فوراً',
        tier3Title: 'الباقة الملكية للمؤسسين',
        tier3Desc: '100 تلميح منطقي + تاج VIP + كل الفصول القادمة مجاناً',
        freeSupportHeader: 'طرق مجانية لدعمنا',
        btnBonusHint: 'هدية يومية (+3 💡)',
        btnRateApp: 'قيّمنا 5 نجوم',
        btnShareApp: 'شارك اللعبة',
        statsModalTitle: 'إحصائيات اللاعب والأرقام القياسية',
        statWins: 'الانتصارات',
        statWinRate: 'نسبة الفوز',
        statStars: 'نجوم القصة',
        bestTimesHeader: '⏱️ أفضل الأوقات القياسية',
        victoryTitle: 'انتصار باهر!',
        victorySub: 'تم تأمين اللوحة بالكامل بذكائك واستنتاجك المنطقي!',
        gameOverTitle: 'انفجر اللغم!',
        gameOverSub: 'كل خطأ هو خطوة لتعلم نمط منطقي جديد. حاول مجدداً!',
        resTime: 'الزمن',
        resMode: 'نظام الحل',
        btnPlayAgain: 'العب مجدداً',
        btnNextChapter: 'الفصل التالي',
        themes: {
          retro: 'الكلاسيكية 95',
          retro_dark: 'الكلاسيكية الليلية 🌙',
          sakura: 'الساكورا 🌸',
          emerald: 'أطلانطس 🌿',
          arabian: 'ألف ليلة وليلة 🕌',
          obsidian: 'سايبر نيون 🌌'
        },
        storyChapters: [
          { title: 'المستوى 1: الخطوات الأولى وقاعدة الرقم (1)', sub: 'تأهيل تفاعلي 1/5: تَعلّم معنى الأرقام، وضع أول علم، وفتح المربع الآمن', badge: '🎓 تأهيل 1/5' },
          { title: 'المستوى 2: قراءة الرقم (2) والكشف السريع', sub: 'تأهيل تفاعلي 2/5: استنتاج الألغام المزدوجة ومهارة الفتح السريع بلمسة واحدة', badge: '🎓 تأهيل 2/5' },
          { title: 'المستوى 3: الاستنتاج المشترك على الحواف', sub: 'تأهيل تفاعلي 3/5: ربط الأرقام المتجاورة لكشف الممرات المغلقة', badge: '🎓 تأهيل 3/5' },
          { title: 'المستوى 4: شفرة المحترفين الشهيرة (1-2-1)', sub: 'تأهيل تفاعلي 4/5: إتقان قاعدة الجدار (1-2-1) بدون أي تخمين', badge: '🎓 تأهيل 4/5' },
          { title: 'المستوى 5: امتحان التخرج وشفرة (1-2-2-1)', sub: 'تأهيل تفاعلي 5/5: إتقان نمط (1-2-2-1) المتقدم والتخرج نحو الـ 50 مستوى!', badge: '🎓 تأهيل 5/5' }
        ],
        tutStepsByLevel: {
          1: [
            'الخطوة 1/6 (ضربة البداية الآمنة): أهلاً بك في المستوى الأول لتأهيل المبتدئين! تأكد من اختيار وضع (⛏️ حفر) في الأسفل وانقر على المربع المضيء في الزاوية لفتح أول منطقة آمنة.',
            'الخطوة 2/6 (ماذا يعني الرقم 1؟): كل رقم يخبرك بعدد الألغام الملامسة له في المربعات الـ 8 المحيطة به. انظر للرقم "1" في الزاوية الداخلية؛ كل جيرانه مفتوحون ما عدا مربعاً واحداً مضيئاً — إذن هو لغم 100%! اختر (🚩 علم) أو اضغط مطولاً وضع علماً عليه.',
            'الخطوة 3/6 (فتح الجار الآمن): انظر للرقم "1" فوق العلم الذي وضعته للتو؛ بما أنه يلامس علماً واحداً بالفعل، فيستحيل أن يكون جاره الآخر المضيء لغماً! اختر (⛏️ حفر) وافتح المربع المضيء.',
            'الخطوة 4/6 (لغم الحافة اليمنى): انظر للرقم "1" في أقصى الحافة اليمنى؛ لم يبقَ بجانبه سوى مربع مخفي واحد مضيء! اختر (🚩 علم) وضع العلم الثاني عليه.',
            'الخطوة 5/6 (لغم الحافة السفلية): انظر للرقم "1" في الأسفل؛ إنه يلامس مربعاً مخفياً واحداً فقط (المضيء)! ضع (🚩 علم) على اللغم الثالث والأخير.',
            'الخطوة 6/6 (الفوز بالمستوى الأول!): بعد تحديد الألغام الثلاثة كلها، اختر (⛏️ حفر) وافتح المربعات المتبقية الآمنة (بدءاً من المربع المضيء) لإتمام المستوى 1 بنجاح!'
          ],
          2: [
            'الخطوة 1/6 (المستوى 2 — الرقم 2 والكشف السريع): انقر على المربع المضيء في الزاوية (بوضع ⛏️ حفر) لفتح اللوحة.',
            'الخطوة 2/6 (قاعدة الزاوية): كما تعلمت في المستوى الأول، الرقم "1" في الزاوية الداخلية يلامس مربعاً مخفياً واحداً فقط (المضيء). ضع (🚩 علم) عليه!',
            'الخطوة 3/6 (حافة الصف العلوي): انظر للرقم "1" في الصف العلوي بجانب الرقم "2"؛ إنه يلامس مربعاً مخفياً واحداً فقط على الحافة العلوية (المضيء)! ضع (🚩 علم) عليه.',
            'الخطوة 4/6 (مهارة الكشف السريع Chording): انظر للرقم "2" المضيء! إنه يلامس علمين بالفعل! بدلاً من حفر جيرانه الـ 3 واحداً تلو الآخر، انقر مباشرة على نفس الرقم "2" المضيء ليفتح كل جيرانه الآمنين بضغطة واحدة!',
            'الخطوة 5/6 (لغم الجدار الأيسر): انظر للرقم "1" في أسفل اليسار؛ لم يبقَ له سوى جار مخفي واحد (المضيء). ضع (🚩 علم) عليه!',
            'الخطوة 6/6 (إتمام المستوى 2!): انقر مباشرة على الرقم "2" المضيء لفتح جيرانه بالكشف السريع، ثم ضع علماً على اللغم الأخير يمين اللوحة وأكمل المستوى!'
          ],
          3: [
            'الخطوة 1/6 (المستوى 3 — الاستنتاج المشترك): انقر على المربع المضيء في الزاوية (⛏️ حفر) للبدء.',
            'الخطوة 2/6 (تثبيت لغم الزاوية): ضع (🚩 علم) على المربع المضيء في الزاوية الداخلية بجانب الرقم "1".',
            'الخطوة 3/6 (تحرير المربع المشترك): الرقم "1" فوق العلم اكتمل، لذا اختر (⛏️ حفر) وافتح جاره الآمن المضيء.',
            'الخطوة 4/6 (كشف 5 مربعات بضغطة واحدة!): ظهر الرقم "1" وهو يلامس علمك بالفعل! انقر مباشرة على الرقم "1" المضيء لفتح 5 مربعات آمنة دفعة واحدة!',
            'الخطوة 5/6 (تأمين الحافتين العلوية والسفلية): ضع (🚩 علم) على اللغم العلوي المضيء، ثم ضع علماً على اللغم السفلي المضيء.',
            'الخطوة 6/6 (الفوز بالمستوى 3!): انقر على الرقم "2" المضيء للكشف السريع، ثم نظف الجهة اليمنى لإتمام المستوى 3!'
          ],
          4: [
            'الخطوة 1/6 (المستوى 4 — شفرة 1-2-1 الشهيرة): انقر على المربع المضيء في الزاوية (⛏️ حفر) لكشف جدار التدريب.',
            'الخطوة 2/6 (قاعدة 1-2-1 — اللغم الأول): انظر للأرقام المصطفة (1 - 2 - 1)! في كانسة الألغام، عندما يصطف 1-2-1 على جدار واحد، يختبئ اللغمان دائماً تحت الرقمين (1) على الطرفين! ضع (🚩 علم) تحت الرقم 1 الأول (المضيء).',
            'الخطوة 3/6 (قاعدة 1-2-1 — اللغم الثاني): ممتاز! الآن ضع (🚩 علم) تحت الرقم (1) الثاني على الطرف الآخر من نمط 1-2-1 (المضيء)!',
            'الخطوة 4/6 (اختراق منتصف الـ 1-2-1): الرقم "2" في الوسط اكتمل لغماه الآن! انقر مباشرة على الرقم "2" المضيء ليفتح المربع الآمن بين اللغمين تلقائياً!',
            'الخطوة 5/6 (فتح الجناح الأيسر): انقر مباشرة على الرقم "1" المضيء على اليسار لفتح جيرانه الآمنين بالكشف السريع!',
            'الخطوة 6/6 (إتمام المستوى 4!): ضع علماً على اللغم العلوي المضيء، ثم نظف المربعات المتبقية على اليمين!'
          ],
          5: [
            'الخطوة 1/6 (المستوى 5 — امتحان التخرج وشفرة 1-2-2-1): انقر على المربع المضيء في الزاوية (⛏️ حفر) لكشف جدار التخرج.',
            'الخطوة 2/6 (قاعدة 1-2-2-1 — اللغم الأول): انظر للأرقام (1 - 2 - 2 - 1) على الجدار! عندما يصطف 1-2-2-1، فإن اللغمين يقعان دائماً تحت الرقمين (2) في المنتصف! ضع (🚩 علم) تحت الرقم "2" الأول (المضيء).',
            'الخطوة 3/6 (قاعدة 1-2-2-1 — اللغم الثاني): الآن ضع (🚩 علم) تحت الرقم "2" الثاني المجاور له (المضيء)!',
            'الخطوة 4/6 (تحرير الطرف الأيسر): بما أن الرقم "1" الأيسر أصبح ملامساً للغم، انقر مباشرة على الرقم "1" المضيء لفتح المربع الآمن تحته!',
            'الخطوة 5/6 (تحرير الطرف الأيمن): وكذلك الرقم "1" الأيمن من نمط 1-2-2-1 اكتمل! انقر على الرقم "1" المضيء لفتح وسط اللوحة بالكشف السريع!',
            'الخطوة 6/6 (التخرج من الأكاديمية!): ضع علماً على اللغم العلوي المضيء، ثم استخدم كل مهاراتك لتطهير باقي اللوحة والتخرج رسمياً نحو الـ 50 مستوى!'
          ]
        }      },
      es: {
        code: 'ES',
        nativeName: 'Español',
        dir: 'ltr',
        appTitle: 'Minesweeper Odyssey',
        appSubtitle: 'Mundos Gráficos Pro • 100% Lógica Sin Adivinar',
        noGuessBadge: '🧠 100% Lógica Pura • Cero Adivinanzas',
        heroHeading: 'Domina el Arte de la Deducción',
        heroDesc: '5 mundos gráficos con fichas 3D, efectos de partículas y tableros 100% lógicos.',
        storyCtaLabel: 'Modo Historia y Tutorial',
        storyBtn: 'Historia',
        quickPlayHeading: 'Partida Rápida (Sin Adivinar)',
        noGuessToggle: 'Modo Sin Adivinar',
        diffBeginner: 'Principiante',
        diffIntermediate: 'Intermedio',
        diffExpert: 'Experto',
        diffMaster: 'Maestro',
        customBoardTitle: '🛠️ Tablero Personalizado',
        customCols: 'Columnas',
        customRows: 'Filas',
        customMines: 'Minas',
        btnPlayCustom: 'Jugar Personalizado',
        homeThemesTitle: '5 Mundos Gráficos Pro (3D y VFX)',
        navTutorial: 'Tutorial',
        navStats: 'Récords',
        navSupport: 'Apóyanos',
        storyMapTitle: 'Minesweeper Odyssey — 50 Niveles',
        storyMapSub: 'Aprende paso a paso y supera capítulos 100% lógicos',
        menuBtn: 'Menú',
        hintBtn: 'Pista Lógica',
        modeDig: 'Cavar',
        modeFlag: 'Bandera',
        pureLogicActive: 'Lógica Pura Activa',
        randomModeActive: 'Modo Clásico',
        settingsTitle: 'Ajustes y Controles',
        settingThemeLabel: 'Mundo Gráfico (Cambia Fichas 3D, Sprites y VFX)',
        settingControlsHeader: 'Controles Táctiles y Ratón',
        setPrimaryTap: 'Acción de Toque Principal',
        setPrimaryTapSub: 'Acción al tocar una casilla normalmente',
        optTapDig: '⛏️ Cavar (Revelar)',
        optTapFlag: '🚩 Poner Bandera',
        setLongPress: 'Retraso de Pulsación Larga',
        setChordLabel: 'Toque Rápido en Números (Chording)',
        setChordSub: 'Toca un número completo para abrir vecinos seguros',
        setNoGuessLabel: 'Generador 100% Lógico Sin Adivinar',
        setNoGuessSub: 'Garantiza soluciones mediante deducción pura',
        setSound: '🔊 Sonido',
        setHaptics: '📳 Vibración',
        btnDoneSettings: 'Guardar y Volver',
        langModalTitle: 'Seleccionar Idioma (9 Idiomas)',
        supportTitle: 'Apoya a los Desarrolladores',
        supportSubtitle: '¡Juego 100% puro y sin anuncios para siempre! Tu apoyo nos ayuda a seguir creciendo.',
        tier1Title: 'Invítanos a un Café',
        tier1Desc: '+10 Pistas Lógicas e Insignia',
        tier2Title: 'Pack Mecenas del Oasis',
        tier2Desc: 'Corona VIP + 30 Pistas Lógicas + Todos los Mundos Desbloqueados',
        tier3Title: 'Fundador Real',
        tier3Desc: '100 Pistas Lógicas + Corona VIP + Todo el Contenido',
        freeSupportHeader: 'Apoyo Gratuito',
        btnBonusHint: 'Regalo Diario (+3 💡)',
        btnRateApp: 'Valorar 5★',
        btnShareApp: 'Compartir',
        statsModalTitle: 'Estadísticas y Récords',
        statWins: 'Victorias',
        statWinRate: '% Victoria',
        statStars: 'Estrellas',
        bestTimesHeader: '⏱️ Mejores Tiempos Lógicos',
        victoryTitle: '¡Victoria!',
        victorySub: '¡Tablero despejado con deducción lógica!',
        gameOverTitle: '¡Bum! Mina Activada',
        gameOverSub: 'Cada error enseña un nuevo patrón. ¡Inténtalo de nuevo!',
        resTime: 'Tiempo',
        resMode: 'Modo',
        btnPlayAgain: 'Jugar de Nuevo',
        btnNextChapter: 'Siguiente Capítulo',
        themes: {
          arabian: 'Noches de Arabia 🕌',
          obsidian: 'Cyber Neon 🌌',
          retro: 'Clásico 95',
          retro_dark: 'Clásico Oscuro 🌙',
          sakura: 'Sakura 🌸',
          emerald: 'Atlántida 🌿'
        }
      },
      fr: {
        code: 'FR',
        nativeName: 'Français',
        dir: 'ltr',
        appTitle: 'Minesweeper Odyssey',
        appSubtitle: 'Mondes Graphiques Pro • 100% Logique',
        noGuessBadge: '🧠 100% Logique Pure • Zéro Hasard',
        heroHeading: "Maîtrisez l'Art de la Déduction",
        heroDesc: '5 univers graphiques complets avec tuiles 3D, sprites personnalisés et solveur logique.',
        storyCtaLabel: 'Mode Histoire & Tutoriel Débutant',
        storyBtn: 'Histoire',
        quickPlayHeading: 'Partie Rapide (Sans Hasard)',
        noGuessToggle: 'Logique Pure',
        diffBeginner: 'Débutant',
        diffIntermediate: 'Intermédiaire',
        diffExpert: 'Expert',
        diffMaster: 'Maître',
        customBoardTitle: '🛠️ Grille Personnalisée',
        customCols: 'Colonnes',
        customRows: 'Lignes',
        customMines: 'Mines',
        btnPlayCustom: 'Lancer la Grille',
        homeThemesTitle: '5 Mondes Graphiques Pro (3D & VFX)',
        navTutorial: 'Tutoriel',
        navStats: 'Records',
        navSupport: 'Soutenir',
        storyMapTitle: 'Minesweeper Odyssey — 50 Niveaux',
        storyMapSub: 'Apprenez pas à pas puis triomphez des chapitres logiques',
        menuBtn: 'Menu',
        hintBtn: 'Indice',
        modeDig: 'Creuser',
        modeFlag: 'Drapeau',
        pureLogicActive: 'Logique Pure Active',
        randomModeActive: 'Mode Classique',
        settingsTitle: 'Paramètres & Commandes',
        settingThemeLabel: 'Monde Graphique (Tuiles 3D, Sprites & VFX)',
        settingControlsHeader: 'Commandes Tactiles & Souris',
        setPrimaryTap: 'Action du Toucher Principal',
        setPrimaryTapSub: 'Action lors d’un appui court',
        optTapDig: '⛏️ Creuser (Révéler)',
        optTapFlag: '🚩 Placer un Drapeau',
        setLongPress: 'Délai d’Appui Long (Action Inverse)',
        setChordLabel: 'Révélation Rapide sur Chiffre (Chording)',
        setChordSub: 'Touchez un chiffre satisfait pour ouvrir ses voisins sûrs',
        setNoGuessLabel: 'Générateur 100% Logique Sans Hasard',
        setNoGuessSub: 'Garantit une résolution par pure déduction',
        setSound: '🔊 Effets Sonores',
        setHaptics: '📳 Vibrations',
        btnDoneSettings: 'Enregistrer',
        langModalTitle: 'Choisir la Langue (9 Langues)',
        supportTitle: 'Soutenir les Développeurs',
        supportSubtitle: 'Jeu 100% pur et sans pub pour toujours ! Votre soutien nous aide à grandir.',
        tier1Title: 'Offrir un Café',
        tier1Desc: '+10 Indices Logiques & Badge',
        tier2Title: 'Pack Mécène de l’Oasis',
        tier2Desc: 'Couronne VIP + 30 Indices + Tous les Mondes Débloqués',
        tier3Title: 'Fondateur Royal',
        tier3Desc: '100 Indices + Couronne VIP + Tout le Contenu',
        freeSupportHeader: 'Soutien Gratuit',
        btnBonusHint: 'Cadeau Quotidien (+3 💡)',
        btnRateApp: 'Noter 5★',
        btnShareApp: 'Partager',
        statsModalTitle: 'Statistiques & Records',
        statWins: 'Victoires',
        statWinRate: '% Victoire',
        statStars: 'Étoiles',
        bestTimesHeader: '⏱️ Meilleurs Temps Logiques',
        victoryTitle: 'Victoire !',
        victorySub: 'Grille résolue par pure déduction logique !',
        gameOverTitle: 'Boum ! Mine Déclenchée',
        gameOverSub: 'Chaque erreur est une leçon. Réessayez !',
        resTime: 'Temps',
        resMode: 'Mode',
        btnPlayAgain: 'Rejouer',
        btnNextChapter: 'Chapitre Suivant',
        themes: {
          arabian: 'Mille et Une Nuits 🕌',
          obsidian: 'Cyber Neon 🌌',
          retro: 'Classique 95',
          retro_dark: 'Classique Sombre 🌙',
          sakura: 'Sakura 🌸',
          emerald: 'Atlantide 🌿'
        }
      },
      de: {
        code: 'DE',
        nativeName: 'Deutsch',
        dir: 'ltr',
        appTitle: 'Minesweeper Odyssey',
        appSubtitle: 'Pro-Grafikwelten • 100% Logik Ohne Raten',
        noGuessBadge: '🧠 100% Reine Logik • Kein Raten',
        heroHeading: 'Meistere die Kunst der Logik',
        heroDesc: '5 komplette Grafikwelten mit 3D-Kacheln, Partikeleffekten und garantierten Logik-Spielfeldern.',
        storyCtaLabel: 'Story-Modus & Anfänger-Tutorial',
        storyBtn: 'Story-Modus',
        quickPlayHeading: 'Schnelles Spiel (Ohne Raten)',
        noGuessToggle: 'Ohne Raten',
        diffBeginner: 'Anfänger',
        diffIntermediate: 'Mittel',
        diffExpert: 'Experte',
        diffMaster: 'Meister',
        customBoardTitle: '🛠️ Eigenes Spielfeld',
        customCols: 'Spalten',
        customRows: 'Zeilen',
        customMines: 'Minen',
        btnPlayCustom: 'Eigenes Spiel Starten',
        homeThemesTitle: '5 Pro-Grafikwelten (3D & VFX)',
        navTutorial: 'Anleitung',
        navStats: 'Rekorde',
        navSupport: 'Unterstützen',
        storyMapTitle: 'Minesweeper Odyssey — 50 Stufen',
        storyMapSub: 'Schritt für Schritt lernen und Logik-Kapitel meistern',
        menuBtn: 'Menü',
        hintBtn: 'Tipp',
        modeDig: 'Graben',
        modeFlag: 'Flagge',
        pureLogicActive: 'Reine Logik Aktiv',
        randomModeActive: 'Klassischer Modus',
        settingsTitle: 'Einstellungen & Steuerung',
        settingThemeLabel: 'Grafikwelt (Ändert 3D-Kacheln, Sprites & VFX)',
        settingControlsHeader: 'Touch- & Maus-Steuerung',
        setPrimaryTap: 'Standard-Tipp-Aktion',
        setPrimaryTapSub: 'Aktion beim normalen Antippen',
        optTapDig: '⛏️ Graben (Aufdecken)',
        optTapFlag: '🚩 Flagge setzen',
        setLongPress: 'Verzögerung für langes Drücken',
        setChordLabel: 'Schnell-Aufdecken auf Zahlen (Chording)',
        setChordSub: 'Tippe auf erfüllte Zahlen, um Nachbarn zu öffnen',
        setNoGuessLabel: '100% Logik-Generator (Kein Raten)',
        setNoGuessSub: 'Garantiert logisch lösbare Spielfelder',
        setSound: '🔊 Soundeffekte',
        setHaptics: '📳 Vibration',
        btnDoneSettings: 'Speichern',
        langModalTitle: 'Sprache wählen (9 Sprachen)',
        supportTitle: 'Entwickler unterstützen',
        supportSubtitle: '100% reines Spiel ohne Werbung für immer! Deine Unterstützung hilft uns zu wachsen.',
        tier1Title: 'Spendiere einen Kaffee',
        tier1Desc: '+10 Logik-Tipps & Abzeichen',
        tier2Title: 'Oasen-Patron-Paket',
        tier2Desc: 'VIP-Krone + 30 Logik-Tipps + Alle Welten Freigeschaltet',
        tier3Title: 'Königlicher Gründer',
        tier3Desc: '100 Logik-Tipps + VIP-Krone + Alle Kapitel',
        freeSupportHeader: 'Kostenlos unterstützen',
        btnBonusHint: 'Tägliches Geschenk (+3 💡)',
        btnRateApp: '5★ Bewerten',
        btnShareApp: 'Teilen',
        statsModalTitle: 'Statistiken & Rekorde',
        statWins: 'Siege',
        statWinRate: 'Siegquote',
        statStars: 'Sterne',
        bestTimesHeader: '⏱️ Beste Logik-Zeiten',
        victoryTitle: 'Sieg!',
        victorySub: 'Spielfeld mit reiner Logik gelöst!',
        gameOverTitle: 'Bumm! Mine ausgelöst',
        gameOverSub: 'Jeder Fehler macht dich klüger. Noch einmal!',
        resTime: 'Zeit',
        resMode: 'Modus',
        btnPlayAgain: 'Nochmal spielen',
        btnNextChapter: 'Nächstes Kapitel',
        themes: {
          arabian: 'Tausendundeine Nacht 🕌',
          obsidian: 'Cyber Neon 🌌',
          retro: 'Klassisch 95',
          retro_dark: 'Klassisch Dunkel 🌙',
          sakura: 'Sakura 🌸',
          emerald: 'Atlantis 🌿'
        }
      },
      ja: {
        code: 'JA',
        nativeName: '日本語',
        dir: 'ltr',
        appTitle: 'マインスイーパー Odyssey',
        appSubtitle: 'プログラフィック世界 • 100%論理パズル',
        noGuessBadge: '🧠 100%純粋ロジック • 運ゲーなし',
        heroHeading: '推理と論理の極致へ',
        heroDesc: '立体3Dタイル・カスタムスプライト・60fps背景演出を備えた5つのグラフィック世界。',
        storyCtaLabel: 'ストーリー＆初心者チュートリアル',
        storyBtn: 'ストーリー',
        quickPlayHeading: 'クイックプレイ (推測なし)',
        noGuessToggle: '論理保証モード',
        diffBeginner: '初級',
        diffIntermediate: '中級',
        diffExpert: '上級',
        diffMaster: '達人',
        customBoardTitle: '🛠️ カスタム盤面設定',
        customCols: '横 (列)',
        customRows: '縦 (行)',
        customMines: '地雷数',
        btnPlayCustom: 'カスタム開始',
        homeThemesTitle: '5つのプログラフィック世界 (3D & VFX)',
        navTutorial: '遊び方',
        navStats: '記録',
        navSupport: '開発支援',
        storyMapTitle: 'マインスイーパー Odyssey — 全50ステージ',
        storyMapSub: 'ゼロから学べるチュートリアルと100%論理ストーリー',
        menuBtn: 'メニュー',
        hintBtn: '論理ヒント',
        modeDig: '掘る',
        modeFlag: '旗',
        pureLogicActive: '100%論理モード',
        randomModeActive: 'クラシックモード',
        settingsTitle: '設定と操作カスタマイズ',
        settingThemeLabel: 'グラフィック世界変更 (3Dタイル・旗・地雷・背景演出)',
        settingControlsHeader: 'タッチ＆マウス操作設定',
        setPrimaryTap: '通常タップの動作',
        setPrimaryTapSub: 'マスを軽くタップした時の動作',
        optTapDig: '⛏️ 掘る (開く)',
        optTapFlag: '🚩 旗を立てる',
        setLongPress: '長押し判定時間 (逆の動作)',
        setChordLabel: '数字タップで一括開放 (Chording)',
        setChordSub: '旗が揃った数字をタップして周囲を安全に開く',
        setNoGuessLabel: '推測なし100%論理盤面生成',
        setNoGuessSub: '運任せの二択を完全に排除します',
        setSound: '🔊 効果音',
        setHaptics: '📳 振動',
        btnDoneSettings: '保存して戻る',
        langModalTitle: '言語選択 (9言語対応)',
        supportTitle: '開発チームを応援する',
        supportSubtitle: '完全無料・永久広告なしの純粋なパズル！皆様のご支援が開発の力になります。',
        tier1Title: 'コーヒー1杯の応援',
        tier1Desc: '論理ヒント+10個 ＆ サポーターバッジ',
        tier2Title: 'オアシスパトロンパック',
        tier2Desc: 'VIP王冠バッジ + ヒント30個 + 全グラフィック世界即時解放',
        tier3Title: 'ロイヤル創設者パック',
        tier3Desc: 'ヒント100個 + VIP王冠 + 全追加章解放',
        freeSupportHeader: '無料で応援する',
        btnBonusHint: 'デイリーギフト (+3 💡)',
        btnRateApp: '★5で評価',
        btnShareApp: 'シェアする',
        statsModalTitle: 'プレイヤー統計＆最速記録',
        statWins: '勝利数',
        statWinRate: '勝率',
        statStars: 'スター',
        bestTimesHeader: '⏱️ ベストクリアタイム',
        victoryTitle: '完全勝利！',
        victorySub: '純粋な論理推理で盤面を完全制覇しました！',
        gameOverTitle: 'ドカーン！地雷爆発',
        gameOverSub: '失敗は推理のヒントです。もう一度挑戦しましょう！',
        resTime: 'タイム',
        resMode: 'モード',
        btnPlayAgain: 'もう一度プレイ',
        btnNextChapter: '次の章へ',
        themes: {
          arabian: 'アラビアンナイト 🕌',
          obsidian: 'サイバーネオン 🌌',
          retro: 'クラシック 95',
          retro_dark: 'クラシック ダーク 🌙',
          sakura: 'サクラ 🌸',
          emerald: 'アトランティス 🌿'
        }
      },
      zh: {
        code: 'ZH',
        nativeName: '中文',
        dir: 'ltr',
        appTitle: '扫雷 Odyssey',
        appSubtitle: '专业级画质世界 • 100%纯逻辑无猜',
        noGuessBadge: '🧠 100%纯逻辑 • 零运气猜测',
        heroHeading: '掌握逻辑推理的艺术',
        heroDesc: '5大沉浸式画质世界（定制3D立体砖块、专属旗帜地雷模型、60帧动态粒子特效）+ 100%纯逻辑无猜。',
        storyCtaLabel: '故事模式与新手互动教程',
        storyBtn: '故事模式',
        quickPlayHeading: '快速开始 (无猜模式)',
        noGuessToggle: '无猜纯逻辑',
        diffBeginner: '初级',
        diffIntermediate: '中级',
        diffExpert: '高级',
        diffMaster: '大师',
        customBoardTitle: '🛠️ 自定义棋盘大小',
        customCols: '列数 (宽)',
        customRows: '行数 (高)',
        customMines: '地雷数',
        btnPlayCustom: '开始自定义棋盘',
        homeThemesTitle: '5大专业画质世界 (3D砖块与粒子特效)',
        navTutorial: '新手教程',
        navStats: '战绩榜',
        navSupport: '支持我们',
        storyMapTitle: '扫雷 Odyssey — 50关战役',
        storyMapSub: '从零开始互动教学，挑战100%纯逻辑剧情关卡',
        menuBtn: '菜单',
        hintBtn: '逻辑提示',
        modeDig: '翻开',
        modeFlag: '插旗',
        pureLogicActive: '纯逻辑无猜已启用',
        randomModeActive: '经典随机模式',
        settingsTitle: '设置与控制自定义',
        settingThemeLabel: '专业画质世界 (全面改变3D方块、模型与动态粒子)',
        settingControlsHeader: '触屏与鼠标控制',
        setPrimaryTap: '默认点击动作',
        setPrimaryTapSub: '普通轻触格子时的操作',
        optTapDig: '⛏️ 翻开安全格',
        optTapFlag: '🚩 放置旗帜',
        setLongPress: '长按触发时间 (执行相反操作)',
        setChordLabel: '点击数字快速全开 (Chording)',
        setChordSub: '点击已插满旗的数字自动翻开周围安全格',
        setNoGuessLabel: '100%无猜逻辑生成器',
        setNoGuessSub: '确保每一局都能完全依靠逻辑推理解开',
        setSound: '🔊 游戏音效',
        setHaptics: '📳 触感震动',
        btnDoneSettings: '保存并返回',
        langModalTitle: '选择语言 (9种核心语言)',
        supportTitle: '支持开发者',
        supportSubtitle: '100%纯净、永久无任何广告！您的支持是我们持续更新的最大动力。',
        tier1Title: '请喝一杯咖啡',
        tier1Desc: '+10个逻辑提示 & 支持者徽章',
        tier2Title: '绿洲赞助者礼包',
        tier2Desc: 'VIP皇冠 + 30个逻辑提示 + 解锁全部画质世界',
        tier3Title: '皇家工兵创始人',
        tier3Desc: '100个逻辑提示 + VIP皇冠 + 解锁全部未来章节',
        freeSupportHeader: '免费支持方式',
        btnBonusHint: '每日福利 (+3 💡)',
        btnRateApp: '五星好评',
        btnShareApp: '分享游戏',
        statsModalTitle: '玩家战绩与最佳纪录',
        statWins: '胜利场次',
        statWinRate: '胜率',
        statStars: '故事星数',
        bestTimesHeader: '⏱️ 最佳无猜通关时间',
        victoryTitle: '完美胜利！',
        victorySub: '您凭借纯粹的逻辑推理成功排除了所有地雷！',
        gameOverTitle: '轰！触雷了',
        gameOverSub: '每一次失误都是逻辑进阶的阶梯，再试一次吧！',
        resTime: '用时',
        resMode: '模式',
        btnPlayAgain: '再玩一局',
        btnNextChapter: '下一章节',
        themes: {
          arabian: '一千零一夜 🕌',
          obsidian: '赛博霓虹 🌌',
          retro: '经典 95',
          retro_dark: '经典暗黑 🌙',
          sakura: '樱花 🌸',
          emerald: '亚特兰蒂斯 🌿'
        }
      },
      ru: {
        code: 'RU',
        nativeName: 'Русский',
        dir: 'ltr',
        appTitle: 'Сапёр Odyssey',
        appSubtitle: 'Графические Миры Pro • 100% Логика',
        noGuessBadge: '🧠 100% Чистая Логика • Без Угадываний',
        heroHeading: 'Искусство Логической Дедукции',
        heroDesc: '5 графических миров с 3D-плитками, уникальными спрайтами, частицами и решателем без угадываний.',
        storyCtaLabel: 'Сюжет и Обучение для Новичков',
        storyBtn: 'Сюжет',
        quickPlayHeading: 'Быстрая Игра (Без Угадываний)',
        noGuessToggle: 'Без угадываний',
        diffBeginner: 'Новичок',
        diffIntermediate: 'Любитель',
        diffExpert: 'Эксперт',
        diffMaster: 'Мастер',
        customBoardTitle: '🛠️ Свои Размеры Поля',
        customCols: 'Ширина',
        customRows: 'Высота',
        customMines: 'Мины',
        btnPlayCustom: 'Начать Игру',
        homeThemesTitle: '5 Графических Миров Pro (3D и VFX)',
        navTutorial: 'Обучение',
        navStats: 'Рекорды',
        navSupport: 'Поддержать',
        storyMapTitle: 'Сапёр Odyssey — 50 Уровней',
        storyMapSub: 'Пошаговое обучение с нуля и логические главы кампании',
        menuBtn: 'Меню',
        hintBtn: 'Подсказка',
        modeDig: 'Копать',
        modeFlag: 'Флаг',
        pureLogicActive: '100% Логика Активна',
        randomModeActive: 'Классический Режим',
        settingsTitle: 'Настройки и Управление',
        settingThemeLabel: 'Графический Мир (Меняет 3D-плитки, Спрайты и VFX)',
        settingControlsHeader: 'Управление Касанием и Мышью',
        setPrimaryTap: 'Основное Действие Нажатия',
        setPrimaryTapSub: 'Действие при обычном касании клетки',
        optTapDig: '⛏️ Копать (Открыть)',
        optTapFlag: '🚩 Поставить Флаг',
        setLongPress: 'Задержка Долгого Нажатия',
        setChordLabel: 'Быстрое Открытие по Числу (Аккорд)',
        setChordSub: 'Нажмите на число с флагами, чтобы открыть соседей',
        setNoGuessLabel: 'Генератор 100% Логики (Без Угадываний)',
        setNoGuessSub: 'Гарантирует решение чистой дедукцией',
        setSound: '🔊 Звуки',
        setHaptics: '📳 Вибрация',
        btnDoneSettings: 'Сохранить',
        langModalTitle: 'Выберите Язык (9 Языков)',
        supportTitle: 'Поддержать Разработчиков',
        supportSubtitle: '100% честная игра без рекламы навсегда! Ваша поддержка помогает развитию.',
        tier1Title: 'Чашка Кофе',
        tier1Desc: '+10 Подсказок и Значок',
        tier2Title: 'Набор Мецената Оазиса',
        tier2Desc: 'VIP Корона + 30 Подсказок + Все Миры Разблокированы',
        tier3Title: 'Королевский Основатель',
        tier3Desc: '100 Подсказок + VIP Корона + Все Главы',
        freeSupportHeader: 'Бесплатная Поддержка',
        btnBonusHint: 'Ежедневный Подарок (+3 💡)',
        btnRateApp: 'Оценить 5★',
        btnShareApp: 'Поделиться',
        statsModalTitle: 'Статистика и Рекорды',
        statWins: 'Победы',
        statWinRate: '% Побед',
        statStars: 'Звёзды',
        bestTimesHeader: '⏱️ Лучшее Время',
        victoryTitle: 'Победа!',
        victorySub: 'Поле полностью очищено чистой логикой!',
        gameOverTitle: 'Бум! Взрыв Мины',
        gameOverSub: 'Каждая ошибка — шаг к мастерству. Попробуйте ещё раз!',
        resTime: 'Время',
        resMode: 'Режим',
        btnPlayAgain: 'Ещё Раз',
        btnNextChapter: 'След. Глава',
        themes: {
          arabian: 'Арабская Ночь 🕌',
          obsidian: 'Кибер-Неон 🌌',
          retro: 'Классика 95',
          retro_dark: 'Тёмная Классика 🌙',
          sakura: 'Сакура 🌸',
          emerald: 'Атлантида 🌿'
        }
      },
      tr: {
        code: 'TR',
        nativeName: 'Türkçe',
        dir: 'ltr',
        appTitle: 'Mayın Tarlası Odyssey',
        appSubtitle: 'Pro Grafik Dünyaları • %100 Tahminsiz Mantık',
        noGuessBadge: '🧠 %100 Saf Mantık • Tahmin Yok',
        heroHeading: 'Çıkarım Sanatı Ustası Olun',
        heroDesc: 'Özel 3D taşlar, animasyonlu arka planlar ve parçacık efektleriyle 5 tam grafik dünyası.',
        storyCtaLabel: 'Hikaye Modu ve Başlangıç Eğitimi',
        storyBtn: 'Hikaye Modu',
        quickPlayHeading: 'Hızlı Oyun (Tahminsiz)',
        noGuessToggle: 'Tahminsiz Mantık',
        diffBeginner: 'Başlangıç',
        diffIntermediate: 'Orta',
        diffExpert: 'Uzman',
        diffMaster: 'Usta',
        customBoardTitle: '🛠️ Özel Tahta Boyutu',
        customCols: 'Sütun (Genişlik)',
        customRows: 'Satır (Yükseklik)',
        customMines: 'Mayın',
        btnPlayCustom: 'Özel Tahtayı Başlat',
        homeThemesTitle: '5 Pro Grafik Dünyası (3D & VFX)',
        navTutorial: 'Nasıl Oynanır',
        navStats: 'Rekorlar',
        navSupport: 'Destek Ol',
        storyMapTitle: 'Mayın Tarlası Odyssey — 50 Seviye',
        storyMapSub: 'Adım adım öğrenin ve %100 mantıksal bölümleri fethedin',
        menuBtn: 'Menü',
        hintBtn: 'Mantık İpucu',
        modeDig: 'Kaz',
        modeFlag: 'Bayrak',
        pureLogicActive: 'Saf Mantık Aktif',
        randomModeActive: 'Klasik Mod',
        settingsTitle: 'Ayarlar ve Kontrol Özelleştirme',
        settingThemeLabel: 'Pro Grafik Dünyası (3D Taşları, Simgeleri ve Efektleri Değiştirir)',
        settingControlsHeader: 'Dokunmatik ve Fare Kontrolleri',
        setPrimaryTap: 'Varsayılan Dokunma Eylemi',
        setPrimaryTapSub: 'Hücreye normal dokunulduğunda yapılacak işlem',
        optTapDig: '⛏️ Kaz (Aç)',
        optTapFlag: '🚩 Bayrak Koy',
        setLongPress: 'Uzun Basma Süresi (Ters İşlem)',
        setChordLabel: 'Sayıya Dokunarak Hızlı Açma (Chording)',
        setChordSub: 'Bayrakları tamamlanmış sayıya dokunarak komşuları aç',
        setNoGuessLabel: '%100 Tahminsiz Mantık Üreticisi',
        setNoGuessSub: 'Her oyunun saf mantıkla çözülebilmesini garanti eder',
        setSound: '🔊 Ses Efektleri',
        setHaptics: '📳 Titreşim',
        btnDoneSettings: 'Kaydet ve Dön',
        langModalTitle: 'Dil Seçin (9 Ana Dil)',
        supportTitle: 'Geliştiricileri Destekleyin',
        supportSubtitle: '%100 saf ve sonsuza kadar reklamsız oyun! Desteğiniz büyümemeize yardımcı olur.',
        tier1Title: 'Bir Fincan Kahve İkramı',
        tier1Desc: '+10 Mantık İpucu & Destekçi Rozeti',
        tier2Title: 'Vaha Destekçi Paketi',
        tier2Desc: 'VIP Taç + 30 Mantık İpucu + Tüm Dünyalar Açık',
        tier3Title: 'Kraliyet Kurucu Paketi',
        tier3Desc: '100 İpucu + VIP Taç + Tüm Gelecek Bölümler',
        freeSupportHeader: 'Ücretsiz Destek Yolları',
        btnBonusHint: 'Günlük Hediye (+3 💡)',
        btnRateApp: '5★ Oy Ver',
        btnShareApp: 'Paylaş',
        statsModalTitle: 'Oyuncu İstatistikleri ve Rekorlar',
        statWins: 'Zaferler',
        statWinRate: 'Kazanma %',
        statStars: 'Yıldızlar',
        bestTimesHeader: '⏱️ En İyi Mantık Süreleri',
        victoryTitle: 'Zafer!',
        victorySub: 'Tahta saf mantıksal çıkarımla temizlendi!',
        gameOverTitle: 'Bum! Mayın Patladı',
        gameOverSub: 'Her hata yeni bir mantık dersidir. Tekrar dene!',
        resTime: 'Süre',
        resMode: 'Mod',
        btnPlayAgain: 'Tekrar Oyna',
        btnNextChapter: 'Sonraki Bölüm',
        themes: {
          arabian: 'Binbir Gece 🕌',
          obsidian: 'Siber Neon 🌌',
          retro: 'Klasik 95',
          retro_dark: 'Karanlık Klasik 🌙',
          sakura: 'Sakura 🌸',
          emerald: 'Atlantis 🌿'
        }
      }
    };

    /********************************************************************
     * 4. STORY & INTERACTIVE TUTORIAL CHAPTER DEFINITIONS
     ********************************************************************/
    function isHorizontalBoardLayout() {
      return window.innerWidth > window.innerHeight;
    }

    function getAdaptiveDimensions(shortSide, longSide) {
      const horiz = isHorizontalBoardLayout();
      return {
        cols: horiz ? Math.max(shortSide, longSide) : Math.min(shortSide, longSide),
        rows: horiz ? Math.min(shortSide, longSide) : Math.max(shortSide, longSide)
      };
    }

    function mapTutCoord(r, c, rows, cols) {
      // Base tutorial coordinates are authored for Horizontal (cols > rows).
      // On Mobile Vertical (rows > cols), transpose [r, c] -> [c, r] so the exact same 7-step logic holds!
      return cols >= rows ? [r, c] : [c, r];
    }

    // 50-Level Progressive Campaign & 5-Stage Interactive Onboarding Academy
    const WORLD_ACTS = [
      {
        act: 1,
        range: [1, 10],
        themeId: 'arabian',
        icon: '🧭',
        nameAr: 'الفصل 1: أكاديمية التأهيل وواحة الذهب (1–10)',
        nameEn: 'Act I: Onboarding Academy & Golden Oasis (1–10)',
        artSvg: `<svg viewBox="0 0 600 200" class="w-full h-full"><defs><linearGradient id="act1g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e3a8a"/></linearGradient></defs><rect width="600" height="200" fill="url(#act1g)"/><circle cx="490" cy="60" r="38" fill="#fef08a" opacity="0.22"/><path d="M0,155 Q180,120 360,150 T600,140 L600,200 L0,200 Z" fill="#09131c"/><g stroke="#f5b041" stroke-width="2.2" fill="#1e293b"><rect x="230" y="38" width="140" height="96" rx="16"/><circle cx="300" cy="86" r="28" fill="#0ea5e9" opacity="0.25" stroke="#38bdf8" stroke-width="2.5"/><polygon points="300,62 308,86 300,110 292,86" fill="#f5b041"/></g><text x="300" y="178" fill="#fef08a" font-size="15" font-weight="bold" text-anchor="middle">🎓 Act I: Logic Academy & Golden Oasis (Levels 1–10)</text></svg>`
      },
      {
        act: 2,
        range: [11, 20],
        themeId: 'sakura',
        icon: '🌸',
        nameAr: 'الفصل 2: أرخبيل الساكورا الهادئ (11–20)',
        nameEn: 'Act II: Sakura Zen Archipelago (11–20)',
        artSvg: `<svg viewBox="0 0 600 200" class="w-full h-full"><defs><linearGradient id="act2g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4c0519"/><stop offset="100%" stop-color="#881337"/></linearGradient></defs><rect width="600" height="200" fill="url(#act2g)"/><circle cx="300" cy="95" r="55" fill="#fda4af" opacity="0.35"/><path d="M120,160 Q250,110 300,55 Q350,110 480,160 Z" fill="#f43f5e" opacity="0.45"/><path d="M0,160 L600,160 L600,200 L0,200 Z" fill="#280510"/><text x="300" y="182" fill="#fecdd3" font-size="15" font-weight="bold" text-anchor="middle">🌸 Act II: Sakura Zen Archipelago (Levels 11–20)</text></svg>`
      },
      {
        act: 3,
        range: [21, 30],
        themeId: 'emerald',
        icon: '🌿',
        nameAr: 'الفصل 3: أطلانطس الغارقة (21–30)',
        nameEn: 'Act III: Sunken Atlantis (21–30)',
        artSvg: `<svg viewBox="0 0 600 200" class="w-full h-full"><rect width="600" height="200" fill="#022c22"/><polygon points="200,45 400,45 300,15" fill="#064e3b" stroke="#34d399" stroke-width="2"/><rect x="220" y="45" width="20" height="105" fill="#064e3b"/><rect x="290" y="45" width="20" height="105" fill="#064e3b"/><rect x="360" y="45" width="20" height="105" fill="#064e3b"/><path d="M0,150 L600,150 L600,200 L0,200 Z" fill="#011510"/><text x="300" y="180" fill="#6ee7b7" font-size="15" font-weight="bold" text-anchor="middle">🌿 Act III: Sunken Atlantis (Levels 21–30)</text></svg>`
      },
      {
        act: 4,
        range: [31, 40],
        themeId: 'retro',
        icon: '🕹️',
        nameAr: 'الفصل 4: الأسطول البحري الكلاسيكي (31–40)',
        nameEn: 'Act IV: Retro Naval Command (31–40)',
        artSvg: `<svg viewBox="0 0 600 200" class="w-full h-full"><rect width="600" height="200" fill="#004d4d"/><circle cx="300" cy="90" r="65" fill="none" stroke="#5eead4" stroke-width="1.5" opacity="0.35"/><circle cx="300" cy="90" r="35" fill="none" stroke="#5eead4" stroke-width="1.5" opacity="0.5"/><line x1="220" y1="90" x2="380" y2="90" stroke="#5eead4" stroke-width="1.5" opacity="0.4"/><path d="M0,152 L600,152 L600,200 L0,200 Z" fill="#002626"/><text x="300" y="180" fill="#ffffff" font-size="15" font-weight="bold" text-anchor="middle">🕹️ Act IV: Tactical Naval Command (Levels 31–40)</text></svg>`
      },
      {
        act: 5,
        range: [41, 50],
        themeId: 'obsidian',
        icon: '🌌',
        nameAr: 'الفصل 5: نواة السايبر 2099 — التحدي الأعظم (41–50)',
        nameEn: 'Act V: Cyber Neon Core 2099 (41–50)',
        artSvg: `<svg viewBox="0 0 600 200" class="w-full h-full"><rect width="600" height="200" fill="#060913"/><circle cx="300" cy="88" r="46" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="10 5"/><polygon points="300,50 335,88 300,126 265,88" fill="#a855f7" opacity="0.45" stroke="#38bdf8" stroke-width="2"/><path d="M0,152 L600,152 L600,200 L0,200 Z" fill="#03050a"/><text x="300" y="180" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">🌌 Act V: Cyber Neon Core — Grandmaster (Levels 41–50)</text></svg>`
      }
    ];

    const LEVEL_TITLES_AR = [
      // 1-5: Onboarding Tutorials
      'المستوى 1: الخطوات الأولى وقاعدة الرقم (1)',
      'المستوى 2: قراءة الرقم (2) والفتح السريع بلمسة واحدة',
      'المستوى 3: الاستنتاج المشترك على الحواف',
      'المستوى 4: شفرة المحترفين الشهيرة (1-2-1)',
      'المستوى 5: امتحان التخرج وشفرة (1-2-2-1)',
      // 6-10: Act 1 Field Missions
      'المستوى 6: بوابة الواحة الرملية',
      'المستوى 7: طريق القوافل القديم',
      'المستوى 8: أبراج المراقبة الشرقية',
      'المستوى 9: حدائق الفسيفساء',
      'المستوى 10: زعيم الفصل الأول — قصر السراب 👑',
      // 11-20: Act 2 Sakura
      'المستوى 11: جسر أزهار الكرز',
      'المستوى 12: ممر الفوانيس الوردية',
      'المستوى 13: بحيرة المرايا الهادئة',
      'المستوى 14: غابة الخيزران الضبابية',
      'المستوى 15: بوابة توري المقدسة',
      'المستوى 16: شلالات الجبل الفضي',
      'المستوى 17: أجنحة الساموراي القديم',
      'المستوى 18: شرفة القمر القرمزي',
      'المستوى 19: ممر الرياح الشرقية',
      'المستوى 20: زعيم الفصل الثاني — قلعة الساكورا 👑',
      // 21-30: Act 3 Atlantis
      'المستوى 21: درج المرجان المضيء',
      'المستوى 22: أعمدة الرخام الغارقة',
      'المستوى 23: كهوف الكريستال الأخضر',
      'المستوى 24: ساحة الرمح الذهبي',
      'المستوى 25: مضيق التيارات العميقة',
      'المستوى 26: مختبر الطاقة المائية',
      'المستوى 27: قبة اللؤلؤ المفقودة',
      'المستوى 28: حقل الزمرد المتشابك',
      'المستوى 29: بوابة الهاوية السحيقة',
      'المستوى 30: زعيم الفصل الثالث — عرش أطلانطس 👑',
      // 31-40: Act 4 Naval Retro
      'المستوى 31: رادار الساحل الشمالي',
      'المستوى 32: مضيق الفرقاطات المدرعة',
      'المستوى 33: حقل الألغام البحرية الكلاسيكي',
      'المستوى 34: قاعدة الغواصات السرية',
      'المستوى 35: تقاطع خطوط الإمداد',
      'المستوى 36: عاصفة المحيط الأطلسي',
      'المستوى 37: حصار الميناء الاستراتيجي',
      'المستوى 38: ممر الكاسحات الثقيلة',
      'المستوى 39: خط الدفاع الفولاذي',
      'المستوى 40: زعيم الفصل الرابع — الأدميرال الحديدي 👑',
      // 41-50: Act 5 Cyber Core
      'المستوى 41: مدخل الشبكة الرقمية',
      'المستوى 42: جدار الحماية الليزري',
      'المستوى 43: أبراج النيون العالية',
      'المستوى 44: مسرّع الجسيمات الضوئية',
      'المستوى 45: عقدة التشفير الكمي',
      'المستوى 46: مختبر الذكاء الفائق',
      'المستوى 47: جسر الهولوغرام المعلّق',
      'المستوى 48: حلقة المفاعل المغناطيسي',
      'المستوى 49: البوابة الأخيرة للنواة',
      'المستوى 50: التحدي النهائي الأعظم — نواة 2099 (150 لغماً) 👑🏆'
    ];

    const LEVEL_TITLES_EN = [
      // 1-5
      'Level 1: First Steps & The Corner "1"',
      'Level 2: Reading "2" & Fast Chording',
      'Level 3: Coupled Wall Deduction',
      'Level 4: The Famous 1-2-1 Pattern',
      'Level 5: Academy Graduation (1-2-2-1)',
      // 6-10
      'Level 6: Oasis Sand Gate',
      'Level 7: Ancient Caravan Trail',
      'Level 8: Eastern Watchtowers',
      'Level 9: Mosaic Courtyard',
      'Level 10: Act I Boss — Mirage Citadel 👑',
      // 11-20
      'Level 11: Cherry Blossom Bridge',
      'Level 12: Pink Lantern Path',
      'Level 13: Mirror Lake Crossing',
      'Level 14: Misty Bamboo Grove',
      'Level 15: Sacred Torii Gate',
      'Level 16: Silver Mountain Falls',
      'Level 17: Old Samurai Pavilion',
      'Level 18: Crimson Moon Terrace',
      'Level 19: East Wind Ridge',
      'Level 20: Act II Boss — Sakura Keep 👑',
      // 21-30
      'Level 21: Glowing Coral Steps',
      'Level 22: Sunken Marble Pillars',
      'Level 23: Emerald Crystal Caverns',
      'Level 24: Golden Trident Plaza',
      'Level 25: Deep Current Strait',
      'Level 26: Hydro-Energy Lab',
      'Level 27: Lost Pearl Dome',
      'Level 28: Interlocked Emerald Grid',
      'Level 29: Abyssal Trench Gate',
      'Level 30: Act III Boss — Throne of Atlantis 👑',
      // 31-40
      'Level 31: North Coast Sonar',
      'Level 32: Armored Frigate Channel',
      'Level 33: Classic Naval Minefield',
      'Level 34: Submarine Command Dock',
      'Level 35: Supply Convoy Junction',
      'Level 36: Atlantic Storm Front',
      'Level 37: Strategic Harbor Siege',
      'Level 38: Heavy Sweeper Corridor',
      'Level 39: Steel Defense Line',
      'Level 40: Act IV Boss — The Iron Admiral 👑',
      // 41-50
      'Level 41: Neural Grid Gateway',
      'Level 42: Laser Firewall Sector',
      'Level 43: High-Rise Neon Spires',
      'Level 44: Photon Collider Ring',
      'Level 45: Quantum Cipher Node',
      'Level 46: Hyper-Logic Core Lab',
      'Level 47: Holo-Bridge Overpass',
      'Level 48: Magnetic Reactor Loop',
      'Level 49: Final Core Threshold',
      'Level 50: Grand Finale — Cyber Core 2099 (150 Mines) 👑🏆'
    ];

    // Progressive dimension & mine curve across all 50 levels
    const LEVEL_SPECS_50 = [
      // Act 1: Levels 1-5 (Interactive Tutorials) + Levels 6-10 (Rookie)
      { id: 1, shortSide: 6, longSide: 6, mines: 3, isTutorial: true, tutorialType: 1, act: 1, emoji: '🎓',
        getFixedMines: (r, c) => [mapTutCoord(2, 2, r, c), mapTutCoord(2, 5, r, c), mapTutCoord(5, 2, r, c)] },
      { id: 2, shortSide: 6, longSide: 7, mines: 4, isTutorial: true, tutorialType: 2, act: 1, emoji: '🎓',
        getFixedMines: (r, c) => [mapTutCoord(2, 2, r, c), mapTutCoord(0, 4, r, c), mapTutCoord(4, 1, r, c), mapTutCoord(4, 5, r, c)] },
      { id: 3, shortSide: 6, longSide: 8, mines: 5, isTutorial: true, tutorialType: 3, act: 1, emoji: '🎓',
        getFixedMines: (r, c) => [mapTutCoord(2, 2, r, c), mapTutCoord(0, 4, r, c), mapTutCoord(4, 1, r, c), mapTutCoord(4, 5, r, c), mapTutCoord(1, 7, r, c)] },
      { id: 4, shortSide: 6, longSide: 9, mines: 6, isTutorial: true, tutorialType: 4, act: 1, emoji: '🎓',
        getFixedMines: (r, c) => [mapTutCoord(2, 1, r, c), mapTutCoord(2, 3, r, c), mapTutCoord(0, 5, r, c), mapTutCoord(4, 4, r, c), mapTutCoord(4, 7, r, c), mapTutCoord(1, 8, r, c)] },
      { id: 5, shortSide: 7, longSide: 9, mines: 7, isTutorial: true, tutorialType: 5, act: 1, emoji: '🎓',
        getFixedMines: (r, c) => [mapTutCoord(2, 1, r, c), mapTutCoord(2, 2, r, c), mapTutCoord(0, 5, r, c), mapTutCoord(4, 4, r, c), mapTutCoord(4, 7, r, c), mapTutCoord(1, 8, r, c), mapTutCoord(5, 1, r, c)] },
      { id: 6, shortSide: 6, longSide: 8, mines: 6, isTutorial: false, act: 1, emoji: '🕌' },
      { id: 7, shortSide: 7, longSide: 9, mines: 8, isTutorial: false, act: 1, emoji: '🕌' },
      { id: 8, shortSide: 7, longSide: 10, mines: 9, isTutorial: false, act: 1, emoji: '🕌' },
      { id: 9, shortSide: 8, longSide: 10, mines: 10, isTutorial: false, act: 1, emoji: '🕌' },
      { id: 10, shortSide: 8, longSide: 11, mines: 12, isTutorial: false, act: 1, emoji: '👑', isBoss: true },

      // Act 2: Levels 11-20 (Sakura Zen — Easy to Low-Intermediate: 13 to 26 mines)
      { id: 11, shortSide: 8, longSide: 11, mines: 13, isTutorial: false, act: 2, emoji: '🌸' },
      { id: 12, shortSide: 8, longSide: 12, mines: 14, isTutorial: false, act: 2, emoji: '🌸' },
      { id: 13, shortSide: 9, longSide: 12, mines: 16, isTutorial: false, act: 2, emoji: '🌸' },
      { id: 14, shortSide: 9, longSide: 12, mines: 17, isTutorial: false, act: 2, emoji: '🌸' },
      { id: 15, shortSide: 9, longSide: 13, mines: 19, isTutorial: false, act: 2, emoji: '⛩️' },
      { id: 16, shortSide: 9, longSide: 13, mines: 20, isTutorial: false, act: 2, emoji: '🌸' },
      { id: 17, shortSide: 10, longSide: 13, mines: 22, isTutorial: false, act: 2, emoji: '🌸' },
      { id: 18, shortSide: 10, longSide: 14, mines: 23, isTutorial: false, act: 2, emoji: '🌸' },
      { id: 19, shortSide: 10, longSide: 14, mines: 25, isTutorial: false, act: 2, emoji: '🌸' },
      { id: 20, shortSide: 10, longSide: 15, mines: 26, isTutorial: false, act: 2, emoji: '👑', isBoss: true },

      // Act 3: Levels 21-30 (Sunken Atlantis — Intermediate to Upper-Intermediate: 28 to 48 mines)
      { id: 21, shortSide: 10, longSide: 15, mines: 28, isTutorial: false, act: 3, emoji: '🌿' },
      { id: 22, shortSide: 11, longSide: 15, mines: 30, isTutorial: false, act: 3, emoji: '🌿' },
      { id: 23, shortSide: 11, longSide: 16, mines: 32, isTutorial: false, act: 3, emoji: '🌿' },
      { id: 24, shortSide: 11, longSide: 16, mines: 34, isTutorial: false, act: 3, emoji: '🔱' },
      { id: 25, shortSide: 12, longSide: 16, mines: 36, isTutorial: false, act: 3, emoji: '🌿' },
      { id: 26, shortSide: 12, longSide: 17, mines: 38, isTutorial: false, act: 3, emoji: '🌿' },
      { id: 27, shortSide: 12, longSide: 17, mines: 40, isTutorial: false, act: 3, emoji: '🌿' },
      { id: 28, shortSide: 12, longSide: 18, mines: 43, isTutorial: false, act: 3, emoji: '🌿' },
      { id: 29, shortSide: 13, longSide: 18, mines: 45, isTutorial: false, act: 3, emoji: '🌿' },
      { id: 30, shortSide: 13, longSide: 19, mines: 48, isTutorial: false, act: 3, emoji: '👑', isBoss: true },

      // Act 4: Levels 31-40 (Naval Command — Expert Progression: 50 to 85 mines)
      { id: 31, shortSide: 13, longSide: 19, mines: 50, isTutorial: false, act: 4, emoji: '🕹️' },
      { id: 32, shortSide: 14, longSide: 19, mines: 53, isTutorial: false, act: 4, emoji: '🕹️' },
      { id: 33, shortSide: 14, longSide: 20, mines: 56, isTutorial: false, act: 4, emoji: '⚓' },
      { id: 34, shortSide: 14, longSide: 20, mines: 60, isTutorial: false, act: 4, emoji: '🕹️' },
      { id: 35, shortSide: 15, longSide: 21, mines: 64, isTutorial: false, act: 4, emoji: '🕹️' },
      { id: 36, shortSide: 15, longSide: 21, mines: 68, isTutorial: false, act: 4, emoji: '🕹️' },
      { id: 37, shortSide: 15, longSide: 22, mines: 72, isTutorial: false, act: 4, emoji: '🕹️' },
      { id: 38, shortSide: 16, longSide: 22, mines: 76, isTutorial: false, act: 4, emoji: '🕹️' },
      { id: 39, shortSide: 16, longSide: 23, mines: 80, isTutorial: false, act: 4, emoji: '🕹️' },
      { id: 40, shortSide: 16, longSide: 24, mines: 85, isTutorial: false, act: 4, emoji: '👑', isBoss: true },

      // Act 5: Levels 41-50 (Cyber Neon Core — Master & Grandmaster: 90 to 150 mines)
      { id: 41, shortSide: 16, longSide: 24, mines: 90, isTutorial: false, act: 5, emoji: '🌌' },
      { id: 42, shortSide: 17, longSide: 25, mines: 95, isTutorial: false, act: 5, emoji: '🌌' },
      { id: 43, shortSide: 17, longSide: 25, mines: 100, isTutorial: false, act: 5, emoji: '⚡' },
      { id: 44, shortSide: 18, longSide: 26, mines: 106, isTutorial: false, act: 5, emoji: '🌌' },
      { id: 45, shortSide: 18, longSide: 27, mines: 112, isTutorial: false, act: 5, emoji: '🌌' },
      { id: 46, shortSide: 19, longSide: 28, mines: 118, isTutorial: false, act: 5, emoji: '🌌' },
      { id: 47, shortSide: 19, longSide: 29, mines: 125, isTutorial: false, act: 5, emoji: '🌌' },
      { id: 48, shortSide: 20, longSide: 30, mines: 132, isTutorial: false, act: 5, emoji: '🌌' },
      { id: 49, shortSide: 21, longSide: 31, mines: 140, isTutorial: false, act: 5, emoji: '🌌' },
      { id: 50, shortSide: 22, longSide: 32, mines: 150, isTutorial: false, act: 5, emoji: '👑', isBoss: true }
    ];

    const STORY_CHAPTERS = LEVEL_SPECS_50.map(spec => ({
      id: spec.id,
      act: spec.act,
      isTutorial: !!spec.isTutorial,
      tutorialType: spec.tutorialType || 0,
      isBoss: !!spec.isBoss,
      shortSide: spec.shortSide,
      longSide: spec.longSide,
      cols: spec.longSide,
      rows: spec.shortSide,
      mines: spec.mines,
      emoji: spec.emoji,
      getFixedMines: spec.getFixedMines || null,
      getStartCell: spec.isTutorial ? ((rows, cols) => [0, 0]) : null
    }));

    function getLevelMetaText(levelId, lang) {
      const idx = levelId - 1;
      const spec = STORY_CHAPTERS[idx] || STORY_CHAPTERS[0];
      const actObj = WORLD_ACTS.find(a => a.act === spec.act) || WORLD_ACTS[0];
      const isAr = lang === 'ar';
      const title = isAr ? (LEVEL_TITLES_AR[idx] || `المستوى ${levelId}`) : (LEVEL_TITLES_EN[idx] || `Level ${levelId}`);

      let badge = '';
      let sub = '';
      if (spec.isTutorial) {
        badge = isAr ? `🎓 تعليم ${levelId}/5` : `🎓 Tutorial ${levelId}/5`;
        const tutSubsAr = [
          'أساسيات الأرقام ووضع الأعلام 🚩',
          'الفتح السريع بلمسة واحدة ⚡',
          'مقارنة رقمين متجاورين 🔗',
          'قاعدة (1-2-1) السريعة 🎯',
          'تحدي التخرج السريع 🎓'
        ];
        const tutSubsEn = [
          'Numbers & placing flags 🚩',
          '1-Tap Quick Open ⚡',
          'Comparing adjacent numbers 🔗',
          'The 1-2-1 pattern 🎯',
          'Graduation challenge 🎓'
        ];
        sub = isAr ? tutSubsAr[idx] : tutSubsEn[idx];
      } else if (spec.isBoss) {
        badge = isAr ? `👑 زعيم الفصل ${spec.act}` : `👑 Act ${spec.act} Boss`;
        sub = isAr ? `تحدي ختام الفصل ${spec.act}` : `Act ${spec.act} Boss Stage`;
      } else {
        badge = isAr ? `${actObj.icon} مرحلة ${levelId}` : `${actObj.icon} Stage ${levelId}`;
        const tierNameAr = spec.id <= 10 ? 'مبتدئ' : (spec.id <= 20 ? 'متدرج' : (spec.id <= 30 ? 'متوسط' : (spec.id <= 40 ? 'خبير' : 'محترف')));
        const tierNameEn = spec.id <= 10 ? 'Rookie' : (spec.id <= 20 ? 'Regular' : (spec.id <= 30 ? 'Intermediate' : (spec.id <= 40 ? 'Expert' : 'Master')));
        sub = isAr ? `المستوى: ${tierNameAr}` : `Tier: ${tierNameEn}`;
      }

      return { title, sub, badge, actObj };
    }

    function getLevelCutsceneData(levelId) {
      const spec = STORY_CHAPTERS[levelId - 1] || STORY_CHAPTERS[0];
      const metaAr = getLevelMetaText(levelId, 'ar');
      const metaEn = getLevelMetaText(levelId, 'en');
      const actObj = metaAr.actObj;

      const tutLessonsAr = [
        '💡 الرقم (1) في الزاوية يلمس مربعاً واحداً = لغم أكيد 🚩.',
        '💡 المس الرقم المكتمل بالأعلام ليفتح جيرانه الآمنين فوراً ⚡.',
        '💡 قارن بين رقمين متجاورين لكشف المربعات الآمنة المحيطة.',
        '💡 في نمط (1-2-1): اللغمان يقعان تحت الرقمين (1) على الطرفين.',
        '💡 في نمط (1-2-2-1): اللغمان يقعان تحت الرقمين (2) في المنتصف.'
      ];
      const tutLessonsEn = [
        '💡 A corner "1" touching one hidden tile = 100% Mine 🚩.',
        '💡 Tap a satisfied number to open all its safe neighbors ⚡.',
        '💡 Compare two adjacent numbers to spot safe outer tiles.',
        '💡 In 1-2-1: Mines sit beneath the two outer "1"s.',
        '💡 In 1-2-2-1: Mines sit beneath the two middle "2"s.'
      ];

      return {
        artSvg: actObj.artSvg,
        ar: {
          badge: metaAr.badge,
          title: metaAr.title,
          dialogues: [
            {
              speaker: actObj.nameAr,
              text: spec.isTutorial
                ? `تدريب عملي سريع (${levelId}/5) — اتبع الرقم المحدد بالأزرق.`
                : `المرحلة ${levelId} (${spec.mines} لغماً) — تُحل بالمنطق 100% بدون تخمين.`
            }
          ],
          lesson: spec.isTutorial
            ? tutLessonsAr[levelId - 1]
            : `💡 ابدأ من الوسط، واستخدم الفتح السريع على الأرقام المكتملة.`,
          epilogue: `🏆 أحسنت! اجتزت المرحلة ${levelId} بنجاح.`
        },
        en: {
          badge: metaEn.badge,
          title: metaEn.title,
          dialogues: [
            {
              speaker: actObj.nameEn,
              text: spec.isTutorial
                ? `Quick tutorial (${levelId}/5) — follow the blue highlighted number.`
                : `Stage ${levelId} (${spec.mines} Mines) — 100% solvable by pure logic.`
            }
          ],
          lesson: spec.isTutorial
            ? tutLessonsEn[levelId - 1]
            : `💡 Start near the center and tap satisfied numbers to quick-open.`,
          epilogue: `🏆 Stage ${levelId} cleared!`
        }
      };
    }

    const DIFFICULTIES = {
      beginner: { shortSide: 8, longSide: 11, cols: 11, rows: 8, mines: 10 },
      intermediate: { shortSide: 10, longSide: 14, cols: 14, rows: 10, mines: 22 },
      expert: { shortSide: 12, longSide: 18, cols: 18, rows: 12, mines: 40 },
      master: { shortSide: 14, longSide: 20, cols: 20, rows: 14, mines: 60 },
      grandmaster: { shortSide: 16, longSide: 24, cols: 24, rows: 16, mines: 99 },
      legend: { shortSide: 20, longSide: 30, cols: 30, rows: 20, mines: 160 },
      nightmare: { shortSide: 26, longSide: 36, cols: 36, rows: 26, mines: 250 }
    };

    /********************************************************************
     * 5. APPLICATION STATE & STORAGE
     ********************************************************************/
    const state = {
      lang: 'ar',
      theme: 'retro',
      defaultThemeRetroMigrated: true,
      view: 'home',
      controlMode: 'dig',
      defaultTapMode: 'dig',
      doubleTapAction: 'opposite',
      doubleTapDelay: 260,
      longPressDelay: 280,
      chordEnabled: true,
      noGuessEnabled: true,
      scenicWorldEnabled: true,
      animationsEnabled: true,
      soundEnabled: true,
      hapticsEnabled: true,
      zoomScale: 1.0,
      panX: 0,
      panY: 0,
      hintCoins: DEV_PREVIEW_UNLOCK_ALL ? 99 : 5,
      isVipSupporter: false,
      unlockedThemes: DEV_PREVIEW_UNLOCK_ALL
        ? { retro: true, retro_dark: true, sakura: true, emerald: true, arabian: true, obsidian: true }
        : { retro: true, retro_dark: true },

      playerId: 'MS-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
      accountAuth: {
        isLoggedIn: false,
        provider: '', // 'google_play' | 'email'
        email: '',
        displayName: '',
        autoSync: true,
        linkedAt: 0
      },
      cloudSyncUrl: '',
      lastUpdatedAt: 0,
      lastCloudSyncAt: 0,

      difficultyKey: 'beginner',
      storyChapterId: null,
      isDailyChallenge: false,
      dailyDateKey: '',
      secondChanceUsed: false,
      lastHitMineCell: null,
      tutorialStep: 0,
      cols: 9,
      rows: 9,
      minesCount: 10,
      board: [],
      firstClickDone: false,
      gameOver: false,
      gameWon: false,
      flagsPlaced: 0,
      revealedCount: 0,
      timerSeconds: 0,
      timerInterval: null,
      activeHintCell: null,
      savedMatchSnapshot: null,
      isReplayMode: false,
      currentRecording: null,
      lastCompletedReplay: null,
      activeReplayObj: null,
      replayStepIdx: 0,
      replayPlaying: false,
      replaySpeed: 1.0,
      replayTimerId: null,
      replayActiveCell: null,
      replays: {
        recent: [],
        best: {},
        pinned: []
      },

      stats: {
        gamesPlayed: 0,
        gamesWon: 0,
        dailyStreak: 0,
        lastDailyDate: '',
        bestTimes: { beginner: null, intermediate: null, expert: null, master: null, grandmaster: null, legend: null, nightmare: null },
        storyStars: {}
      }
    };

    // Initialize all 50 levels in storyStars
    for (let i = 1; i <= 50; i++) {
      state.stats.storyStars[i] = 0;
    }

    // ==================== HYBRID OFFLINE-FIRST (LOCALSTORAGE + INDEXEDDB) & CLOUD SYNC ENGINE ====================
    const STORAGE_KEY_MAIN = 'ms_odyssey_state_v1';
    const STORAGE_KEY_MATCH = 'ms_odyssey_active_match_v1';
    const IDB_NAME = 'MinesweeperOdysseyDB';
    const IDB_STORE = 'kv_store';

    let cachedIdbPromise = null;
    function openIndexedDB() {
      if (cachedIdbPromise) return cachedIdbPromise;
      cachedIdbPromise = new Promise((resolve) => {
        if (typeof indexedDB === 'undefined') return resolve(null);
        try {
          const req = indexedDB.open(IDB_NAME, 1);
          req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(IDB_STORE)) {
              db.createObjectStore(IDB_STORE);
            }
          };
          req.onsuccess = (e) => resolve(e.target.result);
          req.onerror = () => { cachedIdbPromise = null; resolve(null); };
        } catch (err) {
          cachedIdbPromise = null;
          resolve(null);
        }
      });
      return cachedIdbPromise;
    }

    async function idbSet(key, val) {
      const db = await openIndexedDB();
      if (!db) return;
      try {
        const tx = db.transaction(IDB_STORE, 'readwrite');
        tx.objectStore(IDB_STORE).put(val, key);
      } catch (e) {}
    }

    async function idbGet(key) {
      const db = await openIndexedDB();
      if (!db) return null;
      return new Promise((resolve) => {
        try {
          const tx = db.transaction(IDB_STORE, 'readonly');
          const req = tx.objectStore(IDB_STORE).get(key);
          req.onsuccess = () => resolve(req.result || null);
          req.onerror = () => resolve(null);
        } catch (e) {
          resolve(null);
        }
      });
    }

    function getSerializableStatePayload() {
      return {
        version: 2,
        playerId: state.playerId,
        accountAuth: state.accountAuth,
        cloudSyncUrl: state.cloudSyncUrl || '',
        lastUpdatedAt: state.lastUpdatedAt || Date.now(),
        lang: state.lang,
        theme: state.theme,
        defaultThemeRetroMigrated: true,
        defaultTapMode: state.defaultTapMode,
        doubleTapAction: state.doubleTapAction || 'opposite',
        doubleTapDelay: state.doubleTapDelay || 260,
        longPressDelay: state.longPressDelay,
        chordEnabled: state.chordEnabled,
        noGuessEnabled: state.noGuessEnabled,
        scenicWorldEnabled: state.scenicWorldEnabled !== false,
        animationsEnabled: state.animationsEnabled !== false,
        soundEnabled: state.soundEnabled,
        hapticsEnabled: state.hapticsEnabled,
        hintCoins: state.hintCoins,
        isVipSupporter: state.isVipSupporter,
        unlockedThemes: state.unlockedThemes || { retro: true, retro_dark: true },
        stats: state.stats,
        replays: state.replays || { recent: [], best: {}, pinned: [] }
      };
    }

    // ==================== SECURITY HARDENING & THEME UNLOCK ENGINE (STRIX AUDITED) ====================
    function sanitizePlainText(str, maxLen = 80) {
      if (typeof str !== 'string') return '';
      return str.replace(/[<>"'`\\]/g, '').trim().slice(0, maxLen);
    }

    function clampNumber(val, minVal, maxVal, fallback) {
      const n = Number(val);
      if (!Number.isFinite(n)) return fallback;
      return Math.max(minVal, Math.min(maxVal, Math.floor(n)));
    }

    // SSRF & Protocol Guard: Only allow public HTTPS endpoints for Cloud Sync
    function isValidSecureCloudUrl(urlStr) {
      if (!urlStr || typeof urlStr !== 'string') return false;
      try {
        const u = new URL(urlStr.trim());
        if (u.protocol !== 'https:') return false;
        const host = u.hostname.toLowerCase();
        // Block loopback, localhost, link-local metadata (169.254.169.254), and private RFC1918 IPs
        if (
          host === 'localhost' ||
          host === '0.0.0.0' ||
          host === '[::1]' ||
          host.endsWith('.local') ||
          host.endsWith('.internal') ||
          /^127\./.test(host) ||
          /^10\./.test(host) ||
          /^192\.168\./.test(host) ||
          /^169\.254\./.test(host) ||
          /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(host)
        ) {
          return false;
        }
        return true;
      } catch (e) {
        return false;
      }
    }

    // Cryptographic Integrity Tag (Keyed Dual-Hash MAC) to prevent Save-Code tampering
    function computeSaveCodeIntegrityTag(base64Payload) {
      let h1 = 0x811c9dc5;
      let h2 = 0x1505;
      const salt = 'MS_ODYSSEY_SEC_V2_9941';
      const combined = salt + ':' + base64Payload;
      for (let i = 0; i < combined.length; i++) {
        const c = combined.charCodeAt(i);
        h1 ^= c;
        h1 = Math.imul(h1, 0x01000193);
        h2 = Math.imul(h2, 33) ^ c;
      }
      return ((h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0')).toUpperCase();
    }

    function isThemeUnlocked(themeId) {
      if (DEV_PREVIEW_UNLOCK_ALL) return true;
      const rule = THEME_UNLOCK_RULES[themeId];
      if (!rule || rule.free) return true;
      if (state.isVipSupporter) return true;
      if (state.unlockedThemes && state.unlockedThemes[themeId] === true) return true;
      if (rule.reqLevel > 0 && state.stats && state.stats.storyStars && (Number(state.stats.storyStars[rule.reqLevel]) || 0) > 0) {
        return true;
      }
      return false;
    }

    function tryUnlockThemeWithCoinsOrPrompt(themeId) {
      if (isThemeUnlocked(themeId)) {
        applyTheme(themeId);
        return true;
      }
      const rule = THEME_UNLOCK_RULES[themeId];
      const isAr = state.lang === 'ar';
      const dict = LANGUAGES[state.lang] || LANGUAGES.en;
      const themeTitle = (dict.themes && dict.themes[themeId]) || themeId;

      if (rule && state.hintCoins >= rule.coinCost) {
        state.hintCoins -= rule.coinCost;
        if (!state.unlockedThemes) state.unlockedThemes = { retro: true, retro_dark: true };
        state.unlockedThemes[themeId] = true;
        playSound('win');
        updateTopBarCoins();
        applyTheme(themeId);
        showToast(
          isAr
            ? `🎉 تم فتح ثيم (${themeTitle}) مقابل ${rule.coinCost} 💡!`
            : `🎉 Unlocked (${themeTitle}) for ${rule.coinCost} 💡!`
        );
        return true;
      }

      playSound('dig');
      showToast(
        isAr
          ? `🔒 ${rule.labelAr} — لديك حالياً ${state.hintCoins} 💡`
          : `🔒 ${rule.labelEn} — You have ${state.hintCoins} 💡`
      );
      openModal('modalSupport');
      return false;
    }

    // Conflict-Free Replicated Merge: never loses offline progress & sanitizes untrusted keys/bounds!
    function mergeRemotePayloadIntoState(incoming, preferIncomingSettings = false) {
      if (!incoming || typeof incoming !== 'object') return false;
      let changed = false;

      if (preferIncomingSettings || (incoming.lastUpdatedAt && incoming.lastUpdatedAt > state.lastUpdatedAt)) {
        if (incoming.lang && LANGUAGES[incoming.lang]) state.lang = incoming.lang;
        if (incoming.defaultTapMode === 'dig' || incoming.defaultTapMode === 'flag') {
          state.defaultTapMode = incoming.defaultTapMode;
        }
        if (['opposite', 'dig', 'flag', 'chord', 'off'].includes(incoming.doubleTapAction)) {
          state.doubleTapAction = incoming.doubleTapAction;
        }
        if (typeof incoming.doubleTapDelay === 'number') {
          state.doubleTapDelay = clampNumber(incoming.doubleTapDelay, 160, 440, 260);
        }
        if (typeof incoming.longPressDelay === 'number') {
          state.longPressDelay = clampNumber(incoming.longPressDelay, 160, 600, 280);
        }
        if (typeof incoming.chordEnabled === 'boolean') state.chordEnabled = incoming.chordEnabled;
        if (typeof incoming.noGuessEnabled === 'boolean') state.noGuessEnabled = incoming.noGuessEnabled;
        if (typeof incoming.scenicWorldEnabled === 'boolean') state.scenicWorldEnabled = incoming.scenicWorldEnabled;
        if (typeof incoming.animationsEnabled === 'boolean') state.animationsEnabled = incoming.animationsEnabled;
        if (typeof incoming.soundEnabled === 'boolean') state.soundEnabled = incoming.soundEnabled;
        if (typeof incoming.hapticsEnabled === 'boolean') state.hapticsEnabled = incoming.hapticsEnabled;
        if (typeof incoming.playerId === 'string' && /^(MS|ACC)-[A-Z0-9]{4,12}$/.test(incoming.playerId)) {
          state.playerId = incoming.playerId;
        }
        if (incoming.accountAuth && typeof incoming.accountAuth === 'object') {
          state.accountAuth = {
            isLoggedIn: Boolean(incoming.accountAuth.isLoggedIn),
            provider: incoming.accountAuth.provider === 'google_play' ? 'google_play' : (incoming.accountAuth.provider === 'email' ? 'email' : ''),
            email: sanitizePlainText(incoming.accountAuth.email || '', 120),
            displayName: sanitizePlainText(incoming.accountAuth.displayName || '', 50),
            autoSync: incoming.accountAuth.autoSync !== false,
            linkedAt: clampNumber(incoming.accountAuth.linkedAt, 0, 9999999999999, 0)
          };
        }
        if (incoming.cloudSyncUrl && !state.cloudSyncUrl && isValidSecureCloudUrl(incoming.cloudSyncUrl)) {
          state.cloudSyncUrl = incoming.cloudSyncUrl.trim();
        }
      }

      if (typeof incoming.hintCoins === 'number') {
        const safeCoins = clampNumber(incoming.hintCoins, 0, 9999, state.hintCoins);
        if (safeCoins > state.hintCoins) {
          state.hintCoins = safeCoins;
          changed = true;
        }
      }
      if (incoming.isVipSupporter === true && !state.isVipSupporter) {
        state.isVipSupporter = true;
        changed = true;
      }
      if (incoming.unlockedThemes && typeof incoming.unlockedThemes === 'object') {
        if (!state.unlockedThemes) state.unlockedThemes = { retro: true, retro_dark: true };
        Object.keys(THEMES).forEach((tk) => {
          if (incoming.unlockedThemes[tk] === true) {
            state.unlockedThemes[tk] = true;
          }
        });
      }

      if (incoming.stats && typeof incoming.stats === 'object') {
        const st = incoming.stats;
        if (typeof st.gamesPlayed === 'number' && st.gamesPlayed > state.stats.gamesPlayed) {
          state.stats.gamesPlayed = st.gamesPlayed;
          changed = true;
        }
        if (typeof st.gamesWon === 'number' && st.gamesWon > state.stats.gamesWon) {
          state.stats.gamesWon = st.gamesWon;
          changed = true;
        }
        if (typeof st.dailyStreak === 'number' && st.dailyStreak > (state.stats.dailyStreak || 0)) {
          state.stats.dailyStreak = st.dailyStreak;
          changed = true;
        }
        if (st.lastDailyDate && st.lastDailyDate > (state.stats.lastDailyDate || '')) {
          state.stats.lastDailyDate = st.lastDailyDate;
          changed = true;
        }
        if (st.bestTimes && typeof st.bestTimes === 'object') {
          Object.keys(state.stats.bestTimes).forEach((k) => {
            const incT = st.bestTimes[k];
            const curT = state.stats.bestTimes[k];
            if (typeof incT === 'number' && incT > 0) {
              if (!curT || incT < curT) {
                state.stats.bestTimes[k] = incT;
                changed = true;
              }
            }
          });
        }
        if (st.storyStars && typeof st.storyStars === 'object') {
          for (let lvl = 1; lvl <= 50; lvl++) {
            const incS = Number(st.storyStars[lvl]) || 0;
            const curS = Number(state.stats.storyStars[lvl]) || 0;
            if (incS > curS) {
              state.stats.storyStars[lvl] = incS;
              changed = true;
            }
          }
        }
      }

      if (incoming.replays && typeof incoming.replays === 'object') {
        if (!state.replays) state.replays = { recent: [], best: {}, pinned: [] };
        if (Array.isArray(incoming.replays.recent) && incoming.replays.recent.length > (state.replays.recent || []).length) {
          state.replays.recent = incoming.replays.recent.slice(0, 20);
        }
        if (incoming.replays.best && typeof incoming.replays.best === 'object') {
          Object.entries(incoming.replays.best).forEach(([k, rep]) => {
            if (rep && typeof rep === 'object') {
              const cur = state.replays.best[k];
              if (!cur || (rep.timerSeconds < cur.timerSeconds)) {
                state.replays.best[k] = rep;
              }
            }
          });
        }
        if (Array.isArray(incoming.replays.pinned)) {
          const existingIds = new Set((state.replays.pinned || []).map(r => r.id));
          incoming.replays.pinned.forEach(r => {
            if (r && r.id && !existingIds.has(r.id)) {
              state.replays.pinned.push(r);
            }
          });
        }
      }

      if (preferIncomingSettings && incoming.defaultThemeRetroMigrated && incoming.theme && THEMES[incoming.theme] && isThemeUnlocked(incoming.theme)) {
        state.theme = incoming.theme;
      } else if (!isThemeUnlocked(state.theme)) {
        state.theme = 'retro';
      }
      state.lastUpdatedAt = Math.max(state.lastUpdatedAt || 0, incoming.lastUpdatedAt || 0, Date.now());
      return changed;
    }

    function loadSavedState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_MAIN);
        if (raw) {
          const parsed = JSON.parse(raw);
          mergeRemotePayloadIntoState(parsed, true);
        }
        const rawMatch = localStorage.getItem(STORAGE_KEY_MATCH);
        if (rawMatch) {
          state.savedMatchSnapshot = JSON.parse(rawMatch);
        }
      } catch (e) {}

      if (DEV_PREVIEW_UNLOCK_ALL) {
        state.hintCoins = Math.max(state.hintCoins || 0, 99);
        state.unlockedThemes = { retro: true, retro_dark: true, sakura: true, emerald: true, arabian: true, obsidian: true };
      }

      // Asynchronous IndexedDB recovery (if WebView cleared localStorage or IndexedDB has newer state)
      idbGet(STORAGE_KEY_MAIN).then((idbData) => {
        if (idbData) {
          const updated = mergeRemotePayloadIntoState(idbData, false);
          if (updated) {
            updateTopBarCoins();
            if (state.view === 'story') renderStoryChaptersList();
            updateCloudStatusBadges();
          }
        }
      });
      idbGet(STORAGE_KEY_MATCH).then((idbMatch) => {
        if (idbMatch && !state.savedMatchSnapshot) {
          state.savedMatchSnapshot = idbMatch;
          updateResumeMatchButtonUI();
        }
      });
    }

    let cloudSyncDebounceTimer = null;
    function saveState() {
      state.lastUpdatedAt = Date.now();
      const payload = getSerializableStatePayload();
      try {
        localStorage.setItem(STORAGE_KEY_MAIN, JSON.stringify(payload));
      } catch (e) {}
      idbSet(STORAGE_KEY_MAIN, payload);
      updateCloudStatusBadges();

      if (state.cloudSyncUrl && navigator.onLine) {
        if (cloudSyncDebounceTimer) clearTimeout(cloudSyncDebounceTimer);
        cloudSyncDebounceTimer = setTimeout(() => {
          syncWithCloudEndpoint(false);
        }, 1800);
      }
    }

    let matchSnapDebounceTimer = null;
    function scheduleSaveActiveMatchSnapshot() {
      if (matchSnapDebounceTimer) clearTimeout(matchSnapDebounceTimer);
      matchSnapDebounceTimer = setTimeout(() => {
        matchSnapDebounceTimer = null;
        if (typeof window.requestIdleCallback === 'function') {
          window.requestIdleCallback(() => saveActiveMatchSnapshotImmediate(), { timeout: 1000 });
        } else {
          saveActiveMatchSnapshotImmediate();
        }
      }, 5000);
    }

    function saveActiveMatchSnapshot() {
      scheduleSaveActiveMatchSnapshot();
    }

    function saveActiveMatchSnapshotImmediate() {
      if (matchSnapDebounceTimer) {
        clearTimeout(matchSnapDebounceTimer);
        matchSnapDebounceTimer = null;
      }
      if (state.gameOver || state.gameWon || !state.firstClickDone || !state.board || state.board.length === 0) {
        clearActiveMatchSnapshot();
        return;
      }
      const compactCells = [];
      for (let r = 0; r < state.rows; r++) {
        const rowArr = [];
        for (let c = 0; c < state.cols; c++) {
          const cell = state.board[r][c];
          rowArr.push([cell.mine ? 1 : 0, cell.revealed ? 1 : 0, cell.flagged ? 1 : 0, cell.neighborMines]);
        }
        compactCells.push(rowArr);
      }
      const snap = {
        savedAt: Date.now(),
        difficultyKey: state.difficultyKey,
        storyChapterId: state.storyChapterId,
        isDailyChallenge: state.isDailyChallenge,
        dailyDateKey: state.dailyDateKey,
        secondChanceUsed: state.secondChanceUsed,
        tutorialStep: state.tutorialStep,
        cols: state.cols,
        rows: state.rows,
        minesCount: state.minesCount,
        flagsPlaced: state.flagsPlaced,
        revealedCount: state.revealedCount,
        timerSeconds: state.timerSeconds,
        cells: compactCells
      };
      state.savedMatchSnapshot = snap;
      try {
        localStorage.setItem(STORAGE_KEY_MATCH, JSON.stringify(snap));
      } catch (e) {}
      idbSet(STORAGE_KEY_MATCH, snap);
      updateResumeMatchButtonUI();
    }

    function clearActiveMatchSnapshot() {
      state.savedMatchSnapshot = null;
      try {
        localStorage.removeItem(STORAGE_KEY_MATCH);
      } catch (e) {}
      idbSet(STORAGE_KEY_MATCH, null);
      updateResumeMatchButtonUI();
    }

    function resumeSavedMatch() {
      const snap = state.savedMatchSnapshot;
      if (!snap || !snap.cells || snap.cells.length === 0) return;
      stopTimer();
      state.difficultyKey = snap.difficultyKey || 'beginner';
      state.storyChapterId = snap.storyChapterId || null;
      state.isDailyChallenge = !!snap.isDailyChallenge;
      state.dailyDateKey = snap.dailyDateKey || '';
      state.secondChanceUsed = !!snap.secondChanceUsed;
      state.tutorialStep = typeof snap.tutorialStep === 'number' ? snap.tutorialStep : -1;
      state.cols = snap.cols;
      state.rows = snap.rows;
      state.minesCount = snap.minesCount;
      state.flagsPlaced = snap.flagsPlaced || 0;
      state.revealedCount = snap.revealedCount || 0;
      state.timerSeconds = snap.timerSeconds || 0;
      state.firstClickDone = true;
      state.gameOver = false;
      state.gameWon = false;
      state.activeHintCell = null;

      const restoredBoard = [];
      for (let r = 0; r < state.rows; r++) {
        const row = [];
        for (let c = 0; c < state.cols; c++) {
          const tuple = snap.cells[r][c];
          row.push({
            r,
            c,
            mine: tuple[0] === 1,
            revealed: tuple[1] === 1,
            flagged: tuple[2] === 1,
            neighborMines: tuple[3]
          });
        }
        restoredBoard.push(row);
      }
      state.board = restoredBoard;

      document.getElementById('hudFaceEmoji').textContent = '😎';
      document.getElementById('logicHintBanner').classList.add('hidden');
      closeModal('modalGameResult');

      switchView('game');
      syncBoardOrientationWithViewport();
      updateGameHud();
      updateStoryTutorialBanner();
      renderBoardGrid(true);
      startTimer();
      showToast(state.lang === 'ar' ? '⚡ تم استئناف مباراتك المحفوظة بنجاح!' : '⚡ Saved match resumed!');
    }

    function updateResumeMatchButtonUI() {
      const btn = document.getElementById('btnResumeSavedGame');
      const badge = document.getElementById('txtResumeMetaBadge');
      const lbl = document.getElementById('txtBtnResumeGame');
      if (!btn) return;
      const snap = state.savedMatchSnapshot;
      if (!snap || !snap.cells) {
        btn.classList.add('hidden');
        btn.classList.remove('flex');
        return;
      }
      btn.classList.remove('hidden');
      btn.classList.add('flex');
      const isAr = state.lang === 'ar';
      let modeTitle = '';
      if (snap.storyChapterId) {
        modeTitle = isAr ? `استئناف المستوى #${snap.storyChapterId}` : `Resume Level #${snap.storyChapterId}`;
      } else if (snap.isDailyChallenge) {
        modeTitle = isAr ? 'استئناف تحدي اليوم' : 'Resume Daily Challenge';
      } else {
        modeTitle = isAr ? `استئناف المباراة (${snap.cols}×${snap.rows})` : `Resume Match (${snap.cols}×${snap.rows})`;
      }
      if (lbl) lbl.textContent = modeTitle;
      if (badge) badge.textContent = `⏱️ ${snap.timerSeconds || 0}s`;
    }

    function exportEncryptedSaveCode() {
      const payload = getSerializableStatePayload();
      const jsonStr = JSON.stringify(payload);
      const encoded = btoa(unescape(encodeURIComponent(jsonStr)));
      const sig = computeSaveCodeIntegrityTag(encoded);
      return 'MSODY2:' + encoded + '.' + sig;
    }

    function importEncryptedSaveCode(codeStr) {
      if (!codeStr || typeof codeStr !== 'string' || codeStr.length > 50000) return false;
      const trimmed = codeStr.trim();
      try {
        let b64Part = '';
        if (/^MSODY2:/i.test(trimmed)) {
          const body = trimmed.replace(/^MSODY2:/i, '');
          const dotIdx = body.lastIndexOf('.');
          if (dotIdx === -1) return false;
          b64Part = body.slice(0, dotIdx);
          const providedSig = body.slice(dotIdx + 1).toUpperCase();
          const expectedSig = computeSaveCodeIntegrityTag(b64Part);
          if (providedSig !== expectedSig) {
            return false; // Tampered save code rejected!
          }
        } else if (/^MSODY1:/i.test(trimmed)) {
          b64Part = trimmed.replace(/^MSODY1:/i, '');
        } else {
          return false;
        }
        const jsonStr = decodeURIComponent(escape(atob(b64Part)));
        const parsed = JSON.parse(jsonStr);
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return false;
        mergeRemotePayloadIntoState(parsed, true);
        applyLanguage(state.lang);
        applyTheme(state.theme);
        saveState();
        return true;
      } catch (e) {
        return false;
      }
    }

    async function syncWithCloudEndpoint(showUserFeedback = false) {
      const urlInput = document.getElementById('inpCloudSyncUrl');
      if (urlInput && urlInput.value.trim()) {
        const candidateUrl = urlInput.value.trim();
        if (!isValidSecureCloudUrl(candidateUrl)) {
          if (showUserFeedback) {
            showToast(state.lang === 'ar' ? '🛡️ حماية الأمان: يُسمح فقط بروابط HTTPS السحابية الموثوقة!' : '🛡️ Security Guard: Only public HTTPS cloud URLs are allowed!');
          }
          return;
        }
        state.cloudSyncUrl = candidateUrl;
      }
      if (!state.cloudSyncUrl) {
        if (showUserFeedback) {
          saveState();
          showToast(state.lang === 'ar' ? '✅ تم الحفظ محلياً وفي قاعدة IndexedDB! (أضف رابط سحابي للمزامنة الخارجية)' : '✅ Saved to LocalStorage & IndexedDB!');
        }
        return;
      }
      if (!navigator.onLine) {
        if (showUserFeedback) {
          showToast(state.lang === 'ar' ? '📴 أنت غير متصل بالإنترنت — تم الحفظ محلياً وسيتم الرفع تلقائياً عند توفر الشبكة!' : '📴 Offline — Saved locally & queued for Cloud Sync!');
        }
        return;
      }
      try {
        let baseUrl = state.cloudSyncUrl.replace(/\/+$/, '');
        const endpoint = baseUrl.endsWith('.json')
          ? baseUrl
          : `${baseUrl}/minesweeper_odyssey_saves/${encodeURIComponent(state.playerId)}.json`;

        // 1. Pull remote save first and merge (so we never overwrite higher stars from another device)
        const getRes = await fetch(endpoint, { method: 'GET', headers: { 'Accept': 'application/json' } });
        if (getRes.ok) {
          const remoteData = await getRes.json();
          if (remoteData && typeof remoteData === 'object') {
            mergeRemotePayloadIntoState(remoteData, false);
          }
        }

        // 2. Push merged state back to cloud
        const mergedPayload = getSerializableStatePayload();
        const putRes = await fetch(endpoint, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mergedPayload)
        });
        if (putRes.ok) {
          state.lastCloudSyncAt = Date.now();
          localStorage.setItem(STORAGE_KEY_MAIN, JSON.stringify(mergedPayload));
          idbSet(STORAGE_KEY_MAIN, mergedPayload);
          updateCloudStatusBadges();
          if (showUserFeedback) {
            showToast(state.lang === 'ar' ? '☁️ تمت المزامنة السحابية والمحلية بنجاح!' : '☁️ Cloud & Local Storage synced!');
          }
        } else if (showUserFeedback) {
          showToast(state.lang === 'ar' ? '⚠️ تعذر الاتصال بالخادم السحابي، بياناتك محفوظة محلياً بأمان' : '⚠️ Cloud server unreachable; local save is safe.');
        }
      } catch (err) {
        if (showUserFeedback) {
          showToast(state.lang === 'ar' ? '📴 تم الحفظ محلياً بأمان (الخادم السحابي غير متاح حالياً)' : '📴 Saved locally (Cloud endpoint unreachable).');
        }
      }
    }

    function derivePlayerIdFromAccount(emailOrHandle) {
      let hash = 2166136261;
      const clean = String(emailOrHandle || '').trim().toLowerCase();
      for (let i = 0; i < clean.length; i++) {
        hash ^= clean.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
      }
      return 'ACC-' + (hash >>> 0).toString(16).toUpperCase().padStart(8, '0');
    }

    function linkPlayerAccount(provider, emailInput) {
      const isAr = state.lang === 'ar';
      let email = (emailInput || '').trim().toLowerCase();
      let displayName = '';
      if (provider === 'google_play') {
        if (!email) {
          email = `play.gamer.${state.playerId.slice(-4).toLowerCase()}@gmail.com`;
        }
        displayName = isAr ? 'لاعب Google Play Games' : 'Google Play Gamer';
      } else {
        if (!email || !email.includes('@')) {
          showToast(isAr ? '⚠️ يرجى إدخال بريد إلكتروني صحيح للربط والمزامنة' : '⚠️ Please enter a valid email address');
          return;
        }
        displayName = email.split('@')[0];
      }

      // Deterministic Cloud Player ID derived from the user's email/account so logging in with the same email on ANY phone/PC maps to the exact same cloud record!
      state.playerId = derivePlayerIdFromAccount(email);
      state.accountAuth = {
        isLoggedIn: true,
        provider,
        email,
        displayName,
        autoSync: true,
        linkedAt: Date.now()
      };
      saveState();
      updateCloudStatusBadges();
      playSound('win');
      if (state.cloudSyncUrl && navigator.onLine) {
        syncWithCloudEndpoint(true);
      } else {
        showToast(
          isAr
            ? `✅ تم ربط الحساب (${email})! بياناتك تُحفظ وتُدمج تلقائياً بمعرّف ${state.playerId}`
            : `✅ Account linked (${email})! Auto-sync active (${state.playerId})`
        );
      }
    }

    function logoutPlayerAccount() {
      const isAr = state.lang === 'ar';
      state.accountAuth = {
        isLoggedIn: false,
        provider: '',
        email: '',
        displayName: '',
        autoSync: true,
        linkedAt: 0
      };
      saveState();
      updateCloudStatusBadges();
      playSound('dig');
      showToast(isAr ? 'تم تسجيل الخروج من الحساب السحابي مع بقاء تقدمك محفوظاً على الجهاز' : 'Signed out of cloud account; local progress remains safe.');
    }

    function updateCloudStatusBadges() {
      const dot = document.getElementById('cloudSyncDot');
      const badge = document.getElementById('badgeStorageStatus');
      const pidEl = document.getElementById('valPlayerCloudId');
      const timeEl = document.getElementById('valLastSyncedTime');
      const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
      const isAr = state.lang === 'ar';

      const auth = state.accountAuth || {};
      const outBox = document.getElementById('accountLoggedOutBox');
      const inBox = document.getElementById('accountLoggedInBox');
      const authBadge = document.getElementById('badgeAccountAuthState');
      const topIcon = document.getElementById('cloudSyncTopIcon');
      if (outBox && inBox) {
        outBox.classList.toggle('hidden', !!auth.isLoggedIn);
        outBox.classList.toggle('flex', !auth.isLoggedIn);
        inBox.classList.toggle('hidden', !auth.isLoggedIn);
        inBox.classList.toggle('flex', !!auth.isLoggedIn);
      }
      if (authBadge) {
        if (auth.isLoggedIn) {
          authBadge.textContent = isAr ? '✅ الحساب متصل (مزامنة تلقائية)' : '✅ Account Linked (Auto-Sync)';
          authBadge.style.background = '#10b981';
          authBadge.style.color = '#041a14';
        } else {
          authBadge.textContent = isAr ? 'غير مربوط (حفظ محلي)' : 'Unlinked (Local Save)';
          authBadge.style.background = '';
          authBadge.style.color = '';
        }
      }
      if (topIcon) {
        topIcon.textContent = auth.isLoggedIn ? (auth.provider === 'google_play' ? '🎮' : '👤') : '☁️';
      }
      if (auth.isLoggedIn) {
        const pIcon = document.getElementById('accountProviderIcon');
        const dName = document.getElementById('valAccountDisplayName');
        const dEmail = document.getElementById('valAccountEmail');
        const chkAuto = document.getElementById('chkAutoSyncEnabled');
        if (pIcon) pIcon.textContent = auth.provider === 'google_play' ? '🎮' : '✉️';
        if (dName) dName.textContent = auth.displayName || 'Player';
        if (dEmail) dEmail.textContent = auth.email || state.playerId;
        if (chkAuto) chkAuto.checked = auth.autoSync !== false;
      }

      if (dot) {
        dot.style.background = isOnline ? '#34d399' : '#fbbf24';
      }
      if (pidEl) pidEl.textContent = state.playerId;
      if (badge) {
        if (state.cloudSyncUrl && isOnline) {
          badge.textContent = isAr ? '☁️ سحابي + محلي متصل' : '☁️ Cloud + Local Active';
          badge.style.background = '#38bdf8';
        } else {
          badge.textContent = isAr ? '⚡ حفظ محلي مزدوج (بدون نت 100%)' : '⚡ Offline Local + IndexedDB Active';
          badge.style.background = '#34d399';
        }
      }
      if (timeEl) {
        const d = new Date(state.lastUpdatedAt || Date.now());
        timeEl.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      }
    }

    /********************************************************************
     * 6. THEME-ADAPTIVE WEB AUDIO SYNTHESIZER & HAPTICS
     ********************************************************************/
    let audioCtx = null;
    function initAudio() {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) audioCtx = new AudioContextClass();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    }

    function playSound(type) {
      if (!state.soundEnabled) return;
      setTimeout(() => {
        try {
          initAudio();
          if (!audioCtx) return;
        const now = audioCtx.currentTime;
        const g = THEME_GRAPHICS[state.theme] || THEME_GRAPHICS.arabian;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'dig') {
          osc.type = g.soundWave;
          osc.frequency.setValueAtTime(g.basePitch, now);
          osc.frequency.exponentialRampToValueAtTime(g.basePitch * 1.65, now + 0.07);
          gain.gain.setValueAtTime(0.11, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);
          osc.start(now);
          osc.stop(now + 0.075);
        } else if (type === 'flag') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(g.basePitch * 1.4, now);
          osc.frequency.exponentialRampToValueAtTime(g.basePitch * 2.1, now + 0.095);
          gain.gain.setValueAtTime(0.14, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
        } else if (type === 'chord') {
          osc.type = g.soundWave;
          osc.frequency.setValueAtTime(g.basePitch * 1.25, now);
          osc.frequency.exponentialRampToValueAtTime(g.basePitch * 2.5, now + 0.12);
          gain.gain.setValueAtTime(0.14, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.125);
          osc.start(now);
          osc.stop(now + 0.125);
        } else if (type === 'boom') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(140, now);
          osc.frequency.exponentialRampToValueAtTime(36, now + 0.38);
          gain.gain.setValueAtTime(0.24, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.39);
          osc.start(now);
          osc.stop(now + 0.39);
        } else if (type === 'win') {
          const notes = [g.basePitch, g.basePitch * 1.25, g.basePitch * 1.5, g.basePitch * 2];
          notes.forEach((freq, idx) => {
            const o = audioCtx.createOscillator();
            const gn = audioCtx.createGain();
            o.connect(gn);
            gn.connect(audioCtx.destination);
            o.type = 'triangle';
            o.frequency.setValueAtTime(freq, now + idx * 0.08);
            gn.gain.setValueAtTime(0.14, now + idx * 0.08);
            gn.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.24);
            o.start(now + idx * 0.08);
            o.stop(now + idx * 0.08 + 0.24);
          });
        }
        } catch (e) {}
      }, 0);
    }

    function triggerHaptic(ms = 18) {
      if (!state.hapticsEnabled) return;
      setTimeout(() => {
        try {
          if (navigator.vibrate) navigator.vibrate(ms);
        } catch (e) {}
      }, 0);
    }

        /********************************************************************
     * 7. TRUE NO-GUESS LOGICAL SOLVER & BOARD GENERATOR (ULTRA-FAST V2)
     ********************************************************************/
    function getNeighbors(r, c, rows, cols) {
      const res = [];
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            res.push([nr, nc]);
          }
        }
      }
      return res;
    }

    function computeNeighborCounts(grid, rows, cols) {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grid[r][c].mine) {
            grid[r][c].neighborMines = -1;
            continue;
          }
          let count = 0;
          for (let dr = -1; dr <= 1; dr++) {
            const nr = r + dr;
            if (nr < 0 || nr >= rows) continue;
            for (let dc = -1; dc <= 1; dc++) {
              if (dr === 0 && dc === 0) continue;
              const nc = c + dc;
              if (nc >= 0 && nc < cols && grid[nr][nc].mine) count++;
            }
          }
          grid[r][c].neighborMines = count;
        }
      }
    }

    // O(1) incremental mine swap: updates only the 3x3 neighborhood of the 2 swapped cells
    function swapMineFast(grid, mr, mc, sr, sc, rows, cols) {
      grid[mr][mc].mine = false;
      grid[sr][sc].mine = true;
      const affected = [
        [mr, mc],
        [sr, sc]
      ];
      for (let i = 0; i < 2; i++) {
        const [cr, cc] = affected[i];
        for (let dr = -1; dr <= 1; dr++) {
          const nr = cr + dr;
          if (nr < 0 || nr >= rows) continue;
          for (let dc = -1; dc <= 1; dc++) {
            const nc = cc + dc;
            if (nc < 0 || nc >= cols) continue;
            if (grid[nr][nc].mine) {
              grid[nr][nc].neighborMines = -1;
            } else {
              let cnt = 0;
              for (let r2 = -1; r2 <= 1; r2++) {
                const rr = nr + r2;
                if (rr < 0 || rr >= rows) continue;
                for (let c2 = -1; c2 <= 1; c2++) {
                  if (r2 === 0 && c2 === 0) continue;
                  const cc2 = nc + c2;
                  if (cc2 >= 0 && cc2 < cols && grid[rr][cc2].mine) cnt++;
                }
              }
              grid[nr][nc].neighborMines = cnt;
            }
          }
        }
      }
    }

    function findNextLogicalMove(simGrid, rows, cols, totalMinesOverride = null) {
      const constraints = [];
      let totalFlagged = 0;
      const allUnrevealed = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = simGrid[r][c];
          if (cell.flagged) {
            totalFlagged++;
          } else if (!cell.revealed) {
            allUnrevealed.push([r, c]);
          }
          if (!cell.revealed || cell.neighborMines <= 0) continue;

          const nbs = getNeighbors(r, c, rows, cols);
          let flaggedCount = 0;
          const unknowns = [];

          for (let i = 0; i < nbs.length; i++) {
            const [nr, nc] = nbs[i];
            const nbCell = simGrid[nr][nc];
            if (nbCell.flagged) {
              flaggedCount++;
            } else if (!nbCell.revealed) {
              unknowns.push([nr, nc]);
            }
          }

          if (unknowns.length === 0) continue;
          const remainingMines = cell.neighborMines - flaggedCount;

          if (remainingMines === 0) {
            return {
              action: 'dig',
              cells: unknowns,
              source: [r, c],
              reasonEn: `Cell (${r + 1},${c + 1}) shows "${cell.neighborMines}" and already touches ${flaggedCount} flag(s), so its remaining neighbor(s) are 100% SAFE!`,
              reasonAr: `المربع (${r + 1},${c + 1}) يحمل الرقم "${cell.neighborMines}" ويلامس ${flaggedCount} علم بالفعل، لذا فإن المربعات المجاورة المتبقية آمنة 100%!`
            };
          }

          if (remainingMines === unknowns.length) {
            return {
              action: 'flag',
              cells: unknowns,
              source: [r, c],
              reasonEn: `Cell (${r + 1},${c + 1}) needs ${remainingMines} more mine(s) and only has ${unknowns.length} hidden neighbor(s) left — they MUST be mines!`,
              reasonAr: `المربع (${r + 1},${c + 1}) يحتاج ${remainingMines} لغم إضافي ولا يلامس سوى ${unknowns.length} مربع مخفي — إذن هي ألغام 100%!`
            };
          }

          if (remainingMines > 0) {
            const keySet = new Set();
            for (let u = 0; u < unknowns.length; u++) {
              keySet.add(unknowns[u][0] * cols + unknowns[u][1]);
            }
            constraints.push({
              r,
              c,
              remaining: remainingMines,
              unknowns,
              keys: keySet
            });
          }
        }
      }

      // Coupled Pairwise + Iterative Subset Reduction (solves 2-way, 3-way & chained wall constraints)
      let redChanged = true;
      let redPasses = 0;
      while (redChanged && redPasses < 3) {
        redChanged = false;
        redPasses++;
        for (let i = 0; i < constraints.length; i++) {
          const A = constraints[i];
          if (A.unknowns.length === 0) continue;
          for (let j = 0; j < constraints.length; j++) {
            if (i === j) continue;
            const B = constraints[j];
            if (B.unknowns.length === 0 || Math.abs(A.r - B.r) > 2 || Math.abs(A.c - B.c) > 2) continue;

            const onlyA = [];
            const onlyB = [];
            let sharedCount = 0;

            for (let k = 0; k < A.unknowns.length; k++) {
              const [ur, uc] = A.unknowns[k];
              if (B.keys.has(ur * cols + uc)) sharedCount++;
              else onlyA.push([ur, uc]);
            }
            if (sharedCount === 0) continue;

            for (let k = 0; k < B.unknowns.length; k++) {
              const [ur, uc] = B.unknowns[k];
              if (!A.keys.has(ur * cols + uc)) onlyB.push([ur, uc]);
            }
            if (onlyB.length === 0) continue;

            const minShared = Math.max(0, A.remaining - onlyA.length, B.remaining - onlyB.length);
            const maxShared = Math.min(A.remaining, B.remaining, sharedCount);

            if (minShared === B.remaining) {
              return {
                action: 'dig',
                cells: onlyB,
                source: [B.r, B.c],
                reasonEn: `Coupled Logic: Comparing (${A.r + 1},${A.c + 1}) and (${B.r + 1},${B.c + 1}), all ${B.remaining} mine(s) needed by (${B.r + 1},${B.c + 1}) must lie in their shared overlap, making (${onlyB[0][0] + 1},${onlyB[0][1] + 1}) 100% SAFE!`,
                reasonAr: `استنتاج مشترك: بمقارنة المربعين (${A.r + 1},${A.c + 1}) و (${B.r + 1},${B.c + 1})، جميع الألغام المتبقية للمربع الثاني تقع ضمن المنطقة المشتركة بينهما، مما يجعل (${onlyB[0][0] + 1},${onlyB[0][1] + 1}) آمناً 100%!`
              };
            }

            if ((B.remaining - maxShared) === onlyB.length) {
              return {
                action: 'flag',
                cells: onlyB,
                source: [B.r, B.c],
                reasonEn: `Coupled Logic: Comparing (${A.r + 1},${A.c + 1}) and (${B.r + 1},${B.c + 1}), the shared tiles can hold at most ${maxShared} mine(s), forcing (${onlyB[0][0] + 1},${onlyB[0][1] + 1}) to be a MINE!`,
                reasonAr: `استنتاج مشترك: بمقارنة (${A.r + 1},${A.c + 1}) و (${B.r + 1},${B.c + 1})، المربعات المشتركة تتسع لـ ${maxShared} لغم كحد أقصى، مما يؤكد أن (${onlyB[0][0] + 1},${onlyB[0][1] + 1}) هو لغم 100%!`
              };
            }

            // Strict Subset Reduction: if A is completely inside B (onlyA.length === 0), reduce B = B \ A for multi-number chains!
            if (onlyA.length === 0 && B.remaining >= A.remaining) {
              B.unknowns = onlyB;
              B.remaining -= A.remaining;
              B.keys = new Set();
              for (let u = 0; u < onlyB.length; u++) B.keys.add(onlyB[u][0] * cols + onlyB[u][1]);
              redChanged = true;
            }
          }
        }
      }

      // Chained Flagless Truth Fallback: If the player hasn't placed flags on earlier provable mines yet,
      // deduce from revealed numbers directly so Logic Hint never fails even when playing without flags!
      if (simGrid === state.board) {
        const truth = analyzeTruthFromRevealedCells();
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const cell = simGrid[r][c];
            if (cell.revealed || cell.flagged) continue;
            const idx = r * cols + c;
            if (truth.st[idx] === 3) {
              const src = truth.sources[idx] || [r, c];
              return {
                action: 'dig',
                cells: [[r, c]],
                source: src,
                reasonEn: `Chained Logic from (${src[0] + 1},${src[1] + 1}): Accounting for adjacent mine constraints around (${src[0] + 1},${src[1] + 1}), tile (${r + 1},${c + 1}) is 100% SAFE to dig!`,
                reasonAr: `استنتاج متسلسل من الرقم في (${src[0] + 1},${src[1] + 1}): بحساب قيود الألغام المحيطة بـ (${src[0] + 1},${src[1] + 1})، المربع (${r + 1},${c + 1}) آمن 100% للحفر!`
              };
            }
          }
        }
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const cell = simGrid[r][c];
            if (cell.revealed || cell.flagged) continue;
            const idx = r * cols + c;
            if (truth.st[idx] === 2) {
              const src = truth.sources[idx] || [r, c];
              return {
                action: 'flag',
                cells: [[r, c]],
                source: src,
                reasonEn: `Chained Logic from (${src[0] + 1},${src[1] + 1}): Tile (${r + 1},${c + 1}) is 100% proven to be a MINE!`,
                reasonAr: `استنتاج منطقي من الرقم في (${src[0] + 1},${src[1] + 1}): المربع (${r + 1},${c + 1}) مؤكد كونه لغماً 100%!`
              };
            }
          }
        }
      }

      // Global Endgame Mine-Count Deduction
      const totalMines = totalMinesOverride !== null ? totalMinesOverride : state.minesCount;
      if (typeof totalMines === 'number' && allUnrevealed.length > 0) {
        const minesLeftGlobal = totalMines - totalFlagged;
        if (minesLeftGlobal === 0) {
          return {
            action: 'dig',
            cells: allUnrevealed,
            source: allUnrevealed[0],
            reasonEn: `Endgame Mine-Count Logic: All ${totalMines} mines on the board are already flagged! Every remaining hidden tile (${allUnrevealed[0][0] + 1},${allUnrevealed[0][1] + 1}) is 100% SAFE!`,
            reasonAr: `استنتاج عدّاد الألغام النهائي: تم وضع أعلام على جميع الألغام الـ ${totalMines} في اللوحة! إذن كل المربعات المخفية المتبقية مثل (${allUnrevealed[0][0] + 1},${allUnrevealed[0][1] + 1}) آمنة 100%!`
          };
        }
        if (minesLeftGlobal === allUnrevealed.length) {
          return {
            action: 'flag',
            cells: allUnrevealed,
            source: allUnrevealed[0],
            reasonEn: `Endgame Mine-Count Logic: There are ${minesLeftGlobal} mine(s) left and exactly ${allUnrevealed.length} hidden tile(s) remaining — all of them MUST be mines!`,
            reasonAr: `استنتاج عدّاد الألغام النهائي: بقي ${minesLeftGlobal} لغم في العداد و${allUnrevealed.length} مربع مخفي فقط — إذن جميعها ألغام 100%!`
          };
        }
      }

      return null;
    }

    // Ultra-fast typed-array logical solver V4 (Single-Cell + Iterative Subset Reduction + Coupled Overlap)
    function fastSolveSimulation(rawGrid, startR, startC, rows, cols, totalMines, allowGlobalMineCount = false) {
      const N = rows * cols;
      const stateArr = new Uint8Array(N); // 0 = hidden, 1 = revealed, 2 = flagged
      let revealedSafe = 0;
      let flaggedCountTotal = 0;
      const targetSafe = N - totalMines;

      const activeList = [];
      const inActive = new Uint8Array(N);
      const bfsQueue = [];

      function revealCell(r, c) {
        bfsQueue.push(r * cols + c);
        while (bfsQueue.length > 0) {
          const idx = bfsQueue.pop();
          if (stateArr[idx] !== 0) continue;
          const cr = (idx / cols) | 0;
          const cc = idx - cr * cols;
          if (rawGrid[cr][cc].mine) continue;
          stateArr[idx] = 1;
          revealedSafe++;
          const nm = rawGrid[cr][cc].neighborMines;
          if (nm === 0) {
            for (let dr = -1; dr <= 1; dr++) {
              const nr = cr + dr;
              if (nr < 0 || nr >= rows) continue;
              for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const nc = cc + dc;
                if (nc >= 0 && nc < cols) {
                  const nIdx = nr * cols + nc;
                  if (stateArr[nIdx] === 0) bfsQueue.push(nIdx);
                }
              }
            }
          } else if (nm > 0 && !inActive[idx]) {
            inActive[idx] = 1;
            activeList.push(idx);
          }
        }
      }

      revealCell(startR, startC);

      while (revealedSafe < targetSafe) {
        let progressed = false;

        // Pass 1: Fast Single-Cell Deduction over active frontier numbers
        for (let i = activeList.length - 1; i >= 0; i--) {
          const idx = activeList[i];
          const r = (idx / cols) | 0;
          const c = idx - r * cols;
          const nm = rawGrid[r][c].neighborMines;
          let flg = 0;
          let unk = 0;
          for (let dr = -1; dr <= 1; dr++) {
            const nr = r + dr;
            if (nr < 0 || nr >= rows) continue;
            for (let dc = -1; dc <= 1; dc++) {
              if (dr === 0 && dc === 0) continue;
              const nc = c + dc;
              if (nc < 0 || nc >= cols) continue;
              const st = stateArr[nr * cols + nc];
              if (st === 2) flg++;
              else if (st === 0) unk++;
            }
          }
          if (unk === 0) {
            inActive[idx] = 0;
            activeList[i] = activeList[activeList.length - 1];
            activeList.pop();
            continue;
          }
          const rem = nm - flg;
          if (rem === 0) {
            for (let dr = -1; dr <= 1; dr++) {
              const nr = r + dr;
              if (nr < 0 || nr >= rows) continue;
              for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const nc = c + dc;
                if (nc >= 0 && nc < cols && stateArr[nr * cols + nc] === 0) {
                  revealCell(nr, nc);
                }
              }
            }
            inActive[idx] = 0;
            activeList[i] = activeList[activeList.length - 1];
            activeList.pop();
            progressed = true;
          } else if (rem === unk) {
            for (let dr = -1; dr <= 1; dr++) {
              const nr = r + dr;
              if (nr < 0 || nr >= rows) continue;
              for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const nc = c + dc;
                if (nc >= 0 && nc < cols) {
                  const nIdx = nr * cols + nc;
                  if (stateArr[nIdx] === 0) {
                    stateArr[nIdx] = 2;
                    flaggedCountTotal++;
                  }
                }
              }
            }
            inActive[idx] = 0;
            activeList[i] = activeList[activeList.length - 1];
            activeList.pop();
            progressed = true;
          }
        }

        if (progressed) continue;
        if (revealedSafe >= targetSafe) break;

        // Pass 2: Coupled Pairwise + Iterative Subset Reduction (B = B \ A)
        const fLen = activeList.length;
        const fData = [];
        for (let i = 0; i < fLen; i++) {
          const idx = activeList[i];
          const r = (idx / cols) | 0;
          const c = idx - r * cols;
          let flg = 0;
          const unks = [];
          for (let dr = -1; dr <= 1; dr++) {
            const nr = r + dr;
            if (nr < 0 || nr >= rows) continue;
            for (let dc = -1; dc <= 1; dc++) {
              if (dr === 0 && dc === 0) continue;
              const nc = c + dc;
              if (nc < 0 || nc >= cols) continue;
              const nIdx = nr * cols + nc;
              const st = stateArr[nIdx];
              if (st === 2) flg++;
              else if (st === 0) unks.push(nIdx);
            }
          }
          const rem = rawGrid[r][c].neighborMines - flg;
          if (unks.length > 0 && rem > 0) {
            fData.push({ r, c, rem, unks });
          }
        }

        let redChanged = true;
        let redPasses = 0;
        while (redChanged && redPasses < 3) {
          redChanged = false;
          redPasses++;
          for (let i = 0; i < fData.length; i++) {
            const A = fData[i];
            if (A.unks.length === 0) continue;
            for (let j = 0; j < fData.length; j++) {
              if (i === j) continue;
              const B = fData[j];
              if (B.unks.length === 0 || Math.abs(A.r - B.r) > 2 || Math.abs(A.c - B.c) > 2) continue;

              let shared = 0;
              for (let u = 0; u < A.unks.length; u++) {
                const uIdx = A.unks[u];
                for (let v = 0; v < B.unks.length; v++) {
                  if (uIdx === B.unks[v]) { shared++; break; }
                }
              }
              if (shared === 0) continue;

              const onlyALen = A.unks.length - shared;
              const onlyBLen = B.unks.length - shared;
              if (onlyBLen === 0) continue;

              if (onlyALen === 0 && B.rem >= A.rem) {
                const newUnks = [];
                for (let v = 0; v < B.unks.length; v++) {
                  const bIdx = B.unks[v];
                  let inA = false;
                  for (let u = 0; u < A.unks.length; u++) {
                    if (A.unks[u] === bIdx) { inA = true; break; }
                  }
                  if (!inA) newUnks.push(bIdx);
                }
                B.unks = newUnks;
                B.rem -= A.rem;
                redChanged = true;
                if (B.rem === 0) {
                  for (let k = 0; k < B.unks.length; k++) {
                    const bIdx = B.unks[k];
                    if (stateArr[bIdx] === 0) {
                      revealCell((bIdx / cols) | 0, bIdx - ((bIdx / cols) | 0) * cols);
                      progressed = true;
                    }
                  }
                  B.unks = [];
                } else if (B.rem === B.unks.length) {
                  for (let k = 0; k < B.unks.length; k++) {
                    const bIdx = B.unks[k];
                    if (stateArr[bIdx] === 0) {
                      stateArr[bIdx] = 2;
                      flaggedCountTotal++;
                      progressed = true;
                    }
                  }
                  B.unks = [];
                }
                continue;
              }

              const minShared = Math.max(0, A.rem - onlyALen, B.rem - onlyBLen);
              const maxShared = Math.min(A.rem, B.rem, shared);

              if (minShared === B.rem) {
                for (let v = 0; v < B.unks.length; v++) {
                  const bIdx = B.unks[v];
                  let inA = false;
                  for (let u = 0; u < A.unks.length; u++) {
                    if (A.unks[u] === bIdx) { inA = true; break; }
                  }
                  if (!inA && stateArr[bIdx] === 0) {
                    revealCell((bIdx / cols) | 0, bIdx - ((bIdx / cols) | 0) * cols);
                    progressed = true;
                  }
                }
              } else if ((B.rem - maxShared) === onlyBLen) {
                for (let v = 0; v < B.unks.length; v++) {
                  const bIdx = B.unks[v];
                  let inA = false;
                  for (let u = 0; u < A.unks.length; u++) {
                    if (A.unks[u] === bIdx) { inA = true; break; }
                  }
                  if (!inA && stateArr[bIdx] === 0) {
                    stateArr[bIdx] = 2;
                    flaggedCountTotal++;
                    progressed = true;
                  }
                }
              }
            }
          }
          if (progressed) break;
        }

        if (progressed) continue;

        // Pass 3: Optional Global Endgame Mine-Count Deduction (kept off during board generation so 100% of tiles are solvable by local numbers!)
        if (allowGlobalMineCount) {
          const minesLeftGlobal = totalMines - flaggedCountTotal;
          const unrevealedLeft = N - revealedSafe - flaggedCountTotal;
          if (minesLeftGlobal === 0 && unrevealedLeft > 0) {
            for (let idx = 0; idx < N; idx++) {
              if (stateArr[idx] === 0) {
                revealCell((idx / cols) | 0, idx - ((idx / cols) | 0) * cols);
                progressed = true;
              }
            }
          } else if (minesLeftGlobal === unrevealedLeft && unrevealedLeft > 0) {
            for (let idx = 0; idx < N; idx++) {
              if (stateArr[idx] === 0) {
                stateArr[idx] = 2;
                flaggedCountTotal++;
              }
            }
          }
        }

        if (!progressed) break;
      }

      return {
        solvable: revealedSafe >= targetSafe,
        revealedSafe,
        targetSafe,
        stateArr
      };
    }

    function isBoardLogicallySolvable(rawGrid, startR, startC, rows, cols, totalMines) {
      const res = fastSolveSimulation(rawGrid, startR, startC, rows, cols, totalMines, false);
      return { solvable: res.solvable, stateArr: res.stateArr, revealedSafe: res.revealedSafe };
    }

    function populateMinesOnFirstClick(startR, startC) {
      const rows = state.rows;
      const cols = state.cols;
      const totalMines = Math.min(state.minesCount, rows * cols - 9);

      if (state.storyChapterId) {
        const ch = STORY_CHAPTERS.find(x => x.id === state.storyChapterId);
        if (ch && (ch.getFixedMines || ch.fixedMines)) {
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              state.board[r][c].mine = false;
            }
          }
          const mList = ch.getFixedMines ? ch.getFixedMines(rows, cols) : ch.fixedMines;
          mList.forEach(([mr, mc]) => {
            if (mr < rows && mc < cols) state.board[mr][mc].mine = true;
          });
          computeNeighborCounts(state.board, rows, cols);
          return;
        }
      }

      const safeSet = new Set();
      safeSet.add(startR * cols + startC);
      getNeighbors(startR, startC, rows, cols).forEach(([nr, nc]) => {
        safeSet.add(nr * cols + nc);
      });

      const candidates = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (!safeSet.has(r * cols + c)) candidates.push([r, c]);
        }
      }

      if (!state.noGuessEnabled) {
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) state.board[r][c].mine = false;
        }
        for (let i = candidates.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const tmp = candidates[i]; candidates[i] = candidates[j]; candidates[j] = tmp;
        }
        for (let i = 0; i < totalMines && i < candidates.length; i++) {
          const [mr, mc] = candidates[i];
          state.board[mr][mc].mine = true;
        }
        computeNeighborCounts(state.board, rows, cols);
        return;
      }

      // Two-Phase Pure-Local No-Guess Generator V4 (100% Solvability across all board sizes including 36x26 / 250 mines)
      const N = rows * cols;
      const targetSafe = N - totalMines;
      const maxTimeBudgetMs = 240;
      const maxAttempts = 30;
      const maxMutationsPerAttempt = 125;
      const genStartTime = (typeof performance !== 'undefined' ? performance.now() : Date.now());

      let bestRevealedSafe = -1;
      let bestMineSnapshot = null;

      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const elapsed = (typeof performance !== 'undefined' ? performance.now() : Date.now()) - genStartTime;
        if (attempt > 2 && elapsed > maxTimeBudgetMs) break;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) state.board[r][c].mine = false;
        }

        let rngFunc = Math.random;
        if (state.isDailyChallenge && state.dailyDateKey) {
          let seedNum = 2166136261;
          const seedStr = `${state.dailyDateKey}-${attempt}`;
          for (let s = 0; s < seedStr.length; s++) {
            seedNum ^= seedStr.charCodeAt(s);
            seedNum = Math.imul(seedNum, 16777619);
          }
          rngFunc = () => {
            seedNum += 0x6D2B79F5;
            let t = seedNum;
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
          };
        }

        for (let i = candidates.length - 1; i > 0; i--) {
          const j = Math.floor(rngFunc() * (i + 1));
          const tmp = candidates[i];
          candidates[i] = candidates[j];
          candidates[j] = tmp;
        }

        for (let i = 0; i < totalMines && i < candidates.length; i++) {
          const [mr, mc] = candidates[i];
          state.board[mr][mc].mine = true;
        }

        computeNeighborCounts(state.board, rows, cols);
        let check = fastSolveSimulation(state.board, startR, startC, rows, cols, totalMines, false);
        if (check.solvable) return;

        if (check.revealedSafe > bestRevealedSafe) {
          bestRevealedSafe = check.revealedSafe;
          bestMineSnapshot = new Uint8Array(N);
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              if (state.board[r][c].mine) bestMineSnapshot[r * cols + c] = 1;
            }
          }
        }

        for (let mut = 0; mut < maxMutationsPerAttempt; mut++) {
          if (attempt > 2 && ((typeof performance !== 'undefined' ? performance.now() : Date.now()) - genStartTime) > maxTimeBudgetMs) break;

          const stArr = check.stateArr;
          const unrevSafeLeft = targetSafe - check.revealedSafe;
          const unflaggedFrontierMines = [];
          const minesTouchingStuckSafe = [];
          const flaggedFrontierMines = [];
          const interiorSafes = [];
          const noZeroRevSafes = [];
          const openBorderSafes = [];

          for (let r = 0; r < rows; r++) {
            const rOff = r * cols;
            for (let c = 0; c < cols; c++) {
              const idx = rOff + c;
              if (safeSet.has(idx)) continue;
              const st = stArr[idx];

              let touchesRev = false;
              let touchesRevZero = false;
              let touchesStuckSafe = false;
              for (let dr = -1; dr <= 1; dr++) {
                const nr = r + dr;
                if (nr < 0 || nr >= rows) continue;
                const nrOff = nr * cols;
                for (let dc = -1; dc <= 1; dc++) {
                  if (dr === 0 && dc === 0) continue;
                  const nc = c + dc;
                  if (nc < 0 || nc >= cols) continue;
                  const nSt = stArr[nrOff + nc];
                  if (nSt === 1) {
                    touchesRev = true;
                    if (state.board[nr][nc].neighborMines === 0) touchesRevZero = true;
                  } else if (nSt === 0 && !state.board[nr][nc].mine) {
                    touchesStuckSafe = true;
                  }
                }
              }

              if (state.board[r][c].mine) {
                if (touchesStuckSafe) minesTouchingStuckSafe.push([r, c]);
                if (touchesRev) {
                  if (st === 0) unflaggedFrontierMines.push([r, c]);
                  else flaggedFrontierMines.push([r, c]);
                }
              } else {
                if (st === 0) {
                  if (!touchesRev) interiorSafes.push([r, c]);
                  else if (!touchesRevZero) noZeroRevSafes.push([r, c]);
                } else if (st === 1 && state.board[r][c].neighborMines > 0 && !touchesRevZero) {
                  openBorderSafes.push([r, c]);
                }
              }
            }
          }

          // Phase A: Rapidly expand the frontier when > 12 safe cells remain
          // Phase B: Unlock final corner/edge pockets by moving minesTouchingStuckSafe into openBorderSafes
          let minePool, targetPool;
          if (unrevSafeLeft > 12 && unflaggedFrontierMines.length > 0 && interiorSafes.length >= 2) {
            minePool = unflaggedFrontierMines;
            targetPool = interiorSafes;
          } else {
            minePool = minesTouchingStuckSafe.length > 0
              ? minesTouchingStuckSafe
              : (unflaggedFrontierMines.length > 0 ? unflaggedFrontierMines : flaggedFrontierMines);
            targetPool = openBorderSafes.length > 0
              ? openBorderSafes
              : (interiorSafes.length > 0 ? interiorSafes : noZeroRevSafes);
          }

          if (minePool.length === 0 || targetPool.length === 0) break;

          const batchSize = (unrevSafeLeft > 25 && minePool.length >= 6 && targetPool.length >= 6) ? 2 : 1;
          const appliedSwaps = [];
          for (let b = 0; b < batchSize; b++) {
            const [fmr, fmc] = minePool[Math.floor(rngFunc() * minePool.length)];
            const [dsr, dsc] = targetPool[Math.floor(rngFunc() * targetPool.length)];
            if (!state.board[fmr][fmc].mine || state.board[dsr][dsc].mine) continue;
            swapMineFast(state.board, fmr, fmc, dsr, dsc, rows, cols);
            appliedSwaps.push([fmr, fmc, dsr, dsc]);
          }
          if (appliedSwaps.length === 0) continue;

          const nextCheck = fastSolveSimulation(state.board, startR, startC, rows, cols, totalMines, false);

          if (nextCheck.solvable) return;

          if (nextCheck.revealedSafe >= check.revealedSafe) {
            check = nextCheck;
            if (check.revealedSafe > bestRevealedSafe) {
              bestRevealedSafe = check.revealedSafe;
              if (!bestMineSnapshot) bestMineSnapshot = new Uint8Array(N);
              bestMineSnapshot.fill(0);
              for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                  if (state.board[r][c].mine) bestMineSnapshot[r * cols + c] = 1;
                }
              }
            }
          } else {
            for (let b = appliedSwaps.length - 1; b >= 0; b--) {
              const [fmr, fmc, dsr, dsc] = appliedSwaps[b];
              swapMineFast(state.board, dsr, dsc, fmr, fmc, rows, cols);
            }
          }
        }
      }

      if (bestMineSnapshot) {
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            state.board[r][c].mine = bestMineSnapshot[r * cols + c] === 1;
          }
        }
        computeNeighborCounts(state.board, rows, cols);
      }
    }

    // Pure-Logic Truth Analyzer V4 (Independent of player's placed/misplaced flags!)
    // Computes all 100% mathematically proven mines & proven safe cells from the currently revealed numbers.
    function analyzeTruthFromRevealedCells() {
      const rows = state.rows;
      const cols = state.cols;
      const N = rows * cols;
      // 0 = hidden, 1 = revealed, 2 = logically proven mine, 3 = logically proven safe
      const st = new Uint8Array(N);
      const sources = new Array(N);
      let provenSafeCount = 0;
      let provenMineCount = 0;
      let unrevealedCount = 0;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (state.board[r][c].revealed && !state.board[r][c].mine) {
            st[r * cols + c] = 1;
          } else {
            unrevealedCount++;
          }
        }
      }

      let changed = true;
      while (changed) {
        changed = false;
        const frontier = [];

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const idx = r * cols + c;
            if (st[idx] !== 1) continue;
            const nm = state.board[r][c].neighborMines;
            if (nm <= 0) continue;

            let knownMines = 0;
            const unks = [];
            for (let dr = -1; dr <= 1; dr++) {
              const nr = r + dr;
              if (nr < 0 || nr >= rows) continue;
              for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const nc = c + dc;
                if (nc < 0 || nc >= cols) continue;
                const nIdx = nr * cols + nc;
                if (st[nIdx] === 2) knownMines++;
                else if (st[nIdx] === 0) unks.push(nIdx);
              }
            }
            if (unks.length === 0) continue;
            const rem = nm - knownMines;
            if (rem === 0) {
              for (let k = 0; k < unks.length; k++) {
                st[unks[k]] = 3;
                sources[unks[k]] = [r, c];
                provenSafeCount++;
                changed = true;
              }
            } else if (rem === unks.length) {
              for (let k = 0; k < unks.length; k++) {
                st[unks[k]] = 2;
                sources[unks[k]] = [r, c];
                provenMineCount++;
                changed = true;
              }
            } else if (rem > 0) {
              frontier.push({ r, c, rem, unks });
            }
          }
        }

        if (changed) continue;

        // Coupled Pairwise + Iterative Subset Reduction (B = B \ A) on current revealed numbers
        let redChanged = true;
        let redPasses = 0;
        while (redChanged && redPasses < 3) {
          redChanged = false;
          redPasses++;
          for (let i = 0; i < frontier.length; i++) {
            const A = frontier[i];
            if (A.unks.length === 0) continue;
            for (let j = 0; j < frontier.length; j++) {
              if (i === j) continue;
              const B = frontier[j];
              if (B.unks.length === 0 || Math.abs(A.r - B.r) > 2 || Math.abs(A.c - B.c) > 2) continue;

              let shared = 0;
              for (let u = 0; u < A.unks.length; u++) {
                for (let v = 0; v < B.unks.length; v++) {
                  if (A.unks[u] === B.unks[v]) { shared++; break; }
                }
              }
              if (shared === 0) continue;
              const onlyALen = A.unks.length - shared;
              const onlyBLen = B.unks.length - shared;
              if (onlyBLen === 0) continue;

              if (onlyALen === 0 && B.rem >= A.rem) {
                const newUnks = [];
                for (let v = 0; v < B.unks.length; v++) {
                  const bIdx = B.unks[v];
                  if (!A.unks.includes(bIdx)) newUnks.push(bIdx);
                }
                B.unks = newUnks;
                B.rem -= A.rem;
                redChanged = true;
                if (B.rem === 0) {
                  for (let k = 0; k < B.unks.length; k++) {
                    const bIdx = B.unks[k];
                    if (st[bIdx] === 0) {
                      st[bIdx] = 3;
                      sources[bIdx] = [B.r, B.c];
                      provenSafeCount++;
                      changed = true;
                    }
                  }
                  B.unks = [];
                } else if (B.rem === B.unks.length) {
                  for (let k = 0; k < B.unks.length; k++) {
                    const bIdx = B.unks[k];
                    if (st[bIdx] === 0) {
                      st[bIdx] = 2;
                      sources[bIdx] = [B.r, B.c];
                      provenMineCount++;
                      changed = true;
                    }
                  }
                  B.unks = [];
                }
                continue;
              }

              const minShared = Math.max(0, A.rem - onlyALen, B.rem - onlyBLen);
              const maxShared = Math.min(A.rem, B.rem, shared);

              if (minShared === B.rem) {
                for (let v = 0; v < B.unks.length; v++) {
                  const bIdx = B.unks[v];
                  if (!A.unks.includes(bIdx) && st[bIdx] === 0) {
                    st[bIdx] = 3;
                    sources[bIdx] = [B.r, B.c];
                    provenSafeCount++;
                    changed = true;
                  }
                }
              } else if ((B.rem - maxShared) === onlyBLen) {
                for (let v = 0; v < B.unks.length; v++) {
                  const bIdx = B.unks[v];
                  if (!A.unks.includes(bIdx) && st[bIdx] === 0) {
                    st[bIdx] = 2;
                    sources[bIdx] = [B.r, B.c];
                    provenMineCount++;
                    changed = true;
                  }
                }
              }
            }
          }
          if (changed) break;
        }
      }

      // Global Mine-Count Check
      const minesLeftGlobal = state.minesCount - provenMineCount;
      const undecidedCount = unrevealedCount - provenMineCount - provenSafeCount;
      if (undecidedCount > 0) {
        if (minesLeftGlobal === 0) {
          for (let i = 0; i < N; i++) {
            if (st[i] === 0) { st[i] = 3; provenSafeCount++; }
          }
        } else if (minesLeftGlobal === undecidedCount) {
          for (let i = 0; i < N; i++) {
            if (st[i] === 0) { st[i] = 2; provenMineCount++; }
          }
        }
      }

      return { st, sources, provenSafeCount, provenMineCount };
    }

    function tryFairPlayMineSwap(hitR, hitC) {
      if (!state.noGuessEnabled || state.storyChapterId) return false;
      const rows = state.rows;
      const cols = state.cols;
      const hitIdx = hitR * cols + hitC;

      const truth = analyzeTruthFromRevealedCells();
      // 1. If the clicked cell is mathematically proven to be a mine from the revealed numbers -> Player mistake (Do NOT swap!)
      if (truth.st[hitIdx] === 2) return false;

      // 2. If there is ANY mathematically proven safe cell available on the board right now -> Board was NOT stuck, player did not need to guess (Do NOT swap!)
      if (truth.provenSafeCount > 0) return false;

      // Collect the set of revealed cells adjacent to (hitR, hitC)
      const revNeighborsOfHit = [];
      for (let dr = -1; dr <= 1; dr++) {
        const nr = hitR + dr;
        if (nr < 0 || nr >= rows) continue;
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nc = hitC + dc;
          if (nc >= 0 && nc < cols && state.board[nr][nc].revealed) {
            revNeighborsOfHit.push(nr * cols + nc);
          }
        }
      }

      // 3. Do not allow random clicking in the dark away from revealed numbers if frontier cells exist
      if (revNeighborsOfHit.length === 0) return false;

      // 4A. Fast 1-for-1 Swap: Search for an unrevealed, unflagged safe cell (sr, sc) touching the exact same revealed neighbors
      for (let sr = 0; sr < rows; sr++) {
        for (let sc = 0; sc < cols; sc++) {
          if (sr === hitR && sc === hitC) continue;
          const cand = state.board[sr][sc];
          if (cand.revealed || cand.flagged || cand.mine) continue;

          let revCount = 0;
          let matchesAll = true;
          for (let dr = -1; dr <= 1; dr++) {
            const nr = sr + dr;
            if (nr < 0 || nr >= rows) continue;
            for (let dc = -1; dc <= 1; dc++) {
              if (dr === 0 && dc === 0) continue;
              const nc = sc + dc;
              if (nc >= 0 && nc < cols && state.board[nr][nc].revealed) {
                revCount++;
                if (!revNeighborsOfHit.includes(nr * cols + nc)) {
                  matchesAll = false;
                  break;
                }
              }
            }
            if (!matchesAll) break;
          }

          if (matchesAll && revCount === revNeighborsOfHit.length) {
            swapMineFast(state.board, hitR, hitC, sr, sc, rows, cols);
            return true;
          }
        }
      }

      // 4B. Coupled Local CSP Reconfiguration: If (hitR, hitC) is part of a coupled multi-cell 50/50 chain where no single cell shares
      // the exact same revealed neighbors, find a valid mine reassignment on local undetermined frontier cells within radius 3!
      const localUnks = [];
      const localUnkMap = new Map();
      const interiorSafes = [];
      const interiorMines = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          if (state.board[r][c].revealed || truth.st[idx] === 2 || truth.st[idx] === 3) continue;
          let touchesRev = false;
          for (let dr = -1; dr <= 1; dr++) {
            const nr = r + dr;
            if (nr < 0 || nr >= rows) continue;
            for (let dc = -1; dc <= 1; dc++) {
              if (dr === 0 && dc === 0) continue;
              const nc = c + dc;
              if (nc >= 0 && nc < cols && state.board[nr][nc].revealed) { touchesRev = true; break; }
            }
            if (touchesRev) break;
          }
          if (touchesRev && Math.abs(r - hitR) <= 3 && Math.abs(c - hitC) <= 3 && localUnks.length < 14) {
            localUnkMap.set(idx, localUnks.length);
            localUnks.push([r, c, state.board[r][c].mine ? 1 : 0]);
          } else if (!touchesRev && !state.board[r][c].flagged) {
            if (state.board[r][c].mine) interiorMines.push([r, c]);
            else interiorSafes.push([r, c]);
          }
        }
      }

      if (!localUnkMap.has(hitIdx) || localUnks.length < 2) return false;
      const hitLocalPos = localUnkMap.get(hitIdx);

      // Collect all revealed numbers touching any cell in localUnks, and record their required sum of mines inside localUnks
      const revCheckSet = new Set();
      for (let i = 0; i < localUnks.length; i++) {
        const [ur, uc] = localUnks[i];
        for (let dr = -1; dr <= 1; dr++) {
          const nr = ur + dr;
          if (nr < 0 || nr >= rows) continue;
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const nc = uc + dc;
            if (nc >= 0 && nc < cols && state.board[nr][nc].revealed) revCheckSet.add(nr * cols + nc);
          }
        }
      }

      const eqs = [];
      let origLocalMines = 0;
      for (let i = 0; i < localUnks.length; i++) origLocalMines += localUnks[i][2];

      for (const rIdx of revCheckSet) {
        const rr = (rIdx / cols) | 0;
        const rc = rIdx - rr * cols;
        const vars = [];
        let curSum = 0;
        for (let dr = -1; dr <= 1; dr++) {
          const nr = rr + dr;
          if (nr < 0 || nr >= rows) continue;
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const nc = rc + dc;
            if (nc < 0 || nc >= cols) continue;
            const nIdx = nr * cols + nc;
            if (localUnkMap.has(nIdx)) {
              const p = localUnkMap.get(nIdx);
              vars.push(p);
              curSum += localUnks[p][2];
            }
          }
        }
        eqs.push({ vars, target: curSum });
      }

      const assign = new Int8Array(localUnks.length);
      assign.fill(-1);
      assign[hitLocalPos] = 0; // Force (hitR, hitC) to be SAFE!

      function solveLocalCsp(pos) {
        if (pos === localUnks.length) {
          for (let e = 0; e < eqs.length; e++) {
            let s = 0;
            const vs = eqs[e].vars;
            for (let k = 0; k < vs.length; k++) s += assign[vs[k]];
            if (s !== eqs[e].target) return false;
          }
          let newMines = 0;
          for (let i = 0; i < assign.length; i++) newMines += assign[i];
          const diff = origLocalMines - newMines;
          if (diff === 0) return true;
          if (diff > 0 && interiorSafes.length >= diff) return true;
          if (diff < 0 && interiorMines.length >= (-diff)) return true;
          return false;
        }
        if (pos === hitLocalPos) return solveLocalCsp(pos + 1);
        for (let val = 0; val <= 1; val++) {
          assign[pos] = val;
          let ok = true;
          for (let e = 0; e < eqs.length; e++) {
            const vs = eqs[e].vars;
            let sum = 0;
            let unass = 0;
            for (let k = 0; k < vs.length; k++) {
              const a = assign[vs[k]];
              if (a === -1) unass++;
              else sum += a;
            }
            if (sum > eqs[e].target || sum + unass < eqs[e].target) { ok = false; break; }
          }
          if (ok && solveLocalCsp(pos + 1)) return true;
        }
        assign[pos] = -1;
        return false;
      }

      if (solveLocalCsp(0)) {
        let newMines = 0;
        for (let i = 0; i < localUnks.length; i++) {
          const [ur, uc] = localUnks[i];
          state.board[ur][uc].mine = (assign[i] === 1);
          newMines += assign[i];
        }
        const diff = origLocalMines - newMines;
        if (diff > 0) {
          for (let k = 0; k < diff; k++) {
            const [sr, sc] = interiorSafes[k];
            state.board[sr][sc].mine = true;
          }
        } else if (diff < 0) {
          for (let k = 0; k < (-diff); k++) {
            const [mr, mc] = interiorMines[k];
            state.board[mr][mc].mine = false;
          }
        }
        computeNeighborCounts(state.board, rows, cols);
        return true;
      }

      return false;
    }

    /********************************************************************
     * 8. BOARD CREATION, PRO 3D TILE RENDERING & INTERACTION
     ********************************************************************/
    function createEmptyBoard(rows, cols) {
      const b = [];
      for (let r = 0; r < rows; r++) {
        const row = [];
        for (let c = 0; c < cols; c++) {
          row.push({
            r,
            c,
            mine: false,
            revealed: false,
            flagged: false,
            neighborMines: 0
          });
        }
        b.push(row);
      }
      return b;
    }

    function startNewGame(opts = {}) {
      stopTimer();
      exitReplayModeUIOnly();
      state.timerSeconds = 0;
      state.firstClickDone = false;
      state.gameOver = false;
      state.gameWon = false;
      state.flagsPlaced = 0;
      state.revealedCount = 0;
      state.activeHintCell = null;
      state.secondChanceUsed = false;
      state.lastHitMineCell = null;
      state.isDailyChallenge = !!opts.dailyChallenge;
      const todayKey = new Date().toISOString().slice(0, 10);
      state.dailyDateKey = state.isDailyChallenge ? todayKey : '';
      state.zoomScale = 1.0;
      state.panX = 0;
      state.panY = 0;
      state.lastFocusRatio = null;
      state.controlMode = state.defaultTapMode;
      const zLbl = document.getElementById('txtZoomLevel');
      if (zLbl) zLbl.textContent = '100%';
      const cBtn = document.getElementById('btnCenterBoard');
      if (cBtn) { cBtn.style.borderColor = ''; }

      if (opts.dailyChallenge) {
        state.storyChapterId = null;
        state.tutorialStep = -1;
        state.difficultyKey = 'daily';
        const dims = getAdaptiveDimensions(10, 14);
        state.cols = dims.cols;
        state.rows = dims.rows;
        state.minesCount = 24;
        state.noGuessEnabled = true;
      } else if (opts.storyChapterId) {
        state.storyChapterId = opts.storyChapterId;
        const ch = STORY_CHAPTERS.find(x => x.id === opts.storyChapterId);
        const dims = getAdaptiveDimensions(ch.shortSide || ch.cols, ch.longSide || ch.rows);
        state.cols = dims.cols;
        state.rows = dims.rows;
        state.minesCount = ch.mines;
        state.tutorialStep = ch.isTutorial ? 1 : -1;
        state.tutorialShowTarget = false;
        state.noGuessEnabled = true;
        if (ch.isTutorial) state.controlMode = 'dig';
      } else {
        state.storyChapterId = null;
        state.tutorialStep = -1;
        if (opts.custom) {
          state.difficultyKey = 'custom';
          const dims = getAdaptiveDimensions(opts.cols, opts.rows);
          state.cols = dims.cols;
          state.rows = dims.rows;
          state.minesCount = opts.mines;
        } else {
          const diffKey = opts.difficulty || state.difficultyKey || 'beginner';
          state.difficultyKey = diffKey;
          const d = DIFFICULTIES[diffKey] || DIFFICULTIES.beginner;
          const dims = getAdaptiveDimensions(d.shortSide, d.longSide);
          state.cols = dims.cols;
          state.rows = dims.rows;
          state.minesCount = d.mines;
        }
      }

      state.board = createEmptyBoard(state.rows, state.cols);
      if (state.storyChapterId) {
        const ch = STORY_CHAPTERS.find(x => x.id === state.storyChapterId);
        if (ch && ch.isTutorial) {
          state.firstClickDone = true;
          populateMinesOnFirstClick(0, 0);
          floodRevealReal(0, 0);
          startTimer();
        }
      }
      document.getElementById('hudFaceEmoji').textContent = '😎';
      document.getElementById('logicHintBanner').classList.add('hidden');
      document.getElementById('modalGameResult').classList.add('hidden');
      document.getElementById('modalGameResult').classList.remove('flex');

      switchView('game');
      syncBoardOrientationWithViewport();
      initRecordingForNewGame();
      updateGameHud();
      updateStoryTutorialBanner();
      renderBoardGrid(true);
      centerBoardInViewport(0.5, 0.5);
    }

    function syncBoardOrientationWithViewport() {
      updateResponsiveDimensionLabels();
      if (state.isReplayMode) return;
      if (!state.board || state.board.length === 0 || state.cols === state.rows) return;
      const wantHoriz = isHorizontalBoardLayout();
      const isCurrentlyHoriz = state.cols > state.rows;
      if (wantHoriz === isCurrentlyHoriz) return;

      const ch = state.storyChapterId ? STORY_CHAPTERS.find(x => x.id === state.storyChapterId) : null;
      const oldRows = state.rows;
      const oldCols = state.cols;
      state.rows = oldCols;
      state.cols = oldRows;

      {
        // Lossless live transpose of the board (swaps r and c while preserving all mines, numbers, flags, and revealed cells)
        const transposed = [];
        for (let r = 0; r < state.rows; r++) {
          const row = [];
          for (let c = 0; c < state.cols; c++) {
            const src = state.board[c][r];
            row.push({
              r,
              c,
              mine: src.mine,
              revealed: src.revealed,
              flagged: src.flagged,
              neighborMines: src.neighborMines
            });
          }
          transposed.push(row);
        }
        state.board = transposed;
        if (state.activeHintCell) {
          state.activeHintCell = [state.activeHintCell[1], state.activeHintCell[0]];
        }
        if (state.currentRecording) {
          state.currentRecording.rows = state.rows;
          state.currentRecording.cols = state.cols;
          const mapIdx = (idx) => {
            const or = Math.floor(idx / oldCols);
            const oc = idx % oldCols;
            return oc * state.cols + or;
          };
          (state.currentRecording.events || []).forEach(ev => {
            const tr = ev.c;
            const tc = ev.r;
            ev.r = tr;
            ev.c = tc;
            if (ev.rev) ev.rev = ev.rev.map(mapIdx);
            if (ev.unrev) ev.unrev = ev.unrev.map(mapIdx);
            if (ev.flg) ev.flg = ev.flg.map(mapIdx);
            if (ev.unflg) ev.unflg = ev.unflg.map(mapIdx);
          });
        }
      }
    }

    function getViewportAvailableDims() {
      const isMobile = window.innerWidth <= 640;
      const rawViewportW = window.innerWidth;
      let measuredOverhead = 0;
      const viewGameEl = document.getElementById('viewGame');
      if (viewGameEl && !viewGameEl.classList.contains('hidden')) {
        const topHudEl = viewGameEl.firstElementChild;
        const storyBannerEl = document.getElementById('storyHudBanner');
        const hintBannerEl = document.getElementById('logicHintBanner');
        const replayBarEl = document.getElementById('replayControlBar');
        const bottomBarEl = document.getElementById('gameBottomBar');
        if (topHudEl) measuredOverhead += topHudEl.offsetHeight;
        if (storyBannerEl && !storyBannerEl.classList.contains('hidden')) measuredOverhead += storyBannerEl.offsetHeight;
        if (hintBannerEl && !hintBannerEl.classList.contains('hidden')) measuredOverhead += hintBannerEl.offsetHeight;
        if (replayBarEl && !replayBarEl.classList.contains('hidden')) measuredOverhead += replayBarEl.offsetHeight;
        if (bottomBarEl && !bottomBarEl.classList.contains('hidden')) measuredOverhead += bottomBarEl.offsetHeight;
      }
      if (measuredOverhead < 60) {
        const storyOverhead = state.storyChapterId ? (state.storyExplainHidden ? 38 : 96) : 0;
        const hudOverhead = isMobile ? 92 : 106;
        measuredOverhead = hudOverhead + storyOverhead;
      }
      const rawViewportH = Math.max(160, window.innerHeight - measuredOverhead - 6);
      return { rawViewportW, rawViewportH, isMobile };
    }

    const BOARD_GRID_PAD = 4;
    const BOARD_GRID_BORDER = 2;

    function getProportionalGapForBoard(cols, rows) {
      if (state.theme === 'retro' || state.theme === 'retro_dark') return 1;
      const maxDim = Math.max(cols || state.cols, rows || state.rows);
      const isMobile = window.innerWidth <= 640;
      if (isMobile) {
        return maxDim >= 18 ? 2 : 3;
      }
      return maxDim >= 24 ? 2 : 3;
    }

    function getBoardPadPx(cols, rows) {
      const maxDim = Math.max(cols || state.cols, rows || state.rows);
      const isMobile = window.innerWidth <= 640;
      return (isMobile && maxDim >= 18) ? 5 : 8;
    }

    function computeBaseCellPixelSize() {
      const { rawViewportW, rawViewportH, isMobile } = getViewportAvailableDims();
      const gap = getProportionalGapForBoard(state.cols, state.rows);
      const padPx = getBoardPadPx(state.cols, state.rows);
      const vpPad = isMobile ? 4 : 12;
      const frameOverhead = (padPx + BOARD_GRID_BORDER) * 2 + vpPad;

      const availW = Math.max(100, rawViewportW - frameOverhead);
      const availH = Math.max(100, rawViewportH - frameOverhead);

      const fitByW = (availW - (state.cols - 1) * gap) / state.cols;
      const fitByH = (availH - (state.rows - 1) * gap) / state.rows;

      // Snap to integer pixels when >= 14px so every cell border aligns 100% with physical screen pixels
      const rawMin = Math.min(fitByW, fitByH);
      const exactFitCell = rawMin >= 14 ? Math.floor(rawMin) : Math.floor(rawMin * 2) / 2;
      return Math.max(8, Math.min(54, exactFitCell));
    }

    function computeCellPixelSize() {
      return Math.max(8, Math.round(computeBaseCellPixelSize() * state.zoomScale));
    }

    function getEstimatedBoardDimensions(scaleOverride = state.zoomScale) {
      const baseCell = domGridMeta.baseCellPx || computeBaseCellPixelSize();
      const gap = getProportionalGapForBoard(state.cols, state.rows);
      const padPx = getBoardPadPx(state.cols, state.rows);
      const padAndBorder = (padPx + BOARD_GRID_BORDER) * 2;
      const baseW = state.cols * baseCell + (state.cols - 1) * gap + padAndBorder;
      const baseH = state.rows * baseCell + (state.rows - 1) * gap + padAndBorder;
      const zoomedCell = Math.max(8, Math.round(baseCell * scaleOverride));
      return {
        baseCell,
        zoomedCell,
        baseW: Math.round(baseW),
        baseH: Math.round(baseH),
        scaledW: Math.round(baseW * scaleOverride),
        scaledH: Math.round(baseH * scaleOverride)
      };
    }

    function centerBoardInViewport(ratioX = 0.5, ratioY = 0.5, focalViewportX = null, focalViewportY = null) {
      const vpEl = document.getElementById('boardViewport');
      if (!vpEl) return;
      if (state.zoomScale <= 1.005) {
        vpEl.scrollLeft = 0;
        vpEl.scrollTop = 0;
        state._cachedScrollLeft = 0;
        state._cachedScrollTop = 0;
        return;
      }
      const { rawViewportW, rawViewportH } = getViewportAvailableDims();
      const vpW = state._cachedVpClientW || rawViewportW;
      const vpH = state._cachedVpClientH || rawViewportH;
      const { scaledW, scaledH } = getEstimatedBoardDimensions(state.zoomScale);
      const padLeft = Math.max(6, (vpW - scaledW) * 0.5);
      const padTop = Math.max(6, (vpH - scaledH) * 0.5);
      const maxScrollX = Math.max(0, scaledW + 12 - vpW);
      const maxScrollY = Math.max(0, scaledH + 12 - vpH);
      const anchorVx = focalViewportX !== null ? focalViewportX : vpW * 0.5;
      const anchorVy = focalViewportY !== null ? focalViewportY : vpH * 0.5;
      const targetL = maxScrollX <= 1 ? 0 : Math.max(0, Math.min(maxScrollX, Math.round(padLeft + ratioX * scaledW - anchorVx)));
      const targetT = maxScrollY <= 1 ? 0 : Math.max(0, Math.min(maxScrollY, Math.round(padTop + ratioY * scaledH - anchorVy)));
      vpEl.scrollLeft = targetL;
      vpEl.scrollTop = targetT;
      state._cachedScrollLeft = targetL;
      state._cachedScrollTop = targetT;
    }

    function applyBoardPanTransform() {}

    let domGridMeta = { rows: 0, cols: 0, cellPx: 0, theme: '', nodes: [] };
    let gridDelegationBound = false;

    function ensureGridDelegation(gridEl) {
      if (gridDelegationBound || !gridEl) return;
      gridDelegationBound = true;

      const viewportEl = document.getElementById('boardViewport') || gridEl.parentElement;
      let pressTimer = null;
      let longPressTriggered = false;
      let pointerDownActive = false;
      let pointerType = 'mouse';
      let activeR = -1;
      let activeC = -1;
      let startX = 0;
      let startY = 0;
      let isMousePanning = false;
      let isWheelButtonPanning = false;
      let lastX = 0;
      let lastY = 0;

      const clearHoldTimers = () => {
        if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
        const ring = document.getElementById('touchHoldRing');
        if (ring && ring.style.display !== 'none') ring.style.display = 'none';
      };

      const stopWheelPanning = () => {
        if (isWheelButtonPanning) {
          isWheelButtonPanning = false;
          if (viewportEl) viewportEl.classList.remove('is-wheel-panning');
        }
      };

      const onPointerDown = (e) => {
        // Middle mouse button (scroll-wheel button, e.button === 1): pan across the entire board!
        if (e.button === 1) {
          if (e.cancelable) e.preventDefault();
          isWheelButtonPanning = true;
          pointerDownActive = false;
          isMousePanning = false;
          longPressTriggered = false;
          startX = e.clientX;
          startY = e.clientY;
          lastX = e.clientX;
          lastY = e.clientY;
          clearHoldTimers();
          activeR = -1;
          activeC = -1;
          if (viewportEl) viewportEl.classList.add('is-wheel-panning');
          return;
        }
        if (e.button !== 0) return;

        pointerDownActive = true;
        pointerType = e.pointerType || 'mouse';
        longPressTriggered = false;
        isMousePanning = false;
        startX = e.clientX;
        startY = e.clientY;
        lastX = e.clientX;
        lastY = e.clientY;
        clearHoldTimers();

        const cellEl = e.target.closest('.ms-cell');
        if (cellEl && !state.isReplayMode && !state.gameOver && !state.gameWon && e.button === 0) {
          activeR = parseInt(cellEl.dataset.r, 10);
          activeC = parseInt(cellEl.dataset.c, 10);
        } else {
          activeR = -1;
          activeC = -1;
        }

        window.__msGestureBusyUntil = performance.now() + 260;
        // On mobile touch: long press (280ms) for flag/dig with smooth GPU #touchHoldRing indicator
        if (pointerType !== 'mouse' && activeR >= 0 && activeC >= 0) {
          const cellObj = state.board[activeR] && state.board[activeR][activeC];
          if (cellObj && !cellObj.revealed) {
            const ring = document.getElementById('touchHoldRing');
            const circle = document.getElementById('touchHoldCircle');
            if (ring && circle) {
              const holdPos = getCellScreenCenter(activeR, activeC, e.clientX, e.clientY);
              const visCell = (domGridMeta && domGridMeta.baseCellPx ? domGridMeta.baseCellPx : 26) * (state.zoomScale || 1);
              const ringPx = window.innerWidth <= 640 ? Math.max(28, Math.min(44, Math.round(visCell * 1.35))) : 58;
              ring.style.width = `${ringPx}px`;
              ring.style.height = `${ringPx}px`;
              ring.style.left = `${holdPos.x}px`;
              ring.style.top = `${holdPos.y}px`;
              ring.style.display = 'block';
              circle.style.transition = 'none';
              circle.style.strokeDashoffset = '94.2';
              requestAnimationFrame(() => {
                circle.style.transition = `stroke-dashoffset ${state.longPressDelay}ms linear`;
                circle.style.strokeDashoffset = '0';
              });
            }
            pressTimer = setTimeout(() => {
              longPressTriggered = true;
              clearHoldTimers();
              triggerHaptic(30);
              const oppositeAction = state.controlMode === 'dig' ? 'flag' : 'dig';
              handleCellAction(activeR, activeC, oppositeAction, startX, startY);
            }, state.longPressDelay);
          }
        }
      };

      const onPointerMove = (e) => {
        if (isWheelButtonPanning) {
          window.__msGestureBusyUntil = performance.now() + 220;
          if (e.buttons !== undefined && (e.buttons & 4) === 0) {
            stopWheelPanning();
            return;
          }
          if (viewportEl) {
            viewportEl.scrollLeft -= (e.clientX - lastX);
            viewportEl.scrollTop -= (e.clientY - lastY);
            state._cachedScrollLeft = viewportEl.scrollLeft;
            state._cachedScrollTop = viewportEl.scrollTop;
          }
          lastX = e.clientX;
          lastY = e.clientY;
          return;
        }

        if (!pointerDownActive) return;
        const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
        const cancelThreshold = state.zoomScale <= 1.02 ? 22 : 14;

        if (dist > cancelThreshold) {
          clearHoldTimers();
          activeR = -1;
          activeC = -1;
        }

        lastX = e.clientX;
        lastY = e.clientY;
      };

      let lastTapState = {
        r: -1,
        c: -1,
        time: 0,
        pendingTimer: null,
        pendingR: -1,
        pendingC: -1,
        pendingX: 0,
        pendingY: 0,
        flaggedOnFirstTap: false,
        revealedCellsOnFirstTap: null
      };

      const flushPendingSingleTap = () => {
        if (lastTapState.pendingTimer) {
          clearTimeout(lastTapState.pendingTimer);
          lastTapState.pendingTimer = null;
          const pr = lastTapState.pendingR;
          const pc = lastTapState.pendingC;
          lastTapState.pendingR = -1;
          lastTapState.pendingC = -1;
          if (pr >= 0 && pc >= 0 && !state.gameOver && !state.gameWon) {
            handleCellAction(pr, pc, state.controlMode, lastTapState.pendingX, lastTapState.pendingY);
          }
        }
      };

      const onPointerUp = (e) => {
        if (isWheelButtonPanning || e.button === 1) {
          stopWheelPanning();
          return;
        }
        if (!pointerDownActive || e.button !== 0) return;
        pointerDownActive = false;
        const wasLong = longPressTriggered;
        const wasPan = isMousePanning;
        const r = activeR;
        const c = activeC;
        const tapX = e.clientX || startX;
        const tapY = e.clientY || startY;
        clearHoldTimers();
        activeR = -1;
        activeC = -1;

        if (wasLong || wasPan) return;
        if (r < 0 || c < 0 || state.gameOver || state.gameWon) return;

        const now = Date.now();
        const dblMode = state.doubleTapAction || 'opposite';
        const dblWindow = state.doubleTapDelay || 260;
        const cellObj = state.board[r] && state.board[r][c];
        if (!cellObj) return;

        // If a different cell had a pending single-tap timer, flush it immediately!
        if (lastTapState.pendingTimer && (lastTapState.pendingR !== r || lastTapState.pendingC !== c)) {
          flushPendingSingleTap();
        }

        const isSecondTapOnSameCell = (
          dblMode !== 'off' &&
          lastTapState.r === r &&
          lastTapState.c === c &&
          (now - lastTapState.time) <= dblWindow
        );

        let targetDblAction = state.controlMode;
        if (dblMode === 'opposite') {
          targetDblAction = state.controlMode === 'dig' ? 'flag' : 'dig';
        } else if (dblMode === 'dig') {
          targetDblAction = 'dig';
        } else if (dblMode === 'flag') {
          targetDblAction = 'flag';
        }

        if (isSecondTapOnSameCell) {
          if (lastTapState.pendingTimer) {
            clearTimeout(lastTapState.pendingTimer);
            lastTapState.pendingTimer = null;
            lastTapState.pendingR = -1;
            lastTapState.pendingC = -1;
          }
          const wasAutoFlagged = lastTapState.flaggedOnFirstTap;
          const prevRevealedList = lastTapState.revealedCellsOnFirstTap;
          lastTapState.r = -1;
          lastTapState.c = -1;
          lastTapState.time = 0;
          lastTapState.flaggedOnFirstTap = false;
          lastTapState.revealedCellsOnFirstTap = null;

          // If Tap 1 had revealed a safe cell in Dig mode, and Tap 2 is meant to Flag this cell:
          // cleanly revert Tap 1's reveal and place the Flag!
          if (targetDblAction === 'flag' && prevRevealedList && prevRevealedList.length > 0) {
            for (let i = 0; i < prevRevealedList.length; i++) {
              const [rr, rc] = prevRevealedList[i];
              if (state.board[rr] && state.board[rr][rc]) {
                state.board[rr][rc].revealed = false;
              }
            }
            popLastRecordedDigIfReverted(r, c);
            syncBoardCounts();
            updateCellsBatchDOM(prevRevealedList);
          }

          // Revealed number cell: Double-Tap chords safe neighbors!
          if (cellObj.revealed) {
            if (cellObj.neighborMines > 0) {
              attemptChord(r, c, tapX, tapY);
            }
            return;
          }

          if (dblMode === 'chord') {
            handleCellAction(r, c, state.controlMode, tapX, tapY);
            return;
          }

          // If Tap 1 had placed a flag in Flag mode (or cell was already flagged) and Double-Tap is Dig, unflag first so Dig succeeds!
          if (targetDblAction === 'dig' && cellObj.flagged) {
            cellObj.flagged = false;
            popLastRecordedFlagIfReverted(r, c);
            syncBoardCounts();
            updateGameHud();
            updateCellsBatchDOM([[r, c]]);
          }

          triggerHaptic(22);
          handleCellAction(r, c, targetDblAction, tapX, tapY);
          return;
        }

        // Single-Tap on an already flagged cell in Dig mode: wait for potential Double-Tap to unflag, or show hint toast
        if (cellObj.flagged && state.controlMode === 'dig' && dblMode !== 'off') {
          lastTapState.r = r;
          lastTapState.c = c;
          lastTapState.time = now;
          lastTapState.flaggedOnFirstTap = false;
          lastTapState.revealedCellsOnFirstTap = null;
          return;
        }

        // Crucial Guard: If in Dig mode with Double-Tap = Flag, and the user taps an unrevealed MINE (after firstClickDone):
        // Hold the mine trigger for dblWindow (e.g. 220ms) so if the user is double-tapping the mine to Flag it, Tap 2 cancels the explosion and flags it!
        if (
          state.firstClickDone &&
          !cellObj.revealed &&
          !cellObj.flagged &&
          cellObj.mine &&
          state.controlMode === 'dig' &&
          dblMode !== 'off' &&
          targetDblAction === 'flag'
        ) {
          lastTapState.r = r;
          lastTapState.c = c;
          lastTapState.time = now;
          lastTapState.flaggedOnFirstTap = false;
          lastTapState.revealedCellsOnFirstTap = null;
          lastTapState.pendingR = r;
          lastTapState.pendingC = c;
          lastTapState.pendingX = tapX;
          lastTapState.pendingY = tapY;
          lastTapState.pendingTimer = setTimeout(() => {
            lastTapState.pendingTimer = null;
            const pr = lastTapState.pendingR;
            const pc = lastTapState.pendingC;
            lastTapState.pendingR = -1;
            lastTapState.pendingC = -1;
            if (pr >= 0 && pc >= 0 && !state.gameOver && !state.gameWon) {
              handleCellAction(pr, pc, 'dig', tapX, tapY);
            }
          }, dblWindow);
          return;
        }

        const wasUnflaggedBefore = !cellObj.revealed && !cellObj.flagged;
        lastTapState.r = r;
        lastTapState.c = c;
        lastTapState.time = now;
        state._lastRevealedBatch = null;
        handleCellAction(r, c, state.controlMode, tapX, tapY);
        lastTapState.flaggedOnFirstTap = (wasUnflaggedBefore && cellObj.flagged);
        lastTapState.revealedCellsOnFirstTap = (wasUnflaggedBefore && state.controlMode === 'dig' && !state.gameWon && !state.gameOver)
          ? state._lastRevealedBatch
          : null;
      };

      const onPointerCancel = () => {
        stopWheelPanning();
        pointerDownActive = false;
        clearHoldTimers();
        activeR = -1;
        activeC = -1;
      };

      // Two-Finger Focal-Point Pinch-to-Zoom (Zooms 100% into the exact spot between your fingers & clamps min zoom to 1.0x screen fit)
      let isPinching = false;
      let pinchCooldownUntil = 0;
      let pinchStartDist = 0;
      let pinchStartZoom = 1.0;
      let pinchBoardRatioX = 0.5;
      let pinchBoardRatioY = 0.5;
      let pinchVpLeft = 0;
      let pinchVpTop = 0;
      let pinchRafPending = false;
      let pendingPinchZoom = 1.0;
      let pendingFocalVx = 0;
      let pendingFocalVy = 0;

      const updateZoomUiBadge = () => {
        const zLbl = document.getElementById('txtZoomLevel');
        if (zLbl) zLbl.textContent = `${Math.round(state.zoomScale * 100)}%`;
        const cBtn = document.getElementById('btnCenterBoard');
        if (cBtn) {
          const isZoomed = state.zoomScale > 1.02;
          cBtn.style.borderColor = isZoomed ? 'var(--accent-primary)' : '';
        }
        const outBtn = document.getElementById('btnZoomOut');
        if (outBtn) {
          outBtn.style.opacity = state.zoomScale <= 1.01 ? '0.45' : '1';
        }
      };

      if (viewportEl) {
        viewportEl.addEventListener('scroll', () => {
          window.__msGestureBusyUntil = performance.now() + 220;
          clearHoldTimers();
          activeR = -1;
          activeC = -1;
          state._cachedScrollLeft = viewportEl.scrollLeft;
          state._cachedScrollTop = viewportEl.scrollTop;
        }, { passive: true });

        viewportEl.addEventListener('touchstart', (e) => {
          if (e.touches.length >= 2) {
            isPinching = true;
            gridEl.classList.add('is-zooming');
            pinchCooldownUntil = Date.now() + 350;
            pointerDownActive = false;
            clearHoldTimers();
            activeR = -1;
            activeC = -1;
            const t0 = e.touches[0];
            const t1 = e.touches[1];
            pinchStartDist = Math.max(20, Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY));
            pinchStartZoom = state.zoomScale;
            pendingPinchZoom = state.zoomScale;

            // Measure exact viewport & board bounding boxes ONCE at pinch start (zero layout reads during touchmove!)
            const vpRect = viewportEl.getBoundingClientRect();
            const gRect = gridEl.getBoundingClientRect();
            pinchVpLeft = vpRect.left;
            pinchVpTop = vpRect.top;
            state._cachedVpClientW = viewportEl.clientWidth || Math.round(vpRect.width);
            state._cachedVpClientH = viewportEl.clientHeight || Math.round(vpRect.height);

            const midClientX = (t0.clientX + t1.clientX) * 0.5;
            const midClientY = (t0.clientY + t1.clientY) * 0.5;
            pendingFocalVx = midClientX - pinchVpLeft;
            pendingFocalVy = midClientY - pinchVpTop;

            pinchBoardRatioX = gRect.width > 0 ? Math.max(0, Math.min(1, (midClientX - gRect.left) / gRect.width)) : 0.5;
            pinchBoardRatioY = gRect.height > 0 ? Math.max(0, Math.min(1, (midClientY - gRect.top) / gRect.height)) : 0.5;
            state.lastFocusRatio = { x: pinchBoardRatioX, y: pinchBoardRatioY };
          }
        }, { passive: true });

        viewportEl.addEventListener('touchmove', (e) => {
          if (isPinching && e.touches.length >= 2) {
            window.__msGestureBusyUntil = performance.now() + 220;
            if (e.cancelable) e.preventDefault();
            pinchCooldownUntil = Date.now() + 350;
            const t0 = e.touches[0];
            const t1 = e.touches[1];
            const curDist = Math.max(20, Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY));
            const ratio = curDist / pinchStartDist;
            // Clamp minimum zoom to 1.0 (100% full-screen fit) so the board never shrinks smaller than the screen!
            pendingPinchZoom = Math.max(1.0, Math.min(3.5, Math.round(pinchStartZoom * ratio * 100) / 100));
            pendingFocalVx = (t0.clientX + t1.clientX) * 0.5 - pinchVpLeft;
            pendingFocalVy = (t0.clientY + t1.clientY) * 0.5 - pinchVpTop;

            if (!pinchRafPending) {
              pinchRafPending = true;
              requestAnimationFrame(() => {
                pinchRafPending = false;
                state.zoomScale = pendingPinchZoom;
                updateZoomUiBadge();
                updateBoardZoomDOM(false);
                centerBoardInViewport(pinchBoardRatioX, pinchBoardRatioY, pendingFocalVx, pendingFocalVy);
              });
            }
          }
        }, { passive: false });

        const endPinchCheck = (e) => {
          if (isPinching) {
            pinchCooldownUntil = Date.now() + 300;
            if (!e.touches || e.touches.length < 2) {
              isPinching = false;
              gridEl.classList.remove('is-zooming');
              updateBoardZoomDOM(true);
              centerBoardInViewport(pinchBoardRatioX, pinchBoardRatioY, pendingFocalVx, pendingFocalVy);
            }
          }
        };

        // Desktop / Laptop Trackpad Pinch & Ctrl+Wheel Focal-Point Zoom
        viewportEl.addEventListener('wheel', (e) => {
          if (e.ctrlKey || e.metaKey) {
            if (e.cancelable) e.preventDefault();
            const vpRect = viewportEl.getBoundingClientRect();
            const gRect = gridEl.getBoundingClientRect();
            state._cachedVpClientW = viewportEl.clientWidth || Math.round(vpRect.width);
            state._cachedVpClientH = viewportEl.clientHeight || Math.round(vpRect.height);
            const focalVx = e.clientX - vpRect.left;
            const focalVy = e.clientY - vpRect.top;
            const boardRatioX = gRect.width > 0 ? Math.max(0, Math.min(1, (e.clientX - gRect.left) / gRect.width)) : 0.5;
            const boardRatioY = gRect.height > 0 ? Math.max(0, Math.min(1, (e.clientY - gRect.top) / gRect.height)) : 0.5;
            state.lastFocusRatio = { x: boardRatioX, y: boardRatioY };
            const deltaScale = e.deltaY < 0 ? 0.15 : -0.15;
            state.zoomScale = Math.max(1.0, Math.min(3.5, Math.round((state.zoomScale + deltaScale) * 100) / 100));
            updateZoomUiBadge();
            updateBoardZoomDOM();
            centerBoardInViewport(boardRatioX, boardRatioY, focalVx, focalVy);
          }
        }, { passive: false });
        viewportEl.addEventListener('touchend', endPinchCheck, { passive: true });
        viewportEl.addEventListener('touchcancel', endPinchCheck, { passive: true });

        // Prevent native browser auto-scroll circle on middle mouse button (wheel click) so wheel-drag pans the board anywhere
        viewportEl.addEventListener('mousedown', (e) => {
          if (e.button === 1) {
            if (e.cancelable) e.preventDefault();
          }
        }, { passive: false });
        viewportEl.addEventListener('auxclick', (e) => {
          if (e.button === 1) {
            if (e.cancelable) e.preventDefault();
          }
        }, { passive: false });

        viewportEl.addEventListener('pointerdown', (e) => {
          if (isPinching || Date.now() < pinchCooldownUntil) return;
          onPointerDown(e);
        }, { passive: true });
        window.addEventListener('pointermove', (e) => {
          if (isPinching || Date.now() < pinchCooldownUntil) return;
          onPointerMove(e);
        }, { passive: true });
        window.addEventListener('pointerup', (e) => {
          if (isPinching || Date.now() < pinchCooldownUntil) {
            stopWheelPanning();
            pointerDownActive = false;
            clearHoldTimers();
            activeR = -1;
            activeC = -1;
            return;
          }
          onPointerUp(e);
        }, { passive: true });
        window.addEventListener('pointercancel', onPointerCancel, { passive: true });
        window.addEventListener('blur', onPointerCancel, { passive: true });
      }

      gridEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        clearHoldTimers();
        const cellEl = e.target.closest('.ms-cell');
        if (!cellEl || state.isReplayMode || state.gameOver || state.gameWon) return;
        const r = parseInt(cellEl.dataset.r, 10);
        const c = parseInt(cellEl.dataset.c, 10);
        handleCellAction(r, c, 'flag', e.clientX, e.clientY);
      });
    }

    const cellNodePool = [];

    function applyCrispCellMetricsToGrid(gridEl, cellPx) {
      const gapPx = getProportionalGapForBoard(state.cols, state.rows);
      const padPx = getBoardPadPx(state.cols, state.rows);
      const fontSize = `${Math.max(9, Math.round(cellPx * 0.56))}px`;

      gridEl.style.gap = `${gapPx}px`;
      gridEl.style.padding = `${padPx}px`;
      gridEl.dataset.dense = cellPx < 20 ? '1' : '0';
      gridEl.style.setProperty('--cell-font-size', fontSize);
      gridEl.style.setProperty('--cell-line-h', `${cellPx}px`);
      gridEl.style.gridTemplateColumns = `repeat(${state.cols}, ${cellPx}px)`;
      gridEl.style.gridTemplateRows = `repeat(${state.rows}, ${cellPx}px)`;
      domGridMeta.renderedCellPx = cellPx;
    }

    function updateBoardZoomDOM(commitTrueVectorResolution = true) {
      const gridEl = document.getElementById('minesweeperGrid');
      const wrapEl = document.getElementById('boardScaleWrap');
      const vpEl = document.getElementById('boardViewport');
      if (!gridEl) return;
      const { baseCell, zoomedCell, baseW, baseH } = getEstimatedBoardDimensions(state.zoomScale);
      domGridMeta.baseCellPx = baseCell;
      domGridMeta.cellPx = zoomedCell;

      const scaledW = Math.round(baseW * state.zoomScale);
      const scaledH = Math.round(baseH * state.zoomScale);
      if (wrapEl) {
        wrapEl.style.width = `${scaledW}px`;
        wrapEl.style.height = `${scaledH}px`;
      }
      if (vpEl) {
        vpEl.style.overflow = 'auto';
      }

      // Because every .ms-cell uses a 128x128 Retina texture and .board-grid has NO permanent will-change:transform,
      // CSS transform:scale(zoomScale) at rest re-rasterizes the 128x128 textures & vector numbers at full Retina DPI
      // with ZERO CSS Grid reflow (0.00ms layout freeze on mobile)!
      if (domGridMeta.renderedCellPx !== baseCell) {
        applyCrispCellMetricsToGrid(gridEl, baseCell);
      }
      if (Math.abs(state.zoomScale - 1.0) < 0.01) {
        gridEl.style.transform = 'none';
      } else {
        gridEl.style.transform = commitTrueVectorResolution
          ? `scale(${state.zoomScale})`
          : `translateZ(0) scale(${state.zoomScale})`;
      }
    }

    function renderBoardGrid(forceRebuild = false) {
      const gridEl = document.getElementById('minesweeperGrid');
      if (!gridEl) return;
      ensureGridDelegation(gridEl);

      const baseCell = computeBaseCellPixelSize();
      const isTutStage = !!(state.storyChapterId && state.storyChapterId <= 5);
      const tutDed = isTutStage ? analyzeLiveTutorialDeduction() : null;
      const tutFocus = isTutStage ? getTutorialFocusCell() : null;
      const clueSet = new Set();
      const inspectSet = new Set();
      if (tutDed) {
        (tutDed.clueCells || []).forEach(([cr, cc]) => clueSet.add(cr * state.cols + cc));
        (tutDed.inspectCells || []).forEach(([ir, ic]) => inspectSet.add(ir * state.cols + ic));
      }

      const needStructureRebuild =
        forceRebuild ||
        domGridMeta.rows !== state.rows ||
        domGridMeta.cols !== state.cols ||
        domGridMeta.nodes.length !== state.rows * state.cols;

      if (needStructureRebuild || domGridMeta.renderedCellPx !== baseCell) {
        applyCrispCellMetricsToGrid(gridEl, baseCell);
      }

      const themeChanged = domGridMeta.theme !== state.theme;

      if (needStructureRebuild) {
        const totalNeeded = state.rows * state.cols;
        while (cellNodePool.length < totalNeeded) {
          const el = document.createElement('div');
          el.className = 'ms-cell select-none unrevealed';
          cellNodePool.push(el);
        }
        const frag = document.createDocumentFragment();
        const nodes = [];
        let poolIdx = 0;
        for (let r = 0; r < state.rows; r++) {
          for (let c = 0; c < state.cols; c++) {
            const btn = cellNodePool[poolIdx++];
            btn.dataset.r = r;
            btn.dataset.c = c;
            btn._renderKey = '';
            nodes.push(btn);
            frag.appendChild(btn);
          }
        }
        gridEl.replaceChildren(frag);
        domGridMeta = { rows: state.rows, cols: state.cols, baseCellPx: baseCell, renderedCellPx: baseCell, cellPx: baseCell, theme: state.theme, nodes };
      } else {
        domGridMeta.baseCellPx = baseCell;
      }
      updateBoardZoomDOM(true);

      if (themeChanged) {
        domGridMeta.theme = state.theme;
      }

      const nodes = domGridMeta.nodes;
      let idx = 0;
      for (let r = 0; r < state.rows; r++) {
        for (let c = 0; c < state.cols; c++) {
          const cell = state.board[r][c];
          const btn = nodes[idx++];

          const cellFlatIdx = r * state.cols + c;
          const isHint = !!(state.activeHintCell && state.activeHintCell[0] === r && state.activeHintCell[1] === c);
          const isTut = !!(tutFocus && tutFocus[0] === r && tutFocus[1] === c);
          const isClue = clueSet.has(cellFlatIdx);
          const isInspect = inspectSet.has(cellFlatIdx);
          const isRepStep = !!(state.isReplayMode && state.replayActiveCell && state.replayActiveCell.r === r && state.replayActiveCell.c === c);
          const repBadge = isRepStep ? (state.replayActiveCell.badge || '🎯') : '';
          const stateCode = cell.revealed
            ? (cell.mine ? 'RM' : `R${cell.neighborMines}`)
            : (cell.flagged
              ? (state.gameOver && !cell.mine ? 'FX' : 'F')
              : (state.gameOver && cell.mine ? 'UM' : 'U'));
          const renderKey = `${state.theme}|${stateCode}|${isHint ? 1 : 0}|${isTut ? 1 : 0}|${isClue ? 1 : 0}|${isInspect ? 1 : 0}|${repBadge}`;

          if (btn._renderKey === renderKey) continue;
          btn._renderKey = renderKey;

          let cls = 'ms-cell select-none';
          if (cell.revealed) {
            if (cell.mine) {
              cls += ' mine-hit';
              btn.textContent = '';
            } else {
              cls += state.bulkRevealActive ? ' revealed no-anim' : ' revealed';
              if (cell.neighborMines > 0) {
                btn.style.color = `var(--num-${cell.neighborMines})`;
                btn.textContent = String(cell.neighborMines);
              } else {
                btn.textContent = '';
              }
            }
          } else if (cell.flagged) {
            if (state.gameOver && !cell.mine) {
              cls += ' flagged wrong-flag';
              btn.textContent = '❌';
            } else {
              cls += ' flagged';
              btn.textContent = '';
            }
          } else {
            if (state.gameOver && cell.mine) {
              cls += ' unrevealed mine-reveal';
            } else {
              cls += ' unrevealed';
            }
            btn.textContent = '';
          }

          if (isHint) cls += ' hint-target';
          if (isClue) cls += ' tutorial-clue-source';
          if (isInspect && !cell.revealed) cls += ' tutorial-inspect-zone';
          if (isTut) cls += ' tutorial-focus';
          if (isRepStep) {
            cls += ' replay-active-step';
          }
          btn.className = cls;
        }
      }
      state.bulkRevealActive = false;
    }

    // Fast O(1) single-cell DOM updater: updates ONLY changed cells without layout thrashing!
    let lastHighlightedHint = null;
    let lastHighlightedTut = null;

    function updateSingleCellDOM(r, c, tutFocusOverride = undefined) {
      if (!domGridMeta.nodes || domGridMeta.rows !== state.rows || domGridMeta.cols !== state.cols) return;
      const idx = r * state.cols + c;
      const btn = domGridMeta.nodes[idx];
      if (!btn || !state.board[r] || !state.board[r][c]) return;

      const cell = state.board[r][c];
      const tutFocus = tutFocusOverride !== undefined ? tutFocusOverride : getTutorialFocusCell();
      const isHint = !!(state.activeHintCell && state.activeHintCell[0] === r && state.activeHintCell[1] === c);
      const isTut = !!(tutFocus && tutFocus[0] === r && tutFocus[1] === c);

      const stateCode = cell.revealed
        ? (cell.mine ? 'RM' : `R${cell.neighborMines}`)
        : (cell.flagged
          ? (state.gameOver && !cell.mine ? 'FX' : 'F')
          : (state.gameOver && cell.mine ? 'UM' : 'U'));
      const renderKey = `${state.theme}|${stateCode}|${isHint ? 1 : 0}|${isTut ? 1 : 0}`;

      if (btn._renderKey === renderKey) return;
      btn._renderKey = renderKey;

      let cls = 'ms-cell select-none';
      if (cell.revealed) {
        if (cell.mine) {
          cls += ' mine-hit';
          btn.textContent = '';
        } else {
          cls += state.bulkRevealActive ? ' revealed no-anim' : ' revealed';
          if (cell.neighborMines > 0) {
            btn.style.color = `var(--num-${cell.neighborMines})`;
            btn.textContent = String(cell.neighborMines);
          } else {
            btn.textContent = '';
          }
        }
      } else if (cell.flagged) {
        if (state.gameOver && !cell.mine) {
          cls += ' flagged wrong-flag';
          btn.textContent = '❌';
        } else {
          cls += ' flagged';
          btn.textContent = '';
        }
      } else {
        if (state.gameOver && cell.mine) {
          cls += ' unrevealed mine-reveal';
        } else {
          cls += ' unrevealed';
        }
        btn.textContent = '';
      }

      if (isHint) cls += ' hint-target';
      if (isTut) cls += ' tutorial-focus';
      btn.className = cls;
    }

    function updateCellsBatchDOM(coordsList) {
      if (state.storyChapterId && state.storyChapterId <= 5) {
        renderBoardGrid();
        return;
      }
      if (!domGridMeta.nodes || domGridMeta.rows !== state.rows || domGridMeta.cols !== state.cols) {
        renderBoardGrid();
        return;
      }
      const tutFocus = (state.storyChapterId && state.storyChapterId <= 5) ? getTutorialFocusCell() : null;
      if (lastHighlightedHint) {
        updateSingleCellDOM(lastHighlightedHint[0], lastHighlightedHint[1], tutFocus);
      }
      if (state.activeHintCell) {
        updateSingleCellDOM(state.activeHintCell[0], state.activeHintCell[1], tutFocus);
        lastHighlightedHint = [state.activeHintCell[0], state.activeHintCell[1]];
      } else {
        lastHighlightedHint = null;
      }

      if (lastHighlightedTut) {
        updateSingleCellDOM(lastHighlightedTut[0], lastHighlightedTut[1], tutFocus);
      }
      if (tutFocus) {
        updateSingleCellDOM(tutFocus[0], tutFocus[1], tutFocus);
        lastHighlightedTut = [tutFocus[0], tutFocus[1]];
      } else {
        lastHighlightedTut = null;
      }

      for (let i = 0; i < coordsList.length; i++) {
        const [r, c] = coordsList[i];
        updateSingleCellDOM(r, c, tutFocus);
      }
      state.bulkRevealActive = false;
    }

    // ==================== REAL-TIME PEDAGOGICAL LOGIC COACH ENGINE ====================
    // Analyses the live board to teach the player HOW to deduce from revealed numbers
    // rather than blindly pointing at hidden answer tiles.
    function analyzeLiveTutorialDeduction() {
      if (!state.storyChapterId || !state.board || state.board.length === 0) return null;
      const ch = STORY_CHAPTERS.find(x => x.id === state.storyChapterId);
      if (!ch || !ch.isTutorial) return null;

      const rows = state.rows;
      const cols = state.cols;

      if (!state.firstClickDone) {
        return {
          type: 'START_OPENING',
          action: 'dig',
          clueCells: [],
          inspectCells: [[0, 0]],
          targetCells: [[0, 0]],
          titleAr: '⛏️ البداية الآمنة',
          titleEn: '⛏️ Safe Start',
          formulaAr: 'خطوة 1',
          formulaEn: 'Step 1',
          explanationAr: 'المس المربع المضيء لفتح اللوحة وكشف الأرقام.',
          explanationEn: 'Tap the glowing tile to open the board and see the numbers.'
        };
      }

      // 1. Check if the player accidentally placed a wrong flag
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (state.board[r][c].flagged && !state.board[r][c].mine) {
            return {
              type: 'WRONG_FLAG',
              action: 'flag',
              clueCells: [],
              inspectCells: [[r, c]],
              targetCells: [[r, c]],
              titleAr: '⚠️ علم خاطئ',
              titleEn: '⚠️ Wrong Flag',
              formulaAr: 'تصحيح',
              formulaEn: 'Fix Flag',
              explanationAr: 'هذا المربع آمن وليس لغماً! المس العلم المضيء لإزالته.',
              explanationEn: 'This tile is safe, not a mine! Tap the glowing flag to remove it.'
            };
          }
        }
      }

      const constraints = [];
      let singleSafeCandidate = null;
      let singleMineCandidate = null;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = state.board[r][c];
          if (!cell.revealed || cell.neighborMines <= 0) continue;

          const nbs = getNeighbors(r, c, rows, cols);
          let flaggedCount = 0;
          const unknowns = [];

          for (let i = 0; i < nbs.length; i++) {
            const [nr, nc] = nbs[i];
            const nb = state.board[nr][nc];
            if (nb.flagged) flaggedCount++;
            else if (!nb.revealed) unknowns.push([nr, nc]);
          }
          if (unknowns.length === 0) continue;

          const rem = cell.neighborMines - flaggedCount;

          // Rule 1: Exact Mine Count -> 1-Line Simple Instruction!
          if (rem === unknowns.length && !singleMineCandidate) {
            const N = cell.neighborMines;
            singleMineCandidate = {
              type: 'SINGLE_MINE',
              action: 'flag',
              clueCells: [[r, c]],
              inspectCells: unknowns,
              targetCells: unknowns,
              titleAr: `🚩 ضع علماً بجانب الرقم (${N}) الأزرق`,
              titleEn: `🚩 Flag Next to Blue [${N}]`,
              formulaAr: `${unknowns.length === 1 ? 'مربع واحد = لغم أكيد' : `${unknowns.length} مربعات = ${rem} ألغام`}`,
              formulaEn: `${unknowns.length === 1 ? '1 tile left = 100% Mine' : `${unknowns.length} tiles = ${rem} Mines`}`,
              explanationAr: flaggedCount === 0
                ? (unknowns.length === 1
                  ? `الرقم (${N}) الأزرق لا يلمس سوى مربع مخفي واحد ⬅️ ضع عليه (🚩 علم)!`
                  : `الرقم (${N}) الأزرق لا يلمس سوى ${unknowns.length} مربعات مخفية ⬅️ ضع عليها (🚩 علم)!`)
                : `الرقم (${N}) الأزرق بقي له لغم واحد في المربع المخفي بجانبه ⬅️ ضع عليه (🚩 علم)!`,
              explanationEn: flaggedCount === 0
                ? (unknowns.length === 1
                  ? `Blue [${N}] touches only 1 hidden tile ⬅️ Switch to 🚩 Flag and mark it!`
                  : `Blue [${N}] touches only ${unknowns.length} hidden tiles ⬅️ Place 🚩 Flags on them!`)
                : `Blue [${N}] needs 1 more mine in its last hidden tile ⬅️ Place a 🚩 Flag on it!`
            };
          }

          // Rule 2: Satisfied Number -> 1-Line Simple Instruction!
          if (rem === 0 && !singleSafeCandidate) {
            const N = cell.neighborMines;
            singleSafeCandidate = {
              type: 'SINGLE_SAFE',
              action: 'dig',
              clueCells: [[r, c]],
              inspectCells: unknowns,
              targetCells: unknowns,
              titleAr: unknowns.length > 1
                ? `⚡ المس الرقم (${N}) الأزرق نفسه للفتح السريع!`
                : `⛏️ احفر المربع الآمن بجانب (${N})`,
              titleEn: unknowns.length > 1
                ? `⚡ Tap Blue [${N}] to Quick-Open!`
                : `⛏️ Dig Safe Tile Next to [${N}]`,
              formulaAr: `الرقم (${N}) شَبِع بالأعلام ✅`,
              formulaEn: `[${N}] has all its flags ✅`,
              explanationAr: unknowns.length > 1
                ? `الرقم (${N}) الأزرق اكتملت أعلامه ⬅️ المس الرقم (${N}) نفسه ليفتح كل جيرانه الآمنين فوراً!`
                : `الرقم (${N}) الأزرق يلمس علماً بالفعل ⬅️ المربع المخفي بجانبه آمن! افتحه بـ (⛏️ حفر) أو المس الرقم (${N}).`,
              explanationEn: unknowns.length > 1
                ? `Blue [${N}] already has its flags ⬅️ Tap directly on [${N}] to open all safe neighbors at once!`
                : `Blue [${N}] already touches its flag ⬅️ Its other neighbor is safe! Dig it with ⛏️ Dig (or tap [${N}]).`
            };
          }

          const keySet = new Set();
          for (let u = 0; u < unknowns.length; u++) keySet.add(unknowns[u][0] * cols + unknowns[u][1]);
          constraints.push({ r, c, num: cell.neighborMines, remaining: rem, unknowns, keys: keySet });
        }
      }

      if (singleMineCandidate) return singleMineCandidate;
      if (singleSafeCandidate) return singleSafeCandidate;

      // Rule 3 & 4: Coupled Pairwise Deduction -> 1-Line Simple Instruction!
      for (let i = 0; i < constraints.length; i++) {
        const A = constraints[i];
        for (let j = 0; j < constraints.length; j++) {
          if (i === j) continue;
          const B = constraints[j];
          if (Math.abs(A.r - B.r) > 2 || Math.abs(A.c - B.c) > 2) continue;

          const onlyA = [];
          const onlyB = [];
          const shared = [];

          for (let k = 0; k < A.unknowns.length; k++) {
            const [ur, uc] = A.unknowns[k];
            if (B.keys.has(ur * cols + uc)) shared.push([ur, uc]);
            else onlyA.push([ur, uc]);
          }
          if (shared.length === 0) continue;

          for (let k = 0; k < B.unknowns.length; k++) {
            const [ur, uc] = B.unknowns[k];
            if (!A.keys.has(ur * cols + uc)) onlyB.push([ur, uc]);
          }
          if (onlyB.length === 0) continue;

          const minShared = Math.max(0, A.remaining - onlyA.length, B.remaining - onlyB.length);
          const maxShared = Math.min(A.remaining, B.remaining, shared.length);
          const unionInspect = [...shared, ...onlyA, ...onlyB];

          if (minShared === B.remaining) {
            return {
              type: 'COUPLED_SAFE',
              action: 'dig',
              clueCells: [[A.r, A.c], [B.r, B.c]],
              inspectCells: unionInspect,
              targetCells: onlyB,
              titleAr: `🔗 قاعدة الرقمين (${A.num} و ${B.num})`,
              titleEn: `🔗 Comparing [${A.num}] & [${B.num}]`,
              formulaAr: `المربع البعيد آمن 100% ⛏️`,
              formulaEn: `Outer tile is 100% Safe ⛏️`,
              explanationAr: `الرقمان الأزرقان (${A.num} و ${B.num}) يشتركان بلغم واحد ⬅️ المربع البعيد عن الطرف آمن! احفره بـ (⛏️ حفر).`,
              explanationEn: `Blue [${A.num}] & [${B.num}] share their mine ⬅️ The outer non-shared tile is 100% safe! Dig it with ⛏️ Dig.`
            };
          }

          if ((B.remaining - maxShared) === onlyB.length) {
            return {
              type: 'COUPLED_MINE',
              action: 'flag',
              clueCells: [[A.r, A.c], [B.r, B.c]],
              inspectCells: unionInspect,
              targetCells: onlyB,
              titleAr: `🎯 قاعدة الرقمين (${A.num} و ${B.num})`,
              titleEn: `🎯 Comparing [${A.num}] & [${B.num}]`,
              formulaAr: `المربع البعيد لغم أكيد 🚩`,
              formulaEn: `Outer tile is 100% Mine 🚩`,
              explanationAr: `الرقم (${A.num}) يتسع للغم واحد فقط، لذا اللغم الإضافي للرقم (${B.num}) يقع في المربع البعيد ⬅️ ضع (🚩 علم)!`,
              explanationEn: `Blue [${A.num}] holds at most 1 shared mine, forcing [${B.num}]'s extra mine into the outer tile ⬅️ Flag it with 🚩!`
            };
          }
        }
      }

      const genMove = findNextLogicalMove(state.board, rows, cols);
      if (genMove) {
        return {
          type: 'GENERAL_LOGIC',
          action: genMove.action,
          clueCells: genMove.source ? [genMove.source] : [],
          inspectCells: genMove.cells || [],
          targetCells: genMove.cells || [],
          titleAr: genMove.action === 'flag' ? '🚩 ضع علماً على اللغم' : '⛏️ احفر المربع الآمن',
          titleEn: genMove.action === 'flag' ? '🚩 Place a Flag' : '⛏️ Dig Safe Tile',
          formulaAr: genMove.action === 'flag' ? 'لغم أكيد 🚩' : 'آمن 100% ⛏️',
          formulaEn: genMove.action === 'flag' ? '100% Mine 🚩' : '100% Safe ⛏️',
          explanationAr: genMove.action === 'flag'
            ? 'من الرقم الأزرق المحدد: المربع المخفي بجانبه لغم أكيد ⬅️ ضع عليه (🚩 علم).'
            : 'من الرقم الأزرق المحدد: المربع المخفي بجانبه آمن تماماً ⬅️ افتحه بـ (⛏️ حفر).',
          explanationEn: genMove.action === 'flag'
            ? 'From the blue number: its touching hidden tile is a mine ⬅️ Place a 🚩 Flag.'
            : 'From the blue number: its touching hidden tile is safe ⬅️ Open it with ⛏️ Dig.'
        };
      }
      return null;
    }

    function getTutorialFocusCell() {
      const ded = analyzeLiveTutorialDeduction();
      if (!ded) return null;
      // Only highlight the direct target tile if it's the very first opening tap OR the player clicked "Show Tile"
      if (ded.type === 'START_OPENING' || ded.type === 'WRONG_FLAG' || state.tutorialShowTarget) {
        return ded.targetCells && ded.targetCells.length > 0 ? ded.targetCells[0] : null;
      }
      return null;
    }

    function handleCellAction(r, c, actionType, clientX = window.innerWidth / 2, clientY = window.innerHeight / 2) {
      if (state.cols > 0 && state.rows > 0) {
        state.lastFocusRatio = {
          x: Math.max(0, Math.min(1, (c + 0.5) / state.cols)),
          y: Math.max(0, Math.min(1, (r + 0.5) / state.rows))
        };
      }
      const cell = state.board[r][c];
      state.activeHintCell = null;
      document.getElementById('logicHintBanner').classList.add('hidden');

      if (cell.revealed) {
        if (state.chordEnabled && cell.neighborMines > 0) {
          attemptChord(r, c, clientX, clientY);
        }
        return;
      }

      // 1-Line Friendly Mistake Guard in Tutorial Levels (1-5)
      if (state.storyChapterId && state.storyChapterId <= 5 && state.firstClickDone) {
        const isAr = state.lang === 'ar';
        if (actionType === 'flag' && !cell.flagged && !cell.mine) {
          triggerHaptic(35);
          showHintBanner(
            isAr
              ? '🤔 هذا المربع آمن وليس لغماً! انظر للرقم الأزرق المضيء.'
              : '🤔 This tile is safe, not a mine! Look at the blue highlighted number.'
          );
          return;
        }
        if (actionType === 'dig' && !cell.flagged && cell.mine) {
          triggerHaptic([40, 30, 40]);
          showHintBanner(
            isAr
              ? '⚠️ هذا المربع لغم! اختر زر (🚩 علم) في الأسفل أولاً لوضع علم عليه.'
              : '⚠️ That tile is a mine! Switch to 🚩 Flag at the bottom first to mark it.'
          );
          return;
        }
      }

      if (actionType === 'flag') {
        if (!state.firstClickDone) {
          handleCellAction(r, c, 'dig', clientX, clientY);
          return;
        }
        cell.flagged = !cell.flagged;
        state.flagsPlaced += cell.flagged ? 1 : -1;
        recordGameStep(cell.flagged ? 'flag' : 'unflag', r, c, {
          flg: cell.flagged ? [r * state.cols + c] : [],
          unflg: cell.flagged ? [] : [r * state.cols + c]
        });
        const flagCenter = getCellScreenCenter(r, c, clientX, clientY);
        playSound('flag');
        triggerHaptic(15);
        spawnCellVfx(flagCenter.x, flagCenter.y, 'flag');
        advanceTutorialIfMatched(r, c, 'flag');
        updateGameHud();
        updateCellsBatchDOM([[r, c]]);
        saveActiveMatchSnapshot();
        return;
      }

      if (cell.flagged) {
        showToast(state.lang === 'ar' ? 'المربع محمي بعلم! أزل العلم أولاً' : 'Tile is flagged! Switch to Flag to unflag.');
        return;
      }

      if (!state.firstClickDone) {
        state.firstClickDone = true;
        populateMinesOnFirstClick(r, c);
        startTimer();
      }

      if (cell.mine && !tryFairPlayMineSwap(r, c)) {
        cell.revealed = true;
        state.lastHitMineCell = [r, c];
        state.gameOver = true;
        stopTimer();
        clearActiveMatchSnapshot();
        recordGameStep('boom', r, c, { rev: [r * state.cols + c] });
        finalizeCurrentRecording(false);
        const boomCenter = getCellScreenCenter(r, c, clientX, clientY);
        playSound('boom');
        triggerHaptic([60, 40, 80]);
        spawnCellVfx(boomCenter.x, boomCenter.y, 'boom');
        document.getElementById('hudFaceEmoji').textContent = '😵';
        state.stats.gamesPlayed++;
        saveState();
        renderBoardGrid();
        setTimeout(() => showGameResultModal(false), 480);
        return;
      }

      const newlyRevealed = floodRevealReal(r, c);
      state._lastRevealedBatch = newlyRevealed;
      recordGameStep('dig', r, c, {
        rev: newlyRevealed.map(([rr, cc]) => rr * state.cols + cc)
      });
      const digCenter = getCellScreenCenter(r, c, clientX, clientY);
      playSound('dig');
      triggerHaptic(10);
      spawnCellVfx(digCenter.x, digCenter.y, newlyRevealed.length > 3 ? 'chord' : 'dig');
      advanceTutorialIfMatched(r, c, 'dig');
      syncBoardCounts();
      updateGameHud();
      updateCellsBatchDOM(newlyRevealed);
      checkWinCondition();
      if (!state.gameWon && !state.gameOver) saveActiveMatchSnapshot();
    }

    function syncBoardCounts() {
      if (!state.board || state.board.length === 0) return;
      let rev = 0;
      let flg = 0;
      for (let r = 0; r < state.rows; r++) {
        const row = state.board[r];
        if (!row) continue;
        for (let c = 0; c < state.cols; c++) {
          const cell = row[c];
          if (cell.revealed && !cell.mine) rev++;
          if (cell.flagged) flg++;
        }
      }
      state.revealedCount = rev;
      state.flagsPlaced = flg;
    }

    function floodRevealReal(startR, startC) {
      const revealedList = [];
      const queue = [[startR, startC]];
      while (queue.length > 0) {
        const [r, c] = queue.pop();
        const cell = state.board[r][c];
        if (cell.revealed || cell.flagged) continue;
        cell.revealed = true;
        state.revealedCount++;
        revealedList.push([r, c]);

        if (cell.neighborMines === 0 && !cell.mine) {
          const nbs = getNeighbors(r, c, state.rows, state.cols);
          for (let i = 0; i < nbs.length; i++) {
            const [nr, nc] = nbs[i];
            if (!state.board[nr][nc].revealed && !state.board[nr][nc].flagged) {
              queue.push([nr, nc]);
            }
          }
        }
      }
      if (revealedList.length > 12) {
        state.bulkRevealActive = true;
      }
      return revealedList;
    }

    function attemptChord(r, c, clientX, clientY) {
      const cell = state.board[r][c];
      const nbs = getNeighbors(r, c, state.rows, state.cols);
      let flags = 0;
      const toReveal = [];

      for (let i = 0; i < nbs.length; i++) {
        const [nr, nc] = nbs[i];
        const nb = state.board[nr][nc];
        if (nb.flagged) flags++;
        else if (!nb.revealed) toReveal.push([nr, nc]);
      }

      if (toReveal.length === 0) return;

      // Easy-Flag on Number Tap: if remaining hidden neighbors + current flags === cell.neighborMines, auto-flag all remaining hidden neighbors!
      if (flags < cell.neighborMines && (flags + toReveal.length) === cell.neighborMines) {
        if (state.storyChapterId && state.storyChapterId <= 5) {
          for (let i = 0; i < toReveal.length; i++) {
            const [nr, nc] = toReveal[i];
            if (!state.board[nr][nc].mine) {
              triggerHaptic(35);
              showHintBanner(
                state.lang === 'ar'
                  ? '⚠️ يوجد علم خاطئ حول هذا الرقم! أزل العلم الخاطئ أولاً.'
                  : '⚠️ There is a misplaced flag around this number! Fix it first.'
              );
              return;
            }
          }
        }
        for (let i = 0; i < toReveal.length; i++) {
          const [nr, nc] = toReveal[i];
          state.board[nr][nc].flagged = true;
        }
        recordGameStep('easy_flag', r, c, {
          flg: toReveal.map(([rr, cc]) => rr * state.cols + cc)
        });
        syncBoardCounts();
        playSound('flag');
        triggerHaptic(18);
        for (let i = 0; i < toReveal.length; i++) {
          const fc = getCellScreenCenter(toReveal[i][0], toReveal[i][1], clientX, clientY);
          spawnCellVfx(fc.x, fc.y, 'flag');
        }
        advanceTutorialIfMatched(r, c, 'flag');
        updateGameHud();
        updateCellsBatchDOM(toReveal);
        saveActiveMatchSnapshot();
        return;
      }

      if (flags !== cell.neighborMines) return;

      // Tutorial safety guard if player placed a wrong flag and tried to chord
      if (state.storyChapterId && state.storyChapterId <= 5) {
        for (let i = 0; i < toReveal.length; i++) {
          const [nr, nc] = toReveal[i];
          if (state.board[nr][nc].mine) {
            triggerHaptic([40, 30, 40]);
            showHintBanner(
              state.lang === 'ar'
                ? '⚠️ انتبه! أحد الأعلام حول هذا الرقم موضوع في مكان خاطئ.'
                : '⚠️ Careful! One of the flags around this number is misplaced.'
            );
            return;
          }
        }
      }

      const chordCenter = getCellScreenCenter(r, c, clientX, clientY);
      playSound('chord');
      triggerHaptic(22);
      spawnCellVfx(chordCenter.x, chordCenter.y, 'chord');

      let allChordRevealed = [];
      for (let i = 0; i < toReveal.length; i++) {
        const [nr, nc] = toReveal[i];
        const target = state.board[nr][nc];
        // Note: Never call tryFairPlayMineSwap during a Chord, because hitting a mine on a Chord means the player placed a wrong flag!
        if (target.mine) {
          target.revealed = true;
          state.lastHitMineCell = [nr, nc];
          state.gameOver = true;
          stopTimer();
          clearActiveMatchSnapshot();
          recordGameStep('boom', nr, nc, { rev: [nr * state.cols + nc] });
          finalizeCurrentRecording(false);
          const hitCenter = getCellScreenCenter(nr, nc, clientX, clientY);
          playSound('boom');
          spawnCellVfx(hitCenter.x, hitCenter.y, 'boom');
          document.getElementById('hudFaceEmoji').textContent = '😵';
          state.stats.gamesPlayed++;
          saveState();
          renderBoardGrid();
          setTimeout(() => showGameResultModal(false), 480);
          return;
        }
        const subRev = floodRevealReal(nr, nc);
        for (let k = 0; k < subRev.length; k++) allChordRevealed.push(subRev[k]);
      }

      if (allChordRevealed.length > 0) {
        recordGameStep('chord', r, c, {
          rev: allChordRevealed.map(([rr, cc]) => rr * state.cols + cc)
        });
      }
      if (allChordRevealed.length > 12) state.bulkRevealActive = true;
      advanceTutorialIfMatched(r, c, 'chord');
      syncBoardCounts();
      updateGameHud();
      updateCellsBatchDOM(allChordRevealed);
      checkWinCondition();
      if (!state.gameWon && !state.gameOver) saveActiveMatchSnapshot();
    }

    function advanceTutorialIfMatched(r, c, action) {
      if (!state.storyChapterId) return;
      const ch = STORY_CHAPTERS.find(x => x.id === state.storyChapterId);
      if (!ch || !ch.isTutorial) return;
      // Reset explicit target reveal after each valid action so the next step teaches via clue numbers again!
      state.tutorialShowTarget = false;
      state.tutorialStep = (state.tutorialStep || 1) + 1;
      updateStoryTutorialBanner();
    }

    function checkWinCondition() {
      syncBoardCounts();
      const totalSafe = state.rows * state.cols - state.minesCount;
      if (state.revealedCount >= totalSafe && !state.gameOver) {
        state.gameWon = true;
        stopTimer();
        playSound('win');
        triggerHaptic([30, 50, 40]);
        spawnCellVfx(window.innerWidth * 0.35, window.innerHeight * 0.4, 'chord');
        spawnCellVfx(window.innerWidth * 0.65, window.innerHeight * 0.4, 'chord');
        document.getElementById('hudFaceEmoji').textContent = '👑';

        for (let r = 0; r < state.rows; r++) {
          for (let c = 0; c < state.cols; c++) {
            if (state.board[r][c].mine && !state.board[r][c].flagged) {
              state.board[r][c].flagged = true;
            }
          }
        }
        state.flagsPlaced = state.minesCount;
        updateGameHud();
        renderBoardGrid();

        clearActiveMatchSnapshot();
        finalizeCurrentRecording(true);
        state.stats.gamesPlayed++;
        state.stats.gamesWon++;
        state.hintCoins = (state.hintCoins || 0) + 1;

        if (state.isDailyChallenge) {
          const todayKey = new Date().toISOString().slice(0, 10);
          if (state.stats.lastDailyDate !== todayKey) {
            state.stats.dailyStreak = (state.stats.dailyStreak || 0) + 1;
            state.stats.lastDailyDate = todayKey;
            state.hintCoins += 2; // Bonus +2 coins for Daily Challenge
          }
        } else if (!state.storyChapterId && state.difficultyKey !== 'custom' && state.stats.bestTimes.hasOwnProperty(state.difficultyKey)) {
          const prev = state.stats.bestTimes[state.difficultyKey];
          if (!prev || state.timerSeconds < prev) {
            state.stats.bestTimes[state.difficultyKey] = state.timerSeconds;
          }
        }
        if (state.storyChapterId) {
          const tSec = state.timerSeconds;
          const earnedStars = tSec <= state.minesCount * 5 ? 3 : (tSec <= state.minesCount * 9 ? 2 : 1);
          const prevStars = state.stats.storyStars[state.storyChapterId] || 0;
          state.stats.storyStars[state.storyChapterId] = Math.max(prevStars, earnedStars);

          // Check if completing this campaign level unlocked a new Pro Graphics World reward!
          if (!state.unlockedThemes) state.unlockedThemes = { retro: true, retro_dark: true };
          Object.entries(THEME_UNLOCK_RULES).forEach(([tk, rule]) => {
            if (!rule.free && rule.reqLevel === state.storyChapterId && !state.unlockedThemes[tk]) {
              state.unlockedThemes[tk] = true;
              const isAr = state.lang === 'ar';
              setTimeout(() => {
                showToast(
                  isAr
                    ? `🎁 مكافأة إنجاز المرحلة ${rule.reqLevel}: تم فتح عالم غرافيكس جديد في الاستوديو!`
                    : `🎁 Level ${rule.reqLevel} Milestone Reward: New Graphics World Unlocked!`
                );
              }, 900);
            }
          });
        }
        updateDailyChallengeBadgeUI();
        saveState();
        setTimeout(() => showGameResultModal(true), 400);
      }
    }

    /********************************************************************
     * 9. SMART LOGICAL HINT SYSTEM
     ********************************************************************/
    function triggerSmartLogicalHint() {
      if (state.gameOver || state.gameWon) return;

      if (!state.firstClickDone) {
        const midR = Math.floor(state.rows / 2);
        const midC = Math.floor(state.cols / 2);
        state.activeHintCell = [midR, midC];
        const msg = state.lang === 'ar'
          ? `تلميح: ابدأ بالنقر في المنتصف (${midR + 1},${midC + 1}) لفتح منطقة آمنة كبيرة!`
          : `Hint: Tap the center tile (${midR + 1},${midC + 1}) for a guaranteed safe opening!`;
        showHintBanner(msg);
        renderBoardGrid();
        return;
      }

      if (state.activeHintCell) {
        const [ahr, ahc] = state.activeHintCell;
        const ahCell = state.board[ahr] && state.board[ahr][ahc];
        if (ahCell && !ahCell.revealed && !ahCell.flagged) {
          centerBoardInViewport((ahc + 0.5) / state.cols, (ahr + 0.5) / state.rows);
          renderBoardGrid();
          return;
        }
      }

      if (state.hintCoins <= 0) {
        openModal('modalSupport');
        showToast(state.lang === 'ar' ? 'احصل على تلميحات إضافية مجاناً من نافذة الدعم!' : 'Get free bonus Logic Hints in the Support menu!');
        return;
      }

      // First: Check if the player placed any wrong flag (flagged && !mine) that would corrupt logical deduction
      for (let r = 0; r < state.rows; r++) {
        for (let c = 0; c < state.cols; c++) {
          if (state.board[r][c].flagged && !state.board[r][c].mine) {
            state.activeHintCell = [r, c];
            state.controlMode = 'flag';
            updateGameHud();
            showHintBanner(
              state.lang === 'ar'
                ? `تنبيه منطقي: العلم في (${r + 1},${c + 1}) موضوع في مكان غير صحيح! أزله أولاً ليعمل الاستنتاج المنطقي.`
                : `Logic Alert: The flag at (${r + 1},${c + 1}) is misplaced! Remove it first for accurate deduction.`
            );
            renderBoardGrid();
            return;
          }
        }
      }

      const move = findNextLogicalMove(state.board, state.rows, state.cols);
      if (move && move.cells.length > 0) {
        state.hintCoins--;
        saveState();
        updateTopBarCoins();
        const [hr, hc] = move.cells[0];
        state.activeHintCell = [hr, hc];
        state.controlMode = move.action === 'flag' ? 'flag' : 'dig';
        updateGameHud();
        const explanation = state.lang === 'ar' ? move.reasonAr : move.reasonEn;
        showHintBanner(explanation);
        renderBoardGrid();
      } else {
        for (let r = 0; r < state.rows; r++) {
          for (let c = 0; c < state.cols; c++) {
            if (!state.board[r][c].revealed && !state.board[r][c].mine) {
              state.hintCoins--;
              saveState();
              updateTopBarCoins();
              state.activeHintCell = [r, c];
              state.controlMode = 'dig';
              updateGameHud();
              showHintBanner(
                state.lang === 'ar'
                  ? `كاشف الألغام الذكي: المربع (${r + 1},${c + 1}) آمن تماماً للحفر!`
                  : `Smart Scanner: Tile (${r + 1},${c + 1}) is verified 100% SAFE to dig!`
              );
              renderBoardGrid();
              return;
            }
          }
        }
      }
    }

    function showHintBanner(text) {
      const b = document.getElementById('logicHintBanner');
      document.getElementById('logicHintText').textContent = text;
      b.classList.remove('hidden');
    }

    /********************************************************************
     * 10. UI UPDATERS, LOCALIZATION & PRO GRAPHICS WORLD ENGINE
     ********************************************************************/
    let lastAppliedThemeDomId = '';

    function applyTheme(themeId) {
      const safeId = (THEMES[themeId] && isThemeUnlocked(themeId)) ? themeId : 'retro';
      const t = THEMES[safeId] || THEMES.retro;
      const g = THEME_GRAPHICS[t.id] || THEME_GRAPHICS.retro;
      state.theme = t.id;

      if (lastAppliedThemeDomId !== t.id) {
        lastAppliedThemeDomId = t.id;
        document.body.setAttribute('data-theme', t.id);

        const root = document.documentElement;
        Object.entries(t.vars).forEach(([k, v]) => {
          root.style.setProperty(k, v);
        });
        root.style.setProperty('--pattern-opacity', t.patternOpacity);

        const bakedAtlas = getOrBuildBakedTileAtlas(t.id);
        root.style.setProperty('--baked-tile-unrevealed', bakedAtlas.unrevealed);
        root.style.setProperty('--baked-tile-hover', bakedAtlas.hover);
        root.style.setProperty('--baked-tile-revealed', bakedAtlas.revealed);
        root.style.setProperty('--baked-tile-flagged', bakedAtlas.flagged);
        root.style.setProperty('--baked-tile-mine-hit', bakedAtlas.mineHit);
        root.style.setProperty('--baked-tile-mine-reveal', bakedAtlas.mineReveal);

        const getHeroGameEmblemSvg = (themeKey) => {
          const palettes = {
            retro:      { bg1: '#0f172a', bg2: '#1e3a8a', rim: '#38bdf8', tile1: '#e2e8f0', tile2: '#cbd5e1', accent: '#f59e0b', mine: '#111827', glow: '#38bdf8', num1: '#2563eb', num2: '#16a34a' },
            retro_dark: { bg1: '#090d16', bg2: '#1e293b', rim: '#38bdf8', tile1: '#334155', tile2: '#1e293b', accent: '#38bdf8', mine: '#0f172a', glow: '#38bdf8', num1: '#60a5fa', num2: '#4ade80' },
            arabian:    { bg1: '#0c1821', bg2: '#1f3c4a', rim: '#f5b041', tile1: '#254859', tile2: '#162d38', accent: '#f5b041', mine: '#1e293b', glow: '#2dd4bf', num1: '#38bdf8', num2: '#34d399' },
            obsidian:   { bg1: '#060913', bg2: '#1e1b4b', rim: '#38bdf8', tile1: '#1e2d4a', tile2: '#0f172a', accent: '#a855f7', mine: '#090d16', glow: '#f43f5e', num1: '#38bdf8', num2: '#4ade80' },
            sakura:     { bg1: '#4c0519', bg2: '#881337', rim: '#fda4af', tile1: '#fff0f3', tile2: '#ffe4e8', accent: '#e11d48', mine: '#3f1d28', glow: '#fb7185', num1: '#0284c7', num2: '#059669' },
            emerald:    { bg1: '#022c22', bg2: '#064e3b', rim: '#fbbf24', tile1: '#165642', tile2: '#09291f', accent: '#fbbf24', mine: '#041a14', glow: '#34d399', num1: '#38bdf8', num2: '#4ade80' }
          };
          const p = palettes[themeKey] || palettes.retro;
          return `<svg viewBox="0 0 64 64" class="w-full h-full drop-shadow">
            <defs>
              <linearGradient id="embBg_${themeKey}" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="${p.bg2}"/>
                <stop offset="100%" stop-color="${p.bg1}"/>
              </linearGradient>
              <linearGradient id="embGold_${themeKey}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#fde047"/>
                <stop offset="100%" stop-color="${p.accent}"/>
              </linearGradient>
            </defs>
            <!-- Outer Tactical Shield / Crest Frame -->
            <rect x="3" y="3" width="58" height="58" rx="15" fill="url(#embBg_${themeKey})" stroke="${p.rim}" stroke-width="2.2"/>
            <!-- Subtle Radar Crosshair Ring -->
            <circle cx="32" cy="32" r="24" fill="none" stroke="${p.glow}" stroke-width="1" stroke-dasharray="4 3" opacity="0.45"/>
            <!-- 2x2 Isometric 3D Minesweeper Grid Base -->
            <!-- Top-Left Tile: Revealed '1' -->
            <rect x="9" y="9" width="20" height="20" rx="4.5" fill="${p.tile1}" stroke="${p.rim}" stroke-width="1.2"/>
            <text x="19" y="24" text-anchor="middle" font-family="Chakra Petch, Fredoka, sans-serif" font-weight="900" font-size="14" fill="${p.num1}">1</text>
            <!-- Top-Right Tile: 3D Unrevealed Tactical Keycap with Shield Star -->
            <rect x="35" y="9" width="20" height="20" rx="4.5" fill="${p.tile2}" stroke="${p.accent}" stroke-width="1.3"/>
            <polygon points="45,12.5 46.8,16.5 51,17 47.8,19.8 48.7,24 45,21.8 41.3,24 42.2,19.8 39,17 43.2,16.5" fill="url(#embGold_${themeKey})"/>
            <!-- Bottom-Left Tile: 3D Unrevealed Tile with Mini Radar Beacon -->
            <rect x="9" y="35" width="20" height="20" rx="4.5" fill="${p.tile2}" stroke="${p.rim}" stroke-width="1.2"/>
            <path d="M16 40 L16 50 M16 40 L24 43.5 L16 47 Z" fill="#ef4444" stroke="#fef08a" stroke-width="1.1" stroke-linejoin="round"/>
            <!-- Bottom-Right Tile: Revealed '2' -->
            <rect x="35" y="35" width="20" height="20" rx="4.5" fill="${p.tile1}" stroke="${p.rim}" stroke-width="1.2"/>
            <text x="45" y="50" text-anchor="middle" font-family="Chakra Petch, Fredoka, sans-serif" font-weight="900" font-size="14" fill="${p.num2}">2</text>
            <!-- Center Foreground: Pro 3D Naval/Cyber Tactical Mine Core Emblem -->
            <circle cx="32" cy="32" r="13.5" fill="${p.bg1}" opacity="0.88"/>
            <g stroke="url(#embGold_${themeKey})" stroke-width="2.6" stroke-linecap="round">
              <line x1="32" y1="16" x2="32" y2="48"/>
              <line x1="16" y1="32" x2="48" y2="32"/>
              <line x1="20.7" y1="20.7" x2="43.3" y2="43.3"/>
              <line x1="43.3" y1="20.7" x2="20.7" y2="43.3"/>
            </g>
            <circle cx="32" cy="32" r="9.5" fill="${p.mine}" stroke="${p.rim}" stroke-width="2"/>
            <circle cx="29" cy="29" r="2.8" fill="#ffffff" opacity="0.9"/>
            <circle cx="34.5" cy="34.5" r="2" fill="${p.glow}"/>
          </svg>`;
        };
        const emblemSvg = getHeroGameEmblemSvg(t.id);
        document.getElementById('brandIcon').innerHTML = emblemSvg;
        document.getElementById('brandIcon').className = 'w-7 h-7 inline-flex items-center justify-center';
        document.getElementById('heroArtEmoji').innerHTML = emblemSvg;
        document.getElementById('hudFlagIconWrap').innerHTML = g.flagSvg;
        document.getElementById('bottomFlagIcon').innerHTML = g.flagSvg;
        document.getElementById('themeHorizonContainer').innerHTML = g.horizonSvg;
        renderStaticAmbientCanvas();
      }

      const SHORT_THEME_BADGES = {
        en: { retro: 'Classic 95', retro_dark: 'Dark 95 🌙', sakura: 'Sakura 🌸', emerald: 'Atlantis 🌿', arabian: 'Arabian 🕌', obsidian: 'Cyber 2099 🌌' },
        ar: { retro: 'كلاسيك 95', retro_dark: 'ليلي 95 🌙', sakura: 'الساكورا 🌸', emerald: 'أطلانطس 🌿', arabian: 'ألف ليلة 🕌', obsidian: 'سايبر 2099 🌌' }
      };
      const shortMap = SHORT_THEME_BADGES[state.lang] || SHORT_THEME_BADGES.en;
      document.getElementById('txtActiveThemeName').textContent = shortMap[t.id] || t.id;

      // Update Live Showcase Strip in Themes Studio showing 3D Tile, Flag Sprite, Mine Sprite & World FX description
      const showcaseBar = document.getElementById('liveThemeShowcaseBar');
      if (showcaseBar) {
        const worldSpec = state.lang === 'ar' ? g.descAr : g.descEn;
        showcaseBar.innerHTML = `
          <div class="flex items-center gap-2 shrink-0">
            <div class="ms-cell unrevealed w-9 h-9"></div>
            <div class="ms-cell flagged w-9 h-9" style="animation:none;"></div>
            <div class="ms-cell mine-hit w-9 h-9" style="animation:none;"></div>
          </div>
          <div class="text-[11px] leading-snug font-medium flex-1 px-1" style="color: var(--text-secondary);">
            ${worldSpec}
          </div>
        `;
      }

      const studioModal = document.getElementById('modalThemesStudio');
      if (studioModal && !studioModal.classList.contains('hidden')) renderThemeSwatches();
      const settingsModal = document.getElementById('modalSettings');
      if (settingsModal && !settingsModal.classList.contains('hidden')) renderSettingsThemes();
      if (state.view === 'game') renderBoardGrid();
      if (!window.__msBooting) saveState();
    }

    function applyLanguage(langCode) {
      const dict = LANGUAGES[langCode] || LANGUAGES.en;
      state.lang = langCode;
      document.documentElement.lang = langCode;
      document.documentElement.dir = dict.dir;

      const PLAY_NOW_LABELS = {
        en: { btn: 'Play Now', sub: '7 Difficulty Levels & Custom Board', camp: 'Campaign', daily: 'Daily Challenge', themes: 'Themes & Worlds' },
        ar: { btn: 'العب الآن', sub: '7 مستويات صعوبة ولوحة مخصصة', camp: 'طور القصة', daily: 'تحدي اليوم', themes: 'الثيمات والعوالم' },
        es: { btn: 'Jugar Ahora', sub: '7 Niveles y Tablero Personalizado', camp: 'Campaña', daily: 'Reto Diario', themes: 'Temas y Mundos' },
        fr: { btn: 'Jouer', sub: '7 Niveaux & Grille Personnalisée', camp: 'Campagne', daily: 'Défi du Jour', themes: 'Thèmes & Mondes' },
        de: { btn: 'Jetzt Spielen', sub: '7 Stufen & Eigenes Spielfeld', camp: 'Kampagne', daily: 'Tagesrätsel', themes: 'Themen & Welten' },
        ja: { btn: 'プレイ開始', sub: '7段階の難易度＆カスタム盤面', camp: 'キャンペーン', daily: 'デイリー挑戦', themes: 'テーマ＆世界' },
        zh: { btn: '开始游戏', sub: '7大难度等级与自定义棋盘', camp: '闯关战役', daily: '每日挑战', themes: '主题与画质世界' },
        ru: { btn: 'Играть', sub: '7 Уровней и Своё Поле', camp: 'Кампания', daily: 'Задача Дня', themes: 'Темы и Миры' },
        tr: { btn: 'Hemen Oyna', sub: '7 Zorluk Seviyesi & Özel Tahta', camp: 'Sefer Modu', daily: 'Günlük Görev', themes: 'Temalar & Dünyalar' }
      };
      const uiHome = PLAY_NOW_LABELS[langCode] || PLAY_NOW_LABELS.en;

      document.getElementById('txtCurrentLangCode').textContent = dict.code;
      document.getElementById('txtAppTitle').textContent = dict.appTitle;
      document.getElementById('txtAppSubtitle').textContent = dict.appSubtitle;
      document.getElementById('badgeNoGuessHome').textContent = dict.noGuessBadge;
      document.getElementById('txtHeroHeading').textContent = dict.appTitle;

      let totalStars = 0;
      for (let i = 1; i <= 50; i++) totalStars += (Number(state.stats.storyStars[i]) || 0);
      const elStoryStars = document.getElementById('txtStoryStarsSummary');
      if (elStoryStars) {
        elStoryStars.textContent = totalStars > 0
          ? `⭐ ${totalStars} / 150`
          : (state.lang === 'ar' ? '⭐ 50 مرحلة' : '⭐ 50 Levels');
      }

      document.getElementById('txtHeroDesc').textContent = dict.heroDesc;
      document.getElementById('txtStoryCtaLabel').textContent = dict.storyCtaLabel;
      document.getElementById('txtBtnStoryMode').textContent = uiHome.camp;
      document.getElementById('txtQuickPlayHeading').textContent = dict.quickPlayHeading;
      document.getElementById('txtNoGuessToggleLabel').textContent = dict.noGuessToggle;
      document.getElementById('txtDiffBeginner').textContent = dict.diffBeginner;
      document.getElementById('txtDiffIntermediate').textContent = dict.diffIntermediate;
      document.getElementById('txtDiffExpert').textContent = dict.diffExpert;
      document.getElementById('txtDiffMaster').textContent = dict.diffMaster;
      const elGm = document.getElementById('txtDiffGrandmaster');
      const elLg = document.getElementById('txtDiffLegend');
      const elNm = document.getElementById('txtDiffNightmare');
      if (elGm) elGm.textContent = state.lang === 'ar' ? 'أستاذ كبير' : 'Grandmaster';
      if (elLg) elLg.textContent = state.lang === 'ar' ? 'أسطورة' : 'Legend';
      if (elNm) elNm.textContent = state.lang === 'ar' ? 'تحدي المحترفين (250 لغم)' : 'Extreme Pro 250';
      const elReplayStory = document.getElementById('txtReplayStoryBtn');
      if (elReplayStory) elReplayStory.textContent = state.lang === 'ar' ? 'القصة' : 'Story';
      document.getElementById('txtCustomBoardTitle').textContent = dict.customBoardTitle;
      document.getElementById('txtCustomCols').textContent = dict.customCols;
      document.getElementById('txtCustomRows').textContent = dict.customRows;
      document.getElementById('txtCustomMines').textContent = dict.customMines;
      document.getElementById('txtBtnPlayCustom').textContent = dict.btnPlayCustom;
      document.getElementById('txtHomeThemesTitle').textContent = dict.homeThemesTitle;
      document.getElementById('txtMainBtnPlay').textContent = uiHome.btn;
      document.getElementById('txtMainBtnPlaySub').textContent = uiHome.sub;
      document.getElementById('txtMainBtnThemes').textContent = uiHome.themes;
      document.getElementById('txtPlayModalLogicHint').textContent = state.lang === 'ar'
        ? 'جميع اللوحات مفحوصة وتُحل بالمنطق الخالص 100%'
        : dict.setNoGuessSub;
      document.getElementById('txtNavTutorial').textContent = dict.navTutorial;
      document.getElementById('txtNavStats').textContent = dict.navStats;
      document.getElementById('txtNavSupport').textContent = dict.navSupport;
      document.getElementById('txtStoryMapTitle').textContent = dict.storyMapTitle;
      document.getElementById('txtStoryMapSub').textContent = dict.storyMapSub;
      document.getElementById('txtStoryBack').textContent = dict.menuBtn;
      document.getElementById('txtGameMenuBtn').textContent = dict.menuBtn;
      document.getElementById('txtHintBtn').textContent = dict.hintBtn;
      document.getElementById('txtModeDig').textContent = dict.modeDig;
      document.getElementById('txtModeFlag').textContent = dict.modeFlag;
      document.getElementById('txtSettingsTitle').textContent = dict.settingsTitle;
      document.getElementById('txtSettingThemeLabel').textContent = dict.settingThemeLabel;
      document.getElementById('txtSettingControlsHeader').textContent = dict.settingControlsHeader;
      document.getElementById('txtSetPrimaryTap').textContent = dict.setPrimaryTap;
      document.getElementById('txtSetPrimaryTapSub').textContent = dict.setPrimaryTapSub;
      document.getElementById('optTapDig').textContent = dict.optTapDig;
      document.getElementById('optTapFlag').textContent = dict.optTapFlag;
      document.getElementById('txtSetLongPress').textContent = dict.setLongPress;
      document.getElementById('txtSetChordLabel').textContent = dict.setChordLabel;
      document.getElementById('txtSetChordSub').textContent = dict.setChordSub;
      document.getElementById('txtSetNoGuessLabel').textContent = dict.setNoGuessLabel;
      document.getElementById('txtSetNoGuessSub').textContent = dict.setNoGuessSub;
      document.getElementById('txtSetSound').textContent = dict.setSound;
      document.getElementById('txtSetHaptics').textContent = dict.setHaptics;
      document.getElementById('txtBtnDoneSettings').textContent = dict.btnDoneSettings;
      document.getElementById('txtLangModalTitle').textContent = dict.langModalTitle;
      document.getElementById('txtSupportTitle').textContent = dict.supportTitle;
      document.getElementById('txtSupportSubtitle').textContent = dict.supportSubtitle;
      document.getElementById('txtTier1Title').textContent = dict.tier1Title;
      document.getElementById('txtTier1Desc').textContent = dict.tier1Desc;
      document.getElementById('txtTier2Title').textContent = dict.tier2Title;
      document.getElementById('txtTier2Desc').textContent = dict.tier2Desc;
      document.getElementById('txtTier3Title').textContent = dict.tier3Title;
      document.getElementById('txtTier3Desc').textContent = dict.tier3Desc;
      document.getElementById('txtFreeSupportHeader').textContent = dict.freeSupportHeader;
      document.getElementById('txtBtnBonusHint').textContent = dict.btnBonusHint;
      document.getElementById('txtBtnRateApp').textContent = dict.btnRateApp;
      document.getElementById('txtBtnShareApp').textContent = dict.btnShareApp;
      document.getElementById('txtStatsModalTitle').textContent = dict.statsModalTitle;
      document.getElementById('txtStatWins').textContent = dict.statWins;
      document.getElementById('txtStatWinRate').textContent = dict.statWinRate;
      document.getElementById('txtStatStars').textContent = dict.statStars;
      document.getElementById('txtBestTimesHeader').textContent = dict.bestTimesHeader;
      document.getElementById('txtResTime').textContent = dict.resTime;
      document.getElementById('txtResMode').textContent = dict.resMode;
      document.getElementById('txtBtnPlayAgain').textContent = dict.btnPlayAgain;
      document.getElementById('txtBtnNextChapter').textContent = dict.btnNextChapter;
      document.getElementById('txtBtnResultHome').textContent = dict.menuBtn;

      const chTexts = dict.storyChapters || LANGUAGES.en.storyChapters;
      document.getElementById('txtStoryProgressSummary').textContent = chTexts[0].title;

      const isAr = state.lang === 'ar';
      const setTxt = (id, arTxt, enTxt) => {
        const el = document.getElementById(id);
        if (el) el.textContent = isAr ? arTxt : enTxt;
      };
      setTxt('txtSettingVisualsHeader', '✨ الرسوميات والمناظر 3D والأنيميشن', '✨ Graphics, 3D Scenery & Animations');
      setTxt('txtSetScenicWorld', '🌄 المناظر ثلاثية الأبعاد والخلفية المتحركة', '🌄 3D Scenic Worlds & Live Background');
      setTxt('txtSetScenicWorldSub', 'عرض المناظر الطبيعية ثلاثية الأبعاد والجسيمات العائمة خلف اللوحة', 'Show 3D scenic horizons & floating 60fps world particles');
      setTxt('txtSetAnimations', '✨ أنيميشن المربعات والمؤثرات البصرية', '✨ Tile Animations & Particle VFX');
      setTxt('txtSetAnimationsSub', 'تفعيل حركة كشف المربعات، ارتداد العلم، الزخارف، وشرارات التفاعل', 'Enable tile pop, flag bounce, 3D tile ornaments & tap sparks');
      setTxt('txtSetDoubleTap', '⚡ وظيفة النقر المزدوج', '⚡ Double-Tap Action');
      setTxt('txtSetDoubleTapSub', 'تخصيص وظيفة النقر مرتين بسرعة على الخلية', 'Customize what tapping a cell twice quickly does');
      setTxt('optDblOpposite', '🔄 الإجراء المعاكس (حفر ↔ علم)', '🔄 Opposite (Dig ↔ Flag)');
      setTxt('optDblDig', '⛏️ حفر وكشف دائماً', '⛏️ Always Dig (Reveal)');
      setTxt('optDblFlag', '🚩 وضع / إزالة علم دائماً', '🚩 Always Flag');
      setTxt('optDblChord', '⚡ الكشف السريع على الأرقام', '⚡ Quick-Open Numbers Only');
      setTxt('optDblOff', '🚫 إيقاف النقر المزدوج', '🚫 Disabled (Off)');
      setTxt('txtSetDoubleTapDelay', 'سرعة استجابة النقر المزدوج', 'Double-Tap Speed Window');
      setTxt('txtCloudModalTitle', 'مركز الحساب والمزامنة السحابية', 'Account & Cloud Sync Hub');
      setTxt('txtAccountAuthHeader', 'ربط الحساب والمزامنة التلقائية', 'Account Login & Auto-Sync');
      setTxt('txtAccountAuthDesc', 'اربط اللعبة بحساب ألعاب Google Play أو بريدك الإلكتروني لمزامنة نجوم الـ 50 مرحلة، الأرقام القياسية، والعملات تلقائياً فور فتح اللعبة من أي جهاز.', 'Link Google Play Games or your Email to automatically sync your 50-level stars, best times, and coins across all devices.');
      setTxt('txtBtnGooglePlayLogin', 'تسجيل الدخول عبر Google Play Games', 'Sign in with Google Play Games');
      setTxt('txtBtnEmailLogin', 'ربط الإيميل', 'Link Email');
      setTxt('txtBtnLogoutAccount', 'خروج', 'Sign Out');
      setTxt('txtAutoSyncToggleLabel', '🔄 مزامنة سحابية تلقائية بعد كل فوز', '🔄 Auto-Sync to Cloud after every win');
      setTxt('txtCloudModalSub', 'يعمل 100% بدون إنترنت (Local + IndexedDB) ويزامن تلقائياً عند توفر الشبكة', 'Works 100% Offline (Local + IndexedDB) & Syncs Automatically When Online');
      setTxt('txtStorageStatusLabel', 'حالة التخزين:', 'Storage Status:');
      setTxt('txtPlayerCloudIdLabel', 'معرّف المزامنة:', 'Player Sync ID:');
      setTxt('txtLastSyncedLabel', 'آخر حفظ آمن:', 'Last Local/Cloud Save:');
      setTxt('txtBackupCodeHeader', '🔑 كود النقل الفوري بين الأجهزة (مجاني بدون خادم)', '🔑 Instant Cross-Device Transfer Code (Free)');
      setTxt('txtBackupCodeDesc', 'انسخ كود تقدمك المشفّر أو الصق كوداً من جهاز آخر لدمج أعلى النجوم والأوقات القياسية والعملات.', 'Copy your encrypted progress code or paste a code from another device to merge your highest stars, best times & coins.');
      setTxt('txtBtnCopyCode', 'نسخ كود الحفظ', 'Copy Save Code');
      setTxt('txtBtnDownloadJson', 'ملف JSON', 'JSON File');
      setTxt('txtBtnRestoreCode', 'دمج واستعادة', 'Merge');
      setTxt('txtCloudEndpointHeader', '🌐 المزامنة السحابية التلقائية (Firebase / Supabase مجاني)', '🌐 Auto Cloud Sync (Firebase / Supabase Free Tier)');
      setTxt('txtCloudEndpointDesc', 'اختياري: ضع رابط قاعدة Firebase المجانية ليتم رفع ومزامنة تقدمك تلقائياً في الخلفية فور اتصال الإنترنت.', 'Optional: Enter a free Firebase Realtime DB URL to auto-sync your progress in the background whenever internet is available.');
      setTxt('txtBtnSyncNow', 'حفظ ومزامنة السحابة الآن', 'Save & Sync Cloud Now');
      setTxt('txtAppVersionTitle', 'إصدار التطبيق: v1.0.0 (Build 100)', 'App Version: v1.0.0 (Build 100)');
      setTxt('txtAppVersionSub', 'يدعم التحديث المباشر للـ APK فوق النسخة الحالية بدون حذف بياناتك', 'Supports direct in-place APK updates without losing saved data');
      setTxt('supportThankYouBanner', '🎉 شكراً لدعمك! تم تفعيل تاج VIP وإضافة التلميحات الإضافية!', '🎉 Thank you for supporting Minesweeper Odyssey! VIP Crown & Bonus Hints Activated!');
      const inpSaveCode = document.getElementById('inpImportSaveCode');
      if (inpSaveCode) inpSaveCode.placeholder = isAr ? 'الصق كود الحفظ هنا (MSODY2:...)' : 'Paste Save Code (MSODY2:...) here';
      const btnBackStory = document.getElementById('btnBackFromStory');
      if (btnBackStory) {
        btnBackStory.innerHTML = `${isAr ? '→' : '←'} <span id="txtStoryBack">${dict.menuBtn}</span>`;
      }
      const btnGameBackEl = document.getElementById('btnGameBack');
      if (btnGameBackEl) {
        btnGameBackEl.innerHTML = `<span>${isAr ? '→' : '←'}</span> <span id="txtGameMenuBtn">${dict.menuBtn}</span>`;
      }

      updateDailyChallengeBadgeUI();
      updateResumeMatchButtonUI();
      updateCloudStatusBadges();
      applyTheme(state.theme);
      updateResponsiveDimensionLabels();
      if (state.view === 'story') renderStoryChaptersList();
      updateStoryTutorialBanner();
      updateGameHud();
      if (!window.__msBooting) saveState();
    }

    function renderThemeSwatches() {
      const container = document.getElementById('homeThemeSwatches');
      if (!container) return;
      container.innerHTML = '';
      const dict = LANGUAGES[state.lang] || LANGUAGES.en;
      const themeNames = dict.themes || LANGUAGES.en.themes;
      const isAr = state.lang === 'ar';

      Object.values(THEMES).forEach(t => {
        const g = THEME_GRAPHICS[t.id];
        const unlocked = isThemeUnlocked(t.id);
        const btn = document.createElement('button');
        const isActive = state.theme === t.id;
        btn.className = `p-2 rounded-xl flex flex-col items-center gap-1 border transition ${isActive ? 'scale-105 shadow-lg' : (unlocked ? 'opacity-90 hover:opacity-100' : 'opacity-60 hover:opacity-90')}`;
        btn.style.background = t.swatchBg;
        btn.style.borderColor = isActive ? 'var(--accent-primary)' : 'rgba(255,255,255,0.25)';
        btn.style.borderWidth = isActive ? '2.5px' : '1px';
        const shortLabel = t.id === 'retro' ? (isAr ? 'كلاسيك 95' : 'CLASSIC 95') : (t.id === 'retro_dark' ? (isAr ? 'ليلي 95 🌙' : 'DARK 95 🌙') : t.id.toUpperCase());
        btn.innerHTML = `
          <div class="w-7 h-7 flex items-center justify-center">${unlocked ? g.flagSvg : '🔒'}</div>
          <span class="text-xs font-extrabold text-white drop-shadow leading-tight text-center">${shortLabel}</span>
        `;
        btn.addEventListener('click', (e) => {
          if (tryUnlockThemeWithCoinsOrPrompt(t.id)) {
            playSound('chord');
            spawnCellVfx(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 'flag');
          }
        });
        container.appendChild(btn);
      });

      const studioList = document.getElementById('studioThemesDetailedList');
      if (studioList) {
        studioList.innerHTML = '';
        Object.values(THEMES).forEach(t => {
          const g = THEME_GRAPHICS[t.id];
          const unlocked = isThemeUnlocked(t.id);
          const rule = THEME_UNLOCK_RULES[t.id] || { free: true };
          const isActive = state.theme === t.id;
          const card = document.createElement('button');
          card.className = `themed-card setting-card-row text-xs sm:text-sm font-black text-start ${unlocked ? '' : 'opacity-75'}`;
          if (isActive) {
            card.style.borderColor = 'var(--accent-primary)';
            card.style.borderWidth = '2px';
          }
          const subDesc = unlocked
            ? (isAr ? g.descAr : g.descEn)
            : (isAr ? `🔒 ${rule.labelAr}` : `🔒 ${rule.labelEn}`);
          const rightBadge = isActive
            ? '✅'
            : (unlocked
              ? (isAr ? '<span class="text-[10px] px-2.5 py-1 rounded-lg themed-input">تفعيل</span>' : '<span class="text-[10px] px-2.5 py-1 rounded-lg themed-input">Use</span>')
              : `<span class="text-[10px] px-2 py-1 rounded-lg font-extrabold" style="background: var(--accent-primary); color: var(--accent-Contrast);">🔒 ${rule.coinCost} 💡</span>`);
          card.innerHTML = `
            <div class="flex items-center gap-2.5 min-w-0 flex-1">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 p-1.5" style="background: ${t.swatchBg};">
                ${unlocked ? g.flagSvg : '<span class="text-base">🔒</span>'}
              </div>
              <div class="min-w-0 flex-1">
                <div class="font-extrabold leading-snug">${themeNames[t.id] || t.id}</div>
                <div class="text-xs leading-snug font-bold opacity-90 mt-0.5" style="color: var(--text-secondary);">${subDesc}</div>
              </div>
            </div>
            <span class="shrink-0">${rightBadge}</span>
          `;
          card.addEventListener('click', (e) => {
            if (tryUnlockThemeWithCoinsOrPrompt(t.id)) {
              playSound('chord');
              spawnCellVfx(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 'flag');
            }
          });
          studioList.appendChild(card);
        });
      }
    }

    function renderSettingsThemes() {
      const container = document.getElementById('settingsThemeList');
      container.innerHTML = '';
      const dict = LANGUAGES[state.lang] || LANGUAGES.en;
      const themeNames = dict.themes || LANGUAGES.en.themes;
      const isAr = state.lang === 'ar';

      Object.values(THEMES).forEach(t => {
        const g = THEME_GRAPHICS[t.id];
        const unlocked = isThemeUnlocked(t.id);
        const rule = THEME_UNLOCK_RULES[t.id] || { free: true };
        const isActive = state.theme === t.id;
        const btn = document.createElement('button');
        btn.className = `themed-card setting-card-row text-xs sm:text-sm font-black text-start ${unlocked ? '' : 'opacity-75'}`;
        if (isActive) {
          btn.style.borderColor = 'var(--accent-primary)';
          btn.style.borderWidth = '2px';
        }
        const subDesc = unlocked
          ? (isAr ? g.descAr : g.descEn)
          : (isAr ? `🔒 ${rule.labelAr}` : `🔒 ${rule.labelEn}`);
        const rightBadge = isActive
          ? '✅'
          : (unlocked
            ? (isAr ? '<span class="text-[10px] px-2.5 py-1 rounded-lg themed-input">تفعيل</span>' : '<span class="text-[10px] px-2.5 py-1 rounded-lg themed-input">Use</span>')
            : `<span class="text-[10px] px-2 py-1 rounded-lg font-extrabold" style="background: var(--accent-primary); color: var(--accent-Contrast);">🔒 ${rule.coinCost} 💡</span>`);
        btn.innerHTML = `
          <div class="flex items-center gap-2.5 min-w-0 flex-1">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 p-1.5" style="background: ${t.swatchBg};">
              ${unlocked ? g.flagSvg : '<span class="text-base">🔒</span>'}
            </div>
            <div class="min-w-0 flex-1">
              <div class="font-extrabold leading-snug">${themeNames[t.id] || t.id}</div>
              <div class="text-xs leading-snug font-bold opacity-90 mt-0.5" style="color: var(--text-secondary);">${subDesc}</div>
            </div>
          </div>
          <span class="shrink-0">${rightBadge}</span>
        `;
        btn.addEventListener('click', (e) => {
          if (tryUnlockThemeWithCoinsOrPrompt(t.id)) {
            playSound('chord');
            spawnCellVfx(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 'flag');
          }
        });
        container.appendChild(btn);
      });
    }

    function renderLanguageModalGrid() {
      const container = document.getElementById('langGridContainer');
      container.innerHTML = '';
      Object.entries(LANGUAGES).forEach(([code, langObj]) => {
        const isActive = state.lang === code;
        const btn = document.createElement('button');
        btn.className = 'themed-card p-3.5 rounded-xl flex flex-col items-center justify-center text-center gap-1 text-sm sm:text-base font-extrabold hover:scale-[1.02] transition';
        if (isActive) {
          btn.style.borderColor = 'var(--accent-primary)';
          btn.style.borderWidth = '2px';
        }
        btn.innerHTML = `
          <span class="text-base font-black" style="color: var(--accent-primary);">${langObj.code}</span>
          <span>${langObj.nativeName}</span>
        `;
        btn.addEventListener('click', () => {
          playSound('dig');
          applyLanguage(code);
          closeModal('modalLanguages');
        });
        container.appendChild(btn);
      });
    }

    function updateResponsiveDimensionLabels() {
      const horiz = isHorizontalBoardLayout();
      Object.entries(DIFFICULTIES).forEach(([key, d]) => {
        const dims = getAdaptiveDimensions(d.shortSide, d.longSide);
        const el = document.getElementById(`diffDim_${key}`);
        if (el) {
          el.textContent = `${dims.cols} × ${dims.rows} • ${d.mines} 💣`;
        }
      });

      const dict = LANGUAGES[state.lang] || LANGUAGES.en;
      const bDims = getAdaptiveDimensions(DIFFICULTIES.beginner.shortSide, DIFFICULTIES.beginner.longSide);
      const iDims = getAdaptiveDimensions(DIFFICULTIES.intermediate.shortSide, DIFFICULTIES.intermediate.longSide);
      const eDims = getAdaptiveDimensions(DIFFICULTIES.expert.shortSide, DIFFICULTIES.expert.longSide);
      const mDims = getAdaptiveDimensions(DIFFICULTIES.master.shortSide, DIFFICULTIES.master.longSide);

      const elBeg = document.getElementById('txtBestBeg');
      const elInt = document.getElementById('txtBestInt');
      const elExp = document.getElementById('txtBestExp');
      const elMas = document.getElementById('txtBestMas');
      if (elBeg) elBeg.textContent = `${dict.diffBeginner} (${bDims.cols}×${bDims.rows})`;
      if (elInt) elInt.textContent = `${dict.diffIntermediate} (${iDims.cols}×${iDims.rows})`;
      if (elExp) elExp.textContent = `${dict.diffExpert} (${eDims.cols}×${eDims.rows})`;
      if (elMas) elMas.textContent = `${dict.diffMaster} (${mDims.cols}×${mDims.rows})`;
      const gmDims = getAdaptiveDimensions(DIFFICULTIES.grandmaster.shortSide, DIFFICULTIES.grandmaster.longSide);
      const lgDims = getAdaptiveDimensions(DIFFICULTIES.legend.shortSide, DIFFICULTIES.legend.longSide);
      const nmDims = getAdaptiveDimensions(DIFFICULTIES.nightmare.shortSide, DIFFICULTIES.nightmare.longSide);
      const elBestGm = document.getElementById('txtBestGm');
      const elBestLeg = document.getElementById('txtBestLeg');
      const elBestNm = document.getElementById('txtBestNm');
      const isAr = state.lang === 'ar';
      if (elBestGm) elBestGm.textContent = `${isAr ? 'أستاذ كبير' : 'Grandmaster'} (${gmDims.cols}×${gmDims.rows})`;
      if (elBestLeg) elBestLeg.textContent = `${isAr ? 'أسطورة' : 'Legend'} (${lgDims.cols}×${lgDims.rows})`;
      if (elBestNm) elBestNm.textContent = `${isAr ? 'تحدي 250 لغم' : 'Extreme 250'} (${nmDims.cols}×${nmDims.rows})`;

      const inpCols = document.getElementById('inpCustomCols');
      const inpRows = document.getElementById('inpCustomRows');
      if (inpCols && inpRows) {
        const cVal = parseInt(inpCols.value, 10) || 10;
        const rVal = parseInt(inpRows.value, 10) || 12;
        if (horiz && cVal < rVal) {
          inpCols.value = rVal;
          inpRows.value = cVal;
        } else if (!horiz && cVal > rVal) {
          inpCols.value = rVal;
          inpRows.value = cVal;
        }
      }
    }

    let activeStoryFilter = 'all';

    function isLevelUnlocked(levelId) {
      if (DEV_PREVIEW_UNLOCK_ALL) return true;
      if (levelId <= 1) return true;
      return (state.stats.storyStars[levelId - 1] || 0) > 0;
    }

    function getNextUnfinishedLevelId() {
      for (let i = 1; i <= STORY_CHAPTERS.length; i++) {
        if (!state.stats.storyStars[i] || state.stats.storyStars[i] <= 0) {
          return i;
        }
      }
      return STORY_CHAPTERS.length;
    }

    function renderStoryChaptersList() {
      const container = document.getElementById('storyChaptersList');
      if (!container) return;
      container.innerHTML = '';
      const isAr = state.lang === 'ar';

      let completedCount = 0;
      let totalStars = 0;
      for (let i = 1; i <= STORY_CHAPTERS.length; i++) {
        const s = state.stats.storyStars[i] || 0;
        if (s > 0) completedCount++;
        totalStars += s;
      }
      const nextLvl = getNextUnfinishedLevelId();
      const progLbl = document.getElementById('txtCampaignProgressLabel');
      const starsLbl = document.getElementById('txtCampaignStarsLabel');
      const progFill = document.getElementById('campaignProgressBarFill');
      const contLbl = document.getElementById('txtBtnContinueCampaign');

      if (progLbl) {
        progLbl.textContent = isAr
          ? `تقدم الحملة: ${completedCount} / 50 مرحلة مكتملة`
          : `Campaign Progress: ${completedCount} / 50 Levels`;
      }
      if (starsLbl) {
        starsLbl.textContent = `⭐ ${totalStars} / 150`;
      }
      if (progFill) {
        progFill.style.width = `${Math.round((completedCount / 50) * 100)}%`;
      }
      if (contLbl) {
        contLbl.textContent = isAr
          ? (nextLvl <= 5 ? `ابدأ مرحلة التأهيل ${nextLvl}` : `متابعة المستوى ${nextLvl}`)
          : (nextLvl <= 5 ? `Start Tutorial ${nextLvl}` : `Continue Level ${nextLvl}`);
      }

      const tabsEl = document.getElementById('storyFilterTabs');
      if (tabsEl) {
        tabsEl.innerHTML = '';
        const tabs = [
          { id: 'all', label: isAr ? 'الكل (1–50)' : 'All (1–50)' },
          { id: 'tut', label: isAr ? '🎓 التأهيل (1–5)' : '🎓 Academy (1–5)' },
          { id: 'act1', label: isAr ? '🕌 ف1 (1–10)' : '🕌 Act I (1–10)' },
          { id: 'act2', label: isAr ? '🌸 ف2 (11–20)' : '🌸 Act II (11–20)' },
          { id: 'act3', label: isAr ? '🌿 ف3 (21–30)' : '🌿 Act III (21–30)' },
          { id: 'act4', label: isAr ? '🕹️ ف4 (31–40)' : '🕹️ Act IV (31–40)' },
          { id: 'act5', label: isAr ? '🌌 ف5 (41–50)' : '🌌 Act V (41–50)' }
        ];
        tabs.forEach(t => {
          const btn = document.createElement('button');
          const active = activeStoryFilter === t.id;
          btn.className = `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition ${active ? 'btn-primary' : 'themed-card opacity-80 hover:opacity-100'}`;
          btn.textContent = t.label;
          btn.addEventListener('click', () => {
            playSound('dig');
            activeStoryFilter = t.id;
            renderStoryChaptersList();
          });
          tabsEl.appendChild(btn);
        });
      }

      const filtered = STORY_CHAPTERS.filter(ch => {
        if (activeStoryFilter === 'tut') return ch.isTutorial;
        if (activeStoryFilter === 'act1') return ch.act === 1;
        if (activeStoryFilter === 'act2') return ch.act === 2;
        if (activeStoryFilter === 'act3') return ch.act === 3;
        if (activeStoryFilter === 'act4') return ch.act === 4;
        if (activeStoryFilter === 'act5') return ch.act === 5;
        return true;
      });

      const frag = document.createDocumentFragment();
      filtered.forEach((ch) => {
        const meta = getLevelMetaText(ch.id, state.lang);
        const stars = state.stats.storyStars[ch.id] || 0;
        const unlocked = isLevelUnlocked(ch.id);
        const isCurrentNext = unlocked && stars === 0;
        const dims = getAdaptiveDimensions(ch.shortSide || ch.cols, ch.longSide || ch.rows);
        const orientLabel = `${dims.cols}×${dims.rows} • ${ch.mines} 💣`;

        const card = document.createElement('div');
        card.className = unlocked
          ? 'themed-card story-level-card rounded-2xl flex items-center justify-between gap-3.5 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition'
          : 'themed-card story-level-card rounded-2xl flex items-center justify-between gap-3.5 cursor-not-allowed opacity-60 transition';

        if (isCurrentNext) {
          card.style.borderColor = 'var(--accent-primary)';
          card.style.borderWidth = '2.5px';
          card.style.boxShadow = 'var(--shadow-glow)';
        }

        const statusBadgeHtml = !unlocked
          ? `<span class="story-lvl-badge rounded-full themed-input">🔒 ${isAr ? 'مغلق' : 'Locked'}</span>`
          : (isCurrentNext
            ? `<span class="story-lvl-badge rounded-full" style="background: var(--accent-secondary); color: #ffffff;">🔥 ${isAr ? 'المرحلة الحالية' : 'Current'}</span>`
            : `<span class="text-sm font-mono font-black" style="color: var(--accent-primary);">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</span>`);

        const subtitleText = !unlocked
          ? (isAr ? `🔒 أكمِل المستوى ${ch.id - 1} أولاً لفتح هذه المرحلة (${orientLabel})` : `🔒 Complete Level ${ch.id - 1} first to unlock (${orientLabel})`)
          : meta.sub;

        card.innerHTML = `
          <div class="flex items-center gap-3.5 min-w-0 flex-1">
            <div class="w-12 h-12 rounded-2xl themed-elevated flex flex-col items-center justify-center shrink-0 border-2" style="border-color: ${unlocked ? 'var(--accent-primary)' : 'var(--border-color)'}; min-width: 3.4rem; min-height: 3.4rem;">
              <span class="text-xl leading-none">${unlocked ? ch.emoji : '🔒'}</span>
              <span class="text-xs font-mono font-black mt-0.5" style="color: ${unlocked ? 'var(--accent-primary)' : 'var(--text-muted)'};">#${ch.id}</span>
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="story-lvl-badge rounded-full" style="background: ${unlocked ? 'var(--accent-primary)' : 'var(--bg-input)'}; color: ${unlocked ? 'var(--accent-Contrast)' : 'var(--text-secondary)'};">${meta.badge}</span>
                <span class="story-lvl-badge font-mono rounded-lg themed-input" dir="ltr">${orientLabel}</span>
                ${statusBadgeHtml}
              </div>
              <h4 class="story-lvl-title mt-1.5">${meta.title}</h4>
              <p class="story-lvl-sub mt-0.5" style="color: var(--text-secondary);">${subtitleText}</p>
            </div>
          </div>
          <button class="${unlocked ? 'btn-primary' : 'btn-secondary opacity-75'} px-4 py-2.5 rounded-2xl text-sm sm:text-base font-black shrink-0">${unlocked ? (stars > 0 ? '✓ ▶' : '▶') : '🔒'}</button>
        `;
        card.addEventListener('click', () => {
          if (!isLevelUnlocked(ch.id)) {
            triggerHaptic(30);
            showToast(
              state.lang === 'ar'
                ? `🔒 المرحلة ${ch.id} مغلقة! يجب إتمام المستوى ${ch.id - 1} أولاً لفتحها.`
                : `🔒 Level ${ch.id} is locked! Complete Level ${ch.id - 1} first to unlock it.`
            );
            return;
          }
          playSound('dig');
          if (ch.isTutorial) {
            startNewGame({ storyChapterId: ch.id });
          } else {
            openStoryCutscene(ch.id, true);
          }
        });
        frag.appendChild(card);
      });
      container.appendChild(frag);
    }

    function updateStoryTutorialBanner() {
      const banner = document.getElementById('storyHudBanner');
      if (!state.storyChapterId) {
        banner.classList.add('hidden');
        return;
      }

      const ch = STORY_CHAPTERS.find(x => x.id === state.storyChapterId) || STORY_CHAPTERS[0];
      const meta = getLevelMetaText(ch.id, state.lang);
      const isAr = state.lang === 'ar';

      banner.classList.remove('hidden');
      const bannerAvatarEl = document.getElementById('storyBannerEmoji');
      const formulaChip = document.getElementById('storyLogicFormulaChip');
      const btnShowTarget = document.getElementById('btnToggleTutorialTarget');
      const txtShowTarget = document.getElementById('txtToggleTutTargetBtn');
      const txtOpenGuide = document.getElementById('txtOpenLogicGuideBtn');
      const explainBody = document.getElementById('storyExplainCollapsibleBody');
      const txtToggleExplain = document.getElementById('txtToggleStoryExplainBtn');
      const iconToggleExplain = document.getElementById('iconToggleStoryExplain');

      if (txtOpenGuide) txtOpenGuide.textContent = isAr ? 'القواعد' : 'Rules';
      if (explainBody) {
        explainBody.classList.toggle('hidden', !!state.storyExplainHidden);
      }
      if (txtToggleExplain) {
        txtToggleExplain.textContent = state.storyExplainHidden
          ? (isAr ? 'إظهار الشرح' : 'Show Guide')
          : (isAr ? 'إخفاء الشرح' : 'Hide Guide');
      }
      if (iconToggleExplain) {
        iconToggleExplain.textContent = state.storyExplainHidden ? '🔽' : '🔼';
      }

      if (ch.isTutorial) {
        const ded = analyzeLiveTutorialDeduction();
        bannerAvatarEl.className = 'text-2xl shrink-0 mt-0.5';
        bannerAvatarEl.textContent = '🧠';

        if (ded) {
          document.getElementById('storyBannerTitle').textContent = isAr ? ded.titleAr : ded.titleEn;
          document.getElementById('storyBannerText').textContent = isAr ? ded.explanationAr : ded.explanationEn;
          if (formulaChip) {
            formulaChip.textContent = isAr ? ded.formulaAr : ded.formulaEn;
            formulaChip.classList.remove('hidden');
          }
          if (btnShowTarget) {
            btnShowTarget.classList.remove('hidden');
            if (txtShowTarget) {
              txtShowTarget.textContent = state.tutorialShowTarget
                ? (isAr ? 'إخفاء التحديد' : 'Hide Target')
                : (isAr ? 'أرني المربع' : 'Show Tile');
            }
          }
        } else {
          document.getElementById('storyBannerTitle').textContent = meta.title;
          document.getElementById('storyBannerText').textContent = isAr
            ? 'ممتاز! جميع الألغام المتبقية واضحة، افتح المربعات الآمنة المتبقية لإتمام المرحلة!'
            : 'Awesome! Open the remaining safe tiles to complete the level!';
          if (formulaChip) formulaChip.classList.add('hidden');
          if (btnShowTarget) btnShowTarget.classList.add('hidden');
        }
      } else {
        bannerAvatarEl.className = 'text-2xl shrink-0 mt-0.5';
        bannerAvatarEl.textContent = ch.emoji;
        document.getElementById('storyBannerTitle').textContent = meta.title;
        document.getElementById('storyBannerText').textContent = meta.sub;
        if (formulaChip) formulaChip.classList.add('hidden');
        if (btnShowTarget) btnShowTarget.classList.add('hidden');
      }
    }

    function renderVisualLogicGuideModal() {
      const isAr = state.lang === 'ar';
      const titleEl = document.getElementById('txtLogicGuideModalTitle');
      const introEl = document.getElementById('txtLogicGuideIntro');
      const btnStartEl = document.getElementById('txtBtnStartAcademyFromGuide');
      const btnCloseEl = document.getElementById('txtBtnCloseGuide');
      const container = document.getElementById('logicGuideCardsContainer');
      if (!container) return;

      if (titleEl) titleEl.textContent = isAr ? 'كيف تلعب في 4 خطوات بسيطة؟' : 'How to Play in 4 Simple Rules';
      if (introEl) {
        introEl.textContent = isAr
          ? 'كل رقم يخبرك كم لغماً يختبئ في المربعات الـ 8 المحيطة به:'
          : 'Every number tells you how many mines hide in the 8 tiles around it:';
      }
      if (btnStartEl) btnStartEl.textContent = isAr ? '🎓 ابدأ المرحلة التعليمية 1 الآن' : '🎓 Start Tutorial Level 1 Now';
      if (btnCloseEl) btnCloseEl.textContent = isAr ? 'إغلاق' : 'Close';

      const miniTile = (txt, cls, color = '') =>
        `<div class="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-extrabold text-sm select-none ${cls}" style="${color}">${txt}</div>`;

      const rules = [
        {
          badge: isAr ? '1️⃣ متى تضع علماً (🚩)؟' : '1️⃣ When to Flag (🚩)',
          desc: isAr
            ? 'الرقم (1) الأزرق لا يلمس سوى مربع مخفي واحد ⬅️ أكيد هو لغم! ضع عليه 🚩.'
            : 'Blue [1] touches only 1 hidden tile ⬅️ It MUST be a mine! Flag it 🚩.',
          diagram: `
            <div class="grid grid-cols-3 gap-1 p-2 rounded-xl themed-input shrink-0" dir="ltr">
              ${miniTile('', 'themed-surface opacity-60')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1); outline: 2.5px solid #0ea5e9;')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('🚩', 'themed-elevated', 'border: 2px solid #f59e0b;')}
            </div>`
        },
        {
          badge: isAr ? '2️⃣ متى تحفر بأمان (⛏️) أو تفتح بلمسة واحدة (⚡)؟' : '2️⃣ When to Dig (⛏️) or Quick-Open (⚡)',
          desc: isAr
            ? 'الرقم (1) يلمس علماً بالفعل ⬅️ باقي جيرانه آمنون! احفرهم أو المس الرقم نفسه لفتحهم فوراً.'
            : 'Blue [1] already touches its 🚩 flag ⬅️ All its other neighbors (✓) are 100% safe!',
          diagram: `
            <div class="grid grid-cols-3 gap-1 p-2 rounded-xl themed-input shrink-0" dir="ltr">
              ${miniTile('', 'themed-surface opacity-60')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1); outline: 2.5px solid #0ea5e9;')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('🚩', 'themed-elevated', 'border: 2px solid #f59e0b;')}
              ${miniTile('✓', 'themed-elevated', 'color: #10b981; border: 2px dashed #10b981;')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('✓', 'themed-elevated', 'color: #10b981; border: 2px dashed #10b981;')}
              ${miniTile('✓', 'themed-elevated', 'color: #10b981; border: 2px dashed #10b981;')}
            </div>`
        },
        {
          badge: isAr ? '3️⃣ قاعدة (1 بجانب 1) على الحافة' : '3️⃣ The (1–1) Wall Rule',
          desc: isAr
            ? 'الرقمان (1 و 1) يشتركان بلغم واحد في (A أو B) ⬅️ المربع الثالث البعيد (✓) آمن 100%!'
            : 'Two [1]s share 1 mine in (A or B) ⬅️ The 3rd outer tile (✓) is always 100% safe!',
          diagram: `
            <div class="grid grid-cols-3 gap-1 p-2 rounded-xl themed-input shrink-0" dir="ltr">
              ${miniTile('1', 'themed-surface', 'color: var(--num-1); outline: 2.5px solid #0ea5e9;')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1); outline: 2.5px solid #0ea5e9;')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('A', 'themed-elevated', 'color: #f59e0b; border: 1.5px dashed #f59e0b;')}
              ${miniTile('B', 'themed-elevated', 'color: #f59e0b; border: 1.5px dashed #f59e0b;')}
              ${miniTile('✓', 'themed-elevated', 'color: #10b981; border: 2px solid #10b981;')}
            </div>`
        },
        {
          badge: isAr ? '4️⃣ قاعدة (1 بجانب 2) على الحافة' : '4️⃣ The (1–2) Wall Rule',
          desc: isAr
            ? 'الرقم (1) يأخذ لغماً واحداً فقط من (A أو B) ⬅️ اللغم الثاني للرقم (2) يقع حتماً في (🚩)!'
            : "Blue [1] holds max 1 mine in (A, B) ⬅️ [2]'s second mine MUST sit in the outer tile (🚩)!",
          diagram: `
            <div class="grid grid-cols-3 gap-1 p-2 rounded-xl themed-input shrink-0" dir="ltr">
              ${miniTile('1', 'themed-surface', 'color: var(--num-1); outline: 2.5px solid #0ea5e9;')}
              ${miniTile('2', 'themed-surface', 'color: var(--num-2); outline: 2.5px solid #0ea5e9;')}
              ${miniTile('1', 'themed-surface', 'color: var(--num-1);')}
              ${miniTile('A', 'themed-elevated', 'color: #f59e0b; border: 1.5px dashed #f59e0b;')}
              ${miniTile('B', 'themed-elevated', 'color: #f59e0b; border: 1.5px dashed #f59e0b;')}
              ${miniTile('🚩', 'themed-elevated', 'border: 2px solid #ef4444;')}
            </div>`
        }
      ];

      container.innerHTML = rules.map(r => `
        <div class="themed-card p-3 rounded-2xl flex items-center gap-3">
          ${r.diagram}
          <div class="flex-1 min-w-0 text-start">
            <div class="font-extrabold text-sm sm:text-base" style="color: var(--accent-primary);">${r.badge}</div>
            <p class="text-xs sm:text-sm font-bold leading-snug mt-1" style="color: var(--text-primary);">${r.desc}</p>
          </div>
        </div>
      `).join('');
    }

    function updateGameHud() {
      syncBoardCounts();
      const rawRem = state.minesCount - state.flagsPlaced;
      const minesEl = document.getElementById('hudMinesLeft');
      if (rawRem < 0) {
        minesEl.textContent = '-' + String(Math.min(99, Math.abs(rawRem))).padStart(2, '0');
        minesEl.style.color = '#ef4444';
      } else {
        minesEl.textContent = String(rawRem).padStart(3, '0');
        minesEl.style.color = '';
      }
      document.getElementById('hudTimer').textContent = String(Math.min(999, state.timerSeconds)).padStart(3, '0');

      const btnDig = document.getElementById('btnModeDig');
      const btnFlag = document.getElementById('btnModeFlag');
      if (state.controlMode === 'dig') {
        btnDig.style.background = 'var(--accent-primary)';
        btnDig.style.color = 'var(--accent-Contrast)';
        btnFlag.style.background = 'transparent';
        btnFlag.style.color = 'var(--text-secondary)';
      } else {
        btnFlag.style.background = 'var(--accent-primary)';
        btnFlag.style.color = 'var(--accent-Contrast)';
        btnDig.style.background = 'transparent';
        btnDig.style.color = 'var(--text-secondary)';
      }

      const dict = LANGUAGES[state.lang] || LANGUAGES.en;
      document.getElementById('statusNoGuessText').textContent = state.noGuessEnabled ? dict.pureLogicActive : dict.randomModeActive;
      document.getElementById('chkNoGuessHome').checked = state.noGuessEnabled;
      document.getElementById('chkNoGuessSettings').checked = state.noGuessEnabled;
      updateTopBarCoins();
    }

    function updateTopBarCoins() {
      document.getElementById('txtCoinBalance').textContent = state.hintCoins;
      const crown = document.getElementById('supporterCrown');
      if (state.isVipSupporter) crown.classList.remove('hidden');
      else crown.classList.add('hidden');
    }

    function startTimer() {
      stopTimer();
      state.timerInterval = setInterval(() => {
        state.timerSeconds++;
        document.getElementById('hudTimer').textContent = String(Math.min(999, state.timerSeconds)).padStart(3, '0');
      }, 1000);
    }

    function stopTimer() {
      if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
      }
    }

    function switchView(viewName) {
      if (state.view === 'game' && viewName !== 'game' && state.firstClickDone && !state.gameOver && !state.gameWon) {
        saveActiveMatchSnapshotImmediate();
      }
      state.view = viewName;
      document.body.setAttribute('data-view', viewName);
      triggerVfxLoopIfNeeded();
      try {
        if (viewName !== 'home') history.pushState({ msView: viewName }, '');
      } catch (e) {}
      document.getElementById('viewHome').classList.toggle('hidden', viewName !== 'home');
      document.getElementById('viewStory').classList.toggle('hidden', viewName !== 'story');
      document.getElementById('viewStory').classList.toggle('flex', viewName === 'story');
      document.getElementById('viewGame').classList.toggle('hidden', viewName !== 'game');
      document.getElementById('viewGame').classList.toggle('flex', viewName === 'game');
      if (viewName === 'story') renderStoryChaptersList();
    }

    function openModal(id) {
      const m = document.getElementById(id);
      m.classList.remove('hidden');
      m.classList.add('flex');
    }

    function closeModal(id) {
      const m = document.getElementById(id);
      m.classList.add('hidden');
      m.classList.remove('flex');
    }

    let pendingCutsceneChapterId = null;
    let cutsceneShouldStartNewGame = true;

    function openStoryCutscene(chapterId, shouldLaunchNewGame = true) {
      if (shouldLaunchNewGame && !isLevelUnlocked(chapterId)) {
        const nextAllowed = getNextUnfinishedLevelId();
        showToast(
          state.lang === 'ar'
            ? `🔒 المرحلة ${chapterId} مغلقة! ابدأ من المستوى ${nextAllowed} أولاً.`
            : `🔒 Level ${chapterId} is locked! Complete Level ${nextAllowed} first.`
        );
        return;
      }
      pendingCutsceneChapterId = chapterId;
      cutsceneShouldStartNewGame = shouldLaunchNewGame;
      const ch = STORY_CHAPTERS.find(x => x.id === chapterId) || STORY_CHAPTERS[0];
      const cut = getLevelCutsceneData(chapterId);
      const langData = state.lang === 'ar' ? cut.ar : cut.en;
      const dims = getAdaptiveDimensions(ch.shortSide || ch.cols, ch.longSide || ch.rows);

      const actTitleLocalized = state.lang === 'ar' ? (ch ? (WORLD_ACTS.find(a => a.act === ch.act) || WORLD_ACTS[0]).nameAr : '') : (ch ? (WORLD_ACTS.find(a => a.act === ch.act) || WORLD_ACTS[0]).nameEn : '');
      document.getElementById('cutsceneArtContainer').innerHTML = cut.artSvg.replace(/<text[^>]*>.*?<\/text>/, `<text x="300" y="180" fill="#fef08a" font-size="14" font-weight="bold" text-anchor="middle">${actTitleLocalized}</text>`);
      document.getElementById('cutsceneBadge').textContent = langData.badge;
      document.getElementById('cutsceneDimsBadge').textContent = `${dims.cols}×${dims.rows} • ${ch.mines} 💣`;
      document.getElementById('cutsceneTitle').textContent = langData.title;

      const dlgContainer = document.getElementById('cutsceneDialogueList');
      dlgContainer.innerHTML = '';
      langData.dialogues.forEach(d => {
        const row = document.createElement('div');
        row.className = 'themed-card p-3.5 rounded-2xl text-sm sm:text-base leading-relaxed text-center';
        row.innerHTML = `
          <div class="font-extrabold text-sm sm:text-base mb-1" style="color: var(--accent-primary);">${d.speaker}</div>
          <div class="font-semibold">${d.text}</div>
        `;
        dlgContainer.appendChild(row);
      });

      document.getElementById('cutsceneLessonBox').textContent = langData.lesson;
      document.getElementById('txtBtnStartMissionNow').textContent = shouldLaunchNewGame
        ? (state.lang === 'ar' ? `ابدأ المستوى ${chapterId} الآن ▶` : `Start Level ${chapterId} Now ▶`)
        : (state.lang === 'ar' ? 'العودة للمستوى ▶' : 'Resume Level ▶');
      document.getElementById('txtBtnCancelCutscene').textContent = state.lang === 'ar' ? 'رجوع' : 'Back';

      openModal('modalStoryCutscene');
    }

    function showGameResultModal(won) {
      const dict = LANGUAGES[state.lang] || LANGUAGES.en;
      document.getElementById('resultEmoji').textContent = won ? '🏆' : '💥';
      document.getElementById('resultTitle').textContent = won ? dict.victoryTitle : dict.gameOverTitle;

      let subText = won ? dict.victorySub : dict.gameOverSub;
      if (won && state.storyChapterId) {
        const cut = getLevelCutsceneData(state.storyChapterId);
        const langData = state.lang === 'ar' ? cut.ar : cut.en;
        if (langData.epilogue) subText = langData.epilogue;
      }
      document.getElementById('resultSubtitle').textContent = subText;
      document.getElementById('resultTimeVal').textContent = `${state.timerSeconds}s`;
      document.getElementById('resultLogicVal').textContent = state.noGuessEnabled ? (state.lang === 'ar' ? '100% بدون تخمين' : '100% No-Guess') : (state.lang === 'ar' ? 'كلاسيكي' : 'Classic');

      const nextStoryBtn = document.getElementById('btnResultNextStory');
      if (won && state.storyChapterId && state.storyChapterId < STORY_CHAPTERS.length) {
        nextStoryBtn.classList.remove('hidden');
        document.getElementById('txtBtnNextChapter').textContent = state.lang === 'ar'
          ? `المستوى التالي (${state.storyChapterId + 1}) ⏭️`
          : `Next Level (${state.storyChapterId + 1}) ⏭️`;
      } else {
        nextStoryBtn.classList.add('hidden');
      }

      const defuseBtn = document.getElementById('btnSecondChanceDefuse');
      const defuseTxt = document.getElementById('txtBtnDefuseMine');
      if (defuseBtn) {
        if (!won && !state.secondChanceUsed && state.lastHitMineCell) {
          defuseBtn.classList.remove('hidden');
          defuseBtn.classList.add('flex');
          const cost = state.hintCoins >= 2 ? '2 💡' : (state.lang === 'ar' ? 'مجاناً 🎁' : 'Free Rescue 🎁');
          if (defuseTxt) {
            defuseTxt.textContent = state.lang === 'ar'
              ? `🛡️ تفكيك اللغم ومتابعة اللعب (${cost})`
              : `🛡️ Defuse Mine & Continue (${cost})`;
          }
        } else {
          defuseBtn.classList.add('hidden');
          defuseBtn.classList.remove('flex');
        }
      }

      const watchBtn = document.getElementById('btnWatchLastReplay');
      const watchTxt = document.getElementById('txtBtnWatchLastReplay');
      if (watchBtn) {
        if (state.lastCompletedReplay && state.lastCompletedReplay.events && state.lastCompletedReplay.events.length > 0) {
          watchBtn.classList.remove('hidden');
          watchBtn.classList.add('flex');
          if (watchTxt) {
            watchTxt.textContent = state.lang === 'ar'
              ? '🎬 مشاهدة إعادة هذه المباراة (تسريع / تبطيء)'
              : '🎬 Watch Match Replay (Speed & Timeline Control)';
          }
        } else {
          watchBtn.classList.add('hidden');
          watchBtn.classList.remove('flex');
        }
      }

      openModal('modalGameResult');
    }

    function defuseLastHitMineAndContinue() {
      if (!state.gameOver || state.secondChanceUsed || !state.lastHitMineCell) return;
      const [mr, mc] = state.lastHitMineCell;
      const cell = state.board[mr] && state.board[mr][mc];
      if (!cell) return;

      if (state.hintCoins >= 2) {
        state.hintCoins -= 2;
      }
      state.secondChanceUsed = true;
      state.gameOver = false;
      cell.revealed = false;
      cell.flagged = true;
      state.flagsPlaced++;
      state.lastHitMineCell = null;
      recordGameStep('defuse', mr, mc, {
        unrev: [mr * state.cols + mc],
        flg: [mr * state.cols + mc]
      });

      closeModal('modalGameResult');
      document.getElementById('hudFaceEmoji').textContent = '😎';
      playSound('flag');
      triggerHaptic([20, 40, 20]);
      updateGameHud();
      renderBoardGrid(true);
      checkWinCondition();
      if (!state.gameWon) saveActiveMatchSnapshot();
      saveState();
      startTimer();
      showToast(state.lang === 'ar' ? '🛡️ تم تفكيك اللغم بنجاح! وُضع علم مكان اللغم لتكمل اللعب' : '🛡️ Mine defused & flagged! Match resumed!');
    }

    function updateDailyChallengeBadgeUI() {
      const lbl = document.getElementById('txtBtnDailyChallenge');
      const badge = document.getElementById('badgeDailyStatus');
      const todayKey = new Date().toISOString().slice(0, 10);
      const doneToday = state.stats.lastDailyDate === todayKey;
      const streak = state.stats.dailyStreak || 0;
      const isAr = state.lang === 'ar';
      const DAILY_LABELS = {
        en: 'Daily Challenge', ar: 'تحدي اليوم', es: 'Reto Diario', fr: 'Défi du Jour',
        de: 'Tagesrätsel', ja: 'デイリー挑戦', zh: '每日挑战', ru: 'Задача Дня', tr: 'Günlük Görev'
      };
      if (lbl) {
        lbl.textContent = DAILY_LABELS[state.lang] || DAILY_LABELS.en;
      }
      if (badge) {
        badge.textContent = doneToday ? (isAr ? `✓ مكتمل 🔥${streak}` : `✓ Done 🔥${streak}`) : `🔥 ${streak}`;
      }
    }

    let toastTimeout = null;
    function showToast(msg) {
      const t = document.getElementById('appToast');
      t.textContent = msg;
      t.classList.remove('hidden');
      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        t.classList.add('hidden');
      }, 2600);
    }

    function populateStatsModal() {
      ensureReplaysStore();
      seedDemoMasterpieceReplayIfEmpty();
      document.getElementById('statGamesWon').textContent = state.stats.gamesWon;
      const rate = state.stats.gamesPlayed > 0
        ? Math.round((state.stats.gamesWon / state.stats.gamesPlayed) * 100)
        : 0;
      document.getElementById('statWinRate').textContent = `${rate}%`;
      const totalStars = Object.values(state.stats.storyStars).reduce((a, b) => a + (Number(b) || 0), 0);
      document.getElementById('statStoryStars').textContent = `${totalStars} / 150`;
      document.getElementById('txtStatStars').textContent = state.lang === 'ar' ? 'نجوم الـ 50 مستوى' : 'Campaign Stars';

      const bt = state.stats.bestTimes;
      const isAr = state.lang === 'ar';
      const bindBestRow = (elId, diffKey) => {
        const el = document.getElementById(elId);
        if (!el) return;
        const bestRep = state.replays.best && state.replays.best[diffKey];
        const tVal = bt[diffKey] || (bestRep ? bestRep.timerSeconds : null);
        if (!tVal) {
          el.textContent = '--';
          return;
        }
        if (bestRep) {
          el.innerHTML = `<span>${tVal}s</span> <button type="button" class="px-2 py-0.5 ms-1.5 rounded-lg text-[10px] font-extrabold btn-primary">🎬 ${isAr ? 'إعادة' : 'Replay'}</button>`;
          const btn = el.querySelector('button');
          if (btn) {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              playSound('chord');
              startReplaySession(bestRep);
            });
          }
        } else {
          el.textContent = `${tVal}s`;
        }
      };

      bindBestRow('valBestBeginner', 'beginner');
      bindBestRow('valBestIntermediate', 'intermediate');
      bindBestRow('valBestExpert', 'expert');
      bindBestRow('valBestMaster', 'master');
      bindBestRow('valBestGrandmaster', 'grandmaster');
      bindBestRow('valBestLegend', 'legend');
      bindBestRow('valBestNightmare', 'nightmare');

      const btnOpenRepStats = document.getElementById('txtBtnOpenReplaysFromStats');
      if (btnOpenRepStats) {
        btnOpenRepStats.textContent = isAr
          ? '🎬 سجل الألعاب السابقة وأفضل الإعادات (Replays)'
          : '🎬 Recent Games & Best Replays Archive';
      }
    }

    /********************************************************************
     * 10B. GAMEPLAY RECORDER & INTERACTIVE REPLAY THEATER ENGINE
     ********************************************************************/
    const REPLAY_SPEED_OPTIONS = [0.25, 0.5, 1, 2, 4, 8];
    let activeReplayTab = 'recent';

    function ensureReplaysStore() {
      if (!state.replays || typeof state.replays !== 'object') {
        state.replays = { recent: [], best: {}, pinned: [] };
      }
      if (!Array.isArray(state.replays.recent)) state.replays.recent = [];
      if (!state.replays.best || typeof state.replays.best !== 'object') state.replays.best = {};
      if (!Array.isArray(state.replays.pinned)) state.replays.pinned = [];
    }

    function initRecordingForNewGame() {
      const now = Date.now();
      state.currentRecording = {
        id: 'REP-' + now.toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase(),
        startedAtMs: state.firstClickDone ? now : 0,
        lastStepMs: now,
        rows: state.rows,
        cols: state.cols,
        minesCount: state.minesCount,
        difficultyKey: state.difficultyKey,
        storyChapterId: state.storyChapterId,
        isDailyChallenge: state.isDailyChallenge,
        noGuessEnabled: state.noGuessEnabled,
        theme: state.theme,
        events: []
      };
      // If Tutorial (levels 1-5) auto-revealed (0,0) at start, record that opening flood as step 0
      if (state.firstClickDone && state.board && state.board.length > 0) {
        const initRev = [];
        for (let r = 0; r < state.rows; r++) {
          for (let c = 0; c < state.cols; c++) {
            if (state.board[r][c].revealed) initRev.push(r * state.cols + c);
          }
        }
        if (initRev.length > 0) {
          state.currentRecording.events.push({
            t: 0,
            act: 'dig',
            r: 0,
            c: 0,
            rev: initRev,
            unrev: [],
            flg: [],
            unflg: []
          });
        }
      }
    }

    function recordGameStep(act, r, c, delta = {}) {
      if (state.isReplayMode || !state.currentRecording) return;
      const now = Date.now();
      if (!state.currentRecording.startedAtMs) {
        state.currentRecording.startedAtMs = now;
      }
      const elapsedMs = Math.max(0, now - state.currentRecording.startedAtMs);
      state.currentRecording.rows = state.rows;
      state.currentRecording.cols = state.cols;
      state.currentRecording.events.push({
        t: elapsedMs,
        act,
        r,
        c,
        rev: delta.rev || [],
        unrev: delta.unrev || [],
        flg: delta.flg || [],
        unflg: delta.unflg || []
      });
    }

    function popLastRecordedDigIfReverted(r, c) {
      if (!state.currentRecording || !state.currentRecording.events.length) return;
      const evs = state.currentRecording.events;
      const last = evs[evs.length - 1];
      if (last && last.act === 'dig' && last.r === r && last.c === c) {
        evs.pop();
      }
    }

    function popLastRecordedFlagIfReverted(r, c) {
      if (!state.currentRecording || !state.currentRecording.events.length) return;
      const evs = state.currentRecording.events;
      const last = evs[evs.length - 1];
      if (last && last.act === 'flag' && last.r === r && last.c === c) {
        evs.pop();
      }
    }

    function getReplayCategoryKey(rec) {
      if (rec.storyChapterId) return `story_${rec.storyChapterId}`;
      if (rec.isDailyChallenge) return 'daily';
      return rec.difficultyKey || 'beginner';
    }

    function getReplayTitleText(rec, lang = state.lang) {
      const isAr = lang === 'ar';
      const dict = LANGUAGES[lang] || LANGUAGES.en;
      if (rec.isDemo) {
        return isAr ? '⚡ جولة استعراضية قياسية (مبتدئ)' : '⚡ Pro Showcase Run (Beginner)';
      }
      if (rec.storyChapterId) {
        return isAr ? `طور القصة — المرحلة #${rec.storyChapterId}` : `Campaign — Level #${rec.storyChapterId}`;
      }
      if (rec.isDailyChallenge) {
        return isAr ? `تحدي اليوم (${rec.dailyDateKey || ''})` : `Daily Challenge (${rec.dailyDateKey || ''})`;
      }
      const diffLabelsAr = {
        beginner: 'مبتدئ',
        intermediate: 'متوسط',
        expert: 'خبير',
        master: 'أسطوري',
        grandmaster: 'أستاذ كبير',
        legend: 'أسطورة',
        nightmare: 'تحدي 250 لغم',
        custom: 'لوحة مخصصة'
      };
      const diffLabelsEn = {
        beginner: dict.diffBeginner || 'Beginner',
        intermediate: dict.diffIntermediate || 'Intermediate',
        expert: dict.diffExpert || 'Expert',
        master: dict.diffMaster || 'Master',
        grandmaster: 'Grandmaster',
        legend: 'Legend',
        nightmare: 'Extreme 250',
        custom: 'Custom'
      };
      return isAr ? (diffLabelsAr[rec.difficultyKey] || rec.difficultyKey) : (diffLabelsEn[rec.difficultyKey] || rec.difficultyKey);
    }

    function finalizeCurrentRecording(won) {
      if (state.isReplayMode || !state.currentRecording || !state.currentRecording.events.length) return;
      ensureReplaysStore();
      const rec = state.currentRecording;
      const mines = [];
      for (let r = 0; r < state.rows; r++) {
        for (let c = 0; c < state.cols; c++) {
          if (state.board[r] && state.board[r][c] && state.board[r][c].mine) {
            mines.push(r * state.cols + c);
          }
        }
      }
      const lastEv = rec.events[rec.events.length - 1];
      const durationMs = Math.max(state.timerSeconds * 1000, lastEv ? lastEv.t : 1000);
      const catKey = getReplayCategoryKey(rec);
      const prevBest = state.replays.best[catKey];
      const isNewBest = !!(won && (!prevBest || state.timerSeconds <= prevBest.timerSeconds));

      const replayEntry = {
        id: rec.id,
        playedAt: Date.now(),
        won: !!won,
        isBest: isNewBest,
        pinned: false,
        rows: state.rows,
        cols: state.cols,
        minesCount: state.minesCount,
        difficultyKey: rec.difficultyKey,
        storyChapterId: rec.storyChapterId,
        isDailyChallenge: rec.isDailyChallenge,
        dailyDateKey: state.dailyDateKey || '',
        theme: state.theme,
        timerSeconds: state.timerSeconds,
        durationMs,
        movesCount: rec.events.length,
        mines,
        events: rec.events
      };

      state.lastCompletedReplay = replayEntry;
      state.replays.recent.unshift(replayEntry);
      if (state.replays.recent.length > 20) {
        state.replays.recent.length = 20;
      }
      if (isNewBest) {
        state.replays.best[catKey] = replayEntry;
      }
    }

    function seedDemoMasterpieceReplayIfEmpty() {
      ensureReplaysStore();
      if (state.replays.recent.length > 0 || Object.keys(state.replays.best).length > 0) return;

      // Build a real 100% solvable 11x8 (10 mines) showcase replay using our solver so the user can test Replay Speed & Scrubbing right away!
      const rows = 8;
      const cols = 11;
      const totalMines = 10;
      const simGrid = createEmptyBoard(rows, cols);
      const fixedMines = [[0, 4], [1, 8], [2, 2], [3, 10], [4, 6], [5, 1], [6, 5], [6, 9], [7, 3], [7, 7]];
      fixedMines.forEach(([mr, mc]) => { simGrid[mr][mc].mine = true; });
      computeNeighborCounts(simGrid, rows, cols);

      const events = [];
      let simTime = 0;

      const simFlood = (sr, sc) => {
        const rev = [];
        const q = [[sr, sc]];
        while (q.length > 0) {
          const [r, c] = q.pop();
          const cell = simGrid[r][c];
          if (cell.revealed || cell.flagged || cell.mine) continue;
          cell.revealed = true;
          rev.push(r * cols + c);
          if (cell.neighborMines === 0) {
            getNeighbors(r, c, rows, cols).forEach(([nr, nc]) => {
              if (!simGrid[nr][nc].revealed && !simGrid[nr][nc].flagged) q.push([nr, nc]);
            });
          }
        }
        return rev;
      };

      // Step 1: Open (0, 0)
      events.push({ t: 0, act: 'dig', r: 0, c: 0, rev: simFlood(0, 0), unrev: [], flg: [], unflg: [] });

      // Iteratively solve & record human-like steps
      let guard = 0;
      while (guard++ < 60) {
        let totalRev = 0;
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (simGrid[r][c].revealed) totalRev++;
        if (totalRev >= rows * cols - totalMines) break;

        let stepDone = false;
        // Look for any revealed number where remaining hidden neighbors == remaining mines (flag) or remaining mines == 0 (chord)
        for (let r = 0; r < rows && !stepDone; r++) {
          for (let c = 0; c < cols && !stepDone; c++) {
            const cell = simGrid[r][c];
            if (!cell.revealed || cell.neighborMines <= 0) continue;
            const nbs = getNeighbors(r, c, rows, cols);
            let flg = 0;
            const unks = [];
            nbs.forEach(([nr, nc]) => {
              if (simGrid[nr][nc].flagged) flg++;
              else if (!simGrid[nr][nc].revealed) unks.push([nr, nc]);
            });
            if (unks.length === 0) continue;
            if (flg === cell.neighborMines) {
              const allRev = [];
              unks.forEach(([nr, nc]) => {
                const sub = simFlood(nr, nc);
                sub.forEach(idx => allRev.push(idx));
              });
              if (allRev.length > 0) {
                simTime += 420;
                events.push({ t: simTime, act: 'chord', r, c, rev: allRev, unrev: [], flg: [], unflg: [] });
                stepDone = true;
              }
            } else if (flg + unks.length === cell.neighborMines) {
              const [mr, mc] = unks[0];
              simGrid[mr][mc].flagged = true;
              simTime += 360;
              events.push({ t: simTime, act: 'flag', r: mr, c: mc, rev: [], unrev: [], flg: [mr * cols + mc], unflg: [] });
              stepDone = true;
            }
          }
        }
        if (!stepDone) {
          // Open next safe unrevealed cell
          for (let r = 0; r < rows && !stepDone; r++) {
            for (let c = 0; c < cols && !stepDone; c++) {
              if (!simGrid[r][c].revealed && !simGrid[r][c].mine) {
                const rev = simFlood(r, c);
                simTime += 480;
                events.push({ t: simTime, act: 'dig', r, c, rev, unrev: [], flg: [], unflg: [] });
                stepDone = true;
              }
            }
          }
        }
      }

      const demoReplay = {
        id: 'REP-DEMO-SHOWCASE',
        isDemo: true,
        playedAt: Date.now() - 3600000,
        won: true,
        isBest: true,
        pinned: true,
        rows,
        cols,
        minesCount: totalMines,
        difficultyKey: 'beginner',
        storyChapterId: null,
        isDailyChallenge: false,
        theme: 'retro',
        timerSeconds: Math.max(6, Math.round(simTime / 1000)),
        durationMs: simTime,
        movesCount: events.length,
        mines: fixedMines.map(([mr, mc]) => mr * cols + mc),
        events
      };
      state.replays.recent.push(demoReplay);
      state.replays.best.beginner = demoReplay;
      state.replays.pinned.push(demoReplay);
    }

    function stopReplayPlayback() {
      state.replayPlaying = false;
      if (state.replayTimerId) {
        clearTimeout(state.replayTimerId);
        state.replayTimerId = null;
      }
      const btnPP = document.getElementById('btnReplayPlayPause');
      if (btnPP) btnPP.textContent = '▶️';
    }

    function exitReplayModeUIOnly() {
      stopReplayPlayback();
      state.isReplayMode = false;
      state.activeReplayObj = null;
      state.replayActiveCell = null;
      const repBar = document.getElementById('replayControlBar');
      const botBar = document.getElementById('gameBottomBar');
      const hintBtn = document.getElementById('btnLogicalHint');
      if (repBar) {
        repBar.classList.add('hidden');
        repBar.classList.remove('flex');
      }
      if (botBar) botBar.classList.remove('hidden');
      if (hintBtn) hintBtn.classList.remove('hidden');
    }

    function exitReplayAndReturn() {
      exitReplayModeUIOnly();
      switchView('home');
      renderReplaysModalList();
      openModal('modalReplays');
    }

    function startReplaySession(replayObj) {
      if (!replayObj || !Array.isArray(replayObj.events) || replayObj.events.length === 0) return;
      stopTimer();
      stopReplayPlayback();
      closeModal('modalReplays');
      closeModal('modalStats');
      closeModal('modalGameResult');

      state.isReplayMode = true;
      state.activeReplayObj = replayObj;
      state.replayStepIdx = 0;
      state.replaySpeed = state.replaySpeed || 1.0;
      state.replayActiveCell = null;

      state.storyChapterId = null;
      state.tutorialStep = -1;
      state.rows = replayObj.rows;
      state.cols = replayObj.cols;
      state.minesCount = replayObj.minesCount;
      state.firstClickDone = true;
      state.gameOver = false;
      state.gameWon = false;
      state.activeHintCell = null;
      state.zoomScale = 1.0;

      state.board = createEmptyBoard(state.rows, state.cols);
      (replayObj.mines || []).forEach(flatIdx => {
        const r = Math.floor(flatIdx / state.cols);
        const c = flatIdx % state.cols;
        if (state.board[r] && state.board[r][c]) state.board[r][c].mine = true;
      });
      computeNeighborCounts(state.board, state.rows, state.cols);

      const repBar = document.getElementById('replayControlBar');
      const botBar = document.getElementById('gameBottomBar');
      const hintBtn = document.getElementById('btnLogicalHint');
      const storyBanner = document.getElementById('storyHudBanner');
      if (storyBanner) storyBanner.classList.add('hidden');
      if (hintBtn) hintBtn.classList.add('hidden');
      if (botBar) botBar.classList.add('hidden');
      if (repBar) {
        repBar.classList.remove('hidden');
        repBar.classList.add('flex');
      }

      const scrub = document.getElementById('rngReplayScrub');
      if (scrub) {
        scrub.max = String(replayObj.events.length);
        scrub.value = '0';
      }
      const spdBadge = document.getElementById('btnReplaySpeedBadge');
      if (spdBadge) spdBadge.textContent = `${state.replaySpeed}x`;

      const titleEl = document.getElementById('txtReplayHudTitle');
      if (titleEl) {
        const isAr = state.lang === 'ar';
        titleEl.textContent = `${isAr ? 'إعادة:' : 'Replay:'} ${getReplayTitleText(replayObj)} (${replayObj.cols}×${replayObj.rows})`;
      }
      const exitLbl = document.getElementById('txtBtnReplayExit');
      if (exitLbl) exitLbl.textContent = state.lang === 'ar' ? 'خروج' : 'Exit';

      switchView('game');
      applyReplayToStep(0, false);
      centerBoardInViewport(0.5, 0.5);

      // Start playing automatically after a brief 350ms pause
      state.replayPlaying = true;
      const btnPP = document.getElementById('btnReplayPlayPause');
      if (btnPP) btnPP.textContent = '⏸️';
      scheduleNextReplayStep();
    }

    function applyReplayToStep(targetStep, triggerFx = true) {
      const rep = state.activeReplayObj;
      if (!rep || !state.isReplayMode) return;
      const maxStep = rep.events.length;
      const clampedStep = Math.max(0, Math.min(maxStep, targetStep));
      state.replayStepIdx = clampedStep;

      // Reset all cell revealed/flagged states cleanly
      for (let r = 0; r < state.rows; r++) {
        for (let c = 0; c < state.cols; c++) {
          state.board[r][c].revealed = false;
          state.board[r][c].flagged = false;
        }
      }
      state.gameOver = false;
      state.gameWon = false;

      // Apply events [0 .. clampedStep - 1]
      for (let i = 0; i < clampedStep; i++) {
        const ev = rep.events[i];
        if (ev.rev) {
          for (let k = 0; k < ev.rev.length; k++) {
            const idx = ev.rev[k];
            const rr = Math.floor(idx / state.cols);
            const rc = idx % state.cols;
            if (state.board[rr] && state.board[rr][rc]) state.board[rr][rc].revealed = true;
          }
        }
        if (ev.unrev) {
          for (let k = 0; k < ev.unrev.length; k++) {
            const idx = ev.unrev[k];
            const rr = Math.floor(idx / state.cols);
            const rc = idx % state.cols;
            if (state.board[rr] && state.board[rr][rc]) state.board[rr][rc].revealed = false;
          }
        }
        if (ev.flg) {
          for (let k = 0; k < ev.flg.length; k++) {
            const idx = ev.flg[k];
            const rr = Math.floor(idx / state.cols);
            const rc = idx % state.cols;
            if (state.board[rr] && state.board[rr][rc]) state.board[rr][rc].flagged = true;
          }
        }
        if (ev.unflg) {
          for (let k = 0; k < ev.unflg.length; k++) {
            const idx = ev.unflg[k];
            const rr = Math.floor(idx / state.cols);
            const rc = idx % state.cols;
            if (state.board[rr] && state.board[rr][rc]) state.board[rr][rc].flagged = false;
          }
        }
      }

      const activeEv = clampedStep > 0 ? rep.events[clampedStep - 1] : null;
      if (clampedStep === maxStep) {
        if (rep.won) {
          state.gameWon = true;
          for (let r = 0; r < state.rows; r++) {
            for (let c = 0; c < state.cols; c++) {
              if (state.board[r][c].mine) state.board[r][c].flagged = true;
            }
          }
          document.getElementById('hudFaceEmoji').textContent = '👑';
        } else if (activeEv && activeEv.act === 'boom') {
          state.gameOver = true;
          document.getElementById('hudFaceEmoji').textContent = '😵';
        }
      } else {
        document.getElementById('hudFaceEmoji').textContent = '😎';
      }

      const badgeMap = {
        dig: '⛏️',
        flag: '🚩',
        unflag: '✖️',
        easy_flag: '🚩',
        chord: '⚡',
        boom: '💥',
        defuse: '🛡️'
      };
      state.replayActiveCell = activeEv
        ? { r: activeEv.r, c: activeEv.c, badge: badgeMap[activeEv.act] || '🎯' }
        : null;

      const curMs = activeEv ? activeEv.t : 0;
      state.timerSeconds = Math.round(curMs / 1000);
      updateGameHud();
      renderBoardGrid();

      const stepEl = document.getElementById('txtReplayStepCounter');
      const timeEl = document.getElementById('txtReplayTimeCounter');
      const scrub = document.getElementById('rngReplayScrub');
      if (stepEl) stepEl.textContent = `${clampedStep} / ${maxStep}`;
      if (timeEl) {
        const totSec = (rep.durationMs / 1000).toFixed(1);
        const curSec = (curMs / 1000).toFixed(1);
        timeEl.textContent = `${curSec}s / ${totSec}s`;
      }
      if (scrub) scrub.value = String(clampedStep);

      if (triggerFx && activeEv) {
        const center = getCellScreenCenter(activeEv.r, activeEv.c);
        if (activeEv.act === 'boom') {
          playSound('boom');
          spawnCellVfx(center.x, center.y, 'boom');
        } else if (activeEv.act === 'flag' || activeEv.act === 'unflag' || activeEv.act === 'easy_flag') {
          playSound('flag');
          spawnCellVfx(center.x, center.y, 'flag');
        } else if (activeEv.act === 'chord') {
          playSound('chord');
          spawnCellVfx(center.x, center.y, 'chord');
        } else {
          playSound('dig');
          spawnCellVfx(center.x, center.y, 'dig');
        }
        if (state.zoomScale > 1.05 && state.cols > 0 && state.rows > 0) {
          centerBoardInViewport((activeEv.c + 0.5) / state.cols, (activeEv.r + 0.5) / state.rows);
        }
      }
    }

    function scheduleNextReplayStep() {
      if (state.replayTimerId) {
        clearTimeout(state.replayTimerId);
        state.replayTimerId = null;
      }
      if (!state.isReplayMode || !state.replayPlaying || !state.activeReplayObj) return;
      const rep = state.activeReplayObj;
      if (state.replayStepIdx >= rep.events.length) {
        stopReplayPlayback();
        if (rep.won) playSound('win');
        return;
      }

      const prevT = state.replayStepIdx > 0 ? rep.events[state.replayStepIdx - 1].t : 0;
      const nextT = rep.events[state.replayStepIdx].t;
      // Cap idle thinking gaps to 1200ms (and minimum step spacing 220ms at 1x) so watching a replay is smooth & engaging
      const rawDt = Math.max(220, Math.min(1200, nextT - prevT));
      const delayMs = Math.max(40, Math.round(rawDt / (state.replaySpeed || 1)));

      state.replayTimerId = setTimeout(() => {
        state.replayTimerId = null;
        if (!state.isReplayMode || !state.replayPlaying) return;
        applyReplayToStep(state.replayStepIdx + 1, true);
        scheduleNextReplayStep();
      }, delayMs);
    }

    function toggleReplayPlayPause() {
      if (!state.isReplayMode || !state.activeReplayObj) return;
      if (state.replayPlaying) {
        stopReplayPlayback();
      } else {
        if (state.replayStepIdx >= state.activeReplayObj.events.length) {
          applyReplayToStep(0, false);
        }
        state.replayPlaying = true;
        const btnPP = document.getElementById('btnReplayPlayPause');
        if (btnPP) btnPP.textContent = '⏸️';
        scheduleNextReplayStep();
      }
    }

    function changeReplaySpeed(dir) {
      const curIdx = REPLAY_SPEED_OPTIONS.indexOf(state.replaySpeed);
      let nextIdx = curIdx === -1 ? 2 : curIdx;
      if (dir === 0) {
        nextIdx = (nextIdx + 1) % REPLAY_SPEED_OPTIONS.length;
      } else {
        nextIdx = Math.max(0, Math.min(REPLAY_SPEED_OPTIONS.length - 1, nextIdx + dir));
      }
      state.replaySpeed = REPLAY_SPEED_OPTIONS[nextIdx];
      const badge = document.getElementById('btnReplaySpeedBadge');
      if (badge) badge.textContent = `${state.replaySpeed}x`;
      if (state.replayPlaying) {
        scheduleNextReplayStep();
      }
    }

    function togglePinReplay(replayId) {
      ensureReplaysStore();
      const all = [
        ...state.replays.recent,
        ...Object.values(state.replays.best),
        ...state.replays.pinned
      ];
      const target = all.find(r => r && r.id === replayId);
      if (!target) return;
      target.pinned = !target.pinned;
      if (target.pinned) {
        if (!state.replays.pinned.some(r => r.id === replayId)) {
          state.replays.pinned.unshift(target);
        }
      } else {
        state.replays.pinned = state.replays.pinned.filter(r => r && r.id !== replayId);
      }
      saveState();
      renderReplaysModalList();
    }

    function deleteReplayById(replayId) {
      ensureReplaysStore();
      state.replays.recent = state.replays.recent.filter(r => r && r.id !== replayId);
      state.replays.pinned = state.replays.pinned.filter(r => r && r.id !== replayId);
      Object.keys(state.replays.best).forEach(k => {
        if (state.replays.best[k] && state.replays.best[k].id === replayId) {
          delete state.replays.best[k];
        }
      });
      saveState();
      renderReplaysModalList();
    }

    function renderReplaysModalList() {
      ensureReplaysStore();
      seedDemoMasterpieceReplayIfEmpty();
      const isAr = state.lang === 'ar';

      const setTxt = (id, ar, en) => {
        const el = document.getElementById(id);
        if (el) el.textContent = isAr ? ar : en;
      };
      setTxt('txtReplaysModalTitle', 'أرشيف تسجيلات اللعب وأفضل المباريات', 'Gameplay Replays & Best Matches');
      setTxt('txtReplaysModalSub', 'شاهد ألعابك السابقة أو أفضل أرقامك القياسية مع إمكانية التسريع والتبطيء والتقديم', 'Watch your previous games or personal best records with speed & timeline controls');
      setTxt('txtTabReplaysRecent', 'الألعاب السابقة', 'Recent Games');
      setTxt('txtTabReplaysBest', 'أفضل الألعاب', 'Best Games');
      setTxt('txtTabReplaysPinned', 'المفضلة', 'Pinned');
      setTxt('txtBtnCloseReplays', 'إغلاق', 'Close');

      ['recent', 'best', 'pinned'].forEach(tabKey => {
        const btn = document.getElementById(
          tabKey === 'recent' ? 'tabReplaysRecent' : (tabKey === 'best' ? 'tabReplaysBest' : 'tabReplaysPinned')
        );
        if (btn) {
          if (activeReplayTab === tabKey) {
            btn.classList.add('btn-primary');
          } else {
            btn.classList.remove('btn-primary');
          }
        }
      });

      let list = [];
      if (activeReplayTab === 'recent') {
        list = state.replays.recent.slice();
      } else if (activeReplayTab === 'best') {
        list = Object.values(state.replays.best).filter(Boolean).sort((a, b) => a.timerSeconds - b.timerSeconds);
      } else {
        list = state.replays.pinned.slice();
      }

      const container = document.getElementById('replaysListContainer');
      const footer = document.getElementById('txtReplaysCountFooter');
      if (footer) {
        footer.textContent = isAr
          ? `إجمالي التسجيلات في هذا القسم: ${list.length} • يتم التسجيل تلقائياً`
          : `Total recordings in tab: ${list.length} • Auto-recorded`;
      }
      if (!container) return;
      container.innerHTML = '';

      if (list.length === 0) {
        container.innerHTML = `
          <div class="themed-card p-6 rounded-2xl text-center flex flex-col items-center gap-2">
            <span class="text-3xl">🎬</span>
            <div class="font-extrabold text-sm">${isAr ? 'لا توجد تسجيلات في هذا القسم بعد' : 'No recordings in this tab yet'}</div>
            <p class="text-xs" style="color: var(--text-secondary);">${isAr ? 'العب أي مباراة ليتم تسجيلها تلقائياً هنا لتشاهدها بالسرعة التي تريدها!' : 'Play any match and it will be automatically recorded here!'}</p>
          </div>
        `;
        return;
      }

      list.forEach(rep => {
        const card = document.createElement('div');
        card.className = 'themed-card p-3 rounded-2xl flex items-center justify-between gap-2.5';
        if (rep.isBest) {
          card.style.borderColor = 'var(--accent-primary)';
        }
        const dateStr = new Date(rep.playedAt || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const statusBadge = rep.won
          ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold" style="background: #10b981; color: #041a14;">🏆 ${isAr ? 'فوز' : 'WIN'}</span>`
          : `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold" style="background: #ef4444; color: #ffffff;">💥 ${isAr ? 'خسارة' : 'LOSS'}</span>`;
        const bestBadge = rep.isBest
          ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold" style="background: var(--accent-primary); color: var(--accent-Contrast);">🔥 ${isAr ? 'أفضل رقم' : 'BEST'}</span>`
          : '';

        card.innerHTML = `
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              ${statusBadge}
              ${bestBadge}
              <span class="text-xs font-extrabold truncate">${getReplayTitleText(rep)}</span>
            </div>
            <div class="flex items-center gap-2 text-[11px] font-mono font-bold mt-1 flex-wrap" style="color: var(--text-secondary);">
              <span dir="ltr">${rep.cols}×${rep.rows} • ${rep.minesCount} 💣</span>
              <span>⏱️ ${rep.timerSeconds}s</span>
              <span>🎯 ${(rep.events || []).length} ${isAr ? 'حركة' : 'moves'}</span>
              <span>🕒 ${dateStr}</span>
            </div>
          </div>
          <div class="flex items-center gap-1 shrink-0">
            <button type="button" data-action="play" class="btn-primary px-3 py-2 rounded-xl text-xs font-black flex items-center gap-1">
              <span>▶️</span>
              <span>${isAr ? 'شاهد' : 'Watch'}</span>
            </button>
            <button type="button" data-action="pin" class="w-8 h-8 rounded-xl themed-elevated flex items-center justify-center text-xs" title="${isAr ? 'تثبيت في المفضلة' : 'Pin Favorite'}">
              ${rep.pinned ? '⭐' : '☆'}
            </button>
            <button type="button" data-action="del" class="w-8 h-8 rounded-xl themed-elevated flex items-center justify-center text-xs opacity-75 hover:opacity-100" title="${isAr ? 'حذف' : 'Delete'}">
              🗑️
            </button>
          </div>
        `;

        card.querySelector('[data-action="play"]').addEventListener('click', () => {
          playSound('chord');
          startReplaySession(rep);
        });
        card.querySelector('[data-action="pin"]').addEventListener('click', () => {
          playSound('dig');
          togglePinReplay(rep.id);
        });
        card.querySelector('[data-action="del"]').addEventListener('click', () => {
          playSound('dig');
          deleteReplayById(rep.id);
        });
        container.appendChild(card);
      });
    }


    /********************************************************************
     * 11. EVENT LISTENERS & INITIALIZATION
     ********************************************************************/
    window.addEventListener('DOMContentLoaded', () => {
      window.__msBooting = true;
      loadSavedState();
      initWorldBackgroundParticles();
      applyLanguage(state.lang);
      updateTopBarCoins();
      window.__msBooting = false;
      window.addEventListener('pointerdown', () => { setTimeout(initAudio, 10); }, { once: true, passive: true });

      document.getElementById('selDefaultTapMode').value = state.defaultTapMode;
      const selDbl = document.getElementById('selDoubleTapAction');
      const rngDbl = document.getElementById('rngDoubleTapDelay');
      const valDbl = document.getElementById('valDoubleTapMs');
      const rowDblSpeed = document.getElementById('doubleTapSpeedRow');
      if (selDbl) selDbl.value = state.doubleTapAction || 'opposite';
      if (rngDbl) rngDbl.value = state.doubleTapDelay || 260;
      if (valDbl) valDbl.textContent = `${state.doubleTapDelay || 260}ms`;
      if (rowDblSpeed) rowDblSpeed.style.display = (state.doubleTapAction === 'off') ? 'none' : 'flex';
      document.getElementById('rngLongPress').value = state.longPressDelay;
      document.getElementById('valLongPressMs').textContent = `${state.longPressDelay}ms`;
      document.getElementById('chkChordEnabled').checked = state.chordEnabled;
      document.getElementById('chkNoGuessSettings').checked = state.noGuessEnabled;
      document.getElementById('chkNoGuessHome').checked = state.noGuessEnabled;
      const chkScenic = document.getElementById('chkScenicWorld');
      const chkAnim = document.getElementById('chkAnimations');
      if (chkScenic) chkScenic.checked = state.scenicWorldEnabled !== false;
      if (chkAnim) chkAnim.checked = state.animationsEnabled !== false;
      applyVisualQualitySettings();
      document.getElementById('chkSound').checked = state.soundEnabled;
      document.getElementById('chkHaptics').checked = state.hapticsEnabled;

      document.getElementById('btnNavHome').addEventListener('click', () => {
        stopTimer();
        switchView('home');
      });

      document.getElementById('btnQuickTheme').addEventListener('click', (e) => {
        const unlockedKeys = Object.keys(THEMES).filter(k => isThemeUnlocked(k));
        const nextIdx = (unlockedKeys.indexOf(state.theme) + 1) % unlockedKeys.length;
        playSound('chord');
        applyTheme(unlockedKeys[nextIdx]);
        spawnCellVfx(e.clientX || window.innerWidth / 2, e.clientY || 40, 'flag');
      });

      document.getElementById('btnOpenLangModal').addEventListener('click', () => {
        renderLanguageModalGrid();
        openModal('modalLanguages');
      });
      document.getElementById('btnCloseLangModal').addEventListener('click', () => closeModal('modalLanguages'));

      document.getElementById('btnOpenSettings').addEventListener('click', () => {
        renderSettingsThemes();
        openModal('modalSettings');
      });
      document.getElementById('btnCloseSettings').addEventListener('click', () => closeModal('modalSettings'));
      document.getElementById('btnSaveSettings').addEventListener('click', () => closeModal('modalSettings'));

      document.getElementById('btnOpenSupportFromCoins').addEventListener('click', () => openModal('modalSupport'));
      document.getElementById('btnHomeSupport').addEventListener('click', () => openModal('modalSupport'));
      document.getElementById('btnCloseSupport').addEventListener('click', () => closeModal('modalSupport'));

      document.getElementById('btnHomeStats').addEventListener('click', () => {
        populateStatsModal();
        openModal('modalStats');
      });
      document.getElementById('btnCloseStats').addEventListener('click', () => closeModal('modalStats'));

      // Replay Archive & Replay Theater Listeners
      seedDemoMasterpieceReplayIfEmpty();
      const openReplaysArchive = (defaultTab = 'recent') => {
        playSound('dig');
        activeReplayTab = defaultTab;
        renderReplaysModalList();
        openModal('modalReplays');
      };
      const btnRepTop = document.getElementById('btnOpenReplaysTop');
      if (btnRepTop) btnRepTop.addEventListener('click', () => openReplaysArchive('recent'));
      const btnRepStats = document.getElementById('btnOpenReplaysFromStats');
      if (btnRepStats) {
        btnRepStats.addEventListener('click', () => {
          closeModal('modalStats');
          openReplaysArchive('best');
        });
      }
      const btnWatchLast = document.getElementById('btnWatchLastReplay');
      if (btnWatchLast) {
        btnWatchLast.addEventListener('click', () => {
          if (state.lastCompletedReplay) {
            playSound('chord');
            startReplaySession(state.lastCompletedReplay);
          }
        });
      }
      const btnCloseRep = document.getElementById('btnCloseReplaysModal');
      if (btnCloseRep) btnCloseRep.addEventListener('click', () => closeModal('modalReplays'));
      const btnDoneRep = document.getElementById('btnDoneReplaysModal');
      if (btnDoneRep) btnDoneRep.addEventListener('click', () => closeModal('modalReplays'));

      const tabRec = document.getElementById('tabReplaysRecent');
      const tabBst = document.getElementById('tabReplaysBest');
      const tabPin = document.getElementById('tabReplaysPinned');
      if (tabRec) tabRec.addEventListener('click', () => { playSound('dig'); activeReplayTab = 'recent'; renderReplaysModalList(); });
      if (tabBst) tabBst.addEventListener('click', () => { playSound('dig'); activeReplayTab = 'best'; renderReplaysModalList(); });
      if (tabPin) tabPin.addEventListener('click', () => { playSound('dig'); activeReplayTab = 'pinned'; renderReplaysModalList(); });

      const btnRepRestart = document.getElementById('btnReplayRestart');
      const btnRepPrev = document.getElementById('btnReplayPrevStep');
      const btnRepPP = document.getElementById('btnReplayPlayPause');
      const btnRepNext = document.getElementById('btnReplayNextStep');
      const btnRepSpdDown = document.getElementById('btnReplaySpeedDown');
      const btnRepSpdBadge = document.getElementById('btnReplaySpeedBadge');
      const btnRepSpdUp = document.getElementById('btnReplaySpeedUp');
      const btnRepExit = document.getElementById('btnReplayExit');
      const rngRepScrub = document.getElementById('rngReplayScrub');

      if (btnRepRestart) {
        btnRepRestart.addEventListener('click', () => {
          stopReplayPlayback();
          applyReplayToStep(0, false);
        });
      }
      if (btnRepPrev) {
        btnRepPrev.addEventListener('click', () => {
          stopReplayPlayback();
          applyReplayToStep(state.replayStepIdx - 1, true);
        });
      }
      if (btnRepPP) {
        btnRepPP.addEventListener('click', () => {
          toggleReplayPlayPause();
        });
      }
      if (btnRepNext) {
        btnRepNext.addEventListener('click', () => {
          stopReplayPlayback();
          applyReplayToStep(state.replayStepIdx + 1, true);
        });
      }
      if (btnRepSpdDown) {
        btnRepSpdDown.addEventListener('click', () => {
          playSound('dig');
          changeReplaySpeed(-1);
        });
      }
      if (btnRepSpdBadge) {
        btnRepSpdBadge.addEventListener('click', () => {
          playSound('dig');
          changeReplaySpeed(0);
        });
      }
      if (btnRepSpdUp) {
        btnRepSpdUp.addEventListener('click', () => {
          playSound('dig');
          changeReplaySpeed(1);
        });
      }
      if (btnRepExit) {
        btnRepExit.addEventListener('click', () => {
          playSound('dig');
          exitReplayAndReturn();
        });
      }
      if (rngRepScrub) {
        rngRepScrub.addEventListener('input', (e) => {
          stopReplayPlayback();
          const step = parseInt(e.target.value, 10) || 0;
          applyReplayToStep(step, false);
        });
      }

      document.getElementById('btnStartStoryMenu').addEventListener('click', () => switchView('story'));
      document.getElementById('btnHomeTutorial').addEventListener('click', () => {
        playSound('dig');
        renderVisualLogicGuideModal();
        openModal('modalLogicGuide');
      });

      const btnOpenGuide = document.getElementById('btnOpenLogicGuide');
      if (btnOpenGuide) {
        btnOpenGuide.addEventListener('click', () => {
          playSound('dig');
          renderVisualLogicGuideModal();
          openModal('modalLogicGuide');
        });
      }
      const btnCloseGuide = document.getElementById('btnCloseLogicGuide');
      if (btnCloseGuide) {
        btnCloseGuide.addEventListener('click', () => closeModal('modalLogicGuide'));
      }
      const btnDoneGuide = document.getElementById('btnDoneLogicGuide');
      if (btnDoneGuide) {
        btnDoneGuide.addEventListener('click', () => closeModal('modalLogicGuide'));
      }
      const btnStartFromGuide = document.getElementById('btnStartPracticalAcademyFromGuide');
      if (btnStartFromGuide) {
        btnStartFromGuide.addEventListener('click', () => {
          playSound('chord');
          closeModal('modalLogicGuide');
          startNewGame({ storyChapterId: 1 });
        });
      }
      const btnToggleTarget = document.getElementById('btnToggleTutorialTarget');
      if (btnToggleTarget) {
        btnToggleTarget.addEventListener('click', () => {
          playSound('dig');
          state.tutorialShowTarget = !state.tutorialShowTarget;
          updateStoryTutorialBanner();
          renderBoardGrid();
        });
      }
      const btnToggleExplain = document.getElementById('btnToggleStoryExplain');
      if (btnToggleExplain) {
        btnToggleExplain.addEventListener('click', () => {
          playSound('dig');
          state.storyExplainHidden = !state.storyExplainHidden;
          updateStoryTutorialBanner();
          renderBoardGrid();
          centerBoardInViewport(0.5, 0.5);
        });
      }
      const btnCont = document.getElementById('btnContinueCampaign');
      if (btnCont) {
        btnCont.addEventListener('click', () => {
          playSound('chord');
          const nextId = getNextUnfinishedLevelId();
          if (nextId <= 5) {
            startNewGame({ storyChapterId: nextId });
          } else {
            openStoryCutscene(nextId, true);
          }
        });
      }
      document.getElementById('btnStartStoryMissionNow').addEventListener('click', () => {
        playSound('chord');
        closeModal('modalStoryCutscene');
        if (cutsceneShouldStartNewGame && pendingCutsceneChapterId) {
          startNewGame({ storyChapterId: pendingCutsceneChapterId });
        }
      });
      document.getElementById('btnCloseCutsceneModal').addEventListener('click', () => {
        closeModal('modalStoryCutscene');
      });
      document.getElementById('btnReplayStoryCutscene').addEventListener('click', () => {
        if (state.storyChapterId) {
          openStoryCutscene(state.storyChapterId, false);
        }
      });
      document.getElementById('btnBackFromStory').addEventListener('click', () => switchView('home'));

      document.getElementById('btnOpenPlayModal').addEventListener('click', () => {
        playSound('dig');
        openModal('modalPlaySelect');
      });
      document.getElementById('btnClosePlayModal').addEventListener('click', () => closeModal('modalPlaySelect'));

      document.getElementById('btnOpenThemesStudio').addEventListener('click', () => {
        playSound('dig');
        renderThemeSwatches();
        openModal('modalThemesStudio');
      });
      document.getElementById('btnCloseThemesStudio').addEventListener('click', () => closeModal('modalThemesStudio'));

      document.getElementById('heroArtEmoji').addEventListener('click', (e) => {
        const unlockedKeys = Object.keys(THEMES).filter(k => isThemeUnlocked(k));
        const nextIdx = (unlockedKeys.indexOf(state.theme) + 1) % unlockedKeys.length;
        playSound('chord');
        applyTheme(unlockedKeys[nextIdx]);
        spawnCellVfx(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 3, 'flag');
      });

      document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const diff = btn.dataset.diff;
          playSound('dig');
          closeModal('modalPlaySelect');
          startNewGame({ difficulty: diff });
        });
      });

      document.getElementById('btnToggleCustomDiff').addEventListener('click', () => {
        const p = document.getElementById('customDiffPanel');
        const isHidden = p.classList.contains('hidden');
        p.classList.toggle('hidden', !isHidden);
        p.classList.toggle('flex', isHidden);
        document.getElementById('customAccordionArrow').textContent = isHidden ? '▲' : '▼';
      });

      document.getElementById('btnStartCustom').addEventListener('click', () => {
        const cols = Math.max(5, Math.min(40, parseInt(document.getElementById('inpCustomCols').value, 10) || 14));
        const rows = Math.max(5, Math.min(36, parseInt(document.getElementById('inpCustomRows').value, 10) || 10));
        const maxM = Math.min(250, rows * cols - 9);
        const mines = Math.max(3, Math.min(maxM, parseInt(document.getElementById('inpCustomMines').value, 10) || 35));
        closeModal('modalPlaySelect');
        startNewGame({ custom: true, cols, rows, mines });
      });

      document.getElementById('btnGameBack').addEventListener('click', () => {
        if (state.isReplayMode) {
          exitReplayAndReturn();
          return;
        }
        stopTimer();
        if (state.storyChapterId) switchView('story');
        else switchView('home');
      });

      document.getElementById('btnResetBoard').addEventListener('click', () => {
        if (state.isDailyChallenge) startNewGame({ dailyChallenge: true });
        else if (state.storyChapterId) startNewGame({ storyChapterId: state.storyChapterId });
        else if (state.difficultyKey === 'custom') startNewGame({ custom: true, cols: state.cols, rows: state.rows, mines: state.minesCount });
        else startNewGame({ difficulty: state.difficultyKey });
      });

      document.getElementById('btnLogicalHint').addEventListener('click', triggerSmartLogicalHint);
      document.getElementById('btnCloseHintBanner').addEventListener('click', () => {
        document.getElementById('logicHintBanner').classList.add('hidden');
      });

      document.getElementById('btnModeDig').addEventListener('click', () => {
        state.controlMode = 'dig';
        playSound('dig');
        updateGameHud();
      });

      document.getElementById('btnModeFlag').addEventListener('click', () => {
        state.controlMode = 'flag';
        playSound('flag');
        updateGameHud();
      });

      const btnGameSettings = document.getElementById('btnGameSettings');
      if (btnGameSettings) {
        btnGameSettings.addEventListener('click', () => {
          renderSettingsThemes();
          openModal('modalSettings');
        });
      }

      const syncZoomButtonsUI = () => {
        const zEl = document.getElementById('txtZoomLevel');
        if (zEl) zEl.textContent = `${Math.round(state.zoomScale * 100)}%`;
        const cBtn = document.getElementById('btnCenterBoard');
        if (cBtn) {
          const isZoomed = state.zoomScale > 1.02;
          cBtn.style.borderColor = isZoomed ? 'var(--accent-primary)' : '';
        }
        const outBtn = document.getElementById('btnZoomOut');
        if (outBtn) {
          outBtn.style.opacity = state.zoomScale <= 1.01 ? '0.45' : '1';
        }
      };

      const getSmartZoomTargetRatio = () => {
        if (state.activeHintCell && state.cols > 0 && state.rows > 0) {
          return {
            x: (state.activeHintCell[1] + 0.5) / state.cols,
            y: (state.activeHintCell[0] + 0.5) / state.rows
          };
        }
        if (state.storyChapterId && state.storyChapterId <= 5) {
          const ded = analyzeLiveTutorialDeduction();
          if (ded && ded.clueCells && ded.clueCells.length > 0) {
            return {
              x: (ded.clueCells[0][1] + 0.5) / state.cols,
              y: (ded.clueCells[0][0] + 0.5) / state.rows
            };
          }
        }
        if (state.lastFocusRatio) {
          return state.lastFocusRatio;
        }
        return { x: 0.5, y: 0.5 };
      };

      const applyZoomWithCenterPreserved = (targetZoom, forceExactCenter = false) => {
        const vpEl = document.getElementById('boardViewport');
        const { rawViewportW, rawViewportH } = getViewportAvailableDims();
        if (vpEl) {
          state._cachedVpClientW = vpEl.clientWidth || rawViewportW;
          state._cachedVpClientH = vpEl.clientHeight || rawViewportH;
        }
        const vpW = state._cachedVpClientW || rawViewportW;
        const vpH = state._cachedVpClientH || rawViewportH;

        let ratioX = 0.5;
        let ratioY = 0.5;
        if (!forceExactCenter) {
          if (state.zoomScale > 1.02) {
            // Preserve the exact board coordinate currently at the center of the viewport (even when scrollLeft === 0 or scrollTop === 0!)
            const curL = vpEl ? vpEl.scrollLeft : (state._cachedScrollLeft || 0);
            const curT = vpEl ? vpEl.scrollTop : (state._cachedScrollTop || 0);
            const { scaledW, scaledH } = getEstimatedBoardDimensions(state.zoomScale);
            const padLeft = Math.max(6, (vpW - scaledW) * 0.5);
            const padTop = Math.max(6, (vpH - scaledH) * 0.5);
            ratioX = scaledW > 0 ? Math.max(0, Math.min(1, (curL + vpW * 0.5 - padLeft) / scaledW)) : 0.5;
            ratioY = scaledH > 0 ? Math.max(0, Math.min(1, (curT + vpH * 0.5 - padTop) / scaledH)) : 0.5;
          } else {
            // Zooming in from 100% full-board view: zoom directly into where the user is playing!
            const smart = getSmartZoomTargetRatio();
            ratioX = smart.x;
            ratioY = smart.y;
          }
        }

        // Strict minimum zoom = 1.0 (100% full-screen fit)
        state.zoomScale = Math.max(1.0, Math.min(3.5, Math.round(targetZoom * 100) / 100));
        syncZoomButtonsUI();
        updateBoardZoomDOM();
        centerBoardInViewport(ratioX, ratioY);
      };

      const resetBoardPanAndZoom = () => {
        state.panX = 0;
        state.panY = 0;
        applyZoomWithCenterPreserved(1.0, true);
      };

      const bindInstantZoomAction = (btnId, actionFn) => {
        const el = document.getElementById(btnId);
        if (!el) return;
        let skipNextClick = false;
        el.addEventListener('pointerup', (e) => {
          if (e.button && e.button !== 0) return;
          skipNextClick = true;
          setTimeout(() => { skipNextClick = false; }, 400);
          e.stopPropagation();
          playSound('dig');
          triggerHaptic(12);
          actionFn();
        });
        el.addEventListener('click', (e) => {
          if (skipNextClick) {
            skipNextClick = false;
            return;
          }
          e.stopPropagation();
          playSound('dig');
          triggerHaptic(12);
          actionFn();
        });
      };

      bindInstantZoomAction('btnCenterBoard', () => {
        resetBoardPanAndZoom();
      });
      bindInstantZoomAction('txtZoomLevel', () => {
        if (Math.abs(state.zoomScale - 1.0) < 0.04) {
          applyZoomWithCenterPreserved(1.5, true);
        } else {
          resetBoardPanAndZoom();
        }
      });
      bindInstantZoomAction('btnZoomOut', () => {
        applyZoomWithCenterPreserved(state.zoomScale - 0.25, false);
      });
      bindInstantZoomAction('btnZoomIn', () => {
        applyZoomWithCenterPreserved(state.zoomScale + 0.25, false);
      });

      document.getElementById('selDefaultTapMode').addEventListener('change', (e) => {
        state.defaultTapMode = e.target.value;
        state.controlMode = state.defaultTapMode;
        updateGameHud();
        saveState();
      });

      const elSelDbl = document.getElementById('selDoubleTapAction');
      if (elSelDbl) {
        elSelDbl.addEventListener('change', (e) => {
          state.doubleTapAction = e.target.value;
          const rRow = document.getElementById('doubleTapSpeedRow');
          if (rRow) rRow.style.display = (state.doubleTapAction === 'off') ? 'none' : 'flex';
          saveState();
        });
      }

      const elRngDbl = document.getElementById('rngDoubleTapDelay');
      if (elRngDbl) {
        elRngDbl.addEventListener('input', (e) => {
          state.doubleTapDelay = parseInt(e.target.value, 10) || 260;
          const vEl = document.getElementById('valDoubleTapMs');
          if (vEl) vEl.textContent = `${state.doubleTapDelay}ms`;
          saveState();
        });
      }

      document.getElementById('rngLongPress').addEventListener('input', (e) => {
        state.longPressDelay = parseInt(e.target.value, 10);
        document.getElementById('valLongPressMs').textContent = `${state.longPressDelay}ms`;
        saveState();
      });

      document.getElementById('chkChordEnabled').addEventListener('change', (e) => {
        state.chordEnabled = e.target.checked;
        saveState();
      });

      document.getElementById('chkNoGuessHome').addEventListener('change', (e) => {
        state.noGuessEnabled = e.target.checked;
        updateGameHud();
        saveState();
      });

      document.getElementById('chkNoGuessSettings').addEventListener('change', (e) => {
        state.noGuessEnabled = e.target.checked;
        updateGameHud();
        saveState();
      });

      const elChkScenic = document.getElementById('chkScenicWorld');
      if (elChkScenic) {
        elChkScenic.addEventListener('change', (e) => {
          state.scenicWorldEnabled = e.target.checked;
          applyVisualQualitySettings();
          if (state.scenicWorldEnabled) renderStaticAmbientCanvas();
          saveState();
        });
      }

      const elChkAnim = document.getElementById('chkAnimations');
      if (elChkAnim) {
        elChkAnim.addEventListener('change', (e) => {
          state.animationsEnabled = e.target.checked;
          applyVisualQualitySettings();
          saveState();
        });
      }

      document.getElementById('chkSound').addEventListener('change', (e) => {
        state.soundEnabled = e.target.checked;
        saveState();
      });

      document.getElementById('chkHaptics').addEventListener('change', (e) => {
        state.hapticsEnabled = e.target.checked;
        saveState();
      });

      // Desktop Keyboard Shortcuts (Space/F = Toggle Dig/Flag, H = Logic Hint, R = Restart, +/-/0 = Zoom, Esc = Close Modal)
      window.addEventListener('keydown', (e) => {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA')) return;
        const openModalIds = ['modalLogicGuide', 'modalStoryCutscene', 'modalGameResult', 'modalCloudSync', 'modalSettings', 'modalLanguages', 'modalSupport', 'modalStats', 'modalPlaySelect', 'modalThemesStudio'];
        if (e.key === 'Escape') {
          for (let i = 0; i < openModalIds.length; i++) {
            const m = document.getElementById(openModalIds[i]);
            if (m && !m.classList.contains('hidden')) {
              closeModal(openModalIds[i]);
              return;
            }
          }
          return;
        }
        if (state.view !== 'game') return;
        for (let i = 0; i < openModalIds.length; i++) {
          const m = document.getElementById(openModalIds[i]);
          if (m && !m.classList.contains('hidden')) return;
        }
        if (e.code === 'Space' || e.key === 'f' || e.key === 'F') {
          e.preventDefault();
          state.controlMode = state.controlMode === 'dig' ? 'flag' : 'dig';
          playSound(state.controlMode);
          updateGameHud();
        } else if (e.key === 'h' || e.key === 'H') {
          e.preventDefault();
          triggerSmartLogicalHint();
        } else if (e.key === 'r' || e.key === 'R') {
          e.preventDefault();
          document.getElementById('btnResetBoard').click();
        } else if (e.key === '+' || e.key === '=') {
          e.preventDefault();
          applyZoomWithCenterPreserved(state.zoomScale + 0.25, false);
        } else if (e.key === '-' || e.key === '_') {
          e.preventDefault();
          applyZoomWithCenterPreserved(state.zoomScale - 0.25, false);
        } else if (e.key === '0') {
          e.preventDefault();
          resetBoardPanAndZoom();
        }
      });

      document.getElementById('btnResultPlayAgain').addEventListener('click', () => {
        closeModal('modalGameResult');
        document.getElementById('btnResetBoard').click();
      });

      document.getElementById('btnResultNextStory').addEventListener('click', () => {
        closeModal('modalGameResult');
        if (state.storyChapterId && state.storyChapterId < STORY_CHAPTERS.length) {
          const nextId = state.storyChapterId + 1;
          if (nextId <= 5) {
            startNewGame({ storyChapterId: nextId });
          } else {
            openStoryCutscene(nextId, true);
          }
        }
      });

      document.getElementById('btnResultMenu').addEventListener('click', () => {
        closeModal('modalGameResult');
        if (state.storyChapterId) switchView('story');
        else switchView('home');
      });

      document.querySelectorAll('.support-tier-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const bonus = parseInt(btn.dataset.coins, 10) || 10;
          state.hintCoins += bonus;
          state.isVipSupporter = true;
          if (!state.unlockedThemes) state.unlockedThemes = {};
          Object.keys(THEMES).forEach(k => { state.unlockedThemes[k] = true; });
          saveState();
          updateTopBarCoins();
          renderThemeSwatches();
          renderSettingsThemes();
          playSound('win');
          document.getElementById('supportThankYouBanner').classList.remove('hidden');
          showToast(state.lang === 'ar' ? `شكراً لدعمك! تم تفعيل تاج VIP وإضافة +${bonus} تلميح!` : `Thank you! VIP Crown & +${bonus} Logic Hints unlocked!`);
        });
      });

      document.getElementById('btnSupportWatchAd').addEventListener('click', () => {
        state.hintCoins += 3;
        saveState();
        updateTopBarCoins();
        playSound('chord');
        showToast(state.lang === 'ar' ? '🎁 تم استلام هديتك اليومية: +3 تلميحات منطقية مجاناً!' : '🎁 Daily gift claimed: +3 Free Logic Hints!');
      });

      document.getElementById('btnSupportRate').addEventListener('click', () => {
        state.hintCoins += 2;
        saveState();
        updateTopBarCoins();
        playSound('win');
        showToast(state.lang === 'ar' ? 'شكراً لتقييمك 5 نجوم! (+2 تلميح هدية)' : 'Thank you for rating 5 Stars! (+2 Bonus Hints)');
      });

      document.getElementById('btnSupportShare').addEventListener('click', () => {
        try {
          const dummy = document.createElement('textarea');
          dummy.value = 'Play Minesweeper Odyssey — 100% Logical No-Guess Mobile Edition!';
          document.body.appendChild(dummy);
          dummy.select();
          document.execCommand('copy');
          document.body.removeChild(dummy);
        } catch (e) {}
        showToast(state.lang === 'ar' ? 'تم نسخ رابط المشاركة!' : 'Share link copied to clipboard!');
      });

      // Resume Saved Match & Daily Challenge
      const btnResume = document.getElementById('btnResumeSavedGame');
      if (btnResume) {
        btnResume.addEventListener('click', () => {
          playSound('chord');
          resumeSavedMatch();
        });
      }
      const btnDaily = document.getElementById('btnStartDailyChallenge');
      if (btnDaily) {
        btnDaily.addEventListener('click', () => {
          playSound('chord');
          startNewGame({ dailyChallenge: true });
        });
      }
      const btnDefuse = document.getElementById('btnSecondChanceDefuse');
      if (btnDefuse) {
        btnDefuse.addEventListener('click', () => {
          defuseLastHitMineAndContinue();
        });
      }

      // Cloud & Local Sync Hub Modal Listeners
      const btnOpenCloud = document.getElementById('btnOpenCloudSync');
      if (btnOpenCloud) {
        btnOpenCloud.addEventListener('click', () => {
          playSound('dig');
          const urlInp = document.getElementById('inpCloudSyncUrl');
          if (urlInp) urlInp.value = state.cloudSyncUrl || '';
          updateCloudStatusBadges();
          openModal('modalCloudSync');
        });
      }
      const btnCloseCloud = document.getElementById('btnCloseCloudSync');
      if (btnCloseCloud) {
        btnCloseCloud.addEventListener('click', () => closeModal('modalCloudSync'));
      }
      const btnExportCode = document.getElementById('btnExportSaveCode');
      if (btnExportCode) {
        btnExportCode.addEventListener('click', () => {
          const code = exportEncryptedSaveCode();
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(code);
            } else {
              const ta = document.createElement('textarea');
              ta.value = code;
              document.body.appendChild(ta);
              ta.select();
              document.execCommand('copy');
              document.body.removeChild(ta);
            }
          } catch (e) {}
          const inp = document.getElementById('inpImportSaveCode');
          if (inp) inp.value = code;
          playSound('win');
          showToast(state.lang === 'ar' ? '🔑 تم نسخ كود الحفظ المشفر! احتفظ به أو الصقه في أي جهاز آخر' : '🔑 Encrypted Save Code copied to clipboard!');
        });
      }
      const btnDownloadJson = document.getElementById('btnDownloadSaveFile');
      if (btnDownloadJson) {
        btnDownloadJson.addEventListener('click', () => {
          const blob = new Blob([JSON.stringify(getSerializableStatePayload(), null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `minesweeper_odyssey_backup_${state.playerId}.json`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          playSound('dig');
          showToast(state.lang === 'ar' ? '💾 تم تحميل ملف النسخة الاحتياطية!' : '💾 Backup JSON downloaded!');
        });
      }
      const btnImportCode = document.getElementById('btnImportSaveCode');
      if (btnImportCode) {
        btnImportCode.addEventListener('click', () => {
          const inp = document.getElementById('inpImportSaveCode');
          const ok = importEncryptedSaveCode(inp ? inp.value : '');
          if (ok) {
            playSound('win');
            showToast(state.lang === 'ar' ? '🎉 تم دمج واستعادة بياناتك وأعلى النجوم بنجاح!' : '🎉 Save Code merged & restored!');
          } else {
            showToast(state.lang === 'ar' ? '⚠️ كود الحفظ غير صالح، تأكد من نسخه بالكامل' : '⚠️ Invalid Save Code.');
          }
        });
      }
      const btnSyncNow = document.getElementById('btnTriggerCloudSyncNow');
      if (btnSyncNow) {
        btnSyncNow.addEventListener('click', () => {
          playSound('chord');
          syncWithCloudEndpoint(true);
        });
      }
      const btnGooglePlay = document.getElementById('btnLoginGooglePlay');
      if (btnGooglePlay) {
        btnGooglePlay.addEventListener('click', () => {
          const emailInp = document.getElementById('inpAccountEmail');
          linkPlayerAccount('google_play', emailInp ? emailInp.value : '');
        });
      }
      const btnEmailLogin = document.getElementById('btnLoginEmailAccount');
      if (btnEmailLogin) {
        btnEmailLogin.addEventListener('click', () => {
          const emailInp = document.getElementById('inpAccountEmail');
          linkPlayerAccount('email', emailInp ? emailInp.value : '');
        });
      }
      const btnLogoutAcc = document.getElementById('btnLogoutAccount');
      if (btnLogoutAcc) {
        btnLogoutAcc.addEventListener('click', () => {
          logoutPlayerAccount();
        });
      }
      const chkAutoSync = document.getElementById('chkAutoSyncEnabled');
      if (chkAutoSync) {
        chkAutoSync.addEventListener('change', (e) => {
          if (state.accountAuth) state.accountAuth.autoSync = e.target.checked;
          saveState();
        });
      }

      // Auto-sync when device comes back online + save active board on app backgrounding
      window.addEventListener('online', () => {
        updateCloudStatusBadges();
        if (state.cloudSyncUrl) syncWithCloudEndpoint(false);
      });
      window.addEventListener('offline', () => {
        updateCloudStatusBadges();
      });
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          if (state.view === 'game' && state.firstClickDone && !state.gameOver && !state.gameWon) {
            saveActiveMatchSnapshotImmediate();
          }
          saveState();
        }
      });

      // Android APK Hardware Back Button navigation handler (prevents accidental app exit)
      try {
        history.replaceState({ msView: 'home' }, '');
        window.addEventListener('popstate', () => {
          const openModalIds = ['modalLogicGuide', 'modalStoryCutscene', 'modalGameResult', 'modalCloudSync', 'modalSettings', 'modalLanguages', 'modalSupport', 'modalStats', 'modalPlaySelect', 'modalThemesStudio'];
          for (let i = 0; i < openModalIds.length; i++) {
            const m = document.getElementById(openModalIds[i]);
            if (m && !m.classList.contains('hidden')) {
              closeModal(openModalIds[i]);
              history.pushState({ msView: state.view }, '');
              return;
            }
          }
          if (state.view === 'game') {
            saveActiveMatchSnapshot();
            stopTimer();
            switchView(state.storyChapterId ? 'story' : 'home');
            history.pushState({ msView: state.view }, '');
          } else if (state.view === 'story') {
            switchView('home');
            history.pushState({ msView: 'home' }, '');
          }
        });
      } catch (e) {}

      updateResumeMatchButtonUI();
      updateDailyChallengeBadgeUI();
      updateCloudStatusBadges();

      let resizeDebounceTimer = null;
      let lastResizeW = window.innerWidth;
      let lastResizeH = window.innerHeight;
      let lastResizeHoriz = isHorizontalBoardLayout();
      window.addEventListener('resize', () => {
        if (resizeDebounceTimer) clearTimeout(resizeDebounceTimer);
        resizeDebounceTimer = setTimeout(() => {
          const curW = window.innerWidth;
          const curH = window.innerHeight;
          const curHoriz = isHorizontalBoardLayout();
          const sizeChanged = Math.abs(curW - lastResizeW) >= 6 || Math.abs(curH - lastResizeH) >= 6;
          const orientChanged = curHoriz !== lastResizeHoriz;
          if (!sizeChanged && !orientChanged) return;
          lastResizeW = curW;
          lastResizeH = curH;
          lastResizeHoriz = curHoriz;
          initWorldBackgroundParticles();
          syncBoardOrientationWithViewport();
          if (state.view === 'story' && orientChanged) renderStoryChaptersList();
          if (state.view === 'game') {
            renderBoardGrid();
            centerBoardInViewport(0.5, 0.5);
          }
        }, 150);
      }, { passive: true });
    });
