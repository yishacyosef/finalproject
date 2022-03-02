
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpH-mlBI2M4_Iia8lff8h3Hgu-bDeNrW0",
  authDomain: "footbook-75b38.firebaseapp.com",
  projectId: "footbook-75b38",
  storageBucket: "footbook-75b38.appspot.com",
  messagingSenderId: "900835082116",
  appId: "1:900835082116:web:b75a3e89bb3bdf448be7d1",
  measurementId: "G-YH6EE5NZQM"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = getFirestore(app);
export const auth = getAuth(app);
// const provider =  new app.auth.GoogleAuthProvider();
 
//   export { auth, provider };
// //   export default db;
