// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
 
const firebaseConfig = {
  apiKey: "AIzaSyAoQuGMes2Kau3jx6lwlSeJP7-XvLwsvZ8",
  authDomain: "edepcheck.firebaseapp.com",
  projectId: "edepcheck",
  storageBucket: "edepcheck.firebasestorage.app",
  messagingSenderId: "680616846449",
  appId: "1:680616846449:web:9c2615ed31b880edc127d0",
  measurementId: "G-1LEDSEJNBJ"
};
 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
