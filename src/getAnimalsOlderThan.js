const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((objAnimal) => objAnimal.name === animal)
    .residents.every((verifyAge) => verifyAge.age >= age);
}

module.exports = getAnimalsOlderThan;
