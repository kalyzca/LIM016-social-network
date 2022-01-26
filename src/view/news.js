/* eslint-disable no-console */
import { viewHeader } from './header.js';
import { logOutUser } from '../lib/firebase/auth.js';
import { currentUser } from './sign-in.js';

import {
  savePost, onGetPost, deletePost, getDocPost, updateDocPost,
} from '../lib/firebase/firestore.js';

console.log(currentUser);
// Template de news
const viewNews = `
    <form id="formPost" class="formPost">
      <div class="userPost" id="userPost">
        <img src="../img/usuario-femenino.png" alt="" class="imgPerfil" id="imgPerfil">
        <h5 class="userName" id="userName">Nombre</h5>
        <h5  class="datetimePost" id="datetimePost"> 12/11/2021 12:00</h5>
      </div>
      
      <label for="" class="lbltitlePost" id="lbltitlePost">Título:</label>
      <input type="text" placeholder = "Titulo de la publicación" class="postTitle" id="postTitle">

      <label for="">Descripción:</label>
      <textarea class="postDescription" id="postDescription" cols="30" rows="6" placeholder="Publicación del post" ></textarea>
      
      <button class="btnPostSave" id="btnPostSave">Guardar</button>
      
    </form>
    <div class="postContainer" id="postContainer"></div>
  `;

const divElement = document.createElement('div');
const news = divElement;
divElement.setAttribute('id', 'contentNews');
divElement.setAttribute('class', 'contentNews');
divElement.innerHTML = viewHeader + viewNews;

// Declaración de variables
let editStatus = false;
let idp;

// Obteniendo el formulario post
const formularioPost = divElement.querySelector('#formPost');
const postContainer = divElement.querySelector('#postContainer');

window.addEventListener('DOMContentLoaded', async () => {
  await onGetPost((querySnapshot) => {
    postContainer.innerHTML = '';
    // Listar los posts -
    querySnapshot.forEach((doc) => {
      const dataPost = doc.data();
      console.log(dataPost);
      postContainer.innerHTML
      += `
        <div class= "userPostId">
          <div class="userPost" id="userPost">
            <img src="../img/usuario-femenino.png" alt="" class="imgPerfil" id="imgPerfil">
            <h5 class="userName" id="userName">Nombre</h5>
            <h5 class="datetimePost" id="datetimePost"> 12/11/2021 12:00</h5>
            <button class="btn-delete" data-id="${doc.id}">Eliminar</button>
            <button class="btn-edit" data-id="${doc.id}"><i class="far fa-edit"></i>Editar</button>
          </div>
          <div class="data">
            <h3>${dataPost.title}</h3>
            <textarea rows="auto" readonly >${dataPost.description}</textarea>
          </div>
        </div>
      `;
    });

    // Eliminando post
    const btnDelete = postContainer.querySelectorAll('.btn-delete');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', async ({ target: { dataset } }) => {
        await deletePost(dataset.id);
        console.log('Eliminando documento', dataset.id);
      });
    });

    // Editando post
    const btnEdit = postContainer.querySelectorAll('.btn-edit');
    btnEdit.forEach((btnedit) => {
      btnedit.addEventListener('click', async (e) => {
        await getDocPost(e.target.dataset.id)
          .then((result) => {
            const post = result.data();
            formularioPost.postTitle.value = post.title;
            formularioPost.postDescription.value = post.description;
            editStatus = true;
            // idp = e.target.dataset.id;
            idp = result.id;
            formularioPost.btnPostSave.innerText = 'Actualizar';
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });

    //
  });
});

// Guardando datos actualizados del post
formularioPost.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = formularioPost.postTitle;
  const description = formularioPost.postDescription;
  if (!editStatus) {
    await savePost(title.value, description.value);
  } else {
    console.log(idp);
    await updateDocPost(idp, {
      title: title.value,
      description: description.value,
    });
    editStatus = false;
    idp = '';
    formularioPost.btnPostSave.innerText = 'Guardar';
  }
  formularioPost.reset();
  title.focus();
});

// Funcion para salir
// const logOut = document.querySelector('#logOut');
const logOut = divElement.querySelector('#logOut');
logOut.addEventListener('click', () => {
  logOutUser()
    .then(() => {
      console.log('saliste de sesion');
      window.location.hash = '#/';
    })
    .catch((error) => {
      console.log(error);
    });
});

export { news };
