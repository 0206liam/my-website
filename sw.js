// sw.js
self.addEventListener("push", function (event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "通知標題";
    const options = {
        body: data.body || "這是通知的內容",
        icon: data.icon || "/default-icon.png", // 可替換為你的 icon 路徑
        badge: data.badge || "/default-badge.png", // 可替換為你的 badge 路徑
    };

    event.waitUntil(self.registration.showNotification(title, options));
});


self.addEventListener('install', (event) => {
    console.log('Service Worker 已安裝');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker 已啟用');
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    console.log('通知已點擊');
});

self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : '推播通知的內容',
        icon: '/icon.png',
        badge: '/badge.png',
    };
    event.waitUntil(
        self.registration.showNotification('推播通知標題', options)
    );
});
