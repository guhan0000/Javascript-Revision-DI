const empList = [
  (emp1 = { empId: 1, empName: "Guhan", empDept: "IT" }),
  (emp2 = { empId: 2, empName: "Naresh", empDept: "IT" }),
];

console.log(empList);
// works based on order
const [{ empName: second }, { empName: first }] = empList;
console.log(first + "\n" + second);

// function parameters
console.log(emp1.empId);

function getEmpDetails({ empName: name, empDept: dept, empId: id }) {
  console.log(name);
  console.log(id);
  console.log(dept);
}
getEmpDetails(emp1);
// destructuring in returned arrays and objects
const returnArr = () => {
  return [10, false];
};

const [f1, f2] = returnArr();
console.log(f1);
console.log(f2);

function returnMovie() {
  return { movieName: "Vadachennai", movieRating: 8.9 };
}
console.log(returnMovie());
const { movieName, movieRating } = returnMovie();
console.log(movieName);
// destructuring in loops
for (const { empId, empName } of empList) {
  console.log(empId + ":" + empName);
}
// map
empList.map(({ empId, empName, empDept }) =>
  console.log(empId + ":" + empName + ":" + empDept)
);

