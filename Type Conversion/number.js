let num = "20";
console.log(num + 1);
console.log(Number(num) + 1);
console.log(+num);

let decimal = "12.43";
console.log(decimal + 10);
console.log(Number(decimal) + 10);
console.log(+decimal + 100);
console.log(Number("rudioguroi"));
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(null)); //0
console.log(Number(undefined)); // NaN
console.log(Number(NaN)); //NaN

console.log("******************************");

let height = "200px";
console.log(parseInt(height));
console.log(parseInt("dfajl"));
// console.log(parse);

console.log(typeof NaN); // number
console.log(typeof null); // object
console.log(typeof undefined); //undefined
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof Infinity); // number

console.log(Array instanceof Object); // true
console.log(null instanceof Object); //false
