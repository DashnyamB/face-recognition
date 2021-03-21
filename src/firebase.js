import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAz_bQfw7CH6ksfikAODKfWbVH-FS7_C3U",
  authDomain: "login-c6162.firebaseapp.com",
  projectId: "login-c6162",
  storageBucket: "login-c6162.appspot.com",
  messagingSenderId: "745171775132",
  appId: "1:745171775132:web:782d6a15a11318e2ba4759",
  measurementId: "G-P7PR2XW7YP",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const storage = firebase.storage();
export { db, storage };

export default fire;
