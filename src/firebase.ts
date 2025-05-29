// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5PGBNDzX2T0lnZcQEj_F1Zd7W0mW8cHY",
    authDomain: "fb01-fbee9.firebaseapp.com",
    projectId: "fb01-fbee9",
    storageBucket: "fb01-fbee9.firebasestorage.app",
    messagingSenderId: "671459660626",
    appId: "1:671459660626:web:c5a8df69777cc1008da08b",
    measurementId: "G-5MMYTJKT9G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const functions = getFunctions(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);