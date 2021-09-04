function getFullName() {
  return this.firstName + " " + this.lastName;
}

const person = {
  firstName: "John",
  lastName: "Doe",
};

const newPerson = {
  firstName: "Jane",
  lastName: "Doe",
};

getFullName.call(person, "call");
getFullName.call(person, "call");
