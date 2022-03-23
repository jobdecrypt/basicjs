const orders = [500, 30, 99, 15, 223];

// Bad Loop Code

// const total = 0;
// const withTax = [];
// const highValue = [];
// for (i = 0; i < orders.length; i++) {
//   // Reduce
//   total += orders[i];

//   // Map
//   withTax.push(orders[i] * 1.1);

//   // Filter
//   if (orders[i] > 100) {
//     highValue.push(orders[i]);
//   }
// }

// Good Loop Code

// Reduce
// acc = accumulated value. cur  = current value
const total2 = orders.reduce((acc, cur) => acc + cur);

// Map
// add tax, map them to the value and multiply percent tax
const withTax2 = orders.map((v) => v * 1.1);

// Filter
// getting the Values over than 100
const highValue2 = orders.filter((v) => v > 100);

console.log(total2, withTax2, highValue2);
