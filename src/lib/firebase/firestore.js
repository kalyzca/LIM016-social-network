import {
  getFirestore, addDoc, collection,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

import { swapp } from './config.js';

// Initialize Cloud Firestore through Firebase
const db = getFirestore(swapp);

// guardando usuarios creados en firestore
const saveUser = async (email, password) => {
  // objeto dataUSer que contiene los datos del usuario
  const dataUser = {
    correo: email,
    contrasena: password,
  };

  try {
    const docRef = await addDoc(collection(db, 'users'), dataUser);
    // eslint-disable-next-line no-console
    console.log('Documento creado con ID: ', docRef.id);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error agregando el documento: ', e);
  }
};

export { saveUser };
