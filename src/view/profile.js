import { viewHeader } from './header.js';

const profile = () => {
  const viewProfile = `
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
