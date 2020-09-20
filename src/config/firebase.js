import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuYHCb-4pUIUDoKfF8gVq8JWWVkED7ZfE",
  authDomain: "facebook-clone-e47da.firebaseapp.com",
  databaseURL: "https://facebook-clone-e47da.firebaseio.com",
  projectId: "facebook-clone-e47da",
  storageBucket: "facebook-clone-e47da.appspot.com",
  messagingSenderId: "381157266646",
  appId: "1:381157266646:web:a9712a75bd81e4d175e577"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
