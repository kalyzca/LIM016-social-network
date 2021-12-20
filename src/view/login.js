export default () => {
  const viewLogin = `
    <form action="">
      <div>
        <label for="">Usuario </label>
        <input type="text" placeholder="Ingrese su usuario" >
      </div>
      <div><label for="">Contraseña</label>
        <input type="password" placeholder="Ingrese su contraseña">
      </div>
      <div>
        <input type="submit" value="Log In" >
      </div>
    </form>
  `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'message');
  divElement.innerHTML = viewLogin;
  return divElement;
};