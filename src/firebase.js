import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCPhaHMfw6fxa8a1qVGd7P_T_jK-sjQN1c",
  authDomain: "twitter-clone-40c9a.firebaseapp.com",
  projectId: "twitter-clone-40c9a",
  storageBucket: "twitter-clone-40c9a.appspot.com",
  messagingSenderId: "489186678723",
  appId: "1:489186678723:web:59284fb51c31f17d04cf76",
  measurementId: "G-3SLTYGCVNE"
});

const auth = app.auth();

export { auth };

export default app;
