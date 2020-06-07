import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvBP6JAF9EUsIC1nSPTkLW53jNdrt6Pqk",
  authDomain: "ordersreact.firebaseapp.com",
  databaseURL: "https://ordersreact.firebaseio.com",
  projectId: "ordersreact",
  storageBucket: "ordersreact.appspot.com",
  messagingSenderId: "469592257554",
  appId: "1:469592257554:web:1ab60d6eb9b71b6d5394cb",
  measurementId: "G-N1D757DX01",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
