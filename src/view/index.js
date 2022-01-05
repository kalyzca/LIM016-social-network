// IMPORTAR TODAS LAS VISTAS
import { login } from './login.js';
import { signUp } from './sign_up.js';
import { news } from './news.js';
import { profile } from './profile.js';
// import { profileRegister } from './profileRegister.js';
import Different from './404.js';

const components = {
  Login: login,
  News: news,
  Profile: profile,
  SignUp: signUp,
  // Registro: profileRegister,
  different: Different,
};

export { components }; // lo exportamos a view-controler
