import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOz7IdzkNMi9hJK1YFGeHv-uU-zS0EfrY",
  authDomain: "linedin-clone-616fc.firebaseapp.com",
  projectId: "linedin-clone-616fc",
  storageBucket: "linedin-clone-616fc.appspot.com",
  messagingSenderId: "710875291343",
  appId: "1:710875291343:web:d18a3a5aa8b2e549cba1ba",
  measurementId: "G-41ZRYWWEXC"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); 
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();


export { auth, provider ,storage };
export default db;
