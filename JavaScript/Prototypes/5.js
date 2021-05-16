function Person(name, age) {
  //  let person = Object.create(Person.prototype); // * This is taken care by the 'new' keyword

  this.name = name;
  this.age = age;

  //  return person; // * This is taken care by the 'new' keyword
}

Person.prototype.getName = function () {
  return `Name is ${this.name}`;
};

Person.prototype.getAge = function () {
  return `Name is ${this.age}`;
};

const arun = new Person("Arun", 25);
console.log(arun.getName());

// ? Drawbacks
/* 
Here we're creating the object using the function. Since JavaScript is a living(continuos updates) language, so from ES6, we have a support to achieve the same thing using 'Class'.
*/
