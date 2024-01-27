// JS Form
//getElementById
const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descElement = document.getElementById("desc");
const categoryElement = document.getElementById("category");

// addEventListener: lang nghe su kien submit form (click button submit)
// ten event: 'submit'

// On DOM Load
window.addEventListener("DOMContentLoaded", init);

function init() {
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  //1. chan hanh dong mac dinh day du lieu len url
  event.preventDefault();

  //2. Get value input : element.value
  const title = titleElement.value;
  const image = imageElement.value;
  const desc = descElement.value;
  const category = categoryElement.value;

  const newProduct = {
    title, // newProduct.title = title
    image,
    desc,
    category,
  };
  console.log(newProduct);
}
