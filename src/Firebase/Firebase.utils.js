import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MESUREMENTID
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Signin method
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Facebook Signin method
const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(fbProvider);

// Github Signin method
const GHProvider = new firebase.auth.GithubAuthProvider();
GHProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGithub = () => auth.signInWithPopup(GHProvider);

// get Date from firestore
export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.collection('users').doc(`${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { uid, displayName, email, emailVerified, phoneNumber, photoURL } = userAuth;
    try {
      await userRef.set({
        uid,
        displayName,
        email,
        emailVerified,
        phoneNumber,
        photoURL,
        createdAt: new Date(),
        ...additionalData
      });
    } catch (error) {
      console.log('Erro storing user: ', error.message);
    }
  }
  return userRef;
};

export default firebase;
