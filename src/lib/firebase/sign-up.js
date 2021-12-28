import {
  getAuth,
  createUserWithEmailAndPassword,
} // eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

import { swapp } from './config.js';

// initialize auth
const auth = getAuth(swapp);

// creando usuarios con firebase
export const createUser = async (correo, contrasena) => {
  await createUserWithEmailAndPassword(auth, correo, contrasena)
    .then((userCredential) => {
      // Signed in
      const userId = userCredential.user.uid;
      const userEmail = userCredential.user.email;
      const user = userCredential.user;
      // eslint-disable-next-line no-console
      console.log(userId, userEmail, user);
    })
    .catch((error) => {
      const errorCode = error.code;
      // eslint-disable-next-line no-console
      console.log(errorCode);
      const errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.log(errorMessage);
    });
};
