// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk2uCyKAKkkXenT5tcRGkpmcL11PBcFIs",
  authDomain: "moodcheckin-f072b.firebaseapp.com",
  projectId: "moodcheckin-f072b",
  storageBucket: "moodcheckin-f072b.appspot.com",
  messagingSenderId: "832788979567",
  appId: "1:832788979567:web:7e7867fc74994d023fd29a",
  measurementId: "G-MNLYR68JB3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
