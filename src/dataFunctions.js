export const filterData = (data, filterBy='',orderDir='asc') => {

  const filtered = [];// array que contendra datos filtrados
  // filtrar tarjetas
  data.forEach(cardData => {
    // Si estamos filtrando por una categoría específica o la categoría es vacía
    if ((filterBy !== '' && cardData['facts']['mainField'].includes(filterBy)) || filterBy === '') {
      filtered.push(cardData);
    }
  });

  // ordenar por nombre
  if( orderDir === 'desc'){//debe llamarse value pero consideramos mejor llamarlo asi por que es solo un orden
    filtered.sort((a,b)=>b.name.localeCompare(a.name));
  }

  else{
    // ordenar ascendiente
    filtered.sort((a,b)=>a.name.localeCompare(b.name));

  }

  return filtered;
}