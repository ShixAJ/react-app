const { basename } = require("path");
//var -> function scope
//let -> block scope

const { inherits } = require("util");

//const -> block scope
const person = {
  name: "Mosh",
  //walk: funcion() {}, //pre ES6 method
  walk() {
    console.log(this);
  },
  talk() {}, //ES6+
};

person.walk();

const walk = person.walk.bind(person);

console.log(walk);

//if you call this as a method of an object it will always return a reference to that object
//otherwise it will return the global object, but here because STRICT Mode is enabled we get undefined

//How to make this always return a reference to the object
//functions in javascript are also objects they have properties and methods we can use
//bind allows us to set the object we want "this" to reference

/* Arrow Functions */
const square = function (number) {
  //pre ES6
  return number * number;
};

const square1 = (number) => {
  //ES6
  return number * number;
};

//if only one parameter we don't need the () around number
//if its one return we could put it on a single line without return
const square2 = (number) => number * number;

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter(function (job) {
  return job.isActive;
}); // pre ES6
const activeJobs1 = jobs.filter((job) => job.isActive); //ES6 (get all jobs where isActive = true)

/* Arrow Function and this */
//Arrow functions don't rebind this
const person1 = {
  talk() {
    setTimeout(function () {
      console.log("this", this); // here this will take the global object because it is called in a callback function (setTimeout) which is a standalone function
    }, 1000);
  },
};
const person2 = {
  talk() {
    setTimeout(() => {
      console.log("this", this); // here this won't rebind itself and it will always inherits this in the context the code was defined
    }, 1000);
  },
};
person.talk();

/* ES6 Array .map */
const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}</li>`); //Template literals: `${argument placeholder}`
console.log(items);

/* Object Destructuring */

const address = {
  street: "",
  city: "",
  country: "",
};
const street1 = address.street;
const city1 = address.city;
const country1 = address.country;

//this is equivalent to the above 3 lines
const { street: st, city, country } = address; // : st (alias) thats how we defined a new const and setting it to street

/* Spread Operator (...) */
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined1 = [...first, ...second];

/* Classes */

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("Walk");
  }
}

const pers = new Person("Charles");

/* Inheritance */

class Teacher extends Person {
  //extends mean Teacher inherits from Person
  constructor(name, degree) {
    super(name); //whenever you are inheriting you have to call the base class constructor using super and pass the variables that are common
    this.degree = degree;
  }
  teach() {
    console.log("Teach");
  }
}

const teacher = new Teacher("Mosh");

/* Modules */

//writing code in multiple files, each file is called a module. ES6+ modules are supported natively
// objects we define in modules are private by default
// in order to make the classes visible in other files we have to make it public using "export" and import them in the files you want to use them in
// import { Person } from "./person"

/* Named and Default Exports */

// we can export multiple objects from a file, these are named exports, import { Teacher } from "./teacher"
// "export default" means its the main thing you are exporting from a module, so we can import it as follows:
// import Teacher from "./teacher" (no need for curly braces, named exports go inside {})
