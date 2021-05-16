function Person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.getName = function () {
    return `Name is ${this.name}`;
  };

  person.getAge = function () {
    return `Name is ${this.age}`;
  };

  return person;
}

const arun = Person("Arun", 25);
console.log(arun.getName());

// ? Drawbacks
/* 
Here the functions are created inside the 'Person' object itself, so if we create multiple instances of a person, for each time, the same functions is created 
occupying the memory space. This can be refactored to a common object.
*/
