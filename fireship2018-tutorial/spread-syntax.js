const pikachu = { name: "Pikachu" };
const stats = { hp: 40, attack: 60, defense: 45 };

// Bad Object Code
// Verbose and We are Mutating the Original Object

pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;
pikachu["defense"] = stats.defense;

// OR this if we just need to update a Single Property

const lvl10 = Object.assign(pikachu, stats);
const lvl11 = Object.assign(pikachu, { hp: 45 });

// Good Object Code
// We are creating a New Obj from Left to Right

const lvl12 = { ...pikachu, ...stats };
const lvl13 = { ...pikachu, hp: 45 };

// or in PUSHING Array Example

let pokemon = ["Arbok", "Raichu", "Sandshrew"];

// Bad Array Pushing Code

pokemon.push("Bulbasaur");
pokemon.push("Metapod");
pokemon.push("Weedle");

// Good Array PUshing Code

// this is Equivalent to an Array.Push('')
pokemon = [...pokemon, "Bulbasaur", "Metapod", "Weedle"];

// this is Equivalent to an Array.Shift('')
pokemon = ["Bulbasaur", ...pokemon, "Metapod", "Weedle"];

console.log(pokemon)