function Person(name, age) {
  //  let person = Object.create(personProperties); // * As we know, there are 2 things happening in here, 1. Creating an empty object and referring it by using 'this'. 2. Update the '__proto' ([[prototype]]) property. #1 is taken care automatically by the 'new' keyword but what about the #2? To answer that, we need to undertand 'functions' first. So, functions are actually both function and object. Every function comes with an built in object called 'prototype'

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

const arun = new Person("Arun", 25); /* The 'new' keyword does 3 things. #1. Creating an empty object and we can refer it by using 'this'. #2. Sets the '__proto__' property on 'this' to 'prototype' property on the object('Person'), not a caopy, just a reference. #3. Return the automatically created object ('this').  */
console.log(arun.getName());

// ? Drawbacks
/* 
Here we're creating the object using the function. Since JavaScript is a living(continuos updates) language, so from ES6, we have a support to achieve the same thing using 'Class'.
*/
