// On DOM Load
window.addEventListener("DOMContentLoaded", init);
// B1: Get element
const title = document.getElementById("title");
const image = document.getElementById("image");
const price = document.getElementById("price");
const category = document.getElementById("category");
const description = document.getElementById("description");
const form = document.getElementById("form");

function init() {
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();

  // validate
  if (!title.value) {
    alert("Please add title");
    return;
  }

  // gom value product
  const newProduct = {
    title: title.value,
    image: image.value,
    price: price.value ? Number(price.value) : 0,
    description: description.value,
    category: category.value,
  };

  // submit api
  console.log("submit", newProduct);
}
