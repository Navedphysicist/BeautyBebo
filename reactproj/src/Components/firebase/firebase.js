// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ixvzPHveM9s2GSRAlZIXmBW9dOx6Dbk",
  authDomain: "beautybebo-611fd.firebaseapp.com",
  projectId: "beautybebo-611fd",
  storageBucket: "beautybebo-611fd.appspot.com",
  messagingSenderId: "234829774913",
  appId: "1:234829774913:web:d9ad62b4550f9f822fc6c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth=getAuth(app)