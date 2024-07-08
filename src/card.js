

export const renderCard = (card) => {  //creando la constante para importarla en el main
  
  const ul = document.createElement("ul"); //creando el ul
  ul.classList.add("card"); //agregando la clase card

  // revisamos si tiene fecha de la muerte. porque no todos tienen este dato
  const yearOfDeath = card['facts']['yearOfDeath'] ? card['facts']['yearOfDeath'] : '-';
  const datos = `
    <li itemtype="imageUrl" itemscope="imageUrl" class="item"><img src="${card['imageUrl']}" /></li>
    <li itemtype="name" itemscope="name" class="item">Nombre: ${card['name']}</li>
    <li itemtype="shortDescription" itemscope="shortDescription" class="item">Description: ${card['shortDescription']}</li>
    <li itemtype="yearOfBirth" itemscope="yearOfBirth" class="item">Año de Nacimiento: ${card['facts']['yearOfBirth']}</li>
    <li itemtype="yearOfDeath" itemscope="yearOfDeath" class="item">Fecha de Muerte: ${yearOfDeath}</li>
    <li itemtype="birthPlace" itemscope="birthPlace" class="item">Lugar de Nacimiento: ${card['facts']['birthPlace']}</li>
    <li itemtype="mainField" itemscope="mainField" class="item">Especialida: ${card['facts']['mainField']}</li>
`;//creando tarjeta que contiene informacion, debe ser trabajada en css

  ul.innerHTML = datos; //indicandole al ul que contendra el bloque html de la tarjeta
  return ul; //retornando div
}

