/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,

  // query,
  // where,

} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

import { swapp } from './config.js';

const db = getFirestore(swapp); // inicializar la BD

// Función para guardar la cuenta del usuario
const userAccount = async (
  uid,
  nameUser,
  displayName,
  email,
  password,
  phoneNumber,
  photoURL,
) => {
  try {
    const docRef = await addDoc(collection(db, 'account'), {
      uid,
      nameUser,
      displayName,
      email,
      password,
      phoneNumber,
      photoURL,
    });
    console.log('Documento escrito con su ID:', docRef.id);
  } catch (error) {
    console.log(error, 'Error al añadir el documento');
  }
};

// Función para guardar los datos personales del usuario
const dataUserPersonal = async (
  uid,
  photo,
  fullname,
  nickname,
  ocupation,
  email,
  gender,
  age,
  phone,
  description,
) => {
  try {
    const docRef = await addDoc(collection(db, 'account'), {
      uid,
      photo,
      fullname,
      nickname,
      ocupation,
      email,
      gender,
      age,
      phone,
      description,
    });
    console.log('Documento escrito con su ID:', docRef.id);
  } catch (error) {
    console.log(error, 'Error al añadir el documento');
  }
};

// const updateDocUser = async (uidUser) => {
//   const queryDataUser = query(
//     collection(db, 'users'),
//     where('uid', '==', uidUser),
//   );
//   const querySnapshot = await getDocs(queryDataUser);
//   const dataUser = querySnapshot.docs.map((docu) => docu.data());
//   return console.log(dataUser);
// };

// obtener data de perfil del usuario
// Get a list of cities from your database
// const getDataUserProfile = async () => {
//   const profileSnapshot = await getDocs(collection(db, 'profile'));
//   const userProfileList = profileSnapshot.docs.map((doc) => doc.data());
//   return console.log(userProfileList);
// };

// const getDataUserProfile = async (uidUser) => {
//   const queryDataUser = query(collection(db, 'user'), where('uid', '==', uidUser));
//   const querySnapshot = await getDocs(queryDataUser);
//   const dataUser = querySnapshot.docs.map((docu) => docu.data());
//   return (dataUser);
// };

// POSTS
// Guardar los post
const savePost = (title, description) => addDoc(collection(db, 'posts'), { title, description });

// Listar los post
const getPost = () => getDocs(collection(db, 'posts'));

// Escucha los post
const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

// Eliminar un post
const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

// Obtener un documento del  post
const getDocPost = (id) => getDoc(doc(db, 'posts', id));

// Actualizando un documento del  post
const updateDocPost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);

export {
  // getDataUserProfile,
  // saveUser,
  // updateDocUser,
  userAccount,
  dataUserPersonal,
  savePost,
  getPost,
  onGetPost,
  deletePost,
  getDocPost,
  updateDocPost,

};
