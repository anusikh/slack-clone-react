import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDSdQ6_hvYhXDGKDgp_wkaSOqcQIKij2Fk",
    authDomain: "slack-clone-335d0.firebaseapp.com",
    projectId: "slack-clone-335d0",
    storageBucket: "slack-clone-335d0.appspot.com",
    messagingSenderId: "460755198286",
    appId: "1:460755198286:web:7af7c602746324ee317e1f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};