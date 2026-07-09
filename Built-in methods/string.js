let str = "hello world !";
console.log(str.concat("!")); //hello world!
console.log(str.isWellFormed());
console.log(str.length);
console.log(str.includes("h")); // true
console.log(str.includes("hello"));
console.log(str.indexOf("h")); //0
console.log(str.indexOf("!")); // 6
console.log(str.lastIndexOf("l"));

console.log(str.startsWith("hello"));
console.log(str.endsWith("world"));
console.log(str.padStart(20, "*"));
console.log(str.toUpperCase());
let name = "guhan M";
let res = name.replace("guhan", "kavi");
console.log(res);
console.log("aaabbbcccaaa".replaceAll("aa", "zz"));

console.log(str.charAt(11)); // nothing
console.log(str.slice(0, 5));
console.log(str.slice(5));
console.log(str.substring(0, 5)); // start inclusive end end-1
console.log(str.substring(5)); // starts at the inclusive start index till end
// slice supports -ve indexing where as substring not
let fname = "Guhan";
let lastname = "Muhturamalingam";
console.log(fname.slice(-10)); // Guhan
console.log(lastname.substring(-5)); // considers -ve indexes as 0

console.log("---------------------------------------------");

let sentence = "There has to be some way you need to find it";
let split = sentence.split(" ");
console.log(split);
console.log(str.repeat(2));
