// single element selection methods
document.getElementById("hh1").append(" Revision");
let box = document.querySelector("div");
console.log(box);
const head1 = document.querySelector("#hh1");
head1.setAttribute("style", "color:red");

// multiple elements selections
const paraTags = document.getElementsByClassName("para"); // return Live HTML Collection
console.log(paraTags);
let paras = document.querySelectorAll("p"); // retrurn static NodeList
console.log(paras);

console.log(document.getRootNode());

// const arr = [1, 3];
// arr.push(5);
// console.log(arr);

console.log(document.childNodes); // node list has forEach
console.log(document.children); // only tags HTMLCollection
