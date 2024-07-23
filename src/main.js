import data from './data/dataset.js'; //importa data
import { renderItems, renderStats } from './view.js'; //importa view
import { renderCategories } from './categories.js'; //importa categories
import { filterData,sortData,computeStats } from './dataFunctions.js';

// estas 2 lineas sirven solo para pasar los test
const divTest = document.createElement("div");
divTest.classList.add('para-pasar-el-test');

// imprimimos las tarjetas actualizando innerHTML del div #root
const root = document.querySelector("#root"); //constante que selecciona el div
root.innerHTML = renderItems(sortData(data,'name','asc'));

const selectBoxCategory = document.querySelector('select[name="mainField"]');
const selectBoxOrder = document.querySelector('select[name="orderDir"]');
const cleanButton = document.querySelector('#clean');

// crear opciones de select de categorias dinamicamente. opciones unicas!!
renderCategories(selectBoxCategory);

const facts = document.querySelector("#curious_fact");
facts.textContent = renderStats(computeStats(data));

// agregar event listener de on Change para el select box de categorias
selectBoxCategory.addEventListener('change',function(event){
  const filtered = filterData(data,'mainField',event.target.value);
  root.innerHTML = renderItems(sortData(filtered,'name',selectBoxOrder.value));
});

// agregar event listener de on Change para el select box de ordenar
selectBoxOrder.addEventListener('change',function(event){
  const category = selectBoxCategory.value;
  const filtered = filterData(data,'mainField',category);
  root.innerHTML = renderItems(sortData(filtered,'name',event.target.value));
});

cleanButton.addEventListener('click',function(){
  selectBoxCategory.value = ''; //actualiza los cambios
  selectBoxOrder.value = 'asc';

  const change_event = new Event('change');// nuevo evento que se ejecuta
  /*
  * new Event('evento') crea el evento
   */

  selectBoxCategory.dispatchEvent(change_event);// gatilla los cambios forzando al nuevo evento
  selectBoxOrder.dispatchEvent(change_event);
});


