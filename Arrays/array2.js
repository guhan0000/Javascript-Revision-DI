const cars = ["creta", "baleno", "thar", "creta"];
//at supports -ve indexing whereas [] not
console.log(cars.at(-2)); // thar
console.log(cars[-3]); // undefined
console.log(cars.toString()); //creta,baleno,thar,creta
const vehicles = cars.concat("tvs", "ather");
console.log(vehicles);
// slice doesn't modify og array
const sliced = cars.slice(2, 2); // []
console.log(cars.slice(1, 3));
console.log(cars.slice(2)); // [thar,creta]

console.log(sliced);
console.log(cars);

// splice modifies the og array
// used for
// remove
// replace
// insert
// elements in array
// synatax
// cars.splice(startIndex,deleteCount,itemss to be inserted)
const removed = cars.splice(1, 1);
console.log(removed); // baleno
console.log(cars);
cars.splice(1, 4);
console.log(cars); //[ 'creta' ]

// inserting elements
const bikes = ["yamaha", "honda", "tvs", "bajaj"];
let bikeSplice = bikes.splice(1, 0, ["ather"], "hero");
console.log(bikeSplice);
console.log(bikes);
bikes.splice(1, 1, "RE"); // replace [ather] by RE
console.log(bikes);
// replace multiple
const newLocal = bikes.splice(0, 3, "yamaha-R15", "RE-350", "Honda-Unicorn");
console.log(newLocal);

console.log(bikes);
// deletecount > rem elemetns
bikes.splice(3, 6); // remove rest of the elements after 3 index
console.log(bikes);
// omitting deletecount
bikes.splice(1);
console.log(bikes);
// works with -ve elements
const num = [1, 3, 5, 7, 11];
console.log(num);

num.splice(-2, 1);
console.log(num);

num.splice(num.length, 0, "11"); // [ 1, 3, 5, 11, '11' ]
console.log(num);
num.splice(-1, 0, "hi");
console.log(num); //[ 1, 3, 5, 11, 'hi', '11' ]
