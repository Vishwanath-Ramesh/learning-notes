// ? Equivalents
class Animal {
  eat() {}

  sleep = () => {};
}

// which is eqal to

function Animal() {
  this.sleep = function () {};
}

Animal.prototype.eat = function () {};

const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const newPerson = {
  firstName: "Jane",
  lastName: "Doe",
};

function logPerson(from) {
  console.log(`Called using ${from} - ${this.getFullName()}`);
}

// bind
logPerson.bind(person)("bind");

// call
logPerson.call(person, "call");

// apply
logPerson.apply(person, ["apply"]);

// function borrowing
console.log("Function borrowing", person.getFullName.apply(newPerson));

// currying
function multiply(x, y) {
  return x * y;
}

const multiplyByTwo = multiply.bind(this, 2);

console.log("Currying", multiplyByTwo(5));

// Questions asked from NineLeaps
// function outer() {
//   function inner() {
//     console.log("inner result: ", inner);
//   }
//   var inner = 10;
//   inner();
// }
// outer();

// function outer() {
//   function inner() {
//     console.log("inner result: ", inner);
//   }
//   inner();
//   var inner = 10;
// }
// outer();

// function test() {
//   console.log(a); // undefined
//   console.log(b); //
//   var a = 10;
//   let b = 20;

//   for(){

//   }
// }

// function x(a,a){
//     console.log(a);
// }

// x(1,2);

// var x =  (a,a) => {
//    console.log(a);
// }

// x(1,2);

var name = "Arun Kumar";
let me = {
  name: "Ashutosh Verma",
  thisInArrow: () => {
    console.log("My name is " + this.name);
  },
  thisInRegular() {
    console.log("My name is " + this.name);
  },
};
me.thisInArrow();
me.thisInRegular();

function name() {
  const test = {
    fname: "",
    lname: "",
    age: 234,
  };

  const { fname, ...rest } = test;
}

const { a, b, ...rest } = [1, 2, 3, 4, 5];

console.log(a, b, rest);
