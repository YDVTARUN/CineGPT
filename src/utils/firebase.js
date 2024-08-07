// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Pk8KgDHF0Lomrtcdkio6XZMp8wJKpAA",
  authDomain: "netflixgpt-cb8f6.firebaseapp.com",
  projectId: "netflixgpt-cb8f6",
  storageBucket: "netflixgpt-cb8f6.appspot.com",
  messagingSenderId: "819252823734",
  appId: "1:819252823734:web:9fa409d2f8443e49cec817",
  measurementId: "G-ZDRYY7JFMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
