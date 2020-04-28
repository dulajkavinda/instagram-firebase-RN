import firebase from "firebase";
require("firebase/firestore");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrsEcTxoTrQ5RSkG4836iLT3RD0ZrjQcs",
  authDomain: "instagram-rn-fca81.firebaseapp.com",
  databaseURL: "https://instagram-rn-fca81.firebaseio.com",
  projectId: "instagram-rn-fca81",
  storageBucket: "instagram-rn-fca81.appspot.com",
  messagingSenderId: "296772302197",
  appId: "1:296772302197:web:ce46a29d868e053e038f3c",
  measurementId: "G-PHS6L2X58R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

//Need to add this to forgo deprecated warnings
db.settings({
  timestampsInSnapshots: true,
});

export default db;
