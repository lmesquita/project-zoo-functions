const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find((person) => person.id === id).responsibleFor.shift();
  const returnAge = [];
  const listAnimal = data.species.find((anm) => idAnimal.includes(anm.id)).residents;
  listAnimal.forEach((anm) => {
    returnAge.push(anm.age);
  });
  const maxAge = Math.max(...returnAge);
  const returnInfos = listAnimal.find((oldAnimal) => oldAnimal.age === maxAge);
  return Object.values(returnInfos);
}

module.exports = getOldestFromFirstSpecies;
