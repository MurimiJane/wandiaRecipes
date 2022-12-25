// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC0w6IY_P2AnG6hCLfA8WPRLphKzlwO1p4",
    authDomain: "faithcookbook-acd7d.firebaseapp.com",
    projectId: "faithcookbook-acd7d",
    storageBucket: "faithcookbook-acd7d.appspot.com",
    messagingSenderId: "369198324626",
    appId: "1:369198324626:web:4776ded6de28396a963f4b",
    measurementId: "G-TDLMLWLZ6N"
  };

  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export {app};
export {analytics};
export {db};// Initialize Firebase