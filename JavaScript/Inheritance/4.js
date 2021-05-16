const eater = (state) => ({
  eat() {
    console.log(`${state.name} is eating.`);
  },
});

const sleeper = (state) => ({
  sleep() {
    console.log(`${state.name} is sleeping.`);
  },
});

const barker = (state) => ({
  bark() {
    console.log(`${state.name} is barking`);
  },
});

const meower = (state) => ({
  meow() {
    console.log(`${state.name} is meowing`);
  },
});

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    Object.assign(this, eater(this), sleeper(this));
  }
}

class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;

    Object.assign(this, eater(this), sleeper(this));
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy);
    this.breed = breed;

    Object.assign(this, barker(this));
  }
}

class Cat extends Animal {
  constructor(name, energy, breed) {
    super(name, energy);
    this.breed = breed;

    Object.assign(this, meower(this));
  }
}

const dog = new Dog("Dog", 100, "German Shepherd");
dog.eat();

const cat = new Cat("Cat", 100, "Some cat breed");
console.log(cat.meow());
