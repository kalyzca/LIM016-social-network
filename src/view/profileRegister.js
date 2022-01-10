const profileRegister = () => {
  const viewRegister = `
  <form class="profileRegister">
  <h2>Ingresa tus datos</h2>
  <img src="">
  <p>cambiar foto de perfil</p>
  <input type="text" id="fullName" class="fullName" placeholder = "Nombre completo">
  <input type="text" id="nickname" class="nickname" placeholder = "Apodo">
  <input type="text" id="ocupation" class="ocupation" placeholder = "Ocupación">
  <input type="email" id="email" class="email" placeholder = "Correo electrónico">
  <select name="gender" id="gender" class = "gender" placeholder = "Género">
      <option style = "color:gray" disabled selected>Género</option>
      <option value="Femenino">Femenino</option>
      <option value="Masculino">Masculino</option>
      <option value="Prefiero no responder">Prefiero no responder</option>
  </select>
  <input type="text" id="age" class="age" placeholder = "Edad">
  <input type="text" id="introduceYourself" class="introduceYourself" placeholder = "Preséntate">
  <p>Aquí puedes dejar información de cómo contactarte si deseas 
    ayudar de forma gratuita a mujeres que estén pasando por 
    situaciones de violencia</p>
  <p>(*)Campo obligatorio</p>
  <label for="btnSave">GUARDAR</label>
  <input type="submit" id="btnSave" class="btnSave">
</form>
`;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'content');
  divElement.innerHTML = viewRegister;
  return divElement;
};

export {
  profileRegister,
};
