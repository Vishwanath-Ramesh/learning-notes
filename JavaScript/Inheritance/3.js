class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

const dog = new Dog("Dog", 100, "German Shepherd");
dog.eat();

// ? Drawbacks
/* 
Here we're extending the common functions from the super class in the derived class, from this we solved the code duplication issue. What if another class comes in which needs the same behaviour or properties that the super class has.
In that case, we can create a new class and move all the common methods to that class and inherting from it. But this introduces another issues, since the classes are tightly coupled, if super class get changed in future all of the child classes get affected.
So instead of doing that, we can use 'Composition'. 
*/
