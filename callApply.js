const specialPerson = {
  fisrtName: "Lim",
  LastName: "theTubelight",
  salary: 20000,
  getFullName: function () {
    console.log(this.fisrtName, this.LastName);
  },
  chargeBill: function (amount) {
    this.salary = this.salary - amount;
  },
};

const friendlyPerson = {
  fisrtName: "Pathok",
  LastName: "shibBujhe",
  salary: 30000,
};

const greatPerson = {
  fisrtName: "Fiha",
  LastName: "Shomikoron",
  salary: 50000,
};

const friendlyChargeBill = specialPerson.chargeBill.bind(friendlyPerson);

friendlyChargeBill(6000);

// specialPerson.chargeBill(1000);
// specialPerson.chargeBill(100);
// console.log(specialPerson.salary);
console.log(friendlyPerson);
friendlyChargeBill(2000);
console.log(friendlyPerson);
console.log(specialPerson);
