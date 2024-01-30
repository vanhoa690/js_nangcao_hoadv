const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const categoryElement = document.getElementById("category");
const priceElement = document.getElementById("price");
const API_URL = "http://localhost:3000/products";

window.addEventListener("DOMContentLoaded", init);

function init() {
  form.addEventListener("submit", handleSubmit);
}

async function handleSubmit(event) {
  //1. ngan chan preventDefault()
  event.preventDefault();

  // 2. Lay du lieu input: element.value
  const title = titleElement.value;
  const image = imageElement.value;
  const description = descriptionElement.value;
  const category = categoryElement.value;
  const price = priceElement.value;

  // 3. Check validate: if(!value_1 || !value_2)
  if (!title || !image || !category) {
    alert("Nhap title, image, category vao");
    return;
  }

  const newProduct = {
    title, // newProduct.title = title
    image,
    description,
    category,
    price: price ? Number(price) : 0, // chuyen price sang number
  };

  // 4. Call API POST json-server: localhost:3000/products, newProduct
  // nodejs xu ly BE kieu PHP $_POST[title]

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(newProduct),
  });

  window.location.replace("./list.html");
}
