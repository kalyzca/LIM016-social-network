/* eslint-disable no-alert */
/* eslint-disable no-console */
import { loginUser, stateChange, signInGoogle } from '../lib/firebase/auth.js';

const login = () => {
  const viewLogin = `
    <form id='formLogin' class = 'formLogin'>
      <h2 class = 'tituloLogin'>Sinchi Warmi</h2>
      <input type='text' placeholder='Ingrese su usuario' id ='email' class='emailLogin'>
      <input type='password' placeholder='Ingrese su contraseña' id = 'pass' class='passLogin'>
      <a class ='forgetpass' href = ''>¿Haz olvidado tu contraseña?</a>  
      <input type='submit' value='LogIn' id='save'>
      <p id="textVerified"></p>
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

  const formLogin = divElement.querySelector('#formLogin'); // divElement ya es un elemento de html
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

      stateChange((user) => {
        if (user) {
          //const user = auth.currentUser;
          const displayName = user.displayName;
          const uid = user.uid;
          const email = user.email;
          const photoURL = user.photoURL;
          //console.log(uid);
          //console.log(email);
          const emailVerified = user.emailVerified;
          const textVerified = document.getElementById("textVerified");
          if(emailVerified === false){
            textVerified.value="Email no verificado";
          }
          else textVerified.value="Email verificado";
          console.log(email, displayName, uid, emailVerified,photoURL);
        }
      });
  });
  const google = divElement.querySelector('#google');
  google.addEventListener('click', () => {
    console.log('google');
    signInGoogle()
   /* .then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      //console.log(credential, "CREDENTIAL");
    })
    .catch(()=>{
      
    })*/
    
  });
  return divElement;
};

export { login };
