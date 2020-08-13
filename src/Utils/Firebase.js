import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { Store } from '../Redux/Store';
import { GoogleSignInFail, FacebookSignInFail, GithubSignInFail } from '../Redux/User/UserActions';

const Config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MESUREMENTID
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Signin method
const GGLProvider = new firebase.auth.GoogleAuthProvider();
GGLProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(GGLProvider);
  } catch (err) {
    Store.dispatch(GoogleSignInFail(err.message));
  }
};

// Facebook Signin method
const FBProvider = new firebase.auth.FacebookAuthProvider();
FBProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = async () => {
  try {
    await auth.signInWithPopup(FBProvider);
  } catch (err) {
    Store.dispatch(FacebookSignInFail(err.message));
  }
};

// Github Signin method
const GHProvider = new firebase.auth.GithubAuthProvider();
GHProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGithub = async () => {
  try {
    await auth.signInWithPopup(GHProvider);
  } catch (err) {
    Store.dispatch(GithubSignInFail(err.message));
  }
};

// get Date from firestore
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
