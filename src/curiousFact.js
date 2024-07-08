
export const cfieldCounts = (dataset) => {  //creando la constante para importarla en el main
  const fieldCounts = {}; //curiousFact
  let nItems = 0;
  for (const card of dataset){ 
    for (const dato of card['facts']['mainField']) {
      //fieldCounts[dato] = fieldCounts[dato] ? fieldCounts[dato]+1 : 1;
      if (fieldCounts[dato]){
        fieldCounts[dato] += 1;
      }
      else {
        fieldCounts[dato] = 1;
        nItems += 1;
      }
    }
  }
  const fieldPercentages = {}
  for (const [key, value] of Object.entries(fieldCounts)){
    fieldPercentages[key] = String(Math.round((value / nItems)*100)) + '%';
  }
  //console.log(fieldPercentages)


  const p = document.createElement("p"); //creando el div
  p.textContent = 'Ciencias de la Computación :   ' +  fieldPercentages['Ciencias de la Computación'] +' Matemáticas : ' +fieldPercentages['Matemáticas'] +' Química : '+ fieldPercentages['Química']  ;
  return p; //retornando div
  
}

