import { viewHeader } from './header.js';

const profile = () => {
  const viewProfile = `
    <div class= "viewProfile">
    <img src= "../img/usuario-femenino.png" id="userPhoto" alt="imagen-perfil" class = "userPhoto">
    </div>
    <h1> viewProfile </h1>
`;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'content');
  divElement.innerHTML = viewHeader + viewProfile;
  return divElement;
};

export {
  profile,
};
