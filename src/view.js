import { renderCard } from './card.js'; //importa view

export const renderItems = (data,filterBy=null,orderBy='asc') => {

  const filtered = [];// array que contendra datos filtrados

  // filtrar tarjetas
  for (let i = 0; i < data.length; i++) {
  
    const cardData = data[i];
    if( (filterBy !== null && cardData['facts']['mainField'].includes(filterBy)) || filterBy === null){
      filtered.push(cardData);
    }
  }

  // ordenar por nombre
  if( orderBy === 'desc'){
    // ordenar descendiente
    filtered.sort((a,b)=>b.name.localeCompare(a.name));
  }
  else{
    // ordenar ascendiente
    filtered.sort((a,b)=>a.name.localeCompare(b.name));
  }

  // imprimir tarjetas
  let cards = "";
  for (let i = 0; i < filtered.length; i++) {

      const card = renderCard(filtered[i]);
      cards += card.outerHTML;
  }

  return cards;
}

