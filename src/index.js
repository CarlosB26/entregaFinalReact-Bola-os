import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyAKDv2ikjOFdUyzHBJMrCFIRUHR2WuqTFU",
  authDomain: "ttsales-ee5d7.firebaseapp.com",
  projectId: "ttsales-ee5d7",
  storageBucket: "ttsales-ee5d7.appspot.com",
  messagingSenderId: "1032138618369",
  appId: "1:1032138618369:web:3cfa544c5a88f7c5e17200"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

