// ? Basics
function* genFunc() {
  yield "A";
  yield "B";

  return "C";
}

const func = genFunc();
console.log(func.next()); // {value: "A", done: false}
console.log(func.next()); // {value: "B", done: false}
console.log(func.next()); // {value: "C", done: true}
console.log([...genFunc()]); // ["A", "B"]

// ? Calling one generator function inside another generator function
function* bar() {
  yield "X";
  yield "Y";

  return "Completed";
}

function* foo() {
  yield "A";
  yield yield* bar(); // yield* - retrieves only the yield values not return
  yield "Z";
}

console.log([...foo()]); //  ["A", "X", "Y", "Completed", "Z"]

// ? Passing data to generator function
function* dataConsumer() {
  console.log("Started");
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  console.log("Completed");
}
const dc = dataConsumer();
console.log(dc.next()); // Started  {value: undefined, done: false}
console.log(dc.next("One")); // 1. One {value: undefined, done: false}
console.log(dc.next("Two")); // 2. Two  Completed  {value: undefined, done: true}
