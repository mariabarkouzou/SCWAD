import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDsNgN-Kfmtv-pUl10I_P22B3SQYWPJ01A",
    authDomain: "scwad-25d9b.firebaseapp.com",
    projectId: "scwad-25d9b",
    storageBucket: "scwad-25d9b.appspot.com",
    messagingSenderId: "938920764395",
    appId: "1:938920764395:web:91886af904c20c47d0afae",
    measurementId: "G-9WK261X0RK"
  };
  
firebase.initializeApp(firebaseConfig);
const database = firebase.database()
firebase.analytics();

export  {
  database, firebase as default
}
