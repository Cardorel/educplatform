import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

export const CreateShopCollection = async (data, objectsToAdd) => {
  const collectionRef = firestore.collection(data);
  const batch = firestore.batch();

  objectsToAdd.forEach((item) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, item);
  });

  return await batch.commit();
};

//Get the data in firestore

export const getCollectionInFireBase = async (collections) => {
  const eventCollection = collections.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return await eventCollection;
};

/* User auth */

export const createUser = async (userAuth, Otherprops) => {
  if (!userAuth) return;
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...Otherprops,
      });
    } catch (err) {
      console.log(`error: ${err}`);
    }
  }
  return userRef;
};

export const editUser = async (userAuth, Otherprops) => {
  if (!userAuth) return;
  const userRef = await firestore.doc(`user/${userAuth.uid}`);
  const { displayName, email } = userAuth;
  const createAt = new Date();
  try {
    await userRef.set({
      displayName,
      email,
      createAt,
      ...Otherprops,
    });
  } catch (err) {
    console.log(`error: ${err}`);
  }
};

firebase.initializeApp(firebaseConfig);
export const authentification = firebase.auth();
export const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const LogInWithGoogle = () =>
  authentification.signInWithPopup(googleProvider);

export default firebase;
