/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import { GoogleAuthProvider, FacebookAuthProvider } from '../lib/firebase/config.js';
import {
  loginUser,
  //  userStateChange,
  signInGoogle,
  signInFacebook,
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
      </div>
      <div class= 'forget'>
        <a class ='forgetpass' id='forgetpass' href= '#/'>
          <h6>¿Has olvidado tu contraseña?</h6>
        </a>  
      </div>
      <input type='submit' value='LogIn' id='save'>
      <p id="textVerified"></p>
      
      <h6>O bien ingresa con</h6>
      <div class='iconos_sesion'>
        <img src="../img/google.png" alt="img-google" class="btn-google" id="btn-google">
        <img src='../img/facebook.png' id='btn-facebook' class= 'btn-facebook'> 
        <img src='../img/github.jpeg' id='btn-github' class= 'btn-github'> 
      </div>
      <div class = 'registerUser'>
        <h6>¿No tienes cuenta?,</h6><a href="#/sign-up"><h6>Regístrate</h6></a>
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
  // Iniciando sesión con correo y contraseña
  const formLogin = divElement.querySelector('#formLogin'); // divElement ya es un elemento de html
  formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailLogin = document.querySelector('#emailLogin');
    const pass = document.querySelector('#pass');

    loginUser(emailLogin.value, pass.value)
      .then((userCredential) => {
        const userEmailVerified = userCredential.user.emailVerified;
        if (userEmailVerified === true) {
          window.location.hash = '#/news';
          console.log('Usuario logueado');
        } else {
          // muestra mensaje de error si no verifico por correo
          console.log('Error, el usuario no esta logueado');
        }
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
  });

  // Iniciando sesion con google
  const google = divElement.querySelector('#btn-google');
  google.addEventListener('click', () => {
    signInGoogle()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(credential);
        console.log(token);
        console.log(user);
        console.log('iniciaste sesion con google', user);
        window.location.hash = '#/news';
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
      });
  });
  // Iniciando sesion con facebook
  const facebook = divElement.querySelector('#btn-facebook');
  facebook.addEventListener('click', () => {
    signInFacebook()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(credential);
        console.log(accessToken);
        console.log(user);
        console.log('iniciaste sesion con facebook', user);
        window.location.hash = '#/news';
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
      });
  });
  return divElement;
};

export { login };

// userStateChange((user) => {
//     const inputEmail = document.getElementById('inputemail');
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const name = user.displayName;
//       const email = user.email;
//       const emailVerified = user.emailVerified;
//       const uid = user.uid;
//       const phone = user.phoneNumber;
//       const photo = user.photoURL;
//       const dataUser = [uid, email, emailVerified, name, photo, phone];
//       inputEmail.value = dataUser[1];
//       console.log(dataUser);
//       console.log('usuario ha iniciado sesion');
//     } else {
//       // User is signed out
//       console.log('usuario ha cerrado sesion');
//     }
//   });

// userStateChange((user) => {
//   if (user) {
//     // const user = auth.currentUser;
//     const displayName = user.displayName;
//     const uid = user.uid;
//     const email = user.email;
//     const photoURL = user.photoURL;
//     // console.log(uid);
//     // console.log(email);
//     const emailVerified = user.emailVerified;
//     const textVerified = document.getElementById('textVerified');
//     if (emailVerified === false) {
//       textVerified.value = 'Email no verificado';
//     } else textVerified.value = 'Email verificado';
//     console.log(email, displayName, uid, emailVerified, photoURL);
//   }
// )};
