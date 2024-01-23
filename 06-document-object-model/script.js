// single-element

// document.getElementById()

// const title = document.getElementById("title");

// console.log(title);

// title.innerText = "<em>Xin chao cac ban hoc JS</em>";
// title.innerHTML = "<em>Xin chao cac ban hoc JS</em>";

// title.style.color = "red";

// document.querySelector()

// const title = document.querySelector("h1"); // .class_name
// console.log(title);

// Arr element

// querySelectorAll()
// Returns a NodeList

const title = document.querySelectorAll("h1"); // .class_name
// console.log(title);
// title[0].style.color = "red"; //[index]

// getElementsByClassName()
// Returns an HTMLCollection
// getElementsByTagName()

// Create Element moi

const divChild = document.createElement("div");
// chua gan vao DOM
// Thay doi noi dung
divChild.innerText = "Day la the div moi sinh";
// Tim cha de no gan vao
const elmParent = document.getElementById("main");
elmParent.appendChild(divChild);
// appendChild : trong element
// insertElement : truoc, sau elmParant

// Add class name
title[0].remove();
title[1].classList.add("tieu-de", "class-1", "class_2");

// On DOM Load
window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  //call api
  // getElem
  // render UI
}

// Resize Event
window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// DOM

// Get Single Element: getElementById('id')
document.getElementById("id");

// Get Mutil Element : querySellectorAll('selector')
document.querySellectorAll("selector");

// Create new DOM: createElement('div')
const div = document.createElement("div"); // con

// div.interHTML : Update noi dung Element
div.innerHTML = "Update content";

// Insert DOM: cha.appendChild(con)
const parentElement = document.getElementById("parentElementId");
parentElement.appendChild(div);
