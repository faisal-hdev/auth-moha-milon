// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzbOJAw4Mk6npJxOB5Y4BEOs8d8U6C-S0",
  authDomain: "auth-moha-milon-1914c.firebaseapp.com",
  projectId: "auth-moha-milon-1914c",
  storageBucket: "auth-moha-milon-1914c.appspot.com",
  messagingSenderId: "634515315078",
  appId: "1:634515315078:web:634876e1db396847d03407",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
