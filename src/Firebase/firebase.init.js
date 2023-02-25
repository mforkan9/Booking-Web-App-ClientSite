import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNl0HZMAuV-yrr98a7RY56605-G-DKk9E",
  authDomain: "bookingweb-app.firebaseapp.com",
  projectId: "bookingweb-app",
  storageBucket: "bookingweb-app.appspot.com",
  messagingSenderId: "214476073105",
  appId: "1:214476073105:web:99854d5b37364910813730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)

export default Auth;

