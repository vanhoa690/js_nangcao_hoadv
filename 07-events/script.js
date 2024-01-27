// FORM
// 1. addEventListener DOMLOADED
window.addEventListener("DOMContentLoaded", init);
// 2. Lang nghe su kien submit
// - Lay phan tu DOM form
const formElement = document.getElementById("formID");
const titleElement = document.getElementById("titleID");
const imageElement = document.getElementById("image");
const descElement = document.getElementById("desc");
const categoryElement = document.getElementById("categoryID");

function init() {
  // submit - click button submit
  formElement.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  // 1. ngan chan viec day du lieu input len url
  event.preventDefault();

  // 2. Lay du lieu input: element.value
  const title = titleElement.value;
  const image = imageElement.value;
  const desc = descElement.value;
  const category = categoryElement.value;

  const newProduct = {
    title,
    image,
    desc,
    category,
  };
  console.log({ newProduct });

  // api
}
