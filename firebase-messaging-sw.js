importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBGNZhOWdc4wKjl6JTDMOKRDccZkaQR-CI",
  authDomain: "united-eng.firebaseapp.com",
  projectId: "united-eng",
  storageBucket: "united-eng.firebasestorage.app",
  messagingSenderId: "494139904220",
  appId: "1:494139904220:web:5b498fabfa13ff281a2419",
  measurementId: "G-FEJEG8VSWY"
});

const messaging = firebase.messaging();


messaging.onBackgroundMessage(function (payload) {
  console.log("📩 Received background message: ", payload?.data);

  const title = payload.data.title || "Notification";
  const body = payload.data.body || "";
   console.log("Body string:", body);

  self.registration.showNotification(title, {
    body,
  });
});