import { createUser } from '../lib/firebase/auth.js';
import { saveUser } from '../lib/firebase/firestore.js';

const signUp = () => {
  const viewSignUp = `
    <form id='formSignUp'>
    <h2 class = 'titulo'>Sign Up</h2>
    <label for='userSignUp'>Usuario </label>
    <input type='text' placeholder='Ingrese su usuario' id ='userSignUp' >
    <label for='emailSignUp'> Email </label>
    <input type='text' placeholder='Ingrese su correo' id ='emailSignUp' >
    <label for='passSignUp'>Contraseña</label>
    <input type='password' placeholder='Ingrese su contraseña' id = 'passSignUp'>
    <input type='submit' value='signUp' id='signUp' >
    <img src='../img/mujeresunidascelupeq.png'>
    </form>
  `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentSignUp');
  divElement.innerHTML = viewSignUp;
  return divElement;
};

const printSignUp = () => {
  // eslint-disable-next-line no-console
  console.log('print sign up');
  const registro = document.getElementById('formSignUp'); // divElement ya es un elemento de html
  // eslint-disable-next-line no-console
  console.log(registro);

  registro.addEventListener('submit', (event) => {
    const email = document.getElementById('emailSignUp');
    const pass = document.getElementById('passSignUp');
    const user = document.getElementById('userSignUp');
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(email.value, pass.value, user.value);
    // funcion para crear usuario en firebase auth
    createUser(email.value, pass.value)
      .then(() => {
        // email.value = '';
        // pass.value = '';
        // user.value = '';
        // eslint-disable-next-line no-console
        console.log('El usuario se creo correctamente');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
        // eslint-disable-next-line no-alert
          alert('The password is too weak.');
        } else if (errorCode === 'auth/invalid-email') {
        // eslint-disable-next-line no-alert
          alert('The email is too weak.');
        } else if (errorCode === 'auth/email-already-in-use') {
        // eslint-disable-next-line no-alert
          alert('The email in in use.');
        } else if (errorCode === 'auth/operation-not-allowed') {
        // eslint-disable-next-line no-alert
          alert('The operation is not allowed');
        }
        // eslint-disable-next-line no-console
        console.log(errorCode, errorMessage);

        if (user.value === '' && email.value === '' && pass.value === '') {
        // eslint-disable-next-line no-console
          console.log('Debes completar todos los campos');
        } else if (user.value === '') {
        // eslint-disable-next-line no-console
          console.log('Debes rellenar tu usuario');
        } else if (email.value === '') {
        // eslint-disable-next-line no-console
          console.log('Debes rellenar tu email');
        } else if (pass.value === '') {
        // eslint-disable-next-line no-console
          console.log('Debes rellenar tu password');
        } else saveUser(email.value, pass.value, user.value);
      });
      
    window.location.hash = '#/registro';
  });
};

export {
  signUp,
  printSignUp,
};
