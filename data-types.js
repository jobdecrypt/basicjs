var intNum = 42;
var floatNum = 3.14157;
var nanNum = NaN;
var infNum = Infinity;
var ninfNum = -Infinity;
var str = "Hello Worlds";
var boolTrue = true;
var boolFalse = false;
var lst = ["a", "b", 3, 4, 5, "f"];
var obj = { name: "fred", age: 35, hasChildren: true };
var i = 5;
var obj_list = [i, { foo: i + 1, a: [1, 2, 3] }, { bar: i + 2 }];
// The next line will replace the value inside "obj" variable

obj.name = "Jane";

// The next line will replace the value inside "obj" variable but in a "Bracket Notation" []

obj["name"] = "Jake";

console.log(obj);
