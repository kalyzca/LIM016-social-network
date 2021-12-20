export default () => {
const viewRegister = `
    <h1> viewRegister </h1>
`;
const divElement = document.createElement('div');
divElement.setAttribute('id', 'message');
divElement.innerHTML = viewRegister;
return divElement;
   }