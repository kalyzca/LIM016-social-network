// eslint-disable-next-line import/no-unresolved
import { components } from '../view/index.js';

const changeView = (route) => {
  // vamos a asociar el nombre de la ruta con el componente
  const mainContainer = document.getElementById('mainContainer');
  // para que no agregue nada porque solo quiero que cambie
  mainContainer.innerHTML = ' ';
  switch (route) {
    case '#/': {
      return mainContainer.appendChild(components.News());
    }
    case '#/login': {
      return mainContainer.appendChild(components.Login());
    }
    case '#/registro': {
      return mainContainer.appendChild(components.Registro());
    }
    case '#/profile': {
      return mainContainer.appendChild(components.Profile());
    }
    default:
      return mainContainer.appendChild(components.different());
  }
};
export { changeView };
