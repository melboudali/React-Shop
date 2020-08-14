import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { setAuthError } from '../Redux/User/UserActions';
import { Store } from '../Redux/Store';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MESUREMENTID
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Providers for Sagas
export const GGLProvider = new firebase.auth.GoogleAuthProvider();
export const FBProvider = new firebase.auth.FacebookAuthProvider();
export const GHProvider = new firebase.auth.GithubAuthProvider();

// if user not found create one
export const createUserProfileDoc = async (userAuth, additionalData) => {
  const userRef = firestore.collection('users').doc(`${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    try {
      await userRef.set({
        displayName,
        email,
        imageURL: photoURL
          ? photoURL
          : 'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
        createdAt: new Date(),
        ...additionalData
      });
    } catch (err) {
      Store.dispatch(setAuthError(err.message));
    }
  }
  return userRef;
};

export default firebase;
