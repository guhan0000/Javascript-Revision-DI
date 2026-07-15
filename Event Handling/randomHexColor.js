let div1 = document.getElementById("div1");
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  div1.setAttribute("style", "background-color:tomato");
});
div1.addEventListener("mouseover", () => {
  div1.classList.add("back");
});
div1.addEventListener("mouseleave", () => {
  div1.classList.add("org");
});
