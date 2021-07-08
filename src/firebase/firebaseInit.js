import firebase from "firebase/app";
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-nIxxaJFEYlkJxf96VTGo3yrUnnX73es",
    authDomain: "invoice-calculator-d5a78.firebaseapp.com",
    projectId: "invoice-calculator-d5a78",
    storageBucket: "invoice-calculator-d5a78.appspot.com",
    messagingSenderId: "431339141243",
    appId: "1:431339141243:web:6f80cce687eb0bb979cade"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();