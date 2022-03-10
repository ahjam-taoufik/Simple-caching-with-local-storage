// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-app-rrv6.firebaseapp.com",
  projectId: "react-app-rrv6",
  storageBucket: "react-app-rrv6.appspot.com",
  messagingSenderId: "1053036203918",
  appId: "1:1053036203918:web:856af705a84bf4f1fc5edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)