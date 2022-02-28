import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyDjQWoZyzh6hop-_S5EDybCf-jP7CUAT24",
    authDomain: "game-byte-db.firebaseapp.com",
    projectId: "game-byte-db",
    storageBucket: "game-byte-db.appspot.com",
    messagingSenderId: "310778345375",
    appId: "1:310778345375:web:63628d04c6323e180cefaa",
    measurementId: "G-XS9JZTFSND",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account " });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
