import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  proveedor,
  sendEmailVerification,
} from './config.js';

// SIGN-UP
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// SIGN-IN
export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

// USER STATE
export const userStateChange = (state) => onAuthStateChanged(auth, state);

// LOGOUT
export const logOutUser = async () => {
  await signOut(auth);
};

// SEND MESSSAGE OF VERIFICATION TO EMAIL
const emailVerification = () => sendEmailVerification(auth.currentUser);

// Inicio de sesion con cuenta de Google
export const signInGoogle = () => signInWithPopup(auth, proveedor);

export { createUser, emailVerification };
