
export const cfieldCounts = (dataset) => {
  // Usar reduce para contar las ocurrencias de cada campo
  const fieldCounts = dataset.reduce((acc, card) => {
    card.facts.mainField.forEach(dato => {
      acc[dato] = (acc[dato] || 0) + 1;
    });
    return acc;
  }, {});

  // Obtener el número de ítems únicos
  const nItems = Object.keys(fieldCounts).length;

  // Calcular los porcentajes
  const fieldPercentages = Object.fromEntries(
    Object.entries(fieldCounts).map(([key, value]) => [key, `${Math.round((value / nItems) * 100)}%`])
  );

  // Crear el elemento p y agregar el texto
  const p = document.createElement("p");
  p.textContent = `
    Ciencias de la Computación: ${fieldPercentages['Ciencias de la Computación'] || '0%'} ,
    Matemáticas: ${fieldPercentages['Matemáticas'] || '0%'} ,
    Química: ${fieldPercentages['Química'] || '0%'}
  `.trim();

  return p;
}
