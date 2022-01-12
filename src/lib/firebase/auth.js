import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
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
};
// SEE
const user = auth.currentUser;
export const stateChange = async () =>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      // signed out
    }
  });
}
export const out = () =>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

