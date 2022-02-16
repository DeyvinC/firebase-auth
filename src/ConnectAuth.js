// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxqYDhgnyvMZWwehwNi5NSz7CESv_5Z_s",
  authDomain: "fir-auth-dcv.firebaseapp.com",
  projectId: "fir-auth-dcv",
  storageBucket: "fir-auth-dcv.appspot.com",
  messagingSenderId: "376710060503",
  appId: "1:376710060503:web:4babc60a79245316151392"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);