import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa1CnWDS4Gb_61Yx6iZuz26FFEvLPfvxY",
    authDomain: "facebook-clone-b1293.firebaseapp.com",
    databaseURL: "https://facebook-clone-b1293.firebaseio.com",
    projectId: "facebook-clone-b1293",
    storageBucket: "facebook-clone-b1293.appspot.com",
    messagingSenderId: "415338587492",
    appId: "1:415338587492:web:b873e352b49b5a6628c671",
    measurementId: "G-B2H7S2VPB2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;