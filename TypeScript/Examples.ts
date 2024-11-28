/* tuple */
const tuplePerson: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]
} = {
  name: 'John',
  age: 30,
  hobbies: ['Reading', 'Swimming'],
  role: [1, 'author']
}

/* --------------------------------Unions------------------------------ */
function combine(input1: string | number, input2: string | number) {
  if (typeof input1 === 'number' && typeof input2 === 'number') return input1 + input2;
  return input1.toString() + input2.toString();
}
console.log(combine(1, 2));
console.log(combine('Hello', 'World'));

// Discriminated unions
interface Bird {
  type: 'BIRD',
  flyingSpeed: number,
}

interface Horse {
  type: 'HORSE',
  runningSpeed: number,
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed = 0;

  switch (animal.type) {
    case 'BIRD':
      speed = animal.flyingSpeed
      break;

      case 'HORSE':
        speed = animal.runningSpeed;
        break;
  
    default:
      break;
  }

  console.log(`The animal is moving at speed ${speed} km/hr`);
}

moveAnimal({ type: 'HORSE', runningSpeed: 70 })
/* --------------------------------Unions------------------------------ */

/* --------------------------------Type casting------------------------------ */
const inputMethod1 = <HTMLInputElement>document.getElementById("input-element")!;
inputMethod1.value = "Something"
const inputMethod2 = document.getElementById("input-element")! as HTMLInputElement;
inputMethod2.value = "Something"
/* --------------------------------Type casting------------------------------ */


/* Unknown type */
let fullNameString: string;
let fullNameAny: any = 'John';
let fullNameUnknown: unknown = 'Smith';
fullNameString = fullNameAny;
fullNameString = fullNameUnknown; // throws error

/* Never type */
function generateError(message: string, code: number): never {
  throw {
    message,
    code
  }
}
generateError('Something', 500);

/* Literal type */
let size: 'sm' | 'md' | 'lg';
size = 'md';
console.log(size);

/* Assertions */
type Pizza = {
  name: string;
  toppings: number;
};

let pizza: Pizza = {
  name: "Blazing Inferno",
  toppings: 5,
};

/* Funtions as types */
let sum: (a: number | string, b: number | string) => string | number
sum = combine;

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
  // return JSON.parse(obj).name; // Here, typescript won't auto suggest the properties available in pizza object

  // return (<Pizza>JSON.parse(obj)).name; // But here, it'll. Because of assertions. This is one way of specifying the assertions.

  return (JSON.parse(obj) as Pizza).name; // This is the another and preffered way.
}

getNameFromJSON(serialized);

/* Enums */
enum Size {
  small,
  medium,
  large,
}

enum Size {
  xLarge = 3,
}

console.log(Size.small, Size[0], Size[Size.small]); // 0 small small

// inline enums
const enum Sizes {
  small,
  medium,
  large,
}

/* --------------------------------ReadOnly------------------------------ */
class Employee {
  readonly empCode: number;
  empName: string;
  
  constructor(code: number, name: string)     {
      this.empCode = code;
      this.empName = name;
  }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error
emp.empName = 'Bill'; 
/* --------------------------------ReadOnly------------------------------ */


/* --------------------------------Classes, inheritance and interface------------------------------ */
interface IPizzaSizes {
  availableSizes: string[];
}

abstract class PizzaSizes implements IPizzaSizes {
  constructor(protected sizes: string[]) { }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

interface IPizza2 extends IPizzaSizes {
  toppings: string[];
}

class Pizza2 extends PizzaSizes implements IPizza2 {
  public toppings: string[] = []; // public keyword is optional since it's the default

  constructor(
    private name: string, // if we provide access modifiers here, we dont have to declare the variables above. The variables are created automatically with the same name as this(name, price and sizes).
    readonly price: number,
    public sizes: string[]
  ) {
    super(sizes);
  }

  addToppings(topping: string) {
    this.toppings.push(topping);
  }

  updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get pizzaName() {
    return this.name;
  }

