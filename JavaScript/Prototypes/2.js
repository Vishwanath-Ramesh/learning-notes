const personProperties = {
  getName: function () {
    return `Name is ${this.name}`;
  },
  getAge: function () {
    return `Name is ${this.age}`;
  },
};

function Person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;
  person.getName = personProperties.getName;
  person.getAge = personProperties.getAge;

  return person;
}

const arun = Person("Arun", 25);
console.log(arun.getName());

// ? Drawbacks
/* 
Here we refactored to use a common object from outside. Suppose if we want to create a new property for a 'Person', then we have to define that property in the 
'personProperties' object and the same should be referenced in the 'Person' object itself. We have to touch both the objects. So, we can even refactor this. 
*/
