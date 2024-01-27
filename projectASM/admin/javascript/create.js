// FORM
const formElement = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const priceElement = document.getElementById("price");
const descElement = document.getElementById("description");
const categoryElement = document.getElementById("category");

// 1. addEventListener DOMLOADED
window.addEventListener("DOMContentLoaded", init);
// 2. Lang nghe su kien submit
// - Lay phan tu DOM form

function init() {
  // submit - click button submit
  formElement.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  // 1. ngan chan viec day du lieu input len url
  event.preventDefault();

  // 2. Lay du lieu input: element.value
  // Nho Number value can lay number
  const title = titleElement.value;
  const image = imageElement.value;
  const pice = priceElement.value ? Number.parseInt(priceElement.value) : 0; // Number.parseInt()
  const desc = descElement.value;
  const category = categoryElement.value;

  //3. Check validate: required (bat buoc nhap): title
  if (!title || !image || !category) {
    alert("Please add tilte - image - category");
    return;
  }
 
  const newProduct = {
    title,
    image,
    pice,
    desc,
    category,
  };

  console.log({ newProduct });

  // 4. Call Api
}
