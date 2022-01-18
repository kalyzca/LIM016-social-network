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
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};
// SIGN-IN
export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
// USER STATE
export const userStateChange = (state) => onAuthStateChanged(auth, state);
// LOGOUT
export const logOutUser = () => signOut(auth);
// SEND MESSSAGE OF VERIFICATION TO EMAIL
export const emailVerification = () => sendEmailVerification(auth.currentUser);
// Inicio de sesion con cuenta de Google
export const signInGoogle = () => signInWithPopup(auth, providerGoogle);
// Inicio de sesion con cuenta facebook
export const signInFacebook = () => signInWithPopup(auth, providerFacebook);
// Inicio de sesion con cuenta de GitHub
export const signInGitHub = () => signInWithPopup(auth, providerGitHub);

// export { createUser, emailVerification };
