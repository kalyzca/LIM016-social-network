const profileRegister = () => {
  const viewRegister = `
    <h1> viewRegister </h1>
`;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'content');
  divElement.innerHTML = viewRegister;
  return divElement;
};

export {
  profileRegister,
};
