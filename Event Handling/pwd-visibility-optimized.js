let i1 = document.getElementById("i1");
let btn1 = document.getElementById("btn1");
const isPassword = "Hide";
btn1.addEventListener("click", () => {
  const isPassword = i1.type == "password";
  isPassword ? (i1.type = "text") : (i1.type = "password");
  isPassword ? (btn1.value = "Hide") : (btn1.value = "show");
});
