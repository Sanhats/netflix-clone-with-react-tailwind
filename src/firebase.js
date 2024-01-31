// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATb-istlkAdQR-JwCq_RBcY0MgoIeB-cM",
    authDomain: "netflix-clone-react-90f97.firebaseapp.com",
    projectId: "netflix-clone-react-90f97",
    storageBucket: "netflix-clone-react-90f97.appspot.com",
    messagingSenderId: "547519031706",
    appId: "1:547519031706:web:9b7dda7100ca4fcca8f223"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)