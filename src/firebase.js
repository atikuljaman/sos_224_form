import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCEY4v2uvQFnjKW7czq1t6eiZaSA1Av4O8",

  authDomain: "sos-224-form.firebaseapp.com",

  projectId: "sos-224-form",

  storageBucket: "sos-224-form.appspot.com",

  messagingSenderId: "713000934996",

  appId: "1:713000934996:web:1c1e7be97676d7cd6197c1",
  databaseURL: "https://sos-224-form-default-rtdb.firebaseio.com/",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export { app };
