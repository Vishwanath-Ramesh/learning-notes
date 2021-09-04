const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const newPerson = {
  firstName: "Jane",
  lastName: "Doe",
};

console.log("Function borrowing", person.getFullName.apply(newPerson));
