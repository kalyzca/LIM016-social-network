import { loginUser } from '../lib/firebase/auth.js';

const login = () => {
  const viewLogin = `
    <form id='formLogin' class = 'formLogin'>
      <h2 class = 'titulo'>Sinchi Warmi</h2>
      <label for='email'>Usuario </label>
      <input type='text' placeholder='Ingrese su usuario' id ='email' >
      <label for='pass'>Contraseña</label>
      <input type='password' placeholder='Ingrese su contraseña' id = 'pass'>
      <a class ='forgetpass' href = ''>¿Haz olvidado tu contraseña?</a>
      
      <input type='submit' value='LogIn' id='save'>
      <div class='iconos_sesion'>
        <img src="../img//google.png" alt="img-google">
        <img src='../img/facebook.png'> 
      </div>
      <a class = 'btn-registerUser' href="#/sign-up"><h6>¿No tienes cuenta?</h6></a>
      <img src='../img/mujeresunidascelupeq.png'>
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
    loginUser(email.value, pass.value);
    window.location.hash = '#/news';
  });

  return divElement;
};

export { login };
