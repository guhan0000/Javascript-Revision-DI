let weight = 120.5;
console.log(String(weight) + "cm");
let age = 24;
console.log("age" + String(age));
let n1 = String(null);
console.log(typeof n1); // string
console.log(typeof String(undefined)); // string
console.log(typeof String(NaN)); // string
console.log(String(true));
console.log(String([]));

console.log((123.3).toString()); //123.3

console.log(false.toString());
console.log(null.toString()); // TypeError
console.log(undefined.toString()); // TypeError
console.log(NaN.toString()); // Nan
