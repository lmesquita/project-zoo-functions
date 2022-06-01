const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
  } return {};
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName());
