/* Assertions */
type Pizza = {
  name: string;
  toppings: number;
};

let pizza: Pizza = {
  name: "Blazing Inferno",
  toppings: 5,
};

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

/* Classes, inheritance and interface */
interface IPizzaSizes {
  availableSizes: string[];
}

abstract class PizzaSizes implements IPizzaSizes {
  constructor(protected sizes: string[]) {}

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
    private name: string,
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

/* typing this */
function handleClick(this: HTMLAnchorElement, event) {
  event.preventDefault();

  console.log(this.className); // type of this can be inferred based on first parameter of the enclosing function
}

// element.addEventListener('click', handleClick, false);

/* typeof and keyof */
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

// Intersection types
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

// Augmenting type declarations
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
