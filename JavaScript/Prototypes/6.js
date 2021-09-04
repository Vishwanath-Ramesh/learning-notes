class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return `Name is ${this.name}`;
  }

  getAge() {
    return `Name is ${this.age}`;
  }
}

const arun = new Person("Arun", 25);
console.log(arun.getName());

/* 
Here we're creating the object using the function. Since JavaScript is a living(continuos updates) language, so from ES6, we have a support to achieve the same thing using 'Class'.
*/
