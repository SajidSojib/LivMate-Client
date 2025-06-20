// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtvpqyvLYq6ZoVk_m14JDz61S6KYhSSvI",
  authDomain: "livmate-18f71.firebaseapp.com",
  projectId: "livmate-18f71",
  storageBucket: "livmate-18f71.firebasestorage.app",
  messagingSenderId: "812343173777",
  appId: "1:812343173777:web:dc8fccc9fc60cc91ce9530",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;