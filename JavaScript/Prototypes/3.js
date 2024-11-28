const personProperties = {
  getName: function () {
    return `Name is ${this.name}`;
  },
  getAge: function () {
    return `Name is ${this.age}`;
  },
};

function Person(name, age) {
  let person = Object.create(personProperties); // 'Object.create' creates a new object, using an existing object as the prototype of the newly created object. Actually, it sets the '__proto' ([[prototype]]) property as the passed object value under the hood.

  person.name = name;
  person.age = age;

  // * The below code is not necessary when using 'Object.crete'
  // person.getName = personProperties.getName;
  // person.getAge = personProperties.getAge;

  return person;
}

const arun = Person("Arun", 25);
console.log(arun.getName());

// ? Drawbacks
/* 
Here we are creating the properties outside of the 'Person' object and using it in inside. Instead of doing this, we can an option to create those propreties in 
the 'Person' object itself without having to create memory for each initialization. i.e., Prototype(Property on a function that points to an object or It's an object that every function has) 
*/
