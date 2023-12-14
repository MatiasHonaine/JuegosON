import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqsSuEPifqP93vRp8ctNBjKJ3OltF7pX4",
  authDomain: "m-technology-e831b.firebaseapp.com",
  projectId: "m-technology-e831b",
  storageBucket: "m-technology-e831b.appspot.com",
  messagingSenderId: "659794706535",
  appId: "1:659794706535:web:ec45781b832403db8d54c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
