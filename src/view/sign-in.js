/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import {
  loginUser, userStateChange, signInGoogle,
} from '../lib/firebase/auth.js';

const login = () => {
  const viewLogin = `
    <form id='formLogin' class = 'formLogin'>
      <h2 class = 'tituloLogin'>Sinchi Warmi</h2>
      <input type='text' placeholder='Ingrese su correo electrónico' id ='emailLogin' class='emailLogin'>
      <input type='password' placeholder='Ingrese su contraseña' id = 'pass' class='passLogin'>
      <div class="pass">
        <input type="checkbox" id="show-pass">
        <h6>Mostrar contraseña</h6>
        <a class ='forgetpass' id='forgetpass' href= '#/'><h6>¿Has olvidado tu contraseña?</h6></a>  
      </div>
      <input type='submit' value='LogIn' id='save'>
      <p id="textVerified">Texto verificado</p>
     
      <div class='iconos_sesion'>
        <img src="../img/google.png" alt="img-google" class="google" id="google">
        <img src='../img/facebook.png'> 
      </div>
      <div class = 'registerUser'>
        <p>¿No tienes cuenta?,</p><a href="#/sign-up">Regístrate</a>
      </div>
        <img class = 'women' src='../img/mujeresunidas_celu.png'>
        </form>
    `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentLogin');
  divElement.setAttribute('class', 'contentLogin');
  divElement.innerHTML = viewLogin;

  const showPassword = divElement.querySelector('#show-pass');
  showPassword.addEventListener('click', () => {
    const inputPass = document.getElementById('pass');
    if (inputPass.type === 'password') {
      inputPass.type = 'text';
    } else {
      inputPass.type = 'password';
    }
  });

  const formLogin = divElement.querySelector('#formLogin'); // divElement ya es un elemento de html
  formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailLogin = document.querySelector('#emailLogin');
    const pass = document.querySelector('#pass');

    loginUser(emailLogin.value, pass.value)
      .then(() => {
        // const userId = userCredential.user.uid;
        // console.log(userId);
        console.log('USTED A INICIADO SESION');
        window.location.hash = '#/news';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // const errorMessage = error.message;
        if (emailLogin.value === '' || pass.value === '') {
          console.log('Debes completar todos los campos');
        } else if (errorCode === 'auth/invalid-email') {
          alert('La dirección de correo electrónico no es válida.');
          console.log('error 400, MODAL, el correo no existe');
        } else if (errorCode === 'auth/user-disabled') {
          alert('El usuario esta desactivado');
        } else if (errorCode === 'auth/user-not-found') {
          alert('Usuario no encontrado, correo electrónico no registrado');
        } else if (errorCode === 'auth/wrong-password') {
          alert('Password incorrecto');
        }
        console.log(errorCode, errorMessage);
      });

    userStateChange((user) => {
      if (user) {
        // const user = auth.currentUser;
        const displayName = user.displayName;
        const uid = user.uid;
        const email = user.email;
        const photoURL = user.photoURL;
        // console.log(uid);
        // console.log(email);
        const emailVerified = user.emailVerified;
        const textVerified = document.getElementById('textVerified');
        if (emailVerified === false) {
          textVerified.value = 'Email no verificado';
        } else textVerified.value = 'Email verificado';
        console.log(email, displayName, uid, emailVerified, photoURL);
      }
    });
  });
  const google = divElement.querySelector('#google');
  google.addEventListener('click', () => {
    signInGoogle();
    console.log('iniciaste sesion con google');
  });
  return divElement;
};

export { login };
