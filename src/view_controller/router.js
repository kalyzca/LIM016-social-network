import { components } from '../view/componentes.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/': { return container.appendChild(components.home()); }
    case '#/login': { return container.appendChild(components.login()); }
    default: { return container.appendChild(components.sitioerror()); }
  }

  // console.log(route);
};

export { changeView };
