const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const countChildren = entrants.filter((person) => person.age < 18).length;
  const countAdult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const countSenior = entrants.filter((person) => person.age >= 50).length;
  return {
    child: parseInt(`${countChildren}`, 10),
    adult: parseInt(`${countAdult}`, 10),
    senior: parseInt(`${countSenior}`, 10),
  };
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) { return 0; }
  const valueChild = (entrants.filter((person) => person.age < 18).length)
  * data.prices.child;
  const valueAdult = (entrants.filter((person) => person.age >= 18 && person
    .age < 50).length) * data.prices.adult;
  const valueSenior = (entrants.filter((person) => person.age >= 50).length)
  * data.prices.senior;
  return valueChild + valueAdult + valueSenior;
}

module.exports = { calculateEntry, countEntrants };
