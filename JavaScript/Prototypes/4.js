function Person(name, age) {
  let person = Object.create(Person.prototype);

  person.name = name;
  person.age = age;

  return person;
}

Person.prototype.getName = function () {
  return `Name is ${this.name}`;
};

Person.prototype.getAge = function () {
  return `Name is ${this.age}`;
};

const arun = Person("Arun", 25);
console.log(arun.getName());

// ? Drawbacks
/* 
Here we're creating the object and delegating the object properties to it's prototypes by ourselves. In JavaScript, we have a way to handle this using 'new' keyword.
When an object is instantiated using 'new' keyword on a function, JavaScript automatically creates the object and return it for us. 
*/
