// Import the functions you need from the SDKs you need
const  { getDatabase } = require ('firebase/database');
const {initializeApp} = require("firebase/app");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5A9B03OZuMz88-BICfXF9xYGCdN16BnA",
  authDomain: "realtimedb-24c2e.firebaseapp.com",
  databaseURL: "https://realtimedb-24c2e-default-rtdb.firebaseio.com",
  projectId: "realtimedb-24c2e",
  storageBucket: "realtimedb-24c2e.appspot.com",
  messagingSenderId: "523063178950",
  appId: "1:523063178950:web:c981c5438ca8faef63c9c7",
  measurementId: "G-5169WFBGZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


module.exports = db ;