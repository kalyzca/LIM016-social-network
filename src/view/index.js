//IMPORTAR TODAS LAS VISTAS
import Login from './login.js'
import News from './news.js'
import Profile from './profile.js'
import Registro from './registro.js'
import Different from './404.js'

const components = {
    login     : Login,
    news      : News,
    profile   : Profile,
    registro  : Registro,
    different : Different
}

export {components} //lo exportamos a view-controler