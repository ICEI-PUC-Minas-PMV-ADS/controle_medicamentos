import { initializeApp } from 'firebase/app';
import "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjU7q8Sgjxm7uzUlTXDmbvs-Rqb9rAefs",
    authDomain: "control-medic.firebaseapp.com",
    projectId: "control-medic",
    storageBucket: "control-medic.appspot.com",
    messagingSenderId: "421127075403",
    appId: "1:421127075403:web:8f6ab2b57b58234882ffce"
  };
  
  // Initialize Firebase
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();
  const auth = firebase.auth();


  export default database