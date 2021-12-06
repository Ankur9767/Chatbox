import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyD_83wCKYlDbSiyXJh3E4Hfmk24qIfZjN8",
  authDomain: "chatbox-19c4e.firebaseapp.com",
  projectId: "chatbox-19c4e",
  storageBucket: "chatbox-19c4e.appspot.com",
  messagingSenderId: "160779705945",
  appId: "1:160779705945:web:60eb89321131322fc91b48",
  measurementId: "G-BH8BMX5EB8"
});

const db=firebaseApp.firestore();
export default db;


