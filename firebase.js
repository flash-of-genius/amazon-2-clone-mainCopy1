import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDV7V9vf4D7RiUuCaruMr8OGRcgCU5Oibk",
    authDomain: "clone-1c4a0.firebaseapp.com",
    projectId: "clone-1c4a0",
    storageBucket: "clone-1c4a0.appspot.com",
    messagingSenderId: "918879905764",
    appId: "1:918879905764:web:4f44e699bb0f005160c9f1",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

export const db = app.firestore();

// no analitycs

// go authentication
// enable google
// valid email
// web sdk configuration
// change .env
