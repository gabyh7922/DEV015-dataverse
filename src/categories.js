import data from './data/dataset.js'; //importa data

export const renderCategories = () => {
  
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
  
  //constante que selecciona el select de categorias
  const selectBox = document.querySelector('select[name="mainField"]');

  // agregando la primera opcion
  const option = document.createElement("option");
  option.value = '';
  option.text = "- Filtrar por Categoría -";
  selectBox.add(option);

  // rellenar el selectBox con opciones de categorias unicas
    for(const uniqueCat of uniqueCategories){
      const option = document.createElement("option");
      option.value = uniqueCat;
      option.text = uniqueCat;
      selectBox.add(option);
    }

  }