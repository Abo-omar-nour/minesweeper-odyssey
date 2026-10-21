# Minesweeper Odyssey — الهيكلية الهندسية الكاملة (Full-Stack & Android APK)

يحتوي هذا المجلد على النسخة المفصولة هندسياً (Multi-File Production Architecture) للعبة **Minesweeper Odyssey**، مقسّمة إلى 3 طبقات مستقلة:

## 1. هيكلية الملفات والمجلدات
```text
minesweeper_odyssey_fullstack_project/
├── frontend/                  # واجهة اللعبة (Frontend) مفصولة بالكامل
│   ├── index.html             # الهيكل الأساسي والنوافذ (HTML5)
│   ├── css/
│   │   └── styles.css         # تصميم الثيمات الـ 5 وأزرار Retro 95
│   └── js/
│       └── app.js             # محرك اللعب بدون تخمين، الحساب الشخصي، والمزامنة
├── backend/                   # خادم المزامنة والحسابات (Node.js + Express REST API)
│   ├── package.json
│   ├── server.js              # نقطة تشغيل الخادم الرئيسي
│   └── routes/
│       ├── auth.js            # تسجيل الدخول عبر Google Play Games أو البريد (JWT)
│       └── sync.js            # خوارزمية الدمج الذكي (Conflict-Free Cloud Sync)
├── database/                  # جداول قواعد البيانات العلائقية (PostgreSQL / Supabase)
│   └── schema.sql             # جداول: users, player_profiles, campaign_progress, best_times, active_matches
└── capacitor.config.json      # إعدادات تحويل مجلد frontend/ مباشرة إلى تطبيق Android APK
```

## 2. كيف يعمل نظام تسجيل الدخول والمزامنة التلقائية؟
1. **تسجيل الدخول بحساب شخصي (Google Play Games / البريد الإلكتروني)**:
   - عند إدخال اللاعب لبريده الإلكتروني أو ربط Google Play من نافذة **(☁️ الحساب والمزامنة)**، يولّد النظام معرّف حساب موحّد وثابت (`ACCT-...`) مرتبط ببريده الشخصي.
2. **الحفظ المزدوج بدون إنترنت (Offline-First)**:
   - كل حركة وحجر ونجوم تُحفظ فوراً في `LocalStorage` وقاعدة `IndexedDB` المحلية داخل الهاتف بدون الحاجة للإنترنت.
3. **المزامنة التلقائية الخلفية والدمج الذكي (Conflict-Free Merge)**:
   - فور توفر الإنترنت، يقوم النظام بسحب بيانات الحساب من السحابة ودمجها مع بيانات الجهاز الحالي بأخذ **أعلى عدد نجوم لكل مرحلة من الـ 50 مرحلة** و**أسرع وقت قياسي** و**أعلى رصيد تلميحات**، ثم يرفع النسخة المدمجة تلقائياً.

## 3. خطوات بناء ملف Android APK لمتجر Google Play
```bash
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap add android
npx cap copy android
npx cap open android
```
ومن داخل **Android Studio** اختر `Build -> Generate Signed Bundle / APK`.


## 🚀 6. رفع المشروع على GitHub وبناء ملف الـ APK تلقائياً في السحابة (بدون تثبيت Android Studio!)

تم تجهيز هذا المشروع بملفات **GitHub Actions** جاهزة داخل مجلد `.github/workflows/`:
1. **`deploy-pages.yml`**: ينشر اللعبة تلقائياً على رابط ويب مجاني وسريع عبر **GitHub Pages** فور رفع الكود.
2. **`build-android-apk.yml`**: يقوم ببناء ملف الأندرويد **`app-debug.apk`** تلقائياً على سيرفرات GitHub السحابية عند كل تعديل، لتتمكن من تحميل الـ APK جاهزاً على هاتفك دون الحاجة لتثبيت Android Studio على حاسوبك!

### خطوات الرفع على GitHub:
```bash
git init
git add .
git commit -m "Initial release: Minesweeper Odyssey v2.0 (Security Hardened)"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/minesweeper-odyssey.git
git push -u origin main
```

بعد تنفيذ `git push`:
- ادخل إلى تبويب **Actions** في مستودعك على GitHub.
- ستجد مهمة **`Build Android APK Automatically`** تعمل تلقائياً، وخلال دقيقتين ستجد ملف **`Minesweeper-Odyssey-Android-APK`** جاهزاً للتحميل والتثبيت المباشر على هاتفك!
