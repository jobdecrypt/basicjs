// Video 3-6 (3:56): Primitive Types: Pass By Value Into Function

let a = "hello";

const f1 = function f1(b) {
  let y = b;
  return y;
};

var result = f1(a);
console.log(result);
