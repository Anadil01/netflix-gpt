// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXsY3p93WnVe_rI96y_Bu2p3TAvQ_1uwU",
  authDomain: "netflixgpt-ab301.firebaseapp.com",
  projectId: "netflixgpt-ab301",
  storageBucket: "netflixgpt-ab301.firebasestorage.app",
  messagingSenderId: "110444542848",
  appId: "1:110444542848:web:dc5fee3e2cc19e10e95f65",
  measurementId: "G-B1TXM6NWMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);