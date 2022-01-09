import { components } from '../view/index.js';
import { authSingUp } from '../view/sign-up.js'

const changeView = (route) => {
  // vamos a asociar el nombre de la ruta con el componente
  const mainContainer = document.getElementById('mainContainer');
  // para que no agregue nada porque solo quiero que cambie
  mainContainer.innerHTML = ' ';

  switch (route) {
    case '#/news': {
      return mainContainer.appendChild(components.News());
    }
    case '#/': {
      return mainContainer.appendChild(components.Login());
    }
    case '#/registro': {
      mainContainer.appendChild(components.Registro());
      break;
    }
    case '#/profile': {
      mainContainer.appendChild(components.Profile());
      break;
    }
    case '#/sign-up': {
      mainContainer.appendChild(components.SignUp());
      printSignUp();
      break;
    }
    case '#/sign-up':{
      mainContainer.appendChild(components.SignUp());
      authSingUp();
    }
    default:
      return mainContainer.appendChild(components.different());

  }
};
export { changeView };
