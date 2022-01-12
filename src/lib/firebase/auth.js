/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

import { swapp } from './config.js';

// Inicializando auth
const auth = getAuth(swapp);

// Inicializando servicios de terceros
const providerGoogle = new GoogleAuthProvider(swapp);

// const user = auth.currentUser;

// SIGN-UP
// Creando el usuario con correo y contraseña
export const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

// SIGN-IN
// Iniciando sesión con correo y contraseña
export const loginUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
// Iniciando sesión con google
export const signInGoogle = () => {
  signInWithPopup(auth, providerGoogle);
};

// USER STATE
export const userStateChange = async (callback) => {
  await onAuthStateChanged(auth, (callback));
};

// SIGN-OUT
export const out = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};
