// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2H2P2PZorZzcez9SB3laQDKmaQSurPXc",
    authDomain: "project-a53c3.firebaseapp.com",
    projectId: "project-a53c3",
    storageBucket: "project-a53c3.appspot.com",
    messagingSenderId: "955350408814",
    appId: "1:955350408814:web:6400b31a673a142f75107f",
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};