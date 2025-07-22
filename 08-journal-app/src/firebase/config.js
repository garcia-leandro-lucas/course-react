// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcIqAAusPbw5BMbHTIaWVca89SM1_Q3qI",
  authDomain: "react-cursos-c15df.firebaseapp.com",
  projectId: "react-cursos-c15df",
  storageBucket: "react-cursos-c15df.firebasestorage.app",
  messagingSenderId: "1044615451944",
  appId: "1:1044615451944:web:2e2ca58860198249c0ec1d"
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( fireBaseApp );
export const fireBaseDb = getFirestore( fireBaseApp );