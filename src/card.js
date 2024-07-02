

export const renderCard = (card) => {  //creando la constante para importarla en el main
  
  const div = document.createElement("div"); //creando el div
  div.classList.add("card"); //agregando la clase card

  const ul = document.createElement("ul"); //creando el ul

  const datos = `
    <li itemprop="name">Nombre: ${card['name']}</li>
    <li itemprop="shortDescription">Description: ${card['shortDescription']}</li>
    <li itemprop="yearOfBirth">Año de Nacimiento: ${card['facts']['yearOfBirth']}</li>
    <li itemprop="yearOfDeath">Fecha de Muerte: ${card['facts']['yearOfDeath']}</li>
    <li itemprop="birthPlace">Lugar de Nacimiento: ${card['facts']['birthPlace']}</li>
    <li itemprop="mainField">Especialida: ${card['facts']['mainField']}</li>
`;//creando tarjeta que contiene informacion, debe ser trabajada en css

  const info = `
<p itemprop="imageUrl"><img src="${card['imageUrl']}" /></p>
    `;

  ul.innerHTML = datos; //indicandole al ul que contendra el bloque html de la tarjeta


  const infoDiv = document.createElement("div"); //creando el div
  infoDiv.innerHTML = info; //indicandole al div que contendra el bloque html de la imagen
  div.appendChild(infoDiv);

  div.appendChild(ul); //pegandole un hijo al div, asignandlo ul como hijo al div

  return div; //retornando div
    
}

