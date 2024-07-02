import { renderCard } from './card.js'; //importa view

export const renderItems = (data,filterBy='category',orderBy='asc') => {
  
  const root = document.querySelector("#root"); //constante que selecciona el div

  for (let i = 0; i < data.length; i++) {
    if (i in [2,4,5,6,7,8,9,10]){
      const card = renderCard(data[i]);
      root.appendChild(card);
    }
  }
}

