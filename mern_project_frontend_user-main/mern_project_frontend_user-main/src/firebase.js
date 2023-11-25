// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDob0DyIeyaJucvDj2z6dw1EdTucPt_Ng4",
  authDomain: "quizclient-ee2e0.firebaseapp.com",
  projectId: "quizclient-ee2e0",
  storageBucket: "quizclient-ee2e0.appspot.com",
  messagingSenderId: "817026928758",
  appId: "1:817026928758:web:d1204242b705c79bfa8f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;