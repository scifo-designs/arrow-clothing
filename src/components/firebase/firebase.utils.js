import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDSmZqrPrWvYDFrMjWFTYV4LjHJctkdrIw",
  authDomain: "clothing-db-a4d8b.firebaseapp.com",
  projectId: "clothing-db-a4d8b",
  storageBucket: "clothing-db-a4d8b.appspot.com",
  messagingSenderId: "606898742416",
  appId: "1:606898742416:web:8a542efcb89d52ce8e6415",
  measurementId: "G-RJ162VXXQN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
