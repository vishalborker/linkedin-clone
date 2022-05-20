import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/configureStore';

import { initializeApp } from "firebase/app";

import './index.scss';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const APP_KEY = process.env.REACT_APP_API_KEY;
const MSG_SENDER_ID = process.env.REACT_APP_MSG_SENDER_ID;
const APP_ID = process.env.REACT_APP_APP_ID;

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APP_KEY,
  authDomain: "linkedin-clone-ui-react.firebaseapp.com",
  projectId: "linkedin-clone-ui-react",
  storageBucket: "linkedin-clone-ui-react.appspot.com",
  messagingSenderId: MSG_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
