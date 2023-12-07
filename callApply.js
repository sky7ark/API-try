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
specialPerson.chargeBill.call(greatPerson, 2000);
specialPerson.chargeBill.apply(friendlyPerson, [150]);

friendlyChargeBill(1000);

// specialPerson.chargeBill(1000);
// specialPerson.chargeBill(100);
// console.log(specialPerson.salary);
console.log(friendlyPerson.salary);
friendlyChargeBill(2000);
console.log(friendlyPerson.salary);
//console.log(specialPerson);
console.log(greatPerson.salary);
