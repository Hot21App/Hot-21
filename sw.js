const CACHE_NAME = 'hot-21-v1'; // השתמשתי בשם מהקוד השני כפי שביקשת

// שילוב כל הנכסים משני הקודים
const ASSETS = [
  './',
  './index.html',
  'index.html',
  'manifest.json',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap'
];

// התקנה ושמירת קבצים ב-Cache - שילוב הלוגיקה
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(ASSETS);
    })
  );
});

// הפעלת האפליקציה מה-Cache (עבודה אופליין)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // מחזיר את הקובץ מה-Cache אם קיים, אחרת הולך לרשת
      return response || fetch(event.request);
    })
  );
});
