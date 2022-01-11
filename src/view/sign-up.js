import { createUser } from '../lib/firebase/auth.js';
import { saveUser } from '../lib/firebase/firestore.js';

const signUp = () => {
  const viewSignUp = `
    <form class='formSignUp' id='formSignUp'>
      <h2 class = 'tituloSignUp'>Regístrate</h2>    
      <input type='text' placeholder='Ingrese su usuario' id ='userSignUp' class='userSignUp'>
      <input type='text' placeholder='Ingrese su correo electrónico' id ='emailSignUp' class='emailSignUp'>
      <input type='password' placeholder='Ingrese su contraseña' id='passSignUp' class='passSignUp'>
      <input type='submit' value='Registrarme' id='signUp' >
      <img class = 'women' src='../img/mujeresunidas_celu.png'>
    </form>
  `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentSignUp');
  divElement.setAttribute('class', 'contentSignUp');
  divElement.innerHTML = viewSignUp;

  // eslint-disable-next-line no-console
  console.log('print sign up');
  const registro = divElement.querySelector('#formSignUp'); // divElement ya es un elemento de html
  // eslint-disable-next-line no-console
  console.log(registro);

  registro.addEventListener('submit', (event) => {
    const email = document.getElementById('emailSignUp');
    const pass = document.getElementById('passSignUp');
    const user = document.getElementById('userSignUp');
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(email.value, pass.value, user.value);
    // funcion para crear user en firebase auth
    createUser(email.value, pass.value)
      .then(() => {
        // email.value = '';
        // pass.value = '';
        // user.value = '';
        // eslint-disable-next-line no-console
        console.log('El user se creo correctamente');
        saveUser(email.value, pass.value, user.value);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          // eslint-disable-next-line no-console
          console.log('La contraseña no es lo suficientemente segura.La contraseña debe tener al menos 6 caracteres.');
        } else if (errorCode === 'auth/invalid-password') {
          // eslint-disable-next-line no-console
          console.log('El valor dió al password no es válido. Debe ser una string con al menos seis caracteres.');
        } else if (errorCode === 'auth/internal-error') {
          // eslint-disable-next-line no-console
          console.log('Error interno');
        } else if (errorCode === 'auth/invalid-email') {
          // eslint-disable-next-line no-console
          console.log('La dirección de correo electrónico no es vállida y debe ser un string..');
        } else if (errorCode === 'auth/email-already-in-use') {
          // eslint-disable-next-line no-console
          console.log('Ya existe una cuenta con la dirección de correo electrónico proporcionada.');
        } else if (errorCode === 'auth/operation-not-allowed') {
          // eslint-disable-next-line no-console
          console.log('las cuentas de correo electrónico / contraseña no están habilitadas. Habilite las cuentas de correo electrónico / contraseña en Firebase Console, en la pestaña Auth.');
        } else if ((user.value === '') || (email.value === '') || (pass.value === '')) {
          // eslint-disable-next-line no-console
          console.log('Debes completar todos los campos');
        }

        // eslint-disable-next-line no-console
        console.log(errorCode, errorMessage);
      });

    // window.location.hash = '#/registro';

  });

  return divElement;
};

export {
  signUp,
  // printSignUp,
};
