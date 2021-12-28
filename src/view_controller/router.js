import { components } from '../view/index.js';
import { createCredential, getCredential } from '../view/login.js';

const changeView = (route) => {
  // vamos a asociar el nombre de la ruta con el componente
  const mainContainer = document.getElementById('mainContainer');
  // para que no agregue nada porque solo quiero que cambie
  mainContainer.innerHTML = ' ';
  switch (route) {
    case '#/': {
      mainContainer.appendChild(components.News());
      break;
    }
    case '#/login': {
      mainContainer.appendChild(components.Login());
      createCredential(getCredential);
      break;
    }
    // case '#/registro': {
    //   return mainContainer.appendChild(components.Registro());
    // }
    case '#/profile': {
      mainContainer.appendChild(components.Profile());
      break;
    }
    default:
      mainContainer.appendChild(components.different());
      break;
  }
};
export { changeView };
