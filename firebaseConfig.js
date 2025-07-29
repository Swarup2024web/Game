// firebaseConfig.js

// Import Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlOC2J2pt6_BuwsFch-bj13s9CQdrCRq0",
  authDomain: "mybot-e3dbc.firebaseapp.com",
  projectId: "mybot-e3dbc",
  storageBucket: "mybot-e3dbc.firebasestorage.app",
  messagingSenderId: "576870586364",
  appId: "1:576870586364:web:739707e4ad4cb115d6c479"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export the initialized app for use in other modules
export { app };
