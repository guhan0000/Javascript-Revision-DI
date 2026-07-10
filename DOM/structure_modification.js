const ol = document.createElement("ol");
const li = document.createElement("li");
document.body.append(ol);
ol.appendChild(li);
li.textContent = "Apple";
ol.appendChild(li);
li.innerHTML = "<em>Orange</em>";
// here no new li element will be added 1 li text changed to Orange
let div2 = document.createElement("div");
div2.innerText = "hello";
document.body.append(div2);
const h3 = document.createElement("h3");
h3.textContent = "H3 from div";
div2.appendChild(h3);
let h2 = document.createElement("h2");
h2.innerText = "H2 from div";
div2.insertBefore(h2, h3);
// div2.removeChild(h2);
div2.replaceChild(h2, h3);
