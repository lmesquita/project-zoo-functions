const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

const returnListAnimal = (day) => {
  const listAnimals = [];
  data.species.filter((anm) => anm.availability.includes(day))
    .forEach((aux) => listAnimals.push(aux.name));
  return listAnimals;
};
const listDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const listAllAnimals = [];
data.species.forEach((anm) => listAllAnimals.push(anm.name));

function isAnimal(scheduleTarget) {
  if (listAllAnimals.includes(scheduleTarget)) {
    return data.species.find((anm) => anm.name === scheduleTarget).availability;
  }
}

function isDay(scheduleTarget) {
  if (listDays.includes(scheduleTarget)) {
    const schedule = hours[scheduleTarget];
    const objectSchedule = { [scheduleTarget]: {} };
    objectSchedule[scheduleTarget]
      .officeHour = `Open from ${schedule.open}am until ${schedule.close}pm`;
    const listAnimals = [];
    data.species.filter((anm) => anm.availability
      .includes(scheduleTarget)).forEach((aux) => listAnimals.push(aux.name));
    objectSchedule[scheduleTarget].exhibition = listAnimals;
    return objectSchedule;
  }
}

function isMonday(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return {
      [scheduleTarget]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
}

function noParam() {
  const objectReturn = {};
  listDays.forEach((day) => {
    if (day === 'Monday') {
      objectReturn[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      objectReturn[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: returnListAnimal(day),
      };
    }
  });
  return objectReturn;
}

function getSchedule(scheduleTarget) {
  if (isMonday(scheduleTarget)) return isMonday(scheduleTarget);
  if (isAnimal(scheduleTarget)) return isAnimal(scheduleTarget);
  if (isDay(scheduleTarget)) return isDay(scheduleTarget);
  return noParam();
}

module.exports = getSchedule;
