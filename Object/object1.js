const car = { brand: "Hyundai", model: "creta", year: "2026" };
console.log(car);
console.log((car.color = "black"));
console.log(car);
car["brand"] = "tata";
console.log(car);
const entries = Object.entries(car);
console.log(entries);

const student = {
  name: "Guhan",
  age: 16,
  marks: { phy: 80, che: 90, mat: 90 },
  total: function () {
    let sum = 0;
    for (let sub in this.marks) {
      sum += this.marks[sub];
    }
    return sum;
  },
};
delete car["brand"];
console.log(car);
console.log(student.total());
console.log(student.hasOwnProperty("name"));
Object.assign(student, car);
console.log(student);

console.log(Object.keys(student));
