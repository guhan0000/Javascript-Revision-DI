const cars = [
  "creta",
  "baleno",
  "city",
  "thar",
  "fortuner",
  "innova",
  "ertiga",
  "safari",
];
console.log(cars);
const [first, second, , fourth, , , seventh] = cars;
console.log(first);
console.log(second);
console.log(fourth);
console.log(seventh);
const nums = [1, 3, 5, 7, 11];
const [one, ...remaining] = nums;
console.log(one);

console.log(remaining);

const colors = ["red", "blue", "green", "yellow"];
const [c1, c2, c3, c4 = "orange"] = colors;
console.log(c4); // orange
// if c4 presents then default value did'nt work
const person = { name: "Guhan", age: 23, city: "chennai" };
console.log(person);
const { name } = person;
const { city, age } = person;
console.log(city);
console.log(age);
// unlike arrays order doesnt matter for objects , works with keys

console.log(name);
// renaming keys during destructuring
const { name: empName, age: empAge } = person;
console.log(empName + empAge);
// default values
// person.dept = "TECH";
const { dept = "IT" } = person;
console.log(dept);
// rest operator
person.skills = { HTML: 5, CSS: 3, JavaScript: 4, React: 4.5 };
console.log(person);
const{name:eName,...rem}=person;
console.log(eName);
console.log(rem);

