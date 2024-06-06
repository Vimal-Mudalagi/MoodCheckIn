import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createContext, useContext } from "react";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const FirebaseContext = createContext(null);


// const firebaseConfig = {
//     apiKey: "AIzaSyA0fkEdrvzziA5RvVCSI0qDfUrl_s_HGIE",
//     authDomain: "moodcheckin-cfa29.firebaseapp.com",
//     projectId: "moodcheckin-cfa29",
//     storageBucket: "moodcheckin-cfa29.appspot.com",
//     messagingSenderId: "1002046118447",
//     appId: "1:1002046118447:web:570c297dbee794f22384da"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBk2uCyKAKkkXenT5tcRGkpmcL11PBcFIs",
    authDomain: "moodcheckin-f072b.firebaseapp.com",
    projectId: "moodcheckin-f072b",
    storageBucket: "moodcheckin-f072b.appspot.com",
    messagingSenderId: "832788979567",
    appId: "1:832788979567:web:7e7867fc74994d023fd29a",
    measurementId: "G-MNLYR68JB3"
  };

export const useFirebase = () => useContext(FirebaseContext);

//const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();


export const FirebaseProvider = (props) => {

    const signupUserWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signInWithEmailAndPass = (email, password) =>
        signInWithEmailAndPassword(firebaseAuth, email, password)

        const signinWithGoogle = () => 
        signInWithPopup(firebaseAuth, googleProvider);

        const handleCreatenewListing = (name,cardId) =>{

        }

    return (
        <FirebaseContext.Provider value=
            {{ signinWithGoogle, signupUserWithEmailAndPassword, signInWithEmailAndPass }} >
            {props.children}</FirebaseContext.Provider>)
}

