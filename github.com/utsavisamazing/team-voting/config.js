import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDyKn0en0ZBgy0GkwlEb8F1ltHbSavFStQ",
  authDomain: "contributing-41271.firebaseapp.com",
  projectId: "contributing-41271",
  storageBucket: "contributing-41271.appspot.com",
  messagingSenderId: "149062464787",
  appId: "1:149062464787:web:c3c4361fc8a7e3cb19d6e6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();