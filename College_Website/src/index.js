// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr5p1S8RHg-W0BQQ0dlB9bzBxoUKxh1oY",
  authDomain: "college-website-1ac42.firebaseapp.com",
  projectId: "college-website-1ac42",
  storageBucket: "college-website-1ac42.appspot.com",
  messagingSenderId: "937631278458",
  appId: "1:937631278458:web:58d48e8f8203d15f0522c3",
  measurementId: "G-DB1YWM61GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);