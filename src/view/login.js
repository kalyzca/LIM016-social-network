import { createUser } from '../lib/firebase/sign-up.js';
import { saveUser } from '../lib/firebase/firestore.js';

// vista del login
const login = () => {
  const viewLogin = `
    <form id='formLogin'>
      <label for='email'>Usuario </label>
      <input type='text' placeholder='Ingrese su usuario' id ='email' >
      <label for='pass'>Contraseña</label>
      <input type='password' placeholder='Ingrese su contraseña' id = 'pass'>
      <input type='submit' value='LogIn' id='save' >
    </form>
    `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'content');
  divElement.innerHTML = viewLogin;
  return divElement;
};

// obteniendo el correoelectrónico y la contraseña
const getCredential = async (correo, contrasena) => {
  // eslint-disable-next-line no-console
  console.log(correo, contrasena);
  // llamando a createUser con firebase y saveUser que guarda el usuario creado con firestore
  // eslint-disable-next-line no-console
  await createUser(correo, contrasena);
  await saveUser(correo, contrasena);
  // retorno del correo y contraseña
  return (correo, contrasena);
};

// creando credenciales (correo y contraseña)
const createCredential = (mycallback) => {
  const formLogin = document.getElementById('formLogin');
  const email = document.getElementById('email');
  const password = document.getElementById('pass');
  // evento para el boton login
  formLogin.addEventListener('submit', async () => {
    const valueEmail = email.value;
    const valuePassword = password.value;
    email.value = '';
    password.value = '';
    await mycallback(valueEmail, valuePassword);
  });
};

export { login, createCredential, getCredential };
