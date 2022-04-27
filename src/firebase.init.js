// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAITsTerdGZ6pznM5JRPN-ChN2Z-FRvbIg",
  authDomain: "dental-health-service.firebaseapp.com",
  projectId: "dental-health-service",
  storageBucket: "dental-health-service.appspot.com",
  messagingSenderId: "306847398771",
  appId: "1:306847398771:web:0c58e97463c465f9102306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;