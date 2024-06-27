import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBx9iyS6nX6QBMPqNa3BfK7jRphTw6Wg5A",
  authDomain: "aulafirebase-28b09.firebaseapp.com",
  projectId: "aulafirebase-28b09",
  storageBucket: "aulafirebase-28b09.appspot.com",
  messagingSenderId: "859717877764",
  appId: "1:859717877764:web:817aaeed2f06c59f293551"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
