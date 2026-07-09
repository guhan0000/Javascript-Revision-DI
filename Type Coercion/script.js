console.log(1 + "2"); //12
console.log("3" - 1); //2
console.log(true + 1); //2
console.log(false - 1); // -1
console.log(true - true); // 0 true is coerced to 1 and false as 0
console.log(null + 1); // 1 Number(null)+1 - 0+1 = 1
console.log(null - 0); // null id coerced to 0 and the result is 0
console.log(undefined + 100); // NaN
console.log(NaN + 10); // NaN
console.log(Infinity + 8222); // Infinity
console.log(false == 0); // true
console.log(true == 1); // true
console.log(null == 0); // no coercion occurs
// false bcoz null is only = to undefined all other are flase
console.log(null == undefined); // true

console.log(Number(null) == 0); //true here null is 1st converted to 0 and then comparision
