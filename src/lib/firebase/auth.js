import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  providerGoogle,
  sendEmailVerification,
  providerFacebook,
} from './config.js';

// SIGN-UP
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// SIGN-IN
export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

// USER STATE
export const userStateChange = (state) => onAuthStateChanged(auth, state);

// LOGOUT
export const logOutUser = () => signOut(auth);

// SEND MESSSAGE OF VERIFICATION TO EMAIL
const emailVerification = () => sendEmailVerification(auth.currentUser);

// Inicio de sesion con cuenta de Google
export const signInGoogle = () => signInWithPopup(auth, providerGoogle);
// Inicio de sesion con cuenta facebook
export const signInFacebook = () => signInWithPopup(auth, providerFacebook);

export { createUser, emailVerification };
