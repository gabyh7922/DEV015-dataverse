

export const renderCard = (card) => {  //creando la constante para importarla en el main
  
  const ul = document.createElement("ul"); //creando el ul
  ul.classList.add("card"); //agregando la clase card

  // revisamos si tiene fecha de la muerte. porque no todos tienen este dato
  const yearOfDeath = card['facts']['yearOfDeath'] ? card['facts']['yearOfDeath'] : '-';
  const datos = `
    <li itemtype="imageUrl" itemscope="imageUrl"><img src="${card['imageUrl']}" /></li>
    <li itemtype="name" itemscope="name">Nombre: ${card['name']}</li>
    <li itemtype="shortDescription" itemscope="shortDescription">Description: ${card['shortDescription']}</li>
    <li itemtype="yearOfBirth" itemscope="yearOfBirth">Año de Nacimiento: ${card['facts']['yearOfBirth']}</li>
    <li itemtype="yearOfDeath" itemscope="yearOfDeath">Fecha de Muerte: ${yearOfDeath}</li>
    <li itemtype="birthPlace" itemscope="birthPlace">Lugar de Nacimiento: ${card['facts']['birthPlace']}</li>
    <li itemtype="mainField" itemscope="mainField">Especialida: ${card['facts']['mainField']}</li>
`;//creando tarjeta que contiene informacion, debe ser trabajada en css

  ul.innerHTML = datos; //indicandole al ul que contendra el bloque html de la tarjeta
  return ul; //retornando div
}

