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

specialPerson.chargeBill(1000);
specialPerson.chargeBill(100);
console.log(specialPerson.salary);
