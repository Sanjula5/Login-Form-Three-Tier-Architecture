//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyBuIFA8ZxDfdJaVpPbd8u9pMX9sYKxcyss",
  authDomain: "react-firebase-auth-e944c.firebaseapp.com",
  projectId: "react-firebase-auth-e944c",
  storageBucket: "react-firebase-auth-e944c.appspot.com",
  messagingSenderId: "21009034800",
  appId: "1:21009034800:web:56e459b314c21a8c2447f5"
};


const app = firebase.initializeApp(firebaseConfig);
export default app