import { createUser, signInUser } from '../lib/firebase/auth.js';
import { saveUser } from '../lib/firebase/firestore.js';
// vista del registro del usuario
const signUp = () => {
  const viewLogin = `
    <form id='formSignUp'>
      <p class = 'titulo'>Sinchi Warmi</p>
      <input type='text' placeholder='Ingrese su email' id ='email' >
      <input type='password' placeholder='Ingrese su contraseña' id = 'pass'>
      <input type='submit' value='Sign Up' id='save'>
      <div class='iconos_sesion'>
        <img src="../img//google.png" alt="img-google">
        <img src='../img/facebook.png'> 
      </div>
      <img src='../img/mujeresunidascelupeq.png'> 
    `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'content');
  divElement.innerHTML = viewLogin;
  return divElement;
};

// creando credenciales (correo y contraseña)
const createCredential = (mycallback) => {
  const formSignUp = document.getElementById('formSignUp');
  const email = document.getElementById('email');
  const password = document.getElementById('pass');
  // evento para el boton login
  formSignUp.addEventListener('submit', async () => {
    const valueEmail = email.value;
    const valuePassword = password.value;
    email.value = '';
    password.value = '';
    await mycallback(valueEmail, valuePassword);
  });
};

// obteniendo el correo electrónico y la contraseña
const getCredential = async (correo, contrasena) => {
  // eslint-disable-next-line no-console
  console.log(correo, contrasena);
  // llamando a createUser con firebase y saveUser que guarda el usuario creado con firestore
  // eslint-disable-next-line no-console
  await createUser(correo, contrasena);
  await saveUser(correo, contrasena);
  signInUser(correo, contrasena);
  // retorno del correo y contraseña
  return (correo, contrasena);
};

export { signUp, createCredential, getCredential };
