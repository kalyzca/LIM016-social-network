import { signInUser } from '../lib/firebase/auth.js';

// vista del login
const login = () => {
  const viewLogin = `
  
    <form id='formLogin'>
      <p class = 'titulo'>Sinchi Warmi</p>
      <input type='text' placeholder='Ingrese su email' id ='email' >
      <input type='password' placeholder='Ingrese su contraseña' id = 'pass'>
      <a class ='forgetpass'>¿Haz olvidado tu contraseña?</a>
      <input type='submit' value='Log In' id='login'>
      <a class = 'registerUser' href="#/signUp" >Quiero registrarme</a>
      <div class='iconos_sesion'>
        <img src="../img//google.png" alt="img-google">
        <img src='../img/facebook.png'> 
      </div>
      <img src='../img/mujeresunidascelupeq.png'> 
    `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'content');
  divElement.className = 'contenido';
  divElement.innerHTML = viewLogin;
  return divElement;
};

const signIn = () => {
  const formLogin = document.getElementById('formLogin');
  const email = document.getElementById('email');
  const password = document.getElementById('pass');
  // evento para el boton login
  formLogin.addEventListener('submit', async () => {
    const valueEmail = email.value;
    const valuePassword = password.value;
    email.value = '';
    password.value = '';
    signInUser(valueEmail, valuePassword);
  });
};
export { login, signIn };
