import data from './data/dataset.js'; //importa data
import { renderItems } from './view.js'; //importa view
import { renderCategories } from './categories.js'; //importa categories

// imprimimos las tarjetas actualizando innerHTML del div #root
const root = document.querySelector("#root"); //constante que selecciona el div
root.innerHTML = renderItems(data,'',"asc");

const selectBoxCategory = document.querySelector('select[name="mainField"]');
const selectBoxOrder = document.querySelector('select[name="orderDir"]');
const cleanButton = document.querySelector('#clean');


// crear opciones de select de categorias dinamicamente. opciones unicas!!
renderCategories(selectBoxCategory);


// agregar event listener de on Change para el select box de categorias
selectBoxCategory.addEventListener('change',function(){
  const orderDir = selectBoxOrder.value;
  root.innerHTML = renderItems(data,this.value,orderDir);
});

// agregar event listener de on Change para el select box de ordenar
selectBoxOrder.addEventListener('change',function(){
  const currentCategory = selectBoxCategory.value;
  root.innerHTML = renderItems(data,currentCategory,this.value);
});

cleanButton.addEventListener('click',function(){
  selectBoxCategory.value = ''; //actualiza los cambios
  selectBoxOrder.value = 'asc';

  let change_event = new Event('change');// nuevo evento que se ejecuta
  /*
  * new Event('evento') crea el evento
   */

  selectBoxCategory.dispatchEvent(change_event);// gatilla los cambios forzando al nuevo evento
  selectBoxOrder.dispatchEvent(change_event);
});


