importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyD7GJ44EThXVupmAwnpwwbG89OPcWvbzz4",
  authDomain: "pwa-demo-flutter.firebaseapp.com",
  projectId: "pwa-demo-flutter",
  storageBucket: "pwa-demo-flutter.appspot.com",
  messagingSenderId: "746091746511",
  appId: "1:746091746511:web:d00e1b3869b576cb0213ba",
  measurementId: "G-PZ9M2Z4SNS",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});