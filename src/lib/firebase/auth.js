import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} // eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

import { swapp } from './config.js';

// initialize auth
const auth = getAuth(swapp);

// creando usuarios al registrarse con correo y contraseña
const createUser = async (correo, contrasena) => {
  await createUserWithEmailAndPassword(auth, correo, contrasena)
    .then((userCredential) => {
      // Signed in
      const userId = userCredential.user.uid;
      const userEmail = userCredential.user.email;
      const user = userCredential.user;
      // eslint-disable-next-line no-console
      console.log(userId, userEmail, user);
      // eslint-disable-next-line no-console
      console.log('Usuario registrado');
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      if ((errorCode === 'auth/email-already-in-use') || (errorMessage === 'Firebase: Error (auth/email-already-in-use')) {
        // eslint-disable-next-line no-console
        console.error('Email ya existe, por favor digite otro.');
        window.location.hash = '#/';
      }
      if ((errorCode === 'auth/invalid-email') || (errorMessage === 'Firebase: Error (auth/invalid-email)')) {
        // eslint-disable-next-line no-console
        console.log('Email no válido', errorCode);
        // eslint-disable-next-line no-console
        console.log(errorMessage);
        window.location.hash = '#/';
      }
    });
};

// Acceso de usuarios existente con correo y contraseña para iniciar sesión.
const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      const userEmail = userCredential.user.email;
      const userId = userCredential.user.uid;
      // eslint-disable-next-line no-console
      console.log(userId, userEmail, user);
      window.location.hash = '#/';
      // eslint-disable-next-line no-console
      console.log('Usuario ha iniciado sesión');
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.log('Error: ', errorCode, errorMessage);
    });
};

export { createUser, signInUser };
