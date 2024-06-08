// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0fkEdrvzziA5RvVCSI0qDfUrl_s_HGIE",
  authDomain: "moodcheckin-cfa29.firebaseapp.com",
  projectId: "moodcheckin-cfa29",
  storageBucket: "moodcheckin-cfa29.appspot.com",
  messagingSenderId: "1002046118447",
  appId: "1:1002046118447:web:570c297dbee794f22384da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
//export const analytics = getAnalytics(app);
