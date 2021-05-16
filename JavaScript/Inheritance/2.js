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
  // this.name = name;
  // this.energy = energy;
  // The above lines can be refactored into
  Animal.call(this, name, energy);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // Need to delegate the Dog methods to the Animal methods.

Dog.prototype.constructor = Dog; // If you see, the constructor of the 'dog' object points to 'Animal' instead of 'Dog' because of the line 22. Because Dog's constructor was replaced by Animal's constructor. So we need to re-assign to point to Dog

const dog = new Dog("Dog", 100, "German Shepherd");
dog.eat();

// ? Drawbacks
/* 
Here we're delegating the Dog's methods to the Animal's methods. i.e., we're inheriting the properties from another object. From ES6, we can able to implement
the same behaviour using inheritance
*/
