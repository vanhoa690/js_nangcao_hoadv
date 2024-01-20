// single-element
// document.getElementById()

// const title = document.getElementById("title");

// console.log(title);

// // title.innerText = "<em>Xin chao cac ban hoc JS 2</em>";
// title.innerHTML = "<em>Xin chao cac ban hoc JS 2</em>";

// title.style.color = "red";

// document.querySelector()

//multiple-elements
// querySelectorAll()
// Returns a NodeList

// getElementsByClassName()
// Returns an HTMLCollection
// getElementsByTagName()
const titleList = document.querySelectorAll("h1"); //.class_name

// console.log(titleList);

// index
titleList[1].style.color = "red";

// Cretea Element: chua add vao dom

const div = document.createElement("div"); // con moi sinh ra

// Add class
div.classList.add("desc", "cl21", "cl3");

div.innerHTML = `Toi co kien thuc JS, PHP, SQL .... Git`;
const eleParent = document.getElementById("main"); // cha
//.appendChild
eleParent.appendChild(div);
// eleParent.insertAdjacentElement("afterend", div);

/*
<!-- beforebegin -->
<p> // cha
  <!-- afterbegin -->
  foo // con
  <!-- beforeend -->
//   appendChild
</p>
<!-- afterend -->
*/

// Get El
// Update Content
// Create Elm
// Insert Elm

// On DOM Load
window.addEventListener("DOMContentLoaded", init);

function init() {
  //call api
  // show loading
  //renderUI
}

// Resize Event
window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// Scroll Event
window.addEventListener("scroll", () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
