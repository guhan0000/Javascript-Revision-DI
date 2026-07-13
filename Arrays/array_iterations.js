let bikes = new Array("honda", "hero", "tvs", "bajaj", "RE", "");
console.log(bikes);
// forEach
const forEachRes = bikes.forEach((bike, index) =>
  console.log(index + 1 + " " + bike),
);
console.log(forEachRes); // undefined
// map- return new array of same length
const mapRes = bikes.map(
  (bike, index, bikes) => `${index + 1}/${bikes.length} :${bike}`,
);
console.log(mapRes); //[ '1/5 :honda', '2/5 :hero', '3/5 :tvs', '4/5 :bajaj', '5/5 :RE' ]
console.log(bikes); // [ 'honda', 'hero', 'tvs', 'bajaj', 'RE' ]
const bikeStartsWithH = bikes.filter((bike, index, bikes) =>
  bike.startsWith("h"),
);
console.log(bikeStartsWithH);

const students = [
  { rollNo: 101, studentName: "Guhan", result: "PASS" },
  { rollNo: 102, studentName: "Naresh", result: "PASS" },
  { rollNo: 103, studentName: "Raghul", result: "FAIL" },
  { rollNo: 104, studentName: "Vasanth", result: "FAIL" },
];
// console.log("pass" == "PASS");
// str='pass';
console.log(students);
const passedStudents = students.reduce((list, student) => {
  if (student.result == "PASS" && !list.includes(student.studentName)) {
    list.push(student.studentName);
  }
  return list;
}, []);
console.log(passedStudents);
// some
const cotainsFailedStudents = students.some(
  (student, index, students) => student.result === "FAIL",
);
console.log(cotainsFailedStudents);

const validBikes = bikes.every((bike, index, bikes) => bike.length > 0);
console.log(validBikes);
