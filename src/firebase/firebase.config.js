
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVrxLgOhDWyTZhttAMRouFXpD0mLNlm4c",
  authDomain: "recipe-app-130b1.firebaseapp.com",
  projectId: "recipe-app-130b1",
  storageBucket: "recipe-app-130b1.appspot.com",
  messagingSenderId: "839865015265",
  appId: "1:839865015265:web:9403ea9c64193b714b10a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
