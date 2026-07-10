console.log(document.getElementById("p1").textContent); //Para1
console.log(document.getElementById("p3").innerHTML); // <b>Para3</b>
console.log(document.getElementById("p3").innerText); //Para3

let span1 = document.getElementById("span1");
// textcontent returns all the text including hidden
// innertext returns only the visible text
console.log(span1.textContent);
console.log(span1.innerText);

let div = document.querySelector("div");
div.style.color = "wheat";
div.innerHTML = "<b>Guhan</b>";
//div.style.visibility = "hidden"; // space preserved
div.style.display = "none"; // space not preserved
div.style.display = "block";
let btn1 = document.getElementById("btn1");
let paraList = document.querySelectorAll(".para");
btn1.addEventListener("click", () => {
  div.classList.toggle("dark");
  paraList.forEach((para) => para.classList.toggle("paraStyle"));
  console.log(div.classList.contains("dark"));
});

let head2 = document.getElementById("heading2");
head2.setAttribute("style", "text-decoration:underline");
console.log(head2.hasAttribute("style"));
console.log(head2.removeAttribute("title"));
