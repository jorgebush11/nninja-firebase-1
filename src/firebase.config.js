import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDlnD4Vfm8opNwT9we77XF4vzcI44BBQuY",
  authDomain: "nninja-cafe-1.firebaseapp.com",
  projectId: "nninja-cafe-1",
  storageBucket: "nninja-cafe-1.appspot.com",
  messagingSenderId: "780481772079",
  appId: "1:780481772079:web:c9e3036441c0900521a4da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

module.exports = db;
