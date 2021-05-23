import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNvu3w-mfNP2Ps5dLsoq8E340XQVCsAys",
  authDomain: "amazo-clone-aalok.firebaseapp.com",
  databaseURL: "https://amazo-clone-aalok.firebaseio.com",
  projectId: "amazo-clone-aalok",
  storageBucket: "amazo-clone-aalok.appspot.com",
  messagingSenderId: "362332252335",
  appId: "1:362332252335:web:eac7d15300c2288fd18c5a",
  measurementId: "G-96GNK27921"
};
// initialize the app with firebase congfig
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the firebase database
const db = firebaseApp.firestore();

//initialize auth
const auth =  firebase.auth();

export {db, auth};
