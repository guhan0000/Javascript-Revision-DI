const isPresent = true;
function execute(isPresent) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPresent) {
        resolve("Success");
      } else {
        reject("Failed");
      }
    }, 5000);
  });
}
// let storedPromise = execute(true);
// console.log(storedPromise);

execute(isPresent)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("end"));

const doExecute = async () => {
  try {
    let storedPromise = await execute(false);
    console.log(storedPromise);
  } catch (err) {
    console.log(err);
  }
};
doExecute();
// a promise is only executed if it is fullfilled or true other wise it will give error as
// promise_demo.js:17 Success
// promise_demo.js:19 end
// promise_demo.js:24 Uncaught (in promise) Failed
// doExecute @ promise_demo.js:24
// await in doExecute
// (anonymous) @ promise_demo.js:25
// inorder to handle that try catch must be used

async function hello() {
  return "hello";
}
console.log(hello());
