class List<T> {
    private lists: T[];

    addItem(item: T) {
        this.lists.push(item);
    }

    getLists(): T[] {
        return this.lists;
    }
}

class Pizzas {
    constructor(private name: string, private price: number){

    }
}

const pizzas = new List<Pizzas>();
pizzas.addItem(new Pizzas('pepparoni', 25));
const lists = pizzas.getLists();

/* --------------------------------generic function------------------------------ */
// 1.
function merge<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}

const result = merge({ name: 'Someone' }, { age: 20 });
console.log(result.age);

const result2 = merge({ name: 'Someone' }, 20); // this works without any errors but the result is not as expected. So, in this case, we use type constraints to tell typescript about exact types

// type constraints
function mergeWithTypeConstraints<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}

const result3 = mergeWithTypeConstraints({ name: 'Someone' }, { age: 20 }); // this works as expected
const result4 = mergeWithTypeConstraints({ name: 'Someone' }, 20); // this won't
console.log(result.age);

// 2.
interface Lengthy {
    length: number,
}

function countAndDescribe<T extends Lengthy>(value: T): [T, string] {
    let descriptionText = 'Got no value';

    if (value.length) {
        descriptionText = `Got ${value.length} element(s)`;
    }

    return [value, descriptionText];
}

console.log(countAndDescribe("Hello word!")) // 12
console.log(countAndDescribe(["Hello", "World"])); // 2
/* --------------------------------generic function------------------------------ */

/* --------------------------------Utility Types------------------------------ */
// Partial
interface CourseGoal {
    title: string,
    description: string,
    completedOn: Date,
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    // let courseGoal: CourseGoal = {}; // this will not work since we are assigning empty object to an CourseGoal type. For that, we can turn CourseGoal to an Partial type which converts all the properties into optional.
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completedOn = date;

    return courseGoal as CourseGoal; // Finally, we have to convert the Partial CourseGoal type to an CourseGoal
}

// ReadOnly
let names: Readonly<string[]> = ["Arun", "Kumar"];
names.push("Suresh"); // this wont work as it's readonly

interface IEmployee {
    empCode: number;
    empName: string;
  }
  
  let emp1: Readonly<IEmployee> = {
    empCode:1,
    empName:"Steve"
  }
  
  emp1.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'
  emp1.empName = 'Bill'; // Compiler Error: Cannot change readonly 'empName'
/* --------------------------------Utility Types------------------------------ */