import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsNgN-Kfmtv-pUl10I_P22B3SQYWPJ01A",
  authDomain: "scwad-25d9b.firebaseapp.com",
  databaseURL:
    "https://scwad-25d9b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scwad-25d9b",
  storageBucket: "scwad-25d9b.appspot.com",
  messagingSenderId: "938920764395",
  appId: "1:938920764395:web:91886af904c20c47d0afae",
  measurementId: "G-9WK261X0RK",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp, firebase as default };
