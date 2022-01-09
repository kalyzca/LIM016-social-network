import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} // eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// eslint-disable-next-line import/no-unresolved
import { swapp } from './config.js';

const auth = getAuth(swapp);
// SIGN-UP
export const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

// SIGN-IN
export const loginUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      // eslint-disable-next-line no-console
      console.log(email);
      // eslint-disable-next-line no-console
      console.log(user);
      // eslint-disable-next-line no-console
      console.log('USTED A INICIADO SESION');
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        // eslint-disable-next-line no-alert
        alert('The password is too weak.');
      } else if (errorCode === 'auth/invalid-email') {
        // eslint-disable-next-line no-alert
        alert('The email is too weak.');
      } else if (errorCode === 'auth/operation-not-allowed') {
        // eslint-disable-next-line no-alert
        alert('The operation is not allowed');
      }
    // console.log(error);
    });
};
// SEE
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // eslint-disable-next-line no-console
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
