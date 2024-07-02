import { renderCard } from './card.js'; //importa view

export const renderItems = (data,filterBy=null,orderBy='asc') => {
  
  const root = document.querySelector("#root"); //constante que selecciona el div

  for (let i = 0; i < data.length; i++) {
  
      const cardData = data[i];
      if( (filterBy !== null && cardData['facts']['mainField'].includes(filterBy)) || filterBy === null){
        const card = renderCard(cardData);
        root.appendChild(card);
      }
  }
}

