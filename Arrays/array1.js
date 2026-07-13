let nums = [1, 2, 3];
const fruits = new Array("apple");
console.log(nums, fruits);
const str = "thisisjavascript";
const res = Array.from(str);
console.log(res);
let colors = Array.of("blue", "red", "yellow", "green");
console.log(colors);
nums.push(4); // add at end
console.log(nums);
nums.pop();
console.log(nums);
nums.unshift(-2, -1, 0); // add elements to start
console.log(nums);
nums.shift(); // remove element from first
console.log(nums);
let includes = colors.includes("blue");
console.log(includes);
colors.unshift("green");
console.log(colors.indexOf("green"));
console.log(colors.lastIndexOf("green"));
const reverse = colors.reverse();
console.log(reverse);
const find = colors.find((color) => color.startsWith("gr")); // returns 1 element
console.log(find);
console.log(colors);

console.log(colors.findIndex((color) => color.startsWith("gr"))); // returns 1 index
const asc = colors.sort();
console.log(asc);
const desc = colors.sort((a, b) => b.length - a.length);
console.log(desc);

const joined = colors.join();
console.log(joined); // yellow,green,green,blue,red
console.log(colors.join("$"));
let arr = [1, 3, [2, 4]];
console.log(arr.flat()); // yellow,green,green,blue,red
console.log([2, 4, [3, 2, [1, 1]]].flat()); // [ 2, 4, 3, 2, [ 1, 1 ] ]
console.log([2, 4, [3, 2, [1, 1, [true]]]].flat(3)); // [
//   2, 4, 3,    2,
//   1, 1, true
// ]
