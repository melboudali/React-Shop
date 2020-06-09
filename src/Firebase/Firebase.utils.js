import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCiR4MpBXV_0JZJtwg427_ylkGCl0T7vII',
  authDomain: 'react-e-commerce-a36ca.firebaseapp.com',
  databaseURL: 'https://react-e-commerce-a36ca.firebaseio.com',
  projectId: 'react-e-commerce-a36ca',
  storageBucket: 'react-e-commerce-a36ca.appspot.com',
  messagingSenderId: '42688015844',
  appId: '1:42688015844:web:ee409c17ea400b1d2babf1',
  measurementId: 'G-R46RNX6SN7'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
