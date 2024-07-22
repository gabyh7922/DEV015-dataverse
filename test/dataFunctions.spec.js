import { filterData, sortData, computeStats } from '../src/dataFunctions.js';
import data from '../src/data/dataset.js';
// Test de filterData
describe('filterData', () => {
  it('debería filtrar los datos por mainField correctamente', () => {
    const filteredData = filterData(data, 'Matemáticas');
    expect(filteredData).toBeInstanceOf(Array);
    expect(filteredData.length).toBeGreaterThan(0);
  });
});
// Test de sortData
describe('sortData', () => {
  it('debería ordenar los datos por nombre de manera ascendente', () => {
    const sortedData = sortData(data, 'name', 'asc');
    expect(sortedData[0].name < sortedData[1].name).toBe(true);
  });
  it('debería ordenar los datos por nombre de manera descendente', () => {
    const sortedData = sortData(data, 'name', 'desc');
    expect(sortedData[0].name > sortedData[1].name).toBe(true);
  });
});
// Test de computeStats
describe('computeStats', () => {
  it('debería computar estadísticas básicas de los datos', () => {
    const stats = computeStats(data);
    expect(stats.count).toBe(data.length);
  });
});