  set updateName(name: string) {
    if (name) {
      this.name = name;
    }
  }
}

const pizza2 = new Pizza2("pizza2", 2, ["small", "medium"]);
pizza2.addToppings("pepparoni");
pizza2.updateSizes(["large"]);
console.log(pizza2.availableSizes);

// interface function
interface AddFn {
  (input1: number, input2: number): number,
}

const addFn: AddFn = (input1: number, input2: number) {
  return input1 + input2;
};

// optional properties
interface OptionalPerson {
  name: string,
  age?: number,
}

let optionalPerson: OptionalPerson = {
  name: "Someone"
}
/* --------------------------------Classes, inheritance and interface------------------------------ */


/* --------------------------------typing this------------------------------ */
function handleClick(this: HTMLAnchorElement, event) {
  event.preventDefault();

  console.log(this.className); // type of this can be inferred based on first parameter of the enclosing function
}

const element = document.getElementById('btn_submit') as HTMLElement;
element.addEventListener('click', handleClick, false);

/* --------------------------------typing this------------------------------ */


/* --------------------------------typeof and keyof------------------------------ */
const person = {
  name: "John",
  age: 25,
};

type Person = typeof person;

type PersonKeys = keyof Person;

type PersonTypes = Person[PersonKeys];

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, "name");

/* Map type - Make al properties in T radonly */
function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

// custom map type def
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Make all properties required by removing the '?' modifier
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

const newPerson = freeze(person);
/* --------------------------------typeof and keyof------------------------------ */


/* --------------------------------Intersection types------------------------------ */
interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  card: string;
  cvc: string;
}

interface Paypal {
  email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPaypal = Order & Paypal;

const order: Order = {
  id: '123456',
  amount: 1123123,
  currency: 'USD'
}

const orderCard: CheckoutCard = {
  ...order,
  card: '1000 2000 3000 4000',
  cvc: '123'
}

type Combined = string | number;
type Numeric = number | boolean;

type Universal = Combined & Numeric;

let someType: Universal = ""; //throws error
let someType2: Universal = 10;
/* --------------------------------Intersection types------------------------------ */


/* --------------------------------Augmenting type declarations------------------------------ */
// tsconfig.json
{
  "compilerOptions": {
    "typeRoots": ["src/@types", "node_modules/@types"]
  }
}
// <any>.ts
_.mixin({
  log(string) {
    console.log(':::', string)
  }
})

// @types/lodash/index.d.ts
import * as lodash from 'lodash';

declare module 'lodash' {
  interface LoDashStatic {
    log(item: string): void;
  }
}

// or

window.someProperty = 25;

declare global {
  interface Window {
    someProperty: number;
  }
}
/* --------------------------------Augmenting type declarations------------------------------ */


/* --------------------------------'this' type safety------------------------------ */
class Department {
  name: string;
  static id: string;

  static departmentId(id: string) {
    // this.id -> will not work as static properties and methods are not accessible inside non static methods/properties.
    Department.id = id;
    return { id };
  }

  constructor(n: string) {
    this.name = n;
  }

  department(this: Department) {
    console.log(this.name);
  }
}
/* --------------------------------'this' type safety------------------------------ */


/* --------------------------------singleton pattern------------------------------ */
class MyClass
{
    private static instance: MyClass;

    private constructor(id: string)
    {
        //...
    }

    static createInstance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this.instance || (this.instance = new this("somthing"));
    }
}
const myClassInstance = MyClass.createInstance();
/* --------------------------------singleton pattern------------------------------ */


/* --------------------------------Interface vs type------------------------------ */
interface Window {
  title: string
}

interface Window {
  ts: number
}

let variable: Window = {
  title: "",
  ts: 0
}

type Window2 = {
  title: string
}

type Window2 = {
  ts: number
}
/* --------------------------------Interface vs type------------------------------ */


/* --------------------------------Index properties------------------------------ */
interface ErrorInfo {
  // errorCode: number; // this won't work in indexed property
  [prop: string]: string;
}
/* --------------------------------Index properties------------------------------ */