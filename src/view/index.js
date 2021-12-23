// IMPORTAR TODAS LAS VISTAS
import { login } from './login.js';
import { news } from './news.js';
import { profile } from './profile.js';
import { profileRegister } from './profileRegister.js';
import Different from './404.js';

const components = {
  Login: login,
  News: news,
  Profile: profile,
  Registro: profileRegister,
  different: Different,
};

export { components }; // lo exportamos a view-controler
