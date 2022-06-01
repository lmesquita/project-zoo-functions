const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const selectSpecies = (receiveSpecies) => (
    receiveSpecies.filter((specie) => ids.includes(specie.id)));
  return selectSpecies(data.species);
}

module.exports = getSpeciesByIds;
