// eslint-disable-next-line import/no-unresolved
import { createUser } from '../lib/firebase/sign-up.js';

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
  const save = divElement.querySelector('#formLogin'); // divElement ya es un elemento de html
  save.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email');
    const pass = document.querySelector('#pass');
    // console.log(email.value, pass.value);
    createUser(email.value, pass.value);
  });

  return divElement;
};
export { login };
