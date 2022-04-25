// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEy2DJh-3luPZPDwiZ46dmL0c1-EiO3aw",
  authDomain: "modern-dental-services.firebaseapp.com",
  projectId: "modern-dental-services",
  storageBucket: "modern-dental-services.appspot.com",
  messagingSenderId: "277434702991",
  appId: "1:277434702991:web:de280eff0e97802ce024fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;