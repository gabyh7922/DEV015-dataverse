import data from './data/dataset.js'; //importa data

export function renderCategories(selectBox) {
  
  const uniqueCategories = [];// array que contendra categorias unicas

  // filtrar categorias unicas
  for (let i = 0; i < data.length; i++) {
  
    const cardData = data[i];
    for(const category of cardData['facts']['mainField']){
      if(!uniqueCategories.includes(category)){
        uniqueCategories.push(category);
      }
    }
  }

  // agregando la primera opcion
  const defaultOption = document.createElement("option");
  defaultOption.value = '';
  defaultOption.text = "- Filtrar por Categoría -";
  selectBox.add(defaultOption);

  // rellenar el selectBox con opciones de categorias unicas que construimos en arriba
  for(const uniqueCat of uniqueCategories){
    const option = document.createElement("option");
    option.value = uniqueCat;
    option.text = uniqueCat;
    selectBox.add(option);
  }

}

//hacer rebase : volver a sentar la base , debes clonar la rama que sale desde dev pero dev tiene una version , 
//debor revisar si mis cabios son compatibles con la rama
//git stash guarda tus cambios en algun lugar
//para mover de rama, git checkout dev = habla de cambio de rama especifica
//git checkout - me muevo a la rama anterior
// git rebase Nombre-rama_dev me une los cambios 
// git stash pop me une los cambios que guarde con git stash de mi rama 
