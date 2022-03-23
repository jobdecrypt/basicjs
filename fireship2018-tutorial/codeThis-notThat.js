// from the YT Tutorial -> https://www.youtube.com/watch?v=Mus_vwhTCq0

// ex1: console log table

const foo = { name: "tom", age: 30, nervous: false };
const bar = { name: "dick", age: 40, nervous: false };
const baz = { name: "harry", age: 50, nervous: true };

// BAD CODE

/* console.log(foo);
console.log(bar);
console.log(baz); */

// GOOD CODE
// Computed Property Names

console.log("%c My Friends", "color: orange; font-weight: bold;");
console.log({ foo, bar, baz });
console.table([foo, bar, baz]);

// ===================================================

// BENCHMARKING PERFORMANCE

console.time("BENCHMARKING PERFORMANCE -> looper");

let i = 0;
while (i < 100000) {
  i++;
}

console.timeEnd("BENCHMARKING PERFORMANCE -> looper");

// ===================================

// STACK TRACE LOG

const deleteMe = () => console.trace("bye bye database!");

deleteMe();

// ============================================================

// DESTRUCTURING

// Bad Code

/* function feed(animal) {
  return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
} */

// Good Code

/* function feed2({ name, meal, diet }) {
  return `Feed ${name} ${meal} kilos of ${diet}`;
} */

// OR

let job1 = {
  animal: {
    name: "jamie",
    meal: "oats",
    diet: "none",
  },
};

function feed3({ animal }) {
  /* let animal = {
    name: "jamie",
    meal: "oats",
    diet: "none",
  }; */
  const { name, meal, diet } = animal;
  //   console.log(`Feed ${(name, meal, diet)}`);
  return `DESTRUCTURING -> Feed ${name} ${meal} ${diet}`;
}

console.log(feed3(job1));
