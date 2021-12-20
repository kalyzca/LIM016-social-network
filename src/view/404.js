export default () => {
const viewDifferent = `
    <h1> 404 </h1>
    <h2>Página no encontrada</h2>
`;
const divElement = document.createElement('div');
divElement.setAttribute('id', 'message');
divElement.innerHTML = viewDifferent;
return divElement;
}