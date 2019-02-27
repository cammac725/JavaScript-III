/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding - the value of 'this' will be the whole window or console object.
* 2. Implicit binding - when a function or method is called upon an object, 'this' is bound to that object (to the left of the dot).
* 3. Explicit Binding - when the methods call, apply or bind are used, 'this' is explicitly bound to that function and allows arguments to be passed.
* 4. New Keyword Binding -  when a constructor function is used, 'this' is bound to the specific instance of the object that is created by that function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this);



// Principle 2

// code example for Implicit Binding
const guitar = {
  make: 'Fender',
  model: 'Stratocaster',
  nickname: 'Strat',
  pickups: function () {
    return `The ${this.make} ${this.model}, also called the ${this.nickname}, has 3 single-coil pickups.`;
  }
}
console.log(guitar.pickups());



// Principle 3

// code example for New Binding
function Car(make) {
  this.make = make;
  this.owned = function () {
    console.log(`I have owned 5 different ${this.make} cars in my life.`);
  }
}
const honda = new Car('Honda');
honda.owned();



// Principle 4

// code example for Explicit Binding
const car = {
  name: "Shelby Cobra"
}

const adjectives = [" muscle", " powerful", " badass"];

function showcase(args) {
  return `Words used to describe the ${this.name}:${args}!`;
}

console.log(showcase.call(car, adjectives));