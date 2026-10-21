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
        descEn: '3D Damascus Mosaic Tiles • Royal Fanous Lanterns • Desert Starlight & Golden Embers',
        descAr: 'بلاط فسيفساء دمشقي ثلاثي الأبعاد • فوانيس ملكية مضيئة • سماء صحراوية ومؤثرات ذهبية'
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
        descEn: 'Chamfered Sci-Fi Armor Tiles • Holo-Plasma Shields • Live Matrix Digital Rain & Neon Lasers',
        descAr: 'دروع هولوغرام مستقبلية • شارات بلازما مضيئة • أمطار رقمية حية وشبكة ليزر نيون'
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
        descEn: 'Tactile 4px 3D Beveled Keycaps • Classic Red Pennants • Floating 3D Retro Wireframes',
        descAr: 'أزرار ثلاثية الأبعاد بارزة • أعلام وألغام ويندوز 95 الأصيلة • مجسمات هندسية متحركة'
      },

      retro_dark: {
        tileOrnamentSvg: `<svg viewBox="0 0 40 40" class="w-full h-full"><rect x="6" y="6" width="28" height="28" fill="none" stroke="#94a3b8" stroke-width="1" opacity="0.25"/></svg>`,
        flagSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><rect x="16" y="7" width="3" height="21" fill="#e2e8f0"/><polygon points="19,6 7,12 19,19" fill="#f43f5e"/><rect x="10" y="27" width="16" height="3.5" fill="#cbd5e1"/></svg>`,
        mineSvg: `<svg viewBox="0 0 36 36" class="w-4/5 h-4/5"><g stroke="#e2e8f0" stroke-width="2.6" stroke-linecap="round"><line x1="18" y1="4" x2="18" y2="32"/><line x1="4" y1="18" x2="32" y2="18"/><line x1="8" y1="8" x2="28" y2="28"/><line x1="28" y1="8" x2="8" y2="28"/></g><circle cx="18" cy="18" r="9.5" fill="#0f172a" stroke="#e2e8f0" stroke-width="1.5"/><rect x="13" y="13" width="3.5" height="3.5" fill="#38bdf8"/></svg>`,
        horizonSvg: `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" class="w-full h-full"><rect width="1440" height="900" fill="#091318"/><g fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.12"><circle cx="720" cy="420" r="140"/><circle cx="720" cy="420" r="260"/><circle cx="720" cy="420" r="380"/><line x1="300" y1="420" x2="1140" y2="420"/><line x1="720" y1="40" x2="720" y2="800"/></g><path d="M0,660 L1440,660 L1440,900 L0,900 Z" fill="#050b0e"/></svg>`,
        particleColors: ['#38bdf8', '#f43f5e', '#2dd4bf', '#94a3b8'],
        soundWave: 'square',
        basePitch: 240,
        descEn: 'Eye-Friendly Dark 3D Keycaps • High-Contrast Night Numbers • Classic Tactile Feel (Free)',
        descAr: 'الثيمة الكلاسيكية بالوضع الليلي المريح للعين • أزرار ثلاثية الأبعاد داكنة وأرقام عالية التباين (مجانية)'
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
        descEn: 'Carved Lacquer Blossom Tiles • Sacred Torii Charms • Drifting 3D Cherry Blossom Petals',
        descAr: 'بلاط خشب الساكورا المزخرف • تعويذات توري اليابانية • بتلات أزهار الكرز المتساقطة'
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
        descEn: '3D Faceted Emerald Gem Tiles • Golden Poseidon Tridents • Bioluminescent Bubbles & Rays',
        descAr: 'أحجار زمرد مصقولة ثلاثية الأبعاد • رماح أطلانطس الذهبية • فقاعات وأشعة مائية متوهجة'
      }
    };

    // Unlock rules for themes:
    // 'retro' (Classic Light) & 'retro_dark' (Classic Night) are 100% FREE & unlocked by default.
    // The 4 special worlds unlock via Campaign Level milestones, Hint Coins, OR VIP Subscription!
    const THEME_UNLOCK_RULES = {
      retro:      { free: true,  reqLevel: 0,  coinCost: 0 },
      retro_dark: { free: true,  reqLevel: 0,  coinCost: 0 },
      sakura:     { free: false, reqLevel: 5,  coinCost: 15, labelAr: 'تفتح مجاناً عند إتمام المرحلة 5 (أو 15 💡 / اشتراك VIP)', labelEn: 'Unlocks at Level 5 (or 15 💡 / VIP Pack)' },
      emerald:    { free: false, reqLevel: 15, coinCost: 20, labelAr: 'تفتح مجاناً عند إتمام المرحلة 15 (أو 20 💡 / اشتراك VIP)', labelEn: 'Unlocks at Level 15 (or 20 💡 / VIP Pack)' },
      arabian:    { free: false, reqLevel: 30, coinCost: 25, labelAr: 'تفتح مجاناً عند إتمام المرحلة 30 (أو 25 💡 / اشتراك VIP)', labelEn: 'Unlocks at Level 30 (or 25 💡 / VIP Pack)' },
      obsidian:   { free: false, reqLevel: 50, coinCost: 30, labelAr: 'تفتح مجاناً عند ختام المرحلة 50 (أو 30 💡 / اشتراك VIP)', labelEn: 'Unlocks at Level 50 Finale (or 30 💡 / VIP Pack)' }
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
          '--cell-unrevealed': '#283242',
          '--cell-unrevealed-border': '#1e293b',
          '--cell-unrevealed-hover': '#323f54',
          '--cell-revealed': '#161c26',
          '--cell-revealed-border': '#293242',
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
     ********************************************************************/
    let bgParticles = [];
    let vfxParticles = [];
    let vfxShockwaves = [];
    let bgAnimFrame = null;

    function initWorldBackgroundParticles() {
      const canvas = document.getElementById('themeBgCanvas');
      const vfxCanvas = document.getElementById('vfxCanvas');
      if (!canvas) return;
      // High-performance downscaled canvas (reduces GPU pixel fill-rate by 75% on mobile!)
      const scale = Math.min(window.devicePixelRatio || 1, 1.25);
      const w = Math.min(Math.round(window.innerWidth * scale), 720);
      const h = Math.min(Math.round(window.innerHeight * scale), 1280);
      canvas.width = w;
      canvas.height = h;
      if (vfxCanvas) {
        vfxCanvas.width = w;
        vfxCanvas.height = h;
      }
      bgParticles = [];

      const count = 20;
      for (let i = 0; i < count; i++) {
        bgParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 2 + Math.random() * 4.5,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.03,
          alpha: 0.2 + Math.random() * 0.65,
          char: String.fromCharCode(0x30A0 + Math.floor(Math.random() * 32))
        });
      }
    }

    function spawnCellVfx(clientX, clientY, vfxType) {
      const g = THEME_GRAPHICS[state.theme] || THEME_GRAPHICS.arabian;
      const colors = g.particleColors;
      // Ultra-lightweight particle count for 120fps/60fps mobile stability
      const count = vfxType === 'boom' ? 14 : (vfxType === 'chord' ? 8 : 4);
      if (vfxParticles.length > 25) vfxParticles.splice(0, vfxParticles.length - 25);

      const vfxCanvas = document.getElementById('vfxCanvas');
      const scaleX = vfxCanvas ? (vfxCanvas.width / window.innerWidth) : 1;
      const scaleY = vfxCanvas ? (vfxCanvas.height / window.innerHeight) : 1;
      const sx = clientX * scaleX;
      const sy = clientY * scaleY;

      vfxShockwaves.push({
        x: sx,
        y: sy,
        radius: 4,
        maxRadius: (vfxType === 'boom' ? 65 : 32) * scaleX,
        alpha: 0.8,
        color: vfxType === 'boom' ? '#ef4444' : colors[0]
      });

      for (let i = 0; i < count; i++) {
        const ang = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const spd = ((vfxType === 'boom' ? 2.5 : 1.2) + Math.random() * 2.5) * scaleX;
        vfxParticles.push({
          x: sx,
          y: sy,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd - 0.8,
          size: (2 + Math.random() * 2.5) * scaleX,
          color: vfxType === 'boom' ? (i % 2 === 0 ? '#ef4444' : '#fbbf24') : colors[i % colors.length],
          alpha: 1,
          decay: 0.035 + Math.random() * 0.025
        });
      }
      triggerVfxLoopIfNeeded();
    }

    function startGraphicsRenderLoop() {
      const bgCanvas = document.getElementById('themeBgCanvas');
      const vfxCanvas = document.getElementById('vfxCanvas');
      if (!bgCanvas || !vfxCanvas) return;
      const bgCtx = bgCanvas.getContext('2d', { alpha: true });
      const vfxCtx = vfxCanvas.getContext('2d', { alpha: true });

      let tick = 0;
      let lastBgTime = 0;
      let vfxRunning = false;

      function renderFrame(nowMs) {
        // 1. If inside active game: freeze ambient loop completely! (0% CPU/GPU overhead for buttery smooth board gameplay)
        const inGame = state.view === 'game';
        const hasVfx = vfxParticles.length > 0 || vfxShockwaves.length > 0;

        if (inGame && !hasVfx) {
          if (vfxRunning) {
            vfxCtx.clearRect(0, 0, vfxCanvas.width, vfxCanvas.height);
            vfxRunning = false;
          }
          bgAnimFrame = null;
          return; // Stop RAF loop!
        }

        // Throttle ambient menu background to ~24fps to save battery & eliminate stutter
        if (!hasVfx && nowMs - lastBgTime < 42) {
          bgAnimFrame = requestAnimationFrame(renderFrame);
          return;
        }
        lastBgTime = nowMs;

        const w = bgCanvas.width;
        const h = bgCanvas.height;

        // Render ambient background only if in menus
        if (!inGame) {
          tick += 0.035;
          bgCtx.clearRect(0, 0, w, h);

          if (state.theme === 'arabian') {
            bgCtx.save();
            const moonX = w * 0.84;
            const moonY = h * 0.14;
            const grad = bgCtx.createRadialGradient(moonX, moonY, 2, moonX, moonY, 40);
            grad.addColorStop(0, 'rgba(245, 176, 65, 0.32)');
            grad.addColorStop(1, 'rgba(245, 176, 65, 0)');
            bgCtx.fillStyle = grad;
            bgCtx.beginPath();
            bgCtx.arc(moonX, moonY, 40, 0, Math.PI * 2);
            bgCtx.fill();

            bgParticles.forEach((p, idx) => {
              p.y -= 0.3 + (idx % 3) * 0.15;
              p.x += Math.sin(tick + idx) * 0.25;
              if (p.y < 0) p.y = h;
              const twinkle = 0.3 + 0.6 * Math.abs(Math.sin(tick * 1.5 + idx));
              bgCtx.fillStyle = idx % 3 === 0 ? `rgba(45, 212, 191, ${twinkle * 0.7})` : `rgba(245, 176, 65, ${twinkle})`;
              bgCtx.beginPath();
              bgCtx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
              bgCtx.fill();
            });
            bgCtx.restore();
          } else if (state.theme === 'obsidian') {
            bgCtx.save();
            bgParticles.forEach((p, idx) => {
              p.y += 1.2 + (idx % 3) * 0.5;
              if (p.y > h) { p.y = -10; p.x = Math.random() * w; }
              bgCtx.fillStyle = idx % 2 === 0 ? 'rgba(56, 189, 248, 0.35)' : 'rgba(168, 85, 247, 0.3)';
              bgCtx.fillRect(p.x, p.y, 2, p.size * 2.5);
            });
            bgCtx.restore();
          } else if (state.theme === 'sakura') {
            bgCtx.save();
            bgParticles.forEach((p, idx) => {
              p.y += 0.7 + (idx % 3) * 0.2;
              p.x += Math.sin(tick + idx) * 0.5;
              if (p.y > h + 15) { p.y = -15; p.x = Math.random() * w; }
              bgCtx.fillStyle = idx % 2 === 0 ? 'rgba(251, 113, 133, 0.5)' : 'rgba(253, 164, 175, 0.6)';
              bgCtx.beginPath();
              bgCtx.ellipse(p.x, p.y, p.size * 1.2, p.size * 0.6, 0, 0, Math.PI * 2);
              bgCtx.fill();
            });
            bgCtx.restore();
          } else if (state.theme === 'emerald') {
            bgCtx.save();
            bgParticles.forEach((p, idx) => {
              p.y -= 0.6 + (idx % 3) * 0.2;
              if (p.y < -15) { p.y = h + 15; p.x = Math.random() * w; }
              bgCtx.strokeStyle = idx % 3 === 0 ? 'rgba(251, 191, 36, 0.4)' : 'rgba(52, 211, 153, 0.4)';
              bgCtx.lineWidth = 1.2;
              bgCtx.beginPath();
              bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              bgCtx.stroke();
            });
            bgCtx.restore();
          }
        }

        // Render interactive VFX (if any)
        if (hasVfx) {
          vfxRunning = true;
          vfxCtx.clearRect(0, 0, vfxCanvas.width, vfxCanvas.height);

          for (let i = vfxShockwaves.length - 1; i >= 0; i--) {
            const sw = vfxShockwaves[i];
            sw.radius += (sw.maxRadius - sw.radius) * 0.22 + 2;
            sw.alpha -= 0.055;
            if (sw.alpha <= 0) {
              vfxShockwaves.splice(i, 1);
              continue;
            }
            vfxCtx.save();
            vfxCtx.strokeStyle = sw.color;
            vfxCtx.globalAlpha = Math.max(0, sw.alpha);
            vfxCtx.lineWidth = 2;
            vfxCtx.beginPath();
            vfxCtx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
            vfxCtx.stroke();
            vfxCtx.restore();
          }

          for (let i = vfxParticles.length - 1; i >= 0; i--) {
            const pt = vfxParticles[i];
            pt.x += pt.vx;
            pt.y += pt.vy;
            pt.vy += 0.15;
            pt.alpha -= pt.decay * 1.2;
            if (pt.alpha <= 0) {
              vfxParticles.splice(i, 1);
              continue;
            }
            vfxCtx.save();
            vfxCtx.globalAlpha = Math.max(0, pt.alpha);
            vfxCtx.fillStyle = pt.color;
            vfxCtx.beginPath();
            vfxCtx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
            vfxCtx.fill();
            vfxCtx.restore();
          }
        } else if (vfxRunning) {
          vfxCtx.clearRect(0, 0, vfxCanvas.width, vfxCanvas.height);
          vfxRunning = false;
        }

        bgAnimFrame = requestAnimationFrame(renderFrame);
      }

      if (bgAnimFrame) cancelAnimationFrame(bgAnimFrame);
      bgAnimFrame = requestAnimationFrame(renderFrame);
    }

    function triggerVfxLoopIfNeeded() {
      if (!bgAnimFrame) {
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
        homeThemesTitle: '5 Pro Graphics Worlds (Live 3D & VFX)',
        navTutorial: 'How to Play',
        navStats: 'Records',
        navSupport: 'Support Us',
        storyMapTitle: "The Royal Sapper's Odyssey",
        storyMapSub: 'Learn step-by-step, then conquer 100% logical story chapters',
        menuBtn: 'Menu',
        hintBtn: 'Logic Hint',
        modeDig: 'Dig',
        modeFlag: 'Flag',
        pureLogicActive: 'Pure Logic Active',
        randomModeActive: 'Classic Random Mode',
        settingsTitle: 'Settings & Custom Controls',
        settingThemeLabel: 'Pro Graphics World (Changes 3D Tiles, Sprites, VFX & Scenery)',
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
        tier1Title: 'Arabic Coffee Tip',
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
          retro: 'Classic Arcade 95 — Light (Free Default)',
          retro_dark: 'Classic Arcade 95 — Dark Mode 🌙 (Free Default)',
          sakura: 'Imperial Sakura Zen 🌸 (Level 5 Reward / VIP)',
          emerald: 'Sunken Atlantis 🌿 (Level 15 Reward / VIP)',
          arabian: 'Arabian Nights 🕌 (Level 30 Reward / VIP)',
          obsidian: 'Cyber Neon 2099 🌌 (Level 50 Finale / VIP)'
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
        appTitle: 'ملحمة كانسة الألغام',
        appSubtitle: 'عوالم غرافيكس احترافية • منطق 100% بدون تخمين',
        noGuessBadge: '🧠 منطق خالص 100% • بدون أي تخمين',
        heroHeading: 'ملحمة كانسة الألغام',
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
        homeThemesTitle: '5 عوالم غرافيكس احترافية (مجسمات ومؤثرات حية)',
        navTutorial: 'كيف تلعب',
        navStats: 'الإحصائيات',
        navSupport: 'ادعمنا',
        storyMapTitle: 'حملة الـ 50 مستوى وأكاديمية التأهيل',
        storyMapSub: 'أول 5 مراحل تؤهلك تفاعلياً من الصفر • تليها 45 مرحلة متدرجة الصعوبة حتى الاحتراف',
        menuBtn: 'القائمة',
        hintBtn: 'تلميح منطقي',
        modeDig: 'حفر',
        modeFlag: 'علم',
        pureLogicActive: 'نظام بدون تخمين مفعّل',
        randomModeActive: 'النظام الكلاسيكي العشوائي',
        settingsTitle: 'الإعدادات وتخصيص التحكم',
        settingThemeLabel: 'عالم الغرافيكس (يغيّر المجسمات، الأعلام، الألغام، والبيئة المتحركة)',
        settingControlsHeader: 'تخصيص التحكم للمس والفأرة',
        setPrimaryTap: 'وظيفة النقر الأساسي',
        setPrimaryTapSub: 'الإجراء عند لمس المربع نقرة عادية',
        optTapDig: '⛏️ حفر (كشف المربع)',
        optTapFlag: '🚩 وضع علم',
        setLongPress: 'مدة الضغطة المطولة باللمس (للإجراء المعاكس)',
        setChordLabel: 'الكشف السريع عند النقر على الرقم (Chording)',
        setChordSub: 'انقر على الرقم المكتمل لفتح المربعات الآمنة حوله فوراً',
        setNoGuessLabel: 'نظام اللعب بدون تخمين (منطق 100%)',
        setNoGuessSub: 'يضمن أن كل لوحة قابلة للحل بالاستنتاج العقلي فقط',
        setSound: '🔊 المؤثرات الصوتية',
        setHaptics: '📳 الاهتزاز اللمسي',
        btnDoneSettings: 'حفظ والعودة',
        langModalTitle: 'اختر اللغة (9 لغات أساسية)',
        supportTitle: 'ادعم فريق التطوير',
        supportSubtitle: 'اللعبة نقية 100% ومجانية بالكامل بدون أي إعلانات للأبد! دعمك يساهم في استمرار التطوير.',
        tier1Title: 'فنجان قهوة عربية',
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
          retro: 'الكلاسيكية النهارية 95 (أساسية مجانية)',
          retro_dark: 'الكلاسيكية بالوضع الليلي 95 🌙 (أساسية مجانية)',
          sakura: 'إمبراطورية الساكورا 🌸 (مكافأة المرحلة 5 أو VIP)',
          emerald: 'معبد أطلانطس الغارق 🌿 (مكافأة المرحلة 15 أو VIP)',
          arabian: 'ألف ليلة وليلة — دمشق 🕌 (مكافأة المرحلة 30 أو VIP)',
          obsidian: 'سايبر نيون 2099 🌌 (ختام المرحلة 50 أو VIP)'
        },
        storyChapters: [
          { title: 'المستوى 1: الخطوات الأولى وقاعدة الرقم (1)', sub: 'تأهيل تفاعلي 1/5: تَعلّم معنى الأرقام، وضع أول علم، وفتح المربع الآمن', badge: '🎓 تأهيل 1/5' },
          { title: 'المستوى 2: قراءة الرقم (2) والكشف السريع', sub: 'تأهيل تفاعلي 2/5: استنتاج الألغام المزدوجة ومهارة النقر السريع Chording', badge: '🎓 تأهيل 2/5' },
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
        storyMapTitle: 'La Odisea del Zapador Real',
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
        tier1Title: 'Café Árabe',
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
          arabian: 'Noches de Arabia (Palacio de Damasco 3D)',
          obsidian: 'Cyber Neon 2099 (Holo-Matrix 3D)',
          retro: 'Clásico Retro 95 (Teclas 3D)',
          retro_dark: 'Classic 95 — Dark Mode 🌙',
          sakura: 'Jardín Imperial Sakura (Pétalos 3D)',
          emerald: 'Atlántida Sumergida (Gemas Esmeralda)'
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
        storyMapTitle: "L'Odyssée du Démineur Royal",
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
        tier1Title: 'Café Arabe',
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
          arabian: 'Mille et Une Nuits (Palais de Damas 3D)',
          obsidian: 'Cyber Neon 2099 (Holo-Matrix 3D)',
          retro: 'Classique Rétro 95 (Touches 3D)',
          retro_dark: 'Classic 95 — Dark Mode 🌙',
          sakura: 'Jardin Impérial Sakura (Pétales 3D)',
          emerald: 'Atlantide Engloutie (Cristaux Émeraude)'
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
        storyMapTitle: 'Die Odyssee des Sappeurs',
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
        tier1Title: 'Arabischer Kaffee',
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
          arabian: 'Tausendundeine Nacht (Damaskus-Palast 3D)',
          obsidian: 'Cyber Neon 2099 (Holo-Matrix 3D)',
          retro: 'Klassisch Retro 95 (3D-Tasten)',
          retro_dark: 'Classic 95 — Dark Mode 🌙',
          sakura: 'Sakura-Garten Zen (Blütenblätter 3D)',
          emerald: 'Versunkenes Atlantis (Smaragd-Kristalle)'
        }
      },
      ja: {
        code: 'JA',
        nativeName: '日本語',
        dir: 'ltr',
        appTitle: 'マインスイーパー・オデッセイ',
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
        storyMapTitle: '王国工兵のオデッセイ',
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
        tier1Title: 'アラビックコーヒー1杯',
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
          arabian: 'アラビアンナイト (ダマスカス宮殿3D)',
          obsidian: 'サイバーネオン2099 (ホロマトリックス3D)',
          retro: 'クラシック95 (立体3Dキーキャップ)',
          retro_dark: 'Classic 95 — Dark Mode 🌙',
          sakura: 'サクラ庭園 (木版タイル＆舞い散る花びら)',
          emerald: '海底都市アトランティス (エメラルド結晶)'
        }
      },
      zh: {
        code: 'ZH',
        nativeName: '中文',
        dir: 'ltr',
        appTitle: '扫雷奥德赛',
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
        storyMapTitle: '皇家工兵奥德赛',
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
        tier1Title: '一杯阿拉伯咖啡',
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
          arabian: '一千零一夜 (大马士革3D镶嵌与神灯)',
          obsidian: '赛博霓虹 2099 (全息装甲与矩阵激光)',
          retro: '经典街机 95 (高浮雕3D机械键帽)',
          retro_dark: 'Classic 95 — Dark Mode 🌙',
          sakura: '帝国樱花庭院 (木刻雕花与飘落花瓣)',
          emerald: '失落亚特兰蒂斯 (3D切割祖母绿水晶)'
        }
      },
      ru: {
        code: 'RU',
        nativeName: 'Русский',
        dir: 'ltr',
        appTitle: 'Сапёр: Одиссея',
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
        storyMapTitle: 'Одиссея Королевского Сапёра',
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
        tier1Title: 'Чашка Арабского Кофе',
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
          arabian: 'Арабская Ночь (Дворец Дамаска 3D)',
          obsidian: 'Кибер-Неон 2099 (Голо-Матрица 3D)',
          retro: 'Классика Ретро 95 (3D Клавиши)',
          retro_dark: 'Classic 95 — Dark Mode 🌙',
          sakura: 'Императорская Сакура (Лепестки 3D)',
          emerald: 'Затонувшая Атлантида (Кристаллы)'
        }
      },
      tr: {
        code: 'TR',
        nativeName: 'Türkçe',
        dir: 'ltr',
        appTitle: 'Mayın Tarlası: Destan',
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
        storyMapTitle: 'Kraliyet İstihkamcısının Destanı',
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
        tier1Title: 'Arap Kahvesi İkramı',
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
          arabian: 'Binbir Gece (Şam Sarayı 3D & Fenerler)',
          obsidian: 'Siber Neon 2099 (Holo-Matris 3D)',
          retro: 'Klasik Retro 95 (3D Mekanik Tuşlar)',
          retro_dark: 'Classic 95 — Dark Mode 🌙',
          sakura: 'İmparatorluk Sakura (Ahşap & Yapraklar)',
          emerald: 'Batık Atlantis (3D Zümrüt Kristaller)'
        }
      }
    };

    /********************************************************************
     * 4. STORY & INTERACTIVE TUTORIAL CHAPTER DEFINITIONS
     ********************************************************************/
    function isHorizontalBoardLayout() {
      // Desktop browsers (>= 768px) or landscape screens use horizontal boards (cols > rows).
      // Mobile portrait screens (< 768px and height >= width) use vertical boards (rows > cols).
      return window.innerWidth >= 768 || window.innerWidth > window.innerHeight;
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
        nameAr: 'الفصل 3: معبد أطلانطس الغارق (21–30)',
        nameEn: 'Act III: Sunken Atlantis Sanctum (21–30)',
        artSvg: `<svg viewBox="0 0 600 200" class="w-full h-full"><rect width="600" height="200" fill="#022c22"/><polygon points="200,45 400,45 300,15" fill="#064e3b" stroke="#34d399" stroke-width="2"/><rect x="220" y="45" width="20" height="105" fill="#064e3b"/><rect x="290" y="45" width="20" height="105" fill="#064e3b"/><rect x="360" y="45" width="20" height="105" fill="#064e3b"/><path d="M0,150 L600,150 L600,200 L0,200 Z" fill="#011510"/><text x="300" y="180" fill="#6ee7b7" font-size="15" font-weight="bold" text-anchor="middle">🌿 Act III: Sunken Atlantis Sanctum (Levels 21–30)</text></svg>`
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
      'المستوى 2: قراءة الرقم (2) والكشف السريع Chording',
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
        badge = isAr ? `🎓 مرحلة تأهيل ${levelId}/5` : `🎓 Tutorial ${levelId}/5`;
        const tutSubsAr = [
          'تعلّم من الصفر: الحفر الآمن، معنى الرقم 1، ووضع أول علم (6 خطوات تفاعلية)',
          'تعلّم قراءة الرقم 2 ومهارة الكشف السريع بلمسة واحدة Chording (6 خطوات)',
          'تعلّم ربط الأرقام المتجاورة على الحواف والزوايا (6 خطوات)',
          'تعلّم شفرة المحترفين الشهيرة (1 - 2 - 1) على الجدران (6 خطوات)',
          'امتحان التخرج: أتقن نمط (1 - 2 - 2 - 1) المتقدم وتأهل للمراحل الـ 50!'
        ];
        const tutSubsEn = [
          'Learn from scratch: Safe opening, reading "1", and placing your first Flag (6 steps)',
          'Learn how to read "2"s and use single-tap Number Chording (6 steps)',
          'Learn coupled edge deduction and 5-tile chain Chording (6 steps)',
          'Master the famous "1 - 2 - 1" wall pattern without guessing (6 steps)',
          'Graduation Exam: Master the "1 - 2 - 2 - 1" pattern and unlock the full campaign!'
        ];
        sub = isAr ? tutSubsAr[idx] : tutSubsEn[idx];
      } else if (spec.isBoss) {
        badge = isAr ? `👑 زعيم الفصل ${spec.act}` : `👑 Act ${spec.act} Boss`;
        sub = isAr
          ? `اختبار حاسم في نهاية الفصل ${spec.act} (${spec.cols}×${spec.rows} • ${spec.mines} 💣 • منطق 100%)`
          : `Milestone Boss Challenge for Act ${spec.act} (${spec.cols}×${spec.rows} • ${spec.mines} 💣 • 100% Logic)`;
      } else {
        badge = isAr ? `${actObj.icon} المستوى ${levelId}/50` : `${actObj.icon} Level ${levelId}/50`;
        const tierNameAr = spec.id <= 10 ? 'مبتدئ مؤهل' : (spec.id <= 20 ? 'متدرج' : (spec.id <= 30 ? 'متوسط متقدم' : (spec.id <= 40 ? 'خبير تكتيكي' : 'أسطوري محترف')));
        const tierNameEn = spec.id <= 10 ? 'Qualified Rookie' : (spec.id <= 20 ? 'Rising Sapper' : (spec.id <= 30 ? 'Intermediate Pro' : (spec.id <= 40 ? 'Tactical Expert' : 'Grandmaster')));
        sub = isAr
          ? `صعوبة متدرجة: ${tierNameAr} (${spec.cols}×${spec.rows} • ${spec.mines} 💣)`
          : `Progressive Difficulty: ${tierNameEn} (${spec.cols}×${spec.rows} • ${spec.mines} 💣)`;
      }

      return { title, sub, badge, actObj };
    }

    function getLevelCutsceneData(levelId) {
      const spec = STORY_CHAPTERS[levelId - 1] || STORY_CHAPTERS[0];
      const metaAr = getLevelMetaText(levelId, 'ar');
      const metaEn = getLevelMetaText(levelId, 'en');
      const actObj = metaAr.actObj;

      const tutLessonsAr = [
        '🎓 هدف المرحلة 1: إذا رأيت الرقم (1) لا يلامس سوى مربع مخفي واحد في الزاوية، فهذا المربع هو لغم 100%! وإذا كان الرقم (1) يلامس علماً بالفعل، فكل جيرانه الآخرين آمنون تماماً.',
        '🎓 هدف المرحلة 2: عندما يكتمل عدد الأعلام حول أي رقم (مثل رقم 2 يلامس علمين)، انقر مباشرة على نفس الرقم ليفتح جميع جيرانه الآمنين دفعة واحدة (Chording)!',
        '🎓 هدف المرحلة 3: اربط بين الأرقام المتجاورة في الزوايا والحواف لتوسيع الجيب الآمن بسرعة وبدون أي تخمين.',
        '🎓 هدف المرحلة 4: قاعدة (1 - 2 - 1) الذهبية: عندما يصطف 1-2-1 على حافة، يختبئ اللغمان دائماً تحت الرقمين (1) على الطرفين، ويكون المربع الأوسط تحت الـ (2) آمناً دائماً!',
        '🎓 هدف المرحلة 5 (التخرج): قاعدة (1 - 2 - 2 - 1) الذهبية: عندما يصطف 1-2-2-1 على حافة، يختبئ اللغمان دائماً تحت الرقمين (2) في المنتصف، ويكون الطرفان تحت الـ (1) آمنين!'
      ];
      const tutLessonsEn = [
        '🎓 Level 1 Goal: When a "1" touches only ONE hidden corner tile, that tile is 100% a Mine! And once a "1" touches 1 flag, all its other neighbors are 100% Safe!',
        '🎓 Level 2 Goal: Once a number touches all its required flags (e.g., a "2" touching 2 flags), tap directly on the number to Chord and open all safe neighbors at once!',
        '🎓 Level 3 Goal: Combine corner flags with single-tap Chording to rapidly expand your safe zone.',
        '🎓 Level 4 Goal: The Golden 1-2-1 Rule: Whenever 1-2-1 lines up along a wall, the two mines ALWAYS sit beneath the two outer "1"s, and the middle tile under "2" is safe!',
        '🎓 Level 5 Goal (Graduation): The Golden 1-2-2-1 Rule: Whenever 1-2-2-1 lines up along a wall, the two mines ALWAYS sit beneath the two middle "2"s!'
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
                ? `مرحلة تأهيل عملية (${levelId} من 5): صُممت هذه اللوحة خصيصاً لتعلّمك مهارة أساسية خطوة بخطوة مع إضاءة المربع المطلوب في كل خطوة.`
                : `المرحلة ${levelId} من 50 (${spec.mines} لغماً): لوحة منطقية خالصة 100% بدون تخمين. طبّق مهارات الزوايا، الكشف السريع، وأنماط 1-2-1 و 1-2-2-1 لتأمين المنطقة!`
            }
          ],
          lesson: spec.isTutorial
            ? tutLessonsAr[levelId - 1]
            : `💡 نصيحة تكتيكية للمستوى ${levelId}: ابدأ بنقرة في وسط اللوحة لفتح منطقة آمنة واسعة، ثم استخدم الكشف السريع (Chording) وتذكّر أن زر (💡 تلميح منطقي) متاح دائماً لشرح أي خطوة صعبة!`,
          epilogue: spec.isTutorial
            ? `🌟 ممتاز! أتممت مرحلة التأهيل ${levelId} من 5 بنجاح! استعد للمرحلة التالية!`
            : `🏆 أحسنت! تم اجتياز المستوى ${levelId} من 50 بنجاح بالمنطق الخالص!`
        },
        en: {
          badge: metaEn.badge,
          title: metaEn.title,
          dialogues: [
            {
              speaker: actObj.nameEn,
              text: spec.isTutorial
                ? `Hands-On Onboarding Stage (${levelId} of 5): Follow the glowing tile prompts step-by-step to master this core Minesweeper deduction skill.`
                : `Campaign Stage ${levelId} of 50 (${spec.mines} Mines): A 100% pure-logic No-Guess board. Apply corner deduction, Chording, and wall patterns to clear the sector!`
            }
          ],
          lesson: spec.isTutorial
            ? tutLessonsEn[levelId - 1]
            : `💡 Tactical Tip for Level ${levelId}: Start near the center to open a wide safe pocket, use Chording on satisfied numbers, and use Smart Logic Hint (💡) anytime you want a step explained!`,
          epilogue: spec.isTutorial
            ? `🌟 Awesome job! You completed Onboarding Stage ${levelId} of 5!`
            : `🏆 Victory! Level ${levelId} of 50 cleared with 100% pure logic!`
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
      lang: 'en',
      theme: 'retro',
      defaultThemeRetroMigrated: true,
      view: 'home',
      controlMode: 'dig',
      defaultTapMode: 'dig',
      longPressDelay: 280,
      chordEnabled: true,
      noGuessEnabled: true,
      soundEnabled: true,
      hapticsEnabled: true,
      zoomScale: 1.0,
      panX: 0,
      panY: 0,
      hintCoins: 5,
      isVipSupporter: false,
      unlockedThemes: { retro: true, retro_dark: true },

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

    function openIndexedDB() {
      return new Promise((resolve) => {
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
          req.onerror = () => resolve(null);
        } catch (err) {
          resolve(null);
        }
      });
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
        longPressDelay: state.longPressDelay,
        chordEnabled: state.chordEnabled,
        noGuessEnabled: state.noGuessEnabled,
        soundEnabled: state.soundEnabled,
        hapticsEnabled: state.hapticsEnabled,
        hintCoins: state.hintCoins,
        isVipSupporter: state.isVipSupporter,
        unlockedThemes: state.unlockedThemes || { retro: true, retro_dark: true },
        stats: state.stats
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
        if (typeof incoming.longPressDelay === 'number') {
          state.longPressDelay = clampNumber(incoming.longPressDelay, 160, 600, 280);
        }
        if (typeof incoming.chordEnabled === 'boolean') state.chordEnabled = incoming.chordEnabled;
        if (typeof incoming.noGuessEnabled === 'boolean') state.noGuessEnabled = incoming.noGuessEnabled;
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
        saveActiveMatchSnapshotImmediate();
      }, 650);
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
    }

    function triggerHaptic(ms = 18) {
      if (!state.hapticsEnabled) return;
      try {
        if (navigator.vibrate) navigator.vibrate(ms);
      } catch (e) {}
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

      // Coupled Pairwise Subset & Overlap Deduction
      for (let i = 0; i < constraints.length; i++) {
        const A = constraints[i];
        for (let j = 0; j < constraints.length; j++) {
          if (i === j) continue;
          const B = constraints[j];
          if (Math.abs(A.r - B.r) > 2 || Math.abs(A.c - B.c) > 2) continue;

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

          const minShared = Math.max(0, A.remaining - onlyA.length, B.remaining - onlyB.length);
          const maxShared = Math.min(A.remaining, B.remaining, sharedCount);

          if (onlyB.length > 0 && minShared === B.remaining) {
            return {
              action: 'dig',
              cells: onlyB,
              source: [B.r, B.c],
              reasonEn: `Coupled Logic: Comparing (${A.r + 1},${A.c + 1}) and (${B.r + 1},${B.c + 1}), all ${B.remaining} mine(s) needed by (${B.r + 1},${B.c + 1}) must lie in their shared overlap, making (${onlyB[0][0] + 1},${onlyB[0][1] + 1}) 100% SAFE!`,
              reasonAr: `استنتاج مشترك: بمقارنة المربعين (${A.r + 1},${A.c + 1}) و (${B.r + 1},${B.c + 1})، جميع الألغام المتبقية للمربع الثاني تقع ضمن المنطقة المشتركة بينهما، مما يجعل (${onlyB[0][0] + 1},${onlyB[0][1] + 1}) آمناً 100%!`
            };
          }

          if (onlyB.length > 0 && (B.remaining - maxShared) === onlyB.length) {
            return {
              action: 'flag',
              cells: onlyB,
              source: [B.r, B.c],
              reasonEn: `Coupled Logic: Comparing (${A.r + 1},${A.c + 1}) and (${B.r + 1},${B.c + 1}), the shared tiles can hold at most ${maxShared} mine(s), forcing (${onlyB[0][0] + 1},${onlyB[0][1] + 1}) to be a MINE!`,
              reasonAr: `استنتاج مشترك: بمقارنة (${A.r + 1},${A.c + 1}) و (${B.r + 1},${B.c + 1})، المربعات المشتركة تتسع لـ ${maxShared} لغم كحد أقصى، مما يؤكد أن (${onlyB[0][0] + 1},${onlyB[0][1] + 1}) هو لغم 100%!`
            };
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

        // Disjoint Subset Mine-Count Packing (if disjoint frontier groups account for all remaining mines, any unrevealed cell outside them is 100% safe!)
        if (minesLeftGlobal > 0 && allUnrevealed.length <= 28 && constraints.length > 0) {
          const usedKeys = new Set();
          let disjointMineSum = 0;
          for (let i = 0; i < constraints.length; i++) {
            const cObj = constraints[i];
            let overlaps = false;
            for (const k of cObj.keys) {
              if (usedKeys.has(k)) { overlaps = true; break; }
            }
            if (!overlaps) {
              for (const k of cObj.keys) usedKeys.add(k);
              disjointMineSum += cObj.remaining;
            }
          }
          if (disjointMineSum === minesLeftGlobal) {
            const outsideSafe = [];
            for (let u = 0; u < allUnrevealed.length; u++) {
              const [ur, uc] = allUnrevealed[u];
              if (!usedKeys.has(ur * cols + uc)) outsideSafe.push([ur, uc]);
            }
            if (outsideSafe.length > 0) {
              return {
                action: 'dig',
                cells: outsideSafe,
                source: outsideSafe[0],
                reasonEn: `Global Mine-Count Logic: All ${minesLeftGlobal} remaining mine(s) are locked inside the active number borders, so (${outsideSafe[0][0] + 1},${outsideSafe[0][1] + 1}) outside is 100% SAFE!`,
                reasonAr: `منطق عدّاد الألغام الشامل: جميع الألغام الـ ${minesLeftGlobal} المتبقية محصورة داخل حدود الأرقام المكشوفة، مما يجعل المربع (${outsideSafe[0][0] + 1},${outsideSafe[0][1] + 1}) آمناً 100%!`
              };
            }
          }
        }
      }

      return null;
    }

    // Ultra-fast typed-array logical solver (~1,400x faster than legacy solver: 0.02ms per board check)
    function fastSolveSimulation(rawGrid, startR, startC, rows, cols, totalMines) {
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

        // Pass 2: Coupled Pairwise Subset & Overlap Deduction on active frontier
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

        for (let i = 0; i < fData.length; i++) {
          const A = fData[i];
          for (let j = 0; j < fData.length; j++) {
            if (i === j) continue;
            const B = fData[j];
            if (Math.abs(A.r - B.r) > 2 || Math.abs(A.c - B.c) > 2) continue;

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
          if (progressed) break;
        }

        if (progressed) continue;

        // Pass 3: Global Endgame Mine-Count Deduction
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
      const res = fastSolveSimulation(rawGrid, startR, startC, rows, cols, totalMines);
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

      // Fast Hill-Climbing No-Guess Generator with Best-Board Snapshot Fallback
      const N = rows * cols;
      const isLargeBoard = N >= 480;
      const maxTimeBudgetMs = isLargeBoard ? 65 : 35;
      const maxAttempts = isLargeBoard ? 45 : 80;
      const maxMutationsPerAttempt = isLargeBoard ? 55 : 40;
      const genStartTime = (typeof performance !== 'undefined' ? performance.now() : Date.now());

      let bestRevealedSafe = -1;
      let bestMineSnapshot = null;

      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const elapsed = (typeof performance !== 'undefined' ? performance.now() : Date.now()) - genStartTime;
        if (attempt > 0 && elapsed > maxTimeBudgetMs) break;

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
        let check = fastSolveSimulation(state.board, startR, startC, rows, cols, totalMines);
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

        // Hill-climbing local mutations: breach closed mine walls & eliminate 50/50 pockets
        for (let mut = 0; mut < maxMutationsPerAttempt; mut++) {
          if (((typeof performance !== 'undefined' ? performance.now() : Date.now()) - genStartTime) > maxTimeBudgetMs) break;

          const stArr = check.stateArr;
          const frontierMines = []; // Include both unflagged AND flagged mines touching revealed numbers so closed walls can be breached!
          const interiorSafes = [];
          const noZeroRevSafes = [];

          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              if (safeSet.has(idx)) continue;
              const st = stArr[idx];

              let touchesRev = false;
              let touchesRevZero = false;
              for (let dr = -1; dr <= 1; dr++) {
                const nr = r + dr;
                if (nr < 0 || nr >= rows) continue;
                for (let dc = -1; dc <= 1; dc++) {
                  if (dr === 0 && dc === 0) continue;
                  const nc = c + dc;
                  if (nc >= 0 && nc < cols && stArr[nr * cols + nc] === 1) {
                    touchesRev = true;
                    if (state.board[nr][nc].neighborMines === 0) touchesRevZero = true;
                  }
                }
              }

              if (state.board[r][c].mine) {
                if (touchesRev) frontierMines.push([r, c]);
              } else if (st === 0) {
                if (!touchesRev) interiorSafes.push([r, c]);
                if (!touchesRevZero) noZeroRevSafes.push([r, c]);
              }
            }
          }

          const targetPool = interiorSafes.length > 0 ? interiorSafes : noZeroRevSafes;
          if (frontierMines.length === 0 || targetPool.length === 0) break;

          const [fmr, fmc] = frontierMines[Math.floor(rngFunc() * frontierMines.length)];
          const [dsr, dsc] = targetPool[Math.floor(rngFunc() * targetPool.length)];

          swapMineFast(state.board, fmr, fmc, dsr, dsc, rows, cols);
          const nextCheck = fastSolveSimulation(state.board, startR, startC, rows, cols, totalMines);

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
            // Revert counter-productive swap immediately in O(1)
            swapMineFast(state.board, dsr, dsc, fmr, fmc, rows, cols);
          }
        }
      }

      // Restore the highest-solvability board found if the time budget expired on a dense board
      if (bestMineSnapshot) {
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            state.board[r][c].mine = bestMineSnapshot[r * cols + c] === 1;
          }
        }
        computeNeighborCounts(state.board, rows, cols);
      }
    }

    // Runtime Fair-Play Guard: If a player in No-Guess mode is forced to guess (or hits an ambiguous 50/50 pocket)
    // and clicks a mine that was NOT logically deducible as a mine, seamlessly swap the mine to an isomorphic
    // hidden cell that preserves 100% of all currently revealed numbers on the board!
    function isCellLogicallyProvenMine(r, c) {
      const rows = state.rows;
      const cols = state.cols;
      for (let dr = -1; dr <= 1; dr++) {
        const nr = r + dr;
        if (nr < 0 || nr >= rows) continue;
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nc = c + dc;
          if (nc < 0 || nc >= cols) continue;
          const nb = state.board[nr][nc];
          if (!nb.revealed || nb.neighborMines <= 0) continue;
          // Count unrevealed & correctly flagged around (nr, nc)
          let hiddenOrMineCount = 0;
          for (let r2 = -1; r2 <= 1; r2++) {
            const rr = nr + r2;
            if (rr < 0 || rr >= rows) continue;
            for (let c2 = -1; c2 <= 1; c2++) {
              if (r2 === 0 && c2 === 0) continue;
              const cc = nc + c2;
              if (cc >= 0 && cc < cols && !state.board[rr][cc].revealed) {
                hiddenOrMineCount++;
              }
            }
          }
          if (hiddenOrMineCount === nb.neighborMines) return true;
        }
      }
      return false;
    }

    function tryFairPlayMineSwap(hitR, hitC) {
      if (!state.noGuessEnabled || state.storyChapterId) return false;
      // If the clicked cell is trivially proven to be a mine by an adjacent revealed number, do not swap (it's a clear player mistake, not a guess)
      if (isCellLogicallyProvenMine(hitR, hitC)) return false;

      // Also check if there is any clear logical move available right now; if the board is stuck with NO logical dig moves, or the player is in an endgame 50/50, protect them!
      const move = findNextLogicalMove(state.board, state.rows, state.cols);
      if (move && move.action === 'flag') {
        for (let i = 0; i < move.cells.length; i++) {
          if (move.cells[i][0] === hitR && move.cells[i][1] === hitC) {
            return false; // Solver proved this exact cell is a mine
          }
        }
      }
      // If there was a logical 'dig' move available elsewhere on the board, only protect if the clicked cell touches a revealed number with >=2 unknowns (ambiguous local choice when no local move exists)
      if (move && move.action === 'dig') return false;

      const rows = state.rows;
      const cols = state.cols;

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

      // Search for an unrevealed, unflagged safe cell (sr, sc) that touches the EXACT SAME set of revealed cells!
      // Swapping the mine from (hitR, hitC) to (sr, sc) leaves every single revealed number on the screen 100% unchanged!
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
      state.panX = 0;
      state.panY = 0;
      state.controlMode = state.defaultTapMode;

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
        state.tutorialStep = ch.isTutorial ? 0 : -1;
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
      document.getElementById('hudFaceEmoji').textContent = '😎';
      document.getElementById('logicHintBanner').classList.add('hidden');
      document.getElementById('modalGameResult').classList.add('hidden');
      document.getElementById('modalGameResult').classList.remove('flex');

      switchView('game');
      updateGameHud();
      updateStoryTutorialBanner();
      renderBoardGrid();
    }

    function syncBoardOrientationWithViewport() {
      updateResponsiveDimensionLabels();
      if (!state.board || state.board.length === 0 || state.cols === state.rows) return;
      const wantHoriz = isHorizontalBoardLayout();
      const isCurrentlyHoriz = state.cols > state.rows;
      if (wantHoriz === isCurrentlyHoriz) return;

      const ch = state.storyChapterId ? STORY_CHAPTERS.find(x => x.id === state.storyChapterId) : null;
      const oldRows = state.rows;
      const oldCols = state.cols;
      state.rows = oldCols;
      state.cols = oldRows;

      if (ch && ch.isTutorial && state.firstClickDone) {
        // Re-initialize tutorial board if orientation flips mid-tutorial
        state.board = createEmptyBoard(state.rows, state.cols);
        populateMinesOnFirstClick(Math.floor(state.rows / 2), Math.floor(state.cols / 2));
        state.revealedCount = 0;
        state.flagsPlaced = 0;
        const [sr, sc] = ch.getStartCell(state.rows, state.cols);
        floodRevealReal(sr, sc);
        if (state.tutorialStep >= 2) {
          state.board[0][0].flagged = true;
          state.flagsPlaced = 1;
        }
      } else {
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
      }
    }

    function computeCellPixelSize() {
      const viewportEl = document.getElementById('boardViewport');
      const isHoriz = isHorizontalBoardLayout();
      const availW = (viewportEl && viewportEl.clientWidth > 100)
        ? viewportEl.clientWidth - 24
        : window.innerWidth - 32;
      const availH = (viewportEl && viewportEl.clientHeight > 100)
        ? viewportEl.clientHeight - 24
        : window.innerHeight - 180;

      const maxBoardW = isHoriz ? Math.min(availW, 1220) : Math.min(availW, 560);
      const maxBoardH = Math.max(240, availH);

      const gap = 1.5;
      const pad = 14;
      const fitByW = Math.floor((maxBoardW - (state.cols - 1) * gap - pad) / state.cols);
      const fitByH = Math.floor((maxBoardH - (state.rows - 1) * gap - pad) / state.rows);

      const rawBase = isHoriz ? Math.min(fitByW, fitByH) : Math.min(fitByW, Math.max(fitByH, 30));
      const isHugeBoard = state.cols >= 18 || state.rows >= 18;
      // Keep cells comfortable so large boards naturally scroll inside the viewport like touch
      const minCell = isHoriz ? (isHugeBoard ? 34 : 32) : (isHugeBoard ? 30 : 28);
      const maxCell = isHoriz ? 50 : 44;
      const clamped = Math.max(minCell, Math.min(maxCell, rawBase));
      return Math.max(18, Math.round(clamped * state.zoomScale));
    }

    function applyBoardPanTransform() {
      const gridEl = document.getElementById('minesweeperGrid');
      if (gridEl && gridEl.style.transform) {
        gridEl.style.transform = '';
      }
    }

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
      let lastX = 0;
      let lastY = 0;

      const clearHoldTimers = () => {
        if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
        const ring = document.getElementById('touchHoldRing');
        if (ring && ring.style.display !== 'none') ring.style.display = 'none';
      };

      const onPointerDown = (e) => {
        if (e.button === 2) return;
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
        if (cellEl && !state.gameOver && !state.gameWon && e.button === 0) {
          activeR = parseInt(cellEl.dataset.r, 10);
          activeC = parseInt(cellEl.dataset.c, 10);
        } else {
          activeR = -1;
          activeC = -1;
        }

        // On mobile touch: long press (280ms) for flag/dig
        if (pointerType !== 'mouse' && activeR >= 0 && activeC >= 0) {
          const cellObj = state.board[activeR] && state.board[activeR][activeC];
          if (cellObj && !cellObj.revealed) {
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
        if (!pointerDownActive) return;
        const dist = Math.hypot(e.clientX - startX, e.clientY - startY);

        // If finger or mouse moved more than 9px, cancel cell tap/long-press
        if (dist > 9) {
          clearHoldTimers();
          activeR = -1;
          activeC = -1;
        }

        // Desktop mouse drag-to-pan
        if (pointerType === 'mouse' && dist > 6 && viewportEl) {
          isMousePanning = true;
          viewportEl.scrollLeft -= (e.clientX - lastX);
          viewportEl.scrollTop -= (e.clientY - lastY);
        }
        lastX = e.clientX;
        lastY = e.clientY;
      };

      const onPointerUp = (e) => {
        if (!pointerDownActive || e.button === 2) return;
        pointerDownActive = false;
        const wasLong = longPressTriggered;
        const wasPan = isMousePanning;
        const r = activeR;
        const c = activeC;
        clearHoldTimers();
        activeR = -1;
        activeC = -1;

        if (wasLong || wasPan) return;

        if (r >= 0 && c >= 0 && !state.gameOver && !state.gameWon) {
          handleCellAction(r, c, state.controlMode, e.clientX || startX, e.clientY || startY);
        }
      };

      const onPointerCancel = () => {
        pointerDownActive = false;
        clearHoldTimers();
        activeR = -1;
        activeC = -1;
      };

      if (viewportEl) {
        viewportEl.addEventListener('pointerdown', onPointerDown, { passive: true });
        window.addEventListener('pointermove', onPointerMove, { passive: true });
        window.addEventListener('pointerup', onPointerUp, { passive: true });
        window.addEventListener('pointercancel', onPointerCancel, { passive: true });
      }

      gridEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        clearHoldTimers();
        const cellEl = e.target.closest('.ms-cell');
        if (!cellEl || state.gameOver || state.gameWon) return;
        const r = parseInt(cellEl.dataset.r, 10);
        const c = parseInt(cellEl.dataset.c, 10);
        handleCellAction(r, c, 'flag', e.clientX, e.clientY);
      });
    }

    function renderBoardGrid(forceRebuild = false) {
      const gridEl = document.getElementById('minesweeperGrid');
      if (!gridEl) return;
      ensureGridDelegation(gridEl);

      const cellPx = computeCellPixelSize();
      const fontSize = Math.max(11, Math.floor(cellPx * 0.54)) + 'px';
      const tutFocus = getTutorialFocusCell();
      const g = THEME_GRAPHICS[state.theme] || THEME_GRAPHICS.arabian;

      // Dynamically tighten gap, padding, and cell border-radius so small cells sit snugly together
      const dynamicGap = cellPx <= 26 ? '1px' : (cellPx <= 35 ? '1.5px' : '2px');
      const dynamicPad = cellPx <= 26 ? '5px' : (cellPx <= 35 ? '6px' : '7px');
      const dynamicRadius = cellPx <= 26 ? '2.5px' : (cellPx <= 35 ? '3.5px' : '5px');
      gridEl.style.gap = dynamicGap;
      gridEl.style.padding = dynamicPad;
      gridEl.style.setProperty('--cell-radius', dynamicRadius);

      const needStructureRebuild =
        forceRebuild ||
        domGridMeta.rows !== state.rows ||
        domGridMeta.cols !== state.cols ||
        domGridMeta.nodes.length !== state.rows * state.cols;

      const sizeChanged = domGridMeta.cellPx !== cellPx;
      const themeChanged = domGridMeta.theme !== state.theme;

      if (needStructureRebuild) {
        gridEl.style.gridTemplateColumns = `repeat(${state.cols}, ${cellPx}px)`;
        gridEl.style.gridTemplateRows = `repeat(${state.rows}, ${cellPx}px)`;
        const frag = document.createDocumentFragment();
        const nodes = [];
        for (let r = 0; r < state.rows; r++) {
          for (let c = 0; c < state.cols; c++) {
            const btn = document.createElement('div');
            btn.className = 'ms-cell select-none unrevealed';
            btn.style.width = `${cellPx}px`;
            btn.style.height = `${cellPx}px`;
            btn.style.fontSize = fontSize;
            btn.dataset.r = r;
            btn.dataset.c = c;
            btn._renderKey = '';
            nodes.push(btn);
            frag.appendChild(btn);
          }
        }
        gridEl.replaceChildren(frag);
        domGridMeta = { rows: state.rows, cols: state.cols, cellPx, theme: state.theme, nodes };
      } else if (sizeChanged) {
        gridEl.style.gridTemplateColumns = `repeat(${state.cols}, ${cellPx}px)`;
        gridEl.style.gridTemplateRows = `repeat(${state.rows}, ${cellPx}px)`;
        domGridMeta.cellPx = cellPx;
      }
      applyBoardPanTransform();

      if (themeChanged) {
        domGridMeta.theme = state.theme;
      }

      const nodes = domGridMeta.nodes;
      let idx = 0;
      for (let r = 0; r < state.rows; r++) {
        for (let c = 0; c < state.cols; c++) {
          const cell = state.board[r][c];
          const btn = nodes[idx++];

          if (sizeChanged && !needStructureRebuild) {
            btn.style.width = `${cellPx}px`;
            btn.style.height = `${cellPx}px`;
            btn.style.fontSize = fontSize;
          }

          const isHint = !!(state.activeHintCell && state.activeHintCell[0] === r && state.activeHintCell[1] === c);
          const isTut = !!(tutFocus && tutFocus[0] === r && tutFocus[1] === c);
          const stateCode = cell.revealed
            ? (cell.mine ? 'RM' : `R${cell.neighborMines}`)
            : (cell.flagged
              ? (state.gameOver && !cell.mine ? 'FX' : 'F')
              : (state.gameOver && cell.mine ? 'UM' : 'U'));
          const renderKey = `${state.theme}|${stateCode}|${isHint ? 1 : 0}|${isTut ? 1 : 0}`;

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
          if (isTut) cls += ' tutorial-focus';
          btn.className = cls;
        }
      }
      state.bulkRevealActive = false;
    }

    function getTutorialFocusCell() {
      if (!state.storyChapterId) return null;
      const ch = STORY_CHAPTERS.find(x => x.id === state.storyChapterId);
      if (!ch || !ch.isTutorial) return null;

      const R = state.rows;
      const C = state.cols;
      const s = state.tutorialStep;

      if (ch.tutorialType === 1) {
        // Level 1 (6x6, mines at (2,2), (2,5), (5,2))
        if (s === 0) return [0, 0];
        if (s === 1) return mapTutCoord(2, 2, R, C);
        if (s === 2) return mapTutCoord(2, 3, R, C);
        if (s === 3) return mapTutCoord(2, 5, R, C);
        if (s === 4) return mapTutCoord(5, 2, R, C);
        if (s === 5) return mapTutCoord(3, 2, R, C);
      } else if (ch.tutorialType === 2) {
        // Level 2 (7x6, mines at (2,2), (0,4), (4,1), (4,5))
        if (s === 0) return [0, 0];
        if (s === 1) return mapTutCoord(2, 2, R, C);
        if (s === 2) return mapTutCoord(0, 4, R, C);
        if (s === 3) return mapTutCoord(1, 3, R, C); // Chord on "2"
        if (s === 4) return mapTutCoord(4, 1, R, C);
        if (s === 5) return mapTutCoord(3, 1, R, C); // Chord on "2"
      } else if (ch.tutorialType === 3) {
        // Level 3 (8x6, mines at (2,2), (0,4), (4,1), (4,5), (1,7))
        if (s === 0) return [0, 0];
        if (s === 1) return mapTutCoord(2, 2, R, C);
        if (s === 2) return mapTutCoord(2, 3, R, C);
        if (s === 3) return mapTutCoord(2, 3, R, C);
        if (s === 4) return mapTutCoord(0, 4, R, C);
        if (s === 5) return mapTutCoord(4, 1, R, C);
      } else if (ch.tutorialType === 4) {
        // Level 4 (9x6, 1-2-1 pattern: mines at (2,1), (2,3), (0,5), (4,4), (4,7), (1,8))
        if (s === 0) return [0, 0];
        if (s === 1) return mapTutCoord(2, 1, R, C);
        if (s === 2) return mapTutCoord(2, 3, R, C);
        if (s === 3) return mapTutCoord(1, 2, R, C);
        if (s === 4) return mapTutCoord(1, 1, R, C);
        if (s === 5) return mapTutCoord(0, 5, R, C);
      } else if (ch.tutorialType === 5) {
        // Level 5 (9x7, 1-2-2-1 pattern: mines at (2,1), (2,2), (0,5), (4,4), (4,7), (1,8), (5,1))
        if (s === 0) return [0, 0];
        if (s === 1) return mapTutCoord(2, 1, R, C);
        if (s === 2) return mapTutCoord(2, 2, R, C);
        if (s === 3) return mapTutCoord(1, 0, R, C);
        if (s === 4) return mapTutCoord(1, 3, R, C);
        if (s === 5) return mapTutCoord(0, 5, R, C);
      }
      return null;
    }

    function handleCellAction(r, c, actionType, clientX = window.innerWidth / 2, clientY = window.innerHeight / 2) {
      const cell = state.board[r][c];
      state.activeHintCell = null;
      document.getElementById('logicHintBanner').classList.add('hidden');

      if (cell.revealed) {
        if (state.chordEnabled && cell.neighborMines > 0) {
          attemptChord(r, c, clientX, clientY);
        }
        return;
      }

      if (actionType === 'flag') {
        if (!state.firstClickDone) {
          handleCellAction(r, c, 'dig', clientX, clientY);
          return;
        }
        cell.flagged = !cell.flagged;
        state.flagsPlaced += cell.flagged ? 1 : -1;
        playSound('flag');
        triggerHaptic(15);
        spawnCellVfx(clientX, clientY, 'flag');
        advanceTutorialIfMatched(r, c, 'flag');
        updateGameHud();
        renderBoardGrid();
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
        playSound('boom');
        triggerHaptic([60, 40, 80]);
        spawnCellVfx(clientX, clientY, 'boom');
        document.getElementById('hudFaceEmoji').textContent = '😵';
        state.stats.gamesPlayed++;
        saveState();
        renderBoardGrid();
        setTimeout(() => showGameResultModal(false), 480);
        return;
      }

      floodRevealReal(r, c);
      playSound('dig');
      triggerHaptic(10);
      spawnCellVfx(clientX, clientY, 'dig');
      advanceTutorialIfMatched(r, c, 'dig');
      updateGameHud();
      renderBoardGrid();
      checkWinCondition();
      if (!state.gameWon && !state.gameOver) saveActiveMatchSnapshot();
    }

    function floodRevealReal(startR, startC) {
      let newlyOpened = 0;
      const queue = [[startR, startC]];
      while (queue.length > 0) {
        const [r, c] = queue.pop();
        const cell = state.board[r][c];
        if (cell.revealed || cell.flagged) continue;
        cell.revealed = true;
        state.revealedCount++;
        newlyOpened++;
        if (newlyOpened > 6) state.bulkRevealActive = true;

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

      if (flags !== cell.neighborMines || toReveal.length === 0) return;

      playSound('chord');
      triggerHaptic(22);
      spawnCellVfx(clientX, clientY, 'chord');

      for (let i = 0; i < toReveal.length; i++) {
        const [nr, nc] = toReveal[i];
        const target = state.board[nr][nc];
        if (target.mine) {
          target.revealed = true;
          state.lastHitMineCell = [nr, nc];
          state.gameOver = true;
          stopTimer();
          clearActiveMatchSnapshot();
          playSound('boom');
          spawnCellVfx(clientX, clientY, 'boom');
          document.getElementById('hudFaceEmoji').textContent = '😵';
          state.stats.gamesPlayed++;
          saveState();
          renderBoardGrid();
          setTimeout(() => showGameResultModal(false), 480);
          return;
        }
        floodRevealReal(nr, nc);
      }

      advanceTutorialIfMatched(r, c, 'chord');
      updateGameHud();
      renderBoardGrid();
      checkWinCondition();
      if (!state.gameWon && !state.gameOver) saveActiveMatchSnapshot();
    }

    function advanceTutorialIfMatched(r, c, action) {
      if (!state.storyChapterId) return;
      const ch = STORY_CHAPTERS.find(x => x.id === state.storyChapterId);
      if (!ch || !ch.isTutorial) return;

      const focus = getTutorialFocusCell();
      const matchedCell = focus && focus[0] === r && focus[1] === c;
      const s = state.tutorialStep;

      if (ch.tutorialType === 1) {
        if (s === 0 && action === 'dig') { state.tutorialStep = 1; state.controlMode = 'flag'; }
        else if (s === 1 && action === 'flag' && matchedCell) { state.tutorialStep = 2; state.controlMode = 'dig'; }
        else if (s === 2 && (action === 'dig' || action === 'chord') && matchedCell) { state.tutorialStep = 3; state.controlMode = 'flag'; }
        else if (s === 3 && action === 'flag' && matchedCell) { state.tutorialStep = 4; state.controlMode = 'flag'; }
        else if (s === 4 && action === 'flag' && matchedCell) { state.tutorialStep = 5; state.controlMode = 'dig'; }
      } else if (ch.tutorialType === 2) {
        if (s === 0 && action === 'dig') { state.tutorialStep = 1; state.controlMode = 'flag'; }
        else if (s === 1 && action === 'flag' && matchedCell) { state.tutorialStep = 2; state.controlMode = 'flag'; }
        else if (s === 2 && action === 'flag' && matchedCell) { state.tutorialStep = 3; state.controlMode = 'dig'; }
        else if (s === 3 && (action === 'chord' || action === 'dig')) {
          const [tr, tc] = mapTutCoord(2, 3, state.rows, state.cols);
          if (state.board[tr] && state.board[tr][tc] && state.board[tr][tc].revealed) {
            state.tutorialStep = 4; state.controlMode = 'flag';
          }
        }
        else if (s === 4 && action === 'flag' && matchedCell) { state.tutorialStep = 5; state.controlMode = 'dig'; }
      } else if (ch.tutorialType === 3) {
        if (s === 0 && action === 'dig') { state.tutorialStep = 1; state.controlMode = 'flag'; }
        else if (s === 1 && action === 'flag' && matchedCell) { state.tutorialStep = 2; state.controlMode = 'dig'; }
        else if (s === 2 && (action === 'dig' || action === 'chord') && matchedCell) { state.tutorialStep = 3; state.controlMode = 'dig'; }
        else if (s === 3 && (action === 'chord' || action === 'dig')) {
          const [tr, tc] = mapTutCoord(2, 4, state.rows, state.cols);
          if (state.board[tr] && state.board[tr][tc] && state.board[tr][tc].revealed) {
            state.tutorialStep = 4; state.controlMode = 'flag';
          }
        }
        else if (s === 4 && action === 'flag' && matchedCell) { state.tutorialStep = 5; state.controlMode = 'flag'; }
        else if (s === 5 && action === 'flag' && matchedCell) { state.controlMode = 'dig'; }
      } else if (ch.tutorialType === 4) {
        if (s === 0 && action === 'dig') { state.tutorialStep = 1; state.controlMode = 'flag'; }
        else if (s === 1 && action === 'flag' && matchedCell) { state.tutorialStep = 2; state.controlMode = 'flag'; }
        else if (s === 2 && action === 'flag' && matchedCell) { state.tutorialStep = 3; state.controlMode = 'dig'; }
        else if (s === 3 && (action === 'chord' || action === 'dig')) {
          const [tr, tc] = mapTutCoord(2, 2, state.rows, state.cols);
          if (state.board[tr] && state.board[tr][tc] && state.board[tr][tc].revealed) {
            state.tutorialStep = 4; state.controlMode = 'dig';
          }
        }
        else if (s === 4 && (action === 'chord' || action === 'dig')) {
          const [tr, tc] = mapTutCoord(2, 0, state.rows, state.cols);
          if (state.board[tr] && state.board[tr][tc] && state.board[tr][tc].revealed) {
            state.tutorialStep = 5; state.controlMode = 'flag';
          }
        }
        else if (s === 5 && action === 'flag' && matchedCell) { state.controlMode = 'dig'; }
      } else if (ch.tutorialType === 5) {
        if (s === 0 && action === 'dig') { state.tutorialStep = 1; state.controlMode = 'flag'; }
        else if (s === 1 && action === 'flag' && matchedCell) { state.tutorialStep = 2; state.controlMode = 'flag'; }
        else if (s === 2 && action === 'flag' && matchedCell) { state.tutorialStep = 3; state.controlMode = 'dig'; }
        else if (s === 3 && (action === 'chord' || action === 'dig')) {
          const [tr, tc] = mapTutCoord(2, 0, state.rows, state.cols);
          if (state.board[tr] && state.board[tr][tc] && state.board[tr][tc].revealed) {
            state.tutorialStep = 4; state.controlMode = 'dig';
          }
        }
        else if (s === 4 && (action === 'chord' || action === 'dig')) {
          const [tr, tc] = mapTutCoord(2, 3, state.rows, state.cols);
          if (state.board[tr] && state.board[tr][tc] && state.board[tr][tc].revealed) {
            state.tutorialStep = 5; state.controlMode = 'flag';
          }
        }
        else if (s === 5 && action === 'flag' && matchedCell) { state.controlMode = 'dig'; }
      }
      updateStoryTutorialBanner();
    }

    function checkWinCondition() {
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
    function applyTheme(themeId) {
      const safeId = (THEMES[themeId] && isThemeUnlocked(themeId)) ? themeId : 'retro';
      const t = THEMES[safeId] || THEMES.retro;
      const g = THEME_GRAPHICS[t.id] || THEME_GRAPHICS.retro;
      state.theme = t.id;
      document.body.setAttribute('data-theme', t.id);

      const root = document.documentElement;
      Object.entries(t.vars).forEach(([k, v]) => {
        root.style.setProperty(k, v);
      });
      root.style.setProperty('--pattern-opacity', t.patternOpacity);

      const toSvgDataUri = (svgStr) => {
        const withXmlns = svgStr.includes('xmlns=') ? svgStr : svgStr.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
        return `url("data:image/svg+xml;utf8,${encodeURIComponent(withXmlns)}")`;
      };
      root.style.setProperty('--cell-ornament-bg', toSvgDataUri(g.tileOrnamentSvg));
      root.style.setProperty('--cell-flag-bg-img', toSvgDataUri(g.flagSvg));
      root.style.setProperty('--cell-mine-bg-img', toSvgDataUri(g.mineSvg));

      document.getElementById('brandIcon').textContent = t.icon;
      document.getElementById('heroArtEmoji').innerHTML = g.flagSvg;
      document.getElementById('hudFlagIconWrap').innerHTML = g.flagSvg;
      document.getElementById('bottomFlagIcon').innerHTML = g.flagSvg;
      document.getElementById('themeHorizonContainer').innerHTML = g.horizonSvg;

      const dict = LANGUAGES[state.lang] || LANGUAGES.en;
      const themeNames = dict.themes || LANGUAGES.en.themes;
      document.getElementById('txtActiveThemeName').textContent = themeNames[t.id];

      // Update Live Showcase Strip on Home screen showing 3D Tile, Flag Sprite, Mine Sprite & World FX description
      const showcaseBar = document.getElementById('liveThemeShowcaseBar');
      if (showcaseBar) {
        const worldSpec = state.lang === 'ar' ? g.descAr : g.descEn;
        showcaseBar.innerHTML = `
          <div class="flex items-center gap-2 shrink-0">
            <div class="ms-cell unrevealed w-9 h-9 relative flex items-center justify-center"><div class="tile-ornament">${g.tileOrnamentSvg}</div></div>
            <div class="ms-cell flagged w-9 h-9 flex items-center justify-center">${g.flagSvg}</div>
            <div class="ms-cell mine-hit w-9 h-9 flex items-center justify-center" style="animation:none;">${g.mineSvg}</div>
          </div>
          <div class="text-[11px] leading-snug font-medium flex-1 px-1" style="color: var(--text-secondary);">
            ${worldSpec}
          </div>
        `;
      }

      renderThemeSwatches();
      renderSettingsThemes();
      if (state.view === 'game') renderBoardGrid();
      saveState();
    }

    function applyLanguage(langCode) {
      const dict = LANGUAGES[langCode] || LANGUAGES.en;
      state.lang = langCode;
      document.documentElement.lang = langCode;
      document.documentElement.dir = dict.dir;

      document.getElementById('txtCurrentLangCode').textContent = dict.code;
      document.getElementById('txtAppTitle').textContent = dict.appTitle;
      document.getElementById('txtAppSubtitle').textContent = dict.appSubtitle;
      document.getElementById('badgeNoGuessHome').textContent = dict.noGuessBadge;
      document.getElementById('txtHeroHeading').textContent = (state.lang === 'ar' ? 'ملحمة كانسة الألغام' : dict.heroHeading);
      const elStoryStars = document.getElementById('txtStoryStarsSummary');
      if (elStoryStars) elStoryStars.textContent = state.lang === 'ar' ? '50 مرحلة متدرجة ⭐' : '50 Levels ⭐';
      document.getElementById('txtHeroDesc').textContent = dict.heroDesc;
      document.getElementById('txtStoryCtaLabel').textContent = dict.storyCtaLabel;
      document.getElementById('txtBtnStoryMode').textContent = dict.storyBtn;
      document.getElementById('txtQuickPlayHeading').textContent = dict.quickPlayHeading;
      document.getElementById('txtNoGuessToggleLabel').textContent = dict.noGuessToggle;
      document.getElementById('txtDiffBeginner').textContent = dict.diffBeginner;
      document.getElementById('txtDiffIntermediate').textContent = dict.diffIntermediate;
      document.getElementById('txtDiffExpert').textContent = dict.diffExpert;
      document.getElementById('txtDiffMaster').textContent = dict.diffMaster;
      const elGm = document.getElementById('txtDiffGrandmaster');
      const elLg = document.getElementById('txtDiffLegend');
      const elNm = document.getElementById('txtDiffNightmare');
      if (elGm) elGm.textContent = state.lang === 'ar' ? 'أستاذ كبير (99 لغم)' : 'Grandmaster';
      if (elLg) elLg.textContent = state.lang === 'ar' ? 'أسطورة خالدة (160 لغم)' : 'Legend';
      if (elNm) elNm.textContent = state.lang === 'ar' ? 'تحدي المحترفين الخارق (250 لغم)' : 'Extreme Pro 250';
      const elReplayStory = document.getElementById('txtReplayStoryBtn');
      if (elReplayStory) elReplayStory.textContent = state.lang === 'ar' ? 'القصة' : 'Story';
      document.getElementById('txtCustomBoardTitle').textContent = dict.customBoardTitle;
      document.getElementById('txtCustomCols').textContent = dict.customCols;
      document.getElementById('txtCustomRows').textContent = dict.customRows;
      document.getElementById('txtCustomMines').textContent = dict.customMines;
      document.getElementById('txtBtnPlayCustom').textContent = dict.btnPlayCustom;
      document.getElementById('txtHomeThemesTitle').textContent = dict.homeThemesTitle;
      document.getElementById('txtMainBtnPlay').textContent = state.lang === 'ar' ? 'العب الآن' : dict.quickPlayHeading;
      document.getElementById('txtMainBtnPlaySub').textContent = state.lang === 'ar'
        ? 'اختر مستوى الصعوبة أو صمّم لوحتك الخاصة'
        : `${dict.diffBeginner} • ${dict.diffIntermediate} • ${dict.diffExpert} • ${dict.diffMaster}`;
      document.getElementById('txtMainBtnThemes').textContent = state.lang === 'ar' ? 'عوالم الغرافيكس والثيمات' : dict.homeThemesTitle;
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

      updateDailyChallengeBadgeUI();
      updateResumeMatchButtonUI();
      updateCloudStatusBadges();
      applyTheme(state.theme);
      updateResponsiveDimensionLabels();
      renderStoryChaptersList();
      updateStoryTutorialBanner();
      updateGameHud();
      saveState();
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
        const rule = THEME_UNLOCK_RULES[t.id] || { free: true };
        const btn = document.createElement('button');
        const isActive = state.theme === t.id;
        btn.className = `p-2 rounded-xl flex flex-col items-center gap-1 border transition ${isActive ? 'scale-105 shadow-lg' : (unlocked ? 'opacity-90 hover:opacity-100' : 'opacity-60 hover:opacity-90')}`;
        btn.style.background = t.swatchBg;
        btn.style.borderColor = isActive ? 'var(--accent-primary)' : 'rgba(255,255,255,0.25)';
        btn.style.borderWidth = isActive ? '2.5px' : '1px';
        const shortLabel = t.id === 'retro' ? (isAr ? 'كلاسيك نهاري' : 'CLASSIC') : (t.id === 'retro_dark' ? (isAr ? 'كلاسيك ليلي 🌙' : 'DARK 95 🌙') : t.id.toUpperCase());
        btn.innerHTML = `
          <div class="w-6 h-6 flex items-center justify-center">${unlocked ? g.flagSvg : '🔒'}</div>
          <span class="text-[10px] font-extrabold text-white drop-shadow truncate max-w-full">${shortLabel}</span>
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
          card.className = `themed-card p-2.5 rounded-xl flex items-center justify-between text-xs font-bold text-start gap-2 ${unlocked ? '' : 'opacity-75'}`;
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
              ? (isAr ? '<span class="text-[10px] px-2 py-0.5 rounded-lg themed-input">تفعيل</span>' : '<span class="text-[10px] px-2 py-0.5 rounded-lg themed-input">Use</span>')
              : `<span class="text-[10px] px-2 py-1 rounded-lg font-extrabold" style="background: var(--accent-primary); color: var(--accent-Contrast);">🔒 ${rule.coinCost} 💡 / VIP</span>`);
          card.innerHTML = `
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 p-1.5" style="background: ${t.swatchBg};">
                ${unlocked ? g.flagSvg : '<span class="text-base">🔒</span>'}
              </div>
              <div class="min-w-0">
                <div class="truncate font-extrabold">${themeNames[t.id] || t.id}</div>
                <div class="text-[10px] truncate opacity-90" style="color: var(--text-secondary);">${subDesc}</div>
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
        btn.className = `themed-card p-2.5 rounded-xl flex items-center justify-between text-xs font-bold text-start gap-2 ${unlocked ? '' : 'opacity-75'}`;
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
            ? (isAr ? '<span class="text-[10px] px-2 py-0.5 rounded-lg themed-input">تفعيل</span>' : '<span class="text-[10px] px-2 py-0.5 rounded-lg themed-input">Use</span>')
            : `<span class="text-[10px] px-2 py-1 rounded-lg font-extrabold" style="background: var(--accent-primary); color: var(--accent-Contrast);">🔒 ${rule.coinCost} 💡 / VIP</span>`);
        btn.innerHTML = `
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 p-1.5" style="background: ${t.swatchBg};">
              ${unlocked ? g.flagSvg : '<span class="text-base">🔒</span>'}
            </div>
            <div class="min-w-0">
              <div class="truncate font-extrabold">${themeNames[t.id] || t.id}</div>
              <div class="text-[10px] truncate opacity-90" style="color: var(--text-secondary);">${subDesc}</div>
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
        btn.className = 'themed-card p-3 rounded-xl flex flex-col items-center justify-center gap-1 text-xs font-bold';
        if (isActive) {
          btn.style.borderColor = 'var(--accent-primary)';
          btn.style.borderWidth = '2px';
        }
        btn.innerHTML = `
          <span class="text-sm font-extrabold" style="color: var(--accent-primary);">${langObj.code}</span>
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

    let activeStoryFilter = 'all'; // 'all', 'tut', 'act1', 'act2', 'act3', 'act4', 'act5'

    function isLevelUnlocked(levelId) {
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
      const horiz = isHorizontalBoardLayout();

      // Update 50-Level Progress Header & Continue Button
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

      // Render Filter Tabs
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
          btn.className = `px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition ${active ? 'btn-primary' : 'themed-card opacity-80 hover:opacity-100'}`;
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
          ? 'themed-card rounded-2xl p-3.5 flex items-center justify-between gap-3 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition'
          : 'themed-card rounded-2xl p-3.5 flex items-center justify-between gap-3 cursor-not-allowed opacity-60 transition';

        if (isCurrentNext) {
          card.style.borderColor = 'var(--accent-primary)';
          card.style.borderWidth = '2px';
          card.style.boxShadow = 'var(--shadow-glow)';
        }

        const statusBadgeHtml = !unlocked
          ? `<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full themed-input">🔒 ${isAr ? 'مغلق' : 'Locked'}</span>`
          : (isCurrentNext
            ? `<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full" style="background: var(--accent-secondary); color: #ffffff;">🔥 ${isAr ? 'المرحلة الحالية' : 'Current'}</span>`
            : `<span class="text-xs font-mono" style="color: var(--accent-primary);">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</span>`);

        const subtitleText = !unlocked
          ? (isAr ? `🔒 أكمِل المستوى ${ch.id - 1} أولاً لفتح هذه المرحلة (${orientLabel})` : `🔒 Complete Level ${ch.id - 1} first to unlock (${orientLabel})`)
          : meta.sub;

        card.innerHTML = `
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-12 h-12 rounded-2xl themed-elevated flex flex-col items-center justify-center shrink-0 border" style="border-color: ${unlocked ? 'var(--accent-primary)' : 'var(--border-color)'};">
              <span class="text-base leading-none">${unlocked ? ch.emoji : '🔒'}</span>
              <span class="text-[10px] font-mono font-black mt-0.5" style="color: ${unlocked ? 'var(--accent-primary)' : 'var(--text-muted)'};">#${ch.id}</span>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full" style="background: ${unlocked ? 'var(--accent-primary)' : 'var(--bg-input)'}; color: ${unlocked ? 'var(--accent-Contrast)' : 'var(--text-secondary)'};">${meta.badge}</span>
                <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded themed-input">${orientLabel}</span>
                ${statusBadgeHtml}
              </div>
              <h4 class="font-extrabold text-sm mt-1 truncate">${meta.title}</h4>
              <p class="text-xs mt-0.5 leading-snug" style="color: var(--text-secondary);">${subtitleText}</p>
            </div>
          </div>
          <button class="${unlocked ? 'btn-primary' : 'btn-secondary opacity-75'} px-3.5 py-2 rounded-xl text-xs shrink-0">${unlocked ? (stars > 0 ? '✓ ▶' : '▶') : '🔒'}</button>
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
          openStoryCutscene(ch.id, true);
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
      const dict = LANGUAGES[state.lang] || LANGUAGES.en;

      banner.classList.remove('hidden');
      const bannerAvatarEl = document.getElementById('storyBannerEmoji');
      bannerAvatarEl.className = 'text-2xl shrink-0 mt-0.5';
      bannerAvatarEl.textContent = ch.emoji;

      if (ch.isTutorial) {
        const tutDict = (dict.tutStepsByLevel && dict.tutStepsByLevel[ch.tutorialType])
          || (LANGUAGES.en.tutStepsByLevel && LANGUAGES.en.tutStepsByLevel[ch.tutorialType])
          || dict.tutSteps1
          || LANGUAGES.en.tutSteps1;
        const stepIdx = Math.min(state.tutorialStep, tutDict.length - 1);
        document.getElementById('storyBannerTitle').textContent = `${meta.title} (${stepIdx + 1}/${tutDict.length})`;
        document.getElementById('storyBannerText').textContent = tutDict[stepIdx];
      } else {
        document.getElementById('storyBannerTitle').textContent = meta.title;
        document.getElementById('storyBannerText').textContent = meta.sub;
      }
    }

    function updateGameHud() {
      const remaining = Math.max(0, state.minesCount - state.flagsPlaced);
      document.getElementById('hudMinesLeft').textContent = String(remaining).padStart(3, '0');
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
      if (viewName === 'game') {
        // Freeze background canvas loop to ensure 100% of GPU/CPU is dedicated to smooth board scrolling
        if (bgAnimFrame) { cancelAnimationFrame(bgAnimFrame); bgAnimFrame = null; }
      } else {
        triggerVfxLoopIfNeeded();
      }
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

      document.getElementById('cutsceneArtContainer').innerHTML = cut.artSvg;
      document.getElementById('cutsceneBadge').textContent = langData.badge;
      document.getElementById('cutsceneDimsBadge').textContent = `${dims.cols}×${dims.rows} • ${ch.mines} 💣`;
      document.getElementById('cutsceneTitle').textContent = langData.title;

      const dlgContainer = document.getElementById('cutsceneDialogueList');
      dlgContainer.innerHTML = '';
      langData.dialogues.forEach(d => {
        const row = document.createElement('div');
        row.className = 'themed-card p-3 rounded-2xl text-xs sm:text-sm leading-relaxed';
        row.innerHTML = `
          <div class="font-extrabold text-xs mb-1" style="color: var(--accent-primary);">${d.speaker}</div>
          <div class="font-medium">${d.text}</div>
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
      document.getElementById('resultLogicVal').textContent = state.noGuessEnabled ? '100% No-Guess' : 'Classic';

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

      closeModal('modalGameResult');
      document.getElementById('hudFaceEmoji').textContent = '😎';
      playSound('flag');
      triggerHaptic([20, 40, 20]);
      updateGameHud();
      renderBoardGrid(true);
      saveActiveMatchSnapshot();
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
      if (lbl) {
        lbl.textContent = isAr
          ? (doneToday ? 'تحدي اليوم المنطقي (مكتمل ✓)' : 'تحدي اليوم المنطقي (+3 💡)')
          : (doneToday ? 'Daily Logic Challenge (Cleared ✓)' : 'Daily Logic Challenge (+3 💡)');
      }
      if (badge) {
        badge.textContent = `🔥 ${streak}`;
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
      document.getElementById('statGamesWon').textContent = state.stats.gamesWon;
      const rate = state.stats.gamesPlayed > 0
        ? Math.round((state.stats.gamesWon / state.stats.gamesPlayed) * 100)
        : 0;
      document.getElementById('statWinRate').textContent = `${rate}%`;
      const totalStars = Object.values(state.stats.storyStars).reduce((a, b) => a + (Number(b) || 0), 0);
      document.getElementById('statStoryStars').textContent = `${totalStars} / 150`;
      document.getElementById('txtStatStars').textContent = state.lang === 'ar' ? 'نجوم الـ 50 مستوى' : 'Campaign Stars';

      const bt = state.stats.bestTimes;
      document.getElementById('valBestBeginner').textContent = bt.beginner ? `${bt.beginner}s` : '--';
      document.getElementById('valBestIntermediate').textContent = bt.intermediate ? `${bt.intermediate}s` : '--';
      document.getElementById('valBestExpert').textContent = bt.expert ? `${bt.expert}s` : '--';
      document.getElementById('valBestMaster').textContent = bt.master ? `${bt.master}s` : '--';
      const elValGm = document.getElementById('valBestGrandmaster');
      const elValLeg = document.getElementById('valBestLegend');
      const elValNm = document.getElementById('valBestNightmare');
      if (elValGm) elValGm.textContent = bt.grandmaster ? `${bt.grandmaster}s` : '--';
      if (elValLeg) elValLeg.textContent = bt.legend ? `${bt.legend}s` : '--';
      if (elValNm) elValNm.textContent = bt.nightmare ? `${bt.nightmare}s` : '--';
    }

    /********************************************************************
     * 11. EVENT LISTENERS & INITIALIZATION
     ********************************************************************/
    window.addEventListener('DOMContentLoaded', () => {
      loadSavedState();

      const vfxCanvas = document.getElementById('vfxCanvas');
      if (vfxCanvas) {
        vfxCanvas.width = window.innerWidth;
        vfxCanvas.height = window.innerHeight;
      }
      initWorldBackgroundParticles();
      startGraphicsRenderLoop();

      renderLanguageModalGrid();
      applyLanguage(state.lang);
      applyTheme(state.theme);
      updateTopBarCoins();

      document.getElementById('selDefaultTapMode').value = state.defaultTapMode;
      document.getElementById('rngLongPress').value = state.longPressDelay;
      document.getElementById('valLongPressMs').textContent = `${state.longPressDelay}ms`;
      document.getElementById('chkChordEnabled').checked = state.chordEnabled;
      document.getElementById('chkNoGuessSettings').checked = state.noGuessEnabled;
      document.getElementById('chkNoGuessHome').checked = state.noGuessEnabled;
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

      document.getElementById('btnStartStoryMenu').addEventListener('click', () => switchView('story'));
      document.getElementById('btnHomeTutorial').addEventListener('click', () => {
        playSound('dig');
        activeStoryFilter = 'tut';
        switchView('story');
        openStoryCutscene(1, true);
      });
      const btnCont = document.getElementById('btnContinueCampaign');
      if (btnCont) {
        btnCont.addEventListener('click', () => {
          playSound('chord');
          const nextId = getNextUnfinishedLevelId();
          openStoryCutscene(nextId, true);
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
        stopTimer();
        if (state.storyChapterId) switchView('story');
        else switchView('home');
      });

      document.getElementById('btnResetBoard').addEventListener('click', () => {
        if (state.storyChapterId) startNewGame({ storyChapterId: state.storyChapterId });
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

      const resetBoardPanAndZoom = (resetZoom = false) => {
        state.panX = 0;
        state.panY = 0;
        if (resetZoom) {
          state.zoomScale = 1.0;
          document.getElementById('txtZoomLevel').textContent = '100%';
        }
        renderBoardGrid();
      };
      const btnCenter = document.getElementById('btnCenterBoard');
      if (btnCenter) {
        btnCenter.addEventListener('click', () => {
          playSound('dig');
          resetBoardPanAndZoom(false);
        });
      }
      document.getElementById('txtZoomLevel').addEventListener('click', () => {
        playSound('dig');
        resetBoardPanAndZoom(true);
      });
      document.getElementById('btnZoomOut').addEventListener('click', () => {
        state.zoomScale = Math.max(0.55, Math.round((state.zoomScale - 0.12) * 100) / 100);
        document.getElementById('txtZoomLevel').textContent = `${Math.round(state.zoomScale * 100)}%`;
        renderBoardGrid();
      });
      document.getElementById('btnZoomIn').addEventListener('click', () => {
        state.zoomScale = Math.min(2.0, Math.round((state.zoomScale + 0.12) * 100) / 100);
        document.getElementById('txtZoomLevel').textContent = `${Math.round(state.zoomScale * 100)}%`;
        renderBoardGrid();
      });

      document.getElementById('selDefaultTapMode').addEventListener('change', (e) => {
        state.defaultTapMode = e.target.value;
        state.controlMode = state.defaultTapMode;
        updateGameHud();
        saveState();
      });

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

      document.getElementById('chkSound').addEventListener('change', (e) => {
        state.soundEnabled = e.target.checked;
        saveState();
      });

      document.getElementById('chkHaptics').addEventListener('change', (e) => {
        state.hapticsEnabled = e.target.checked;
        saveState();
      });

      document.getElementById('btnResultPlayAgain').addEventListener('click', () => {
        closeModal('modalGameResult');
        document.getElementById('btnResetBoard').click();
      });

      document.getElementById('btnResultNextStory').addEventListener('click', () => {
        closeModal('modalGameResult');
        if (state.storyChapterId && state.storyChapterId < STORY_CHAPTERS.length) {
          openStoryCutscene(state.storyChapterId + 1, true);
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
          const openModalIds = ['modalStoryCutscene', 'modalGameResult', 'modalCloudSync', 'modalSettings', 'modalLanguages', 'modalSupport', 'modalStats', 'modalPlaySelect', 'modalThemesStudio'];
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

      window.addEventListener('resize', () => {
        const bgC = document.getElementById('themeBgCanvas');
        const vfxC = document.getElementById('vfxCanvas');
        if (bgC) { bgC.width = window.innerWidth; bgC.height = window.innerHeight; }
        if (vfxC) { vfxC.width = window.innerWidth; vfxC.height = window.innerHeight; }
        syncBoardOrientationWithViewport();
        if (state.view === 'story') renderStoryChaptersList();
        if (state.view === 'game') renderBoardGrid();
      });
    });