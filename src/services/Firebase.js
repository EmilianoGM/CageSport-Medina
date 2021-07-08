import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyANoJfJs8acG5nh9guOsHwX7QowXL8KWy8",
    authDomain: "cagesports-4e3aa.firebaseapp.com",
    projectId: "cagesports-4e3aa",
    storageBucket: "cagesports-4e3aa.appspot.com",
    messagingSenderId: "276377318846",
    appId: "1:276377318846:web:f3dcbf340d7c25b804f5ef"
  };

const fb = firebase.initializeApp(firebaseConfig);

export const database = fb.firestore();
export const docIdFieldPath = firebase.firestore.FieldPath.documentId();

