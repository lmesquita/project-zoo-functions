const data = require('../data/zoo_data');

function isManager(id) {
  if (id) {
    return data.employees.some((manager) => manager.managers.includes(id));
  }
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const list = data.employees.filter((listEmployee) => listEmployee.managers.includes(managerId));
  return list.map((name) => `${name.firstName} ${name.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
