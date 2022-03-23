// Bad String Code
const horse = {
  name: "horsy",
  size: 32,
  skills: "jumping",
  age: 3,
};

let bio = horse.name + " is a " + horse.size + " horse skills" + horse.skills;

// Good String Code

const { name, size, skills } = horse;

let bio2 = `${name} is a ${size} horse skills ${skills}`;

console.log(bio2);

// Functional Strings ADVANCE TAG

function horseAge(str, age) {
  const ageStr = age > 5 ? "old" : "young";
  // below the ${str[0]} is to get the const ageStr. It will not result an Output if there's no ${str[0]}
  return `${str[0]}${ageStr} at ${age} years`;
}

// underneath we don't use "Parenthesis" we just add `` right after the function horseAge
let bio3 = horseAge`This horse is ${horse.age}`;

console.log(bio3);
