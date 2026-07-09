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
console.log(parseInt(null)); // NaN
console.log(parseInt(undefined)); // NaN

// console.log(parse);

console.log(typeof NaN); // number
console.log(typeof null); // object
console.log(typeof undefined); //undefined
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof Infinity); // number

console.log(Array instanceof Object); // true
console.log(null instanceof Object); //false
console.log(Infinity + 1);
console.log(typeof [] === "object");
let arr = ["apple"];
console.log(Array.isArray(arr));
console.log(parseFloat("123.43pc")); //123.43
console.log(parseFloat("123")); //123
