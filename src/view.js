import { renderCard } from './card.js'; //importa view

export const renderItems = (data,filterByCategory='',orderDir='asc') => {

  const filtered = [];// array que contendra datos filtrados

  // filtrar tarjetas
  for (let i = 0; i < data.length; i++) {
  
    const cardData = data[i];
    // si estamos filtrando por una categoria especifica o la categria es vacia=''
    if( (filterByCategory !== '' && cardData['facts']['mainField'].includes(filterByCategory)) || filterByCategory === ''){
      filtered.push(cardData);
    }
  }

  // ordenar por nombre
  if( orderDir === 'desc'){
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

