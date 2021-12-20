import {components} from '../view/index.js'
const changeView = (route)=>{
//vamos a asociar el nombre de la ruta con el componente
const mainContainer = document.getElementById('mainContainer');
mainContainer.innerHTML = " " //para que no agregue nada porque solo quiero que cambie
switch (route) {
    case "#/":
        {return mainContainer.appendChild(components.news())};  
    case "#/login":
        {return mainContainer.appendChild(components.login())};
    case "#/registro": 
        {return mainContainer.appendChild(components.registro())};
    case "#/profile":
        {return mainContainer.appendChild(components.profile())};
    default:
        return mainContainer.appendChild(components.different());
}
}
export{changeView}