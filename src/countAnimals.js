const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const receiveQty = data.species.map((anm) => `${anm.name}:${anm.residents.length}`);
    const object = {};
    receiveQty.forEach((stringAnimal) => {
      const [anm, qty] = stringAnimal.split(':');
      object[anm] = parseInt(qty, 10);
    });
    return object;
  }
  if (animal.sex) {
    const receiveQty = data.species.find((anm) => anm.name === animal.specie)
      .residents.filter((aux) => aux.sex === animal.sex).length;
    return receiveQty;
  }
  const receiveQty = data.species.find((anm) => anm.name === animal.specie).residents.length;
  return receiveQty;
}

module.exports = countAnimals;
