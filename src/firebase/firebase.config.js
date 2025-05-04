
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCewUyWzUp6dbyLeB5v0vVCXptIKCr0MCw",
  authDomain: "dragon-news-736fc.firebaseapp.com",
  projectId: "dragon-news-736fc",
  storageBucket: "dragon-news-736fc.firebasestorage.app",
  messagingSenderId: "708099312228",
  appId: "1:708099312228:web:6a7b6d53b206410b91ad71"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);