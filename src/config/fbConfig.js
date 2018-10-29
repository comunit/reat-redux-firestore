import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBE3-4LxJLMpOuxA73Xq0_O3YtkWmNko-8",
  authDomain: "marioplan-84d30.firebaseapp.com",
  databaseURL: "https://marioplan-84d30.firebaseio.com",
  projectId: "marioplan-84d30",
  storageBucket: "marioplan-84d30.appspot.com",
  messagingSenderId: "138374351837"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
