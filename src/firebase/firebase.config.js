// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmegWG4uItL9Ld_uGwgJiz2uLJ-oGJJfY",
  authDomain: "chef-recipe-hunter-clien-83580.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-83580",
  storageBucket: "chef-recipe-hunter-clien-83580.appspot.com",
  messagingSenderId: "72605628899",
  appId: "1:72605628899:web:291fd73df74b0149cfc8d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;