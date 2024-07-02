import data from './data/dataset.js'; //importa data
import { renderItems } from './view.js'; //importa view

const root = document.querySelector("#root"); //constante que selecciona el div
root.innerHTML = renderItems(data,null,"asc");

 