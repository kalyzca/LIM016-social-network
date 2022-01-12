/* eslint-disable no-alert */
/* eslint-disable no-console */
import { loginUser, userStateChange, signInGoogle } from '../lib/firebase/auth.js';

const login = () => {
  const viewLogin = `
    <form id='formLogin' class = 'formLogin'>
      <h2 class = 'tituloLogin'>Sinchi Warmi</h2>
      <input type='text' placeholder='Ingrese su usuario' id ='email' class='emailLogin'>
      <input type='password' placeholder='Ingrese su contraseña' id = 'pass' class='passLogin'>
      <a class ='forgetpass' href = ''>¿Haz olvidado tu contraseña?</a>  
      <input type='submit' value='LogIn' id='save'>
      <div class='iconos_sesion'>
        <img src="../img//google.png" alt="img-google" class="google" id="google">
        <img src='../img/facebook.png'> 
      </div>
      <a class = 'registerUser' href="#/sign-up">¿No tienes cuenta?</a>
      <img class = 'women' src='../img/mujeresunidas_celu.png'>
    </form>
    `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentLogin');
  divElement.setAttribute('class', 'contentLogin');
  divElement.innerHTML = viewLogin;

  // Iniciar sesión con correo y contraseña
  // divElement ya es un elemento de html
  const formLogin = divElement.querySelector('#formLogin');
  formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email');
    const pass = document.querySelector('#pass');

    loginUser(email.value, pass.value)
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
        if (email.value === '' || pass.value === '') {
          console.log('Debes completar todos los campos');
        } else if (errorCode === 'auth/invalid-email') {
          alert('La dirección de correo electrónico no es válida.');
        } else if (errorCode === 'auth/user-disabled') {
          alert('El usuario esta desactivado');
        } else if (errorCode === 'auth/user-not-found') {
          alert('Usuario no encontrado');
        } else if (errorCode === 'auth/wrong-password') {
          alert('Password incorrecto');
        }
        console.log(errorCode, errorMessage);
      });
  });

  // Iniciar sesión con google
  const signInWithGoogle = divElement.querySelector('#google');
  signInWithGoogle.addEventListener('click', () => {
    signInGoogle()
      .then((result) => {
        // The signed-in user info.
        window.location.hash = '#/News';
        console.log(result.user);
        console.log('Iniciaste sesión con google');
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // ...
        console.log(errorCode, errorMessage, email);
      });
  });

  userStateChange((user) => {
    if (user) {
      // const displayName = user.displayName;
      const email = user.email;
      // const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      console.log(email, emailVerified, uid);
    }
  });
  return divElement;
};

export { login };
