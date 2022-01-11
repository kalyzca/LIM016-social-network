import { loginUser } from '../lib/firebase/auth.js';

const login = () => {
  const viewLogin = `
    <form id='formLogin' class = 'formLogin'>
      <h2 class = 'tituloLogin'>Sinchi Warmi</h2>
      <input type='text' placeholder='Ingrese su usuario' id ='email' class='emailLogin' >
      
      <input type='password' placeholder='Ingrese su contraseña' id = 'pass' class='passLogin'>
      <a class ='forgetpass' href = ''>¿Haz olvidado tu contraseña?</a>
      
      <input type='submit' value='LogIn' id='save'>
      <div class='iconos_sesion'>
        <img src="../img//google.png" alt="img-google">
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
  const save = divElement.querySelector('#formLogin'); // divElement ya es un elemento de html
  save.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email');
    const pass = document.querySelector('#pass');
    // console.log(email.value, pass.value);
    loginUser(email.value, pass.value);
    window.location.hash = '#/news';
  });

  return divElement;
};

export { login };
