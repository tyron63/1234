import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBbYlUMwDASKuL7rahk2pS0-_dl3qxDOxs',
  authDomain: 'alpha-tech-9d792.firebaseapp.com',
  databaseURL: 'https://alpha-tech-9d792.firebaseio.com',
  projectId: 'alpha-tech-9d792',
  storageBucket: 'alpha-tech-9d792.appspot.com',
  messagingSenderId: '292659793833',
  appId: '1:292659793833:web:c77febcdf27a2756ee3eb8',
  measurementId: 'G-N4PSCM9786',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (snapShot.exists === false) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export default firebase;
