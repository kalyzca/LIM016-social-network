// Este es el punto de entrada de tu aplicacion
import { changeView} from './view controler/router.js'
import { myFunction } from './lib/index.js';

myFunction();

const init = () =>{
changeView(window.location.hash); //para que no solo se muestre la vista cuando cambia sino tambien cuando se recarga
window.addEventListener('hashchange', () => changeView(window.location.hash));
}
window.addEventListener('load', init);