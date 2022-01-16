/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

import { swapp } from './config.js';

const auth = getAuth(swapp);
const provider = new GoogleAuthProvider(swapp);

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// SIGN-UP
export const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

// SIGN-IN
export const loginUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
// SEE

export const userStateChange = async (state) => {
  await onAuthStateChanged(auth, state);
};

export const logOutUser = async () => {
  await signOut(auth);
};

export const emailVerification = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log('correo enviado');
    })
    .catch((error) => {
      console.log(error, 'Error occurred. Inspect error.code.');
    });
};

provider.addScope('profile');
provider.addScope('email');

export const signInGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(credential);
      console.log(token);
      console.log(user);

      /* provider.setCustomParameters({
        'login_hint': 'user@example.com'
      }); */
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    });
};
