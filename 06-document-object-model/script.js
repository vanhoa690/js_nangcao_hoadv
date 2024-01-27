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

// 6 - DOM - HTML

// getElementById
// 1. Get Single Element: getElementById('id') // nho cach nay
document.getElementById("id");

// 2. Get Mutil Element : querySellectorAll('selector') // querySellectorAll
document.querySellectorAll("selector");


// 3. Create new DOM: createElement('div')  // createElement(): tạo mới thẻ html
const divElement = document.createElement("div"); // con

// 4. divElement.interHTML : Update noi dung Element // interHTML
// + Template string `${du_lieu_bien}` (cạnh số 1): kết hợp biến vào đc
divElement.innerHTML = "Update content";

// 5. Insert DOM: cha.appendChild(con)  // appendChild: cha nhận con
const parentElement = document.getElementById("parentElementId");
parentElement.appendChild(divElement);
