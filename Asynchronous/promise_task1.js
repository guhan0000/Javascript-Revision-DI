const balance = 1;
const price = 500;
function buyPhone() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      balance >= price
        ? resolve("mobile purchased")
        : reject("insufficent balance");
    }, 2000);
  });
}
buyPhone()
  .then((res) => console.log(res))
  .then(() => console.log("delivered"))
  .catch((err) => console.log(err))
  .finally(() => console.log("thank you"));
