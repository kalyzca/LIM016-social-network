import {
  getFirestore, collection, addDoc, getDocs,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

import { swapp } from './config.js';

// Initialize Cloud Firestore through Firebase
const db = getFirestore(swapp);

// agregando datos de los usarios en firestore
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

// leyendo dato de los usuarios en firestore
const queryUser = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    // eslint-disable-next-line no-console
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

export { saveUser, queryUser };
