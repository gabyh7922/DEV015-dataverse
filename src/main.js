import data from './data/dataset.js'; //importa data
import { renderItems } from './view.js'; //importa view
import { renderCategories } from './categories.js'; //importa categories

// imprimimos las tarjetas actualizando innerHTML del div #root
const root = document.querySelector("#root"); //constante que selecciona el div
root.innerHTML = renderItems(data,'',"asc");

// crear opciones de select de categorias dinamicamente
renderCategories();

// agregar event listener de on Change para el select box de categorias
const selectBoxCategory = document.querySelector('select[name="mainField"]');

selectBoxCategory.addEventListener('change',function(event){
    const selectBoxOrder = document.querySelector('select[name="orderDir"]');
    const orderDir = selectBoxOrder.value;

    root.innerHTML = renderItems(data,this.value,orderDir);
});

// agregar event listener de on Change para el select box de ordenar
const selectBoxOrder = document.querySelector('select[name="orderDir"]');

selectBoxOrder.addEventListener('change',function(event){
    const currentCategory = selectBoxCategory.value;
    root.innerHTML = renderItems(data,currentCategory,this.value);
});

 