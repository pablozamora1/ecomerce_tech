// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1LjenrelOFQJbh2wkwo_2m7r08q-NbLg",
  authDomain: "ecomercetech-5000c.firebaseapp.com",
  projectId: "ecomercetech-5000c",
  storageBucket: "ecomercetech-5000c.appspot.com",
  messagingSenderId: "697127159390",
  appId: "1:697127159390:web:1befb21da08cbfbec616cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
