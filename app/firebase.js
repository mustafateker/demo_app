// app/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9nnqL5_ViyEIhK7qIZr6t-uzxSv5UPTQ",
    authDomain: "siriusfarm-75d49.firebaseapp.com",
    projectId: "siriusfarm-75d49",
    storageBucket: "siriusfarm-75d49.firebasestorage.app",
    messagingSenderId: "268805414125",
    appId: "1:268805414125:web:1b08a8aba9162dc31000e4",
    measurementId: "G-P5K8JJ7VL1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };