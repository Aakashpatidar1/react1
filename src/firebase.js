// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcYF_XLHfpRB1XL3FjiidXIA_HJDmJsPs",
  authDomain: "invoiceform-9a4e8.firebaseapp.com",
  projectId: "invoiceform-9a4e8",
  storageBucket: "invoiceform-9a4e8.appspot.com",
  messagingSenderId: "919574866453",
  appId: "1:919574866453:web:c15ff5d996727ee695bc1c",
  measurementId: "G-HPLQF2RBVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);