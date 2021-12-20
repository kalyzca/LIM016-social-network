export default () => {
const viewLogin = `
    <h1> Login </h1>
`;
const divElement = document.createElement('div');
divElement.setAttribute('id', 'message');
divElement.innerHTML = viewLogin;
return divElement;

}