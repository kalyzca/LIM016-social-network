import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  sendEmailVerification,
  providerGoogle,
  providerFacebook,
  providerGitHub,
} from './config.js';
// SIGN-UP
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// SIGN-IN
const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
// USER STATE
const userStateChange = (state) => onAuthStateChanged(auth, state);
// LOGOUT
const logOutUser = () => signOut(auth);
// SEND MESSSAGE OF VERIFICATION TO EMAIL
const emailVerification = () => sendEmailVerification(auth.currentUser);
// Inicio de sesion con cuenta de Google
const signInGoogle = () => signInWithPopup(auth, providerGoogle);
// Inicio de sesion con cuenta facebook
const signInFacebook = () => signInWithPopup(auth, providerFacebook);
// Inicio de sesion con cuenta de GitHub
const signInGitHub = () => signInWithPopup(auth, providerGitHub);

export {
  createUser,
  loginUser,
  userStateChange,
  logOutUser,
  emailVerification,
  signInGoogle,
  signInFacebook,
  signInGitHub,
};
