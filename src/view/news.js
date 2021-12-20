export default () => {
  const viewHome = `
    <h2>Bienvenida a la Red Social de Sinchi warmi</h2>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;
  return divElement;
};
