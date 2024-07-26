// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvFIGCmGR-sSNCE-6tP-gxPZd0TwIeZoQ",
  authDomain: "todo-list-2bfb1.firebaseapp.com",
  projectId: "todo-list-2bfb1",
  storageBucket: "todo-list-2bfb1.appspot.com",
  messagingSenderId: "441904128504",
  appId: "1:441904128504:web:99b953ccb5a4c63736f60d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
