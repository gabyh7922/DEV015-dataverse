import { renderCard } from './card.js'; // importa vista

export const renderItems = (data) => {
  // Crear una cadena concatenando los outerHTML de cada tarjeta renderizada
  return data.map(item => renderCard(item).outerHTML).join('');
}

