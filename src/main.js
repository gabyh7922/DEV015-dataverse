import data from './data/dataset.js'; //importa data
import { renderCard } from './view.js'; //importa view

const root = document.querySelector("#root"); //constante que selecciona el div

for (let i = 0; i < data.length; i++) { //for que recorre mi data
    if (i in [2,4,5,6,7,8,9,10]){;  //aca estas trabajando filtro
        root.appendChild(renderCard(data[i]));  // muestra el resultado y se crea en base al recorrido
    }
}


 