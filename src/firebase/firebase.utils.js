import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
    apiKey: "AIzaSyC6jgWBDOdK3H21Q6kcK9_OMHfsvMlzzyQ",
    authDomain: "crwn-db-44120.firebaseapp.com",
    databaseURL: "https://crwn-db-44120.firebaseio.com",
    projectId: "crwn-db-44120",
    storageBucket: "crwn-db-44120.appspot.com",
    messagingSenderId: "701652230705",
    appId: "1:701652230705:web:a68eaa54a892f00f90ab10",
    measurementId: "G-KH148S5KXG"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




