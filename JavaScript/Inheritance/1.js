function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

Animal.prototype.sleep = function () {
  console.log(`${this.name} is sleeping.`);
};

function Dog(name, energy, breed) {
  this.name = name;
  this.energy = energy;
  this.breed = breed;
}

Dog.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

Dog.prototype.sleep = function () {
  console.log(`${this.name} is sleeping.`);
};

const animal = new Animal("Tiger", 100);
console.log(animal.eat());

const dog = new Dog("Dog", 100, "German Shepherd");
console.log(dog.eat());

// ? Drawbacks
/* 
Here we have created 2 objects 'Animal' and 'Dog'. Both have some functions which is almost similar. Instead of duplicating the code in both the objects,
we can move the common functions to the base class.
*/
