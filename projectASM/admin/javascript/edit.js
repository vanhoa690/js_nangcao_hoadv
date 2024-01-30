const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const categoryElement = document.getElementById("category");
const priceElement = document.getElementById("price");
const API_URL = "http://localhost:3000/products";

let productId = null;

window.addEventListener("DOMContentLoaded", init);

function init() {
  getProductDetailById();
  form.addEventListener("submit", handleSubmit);
}

async function getProductDetailById() {
  // 1. Lay product Id from URL: ?id=2
  productId = window.location.search.split("=")[1]; // ?productId=id

  if (!productId) return;

  // 2. Call API get info product: GET localhost:3000/products/productId = end-point + id
  //  GET await 2 lan
  const apiUrl = `http://localhost:3000/products/${productId}`;
  const res = await fetch(apiUrl);
  const productDetail = await res.json();

  // 3. Fill data product vao input
  titleElement.value = productDetail.title;
  imageElement.value = productDetail.image;
  descriptionElement.value = productDetail.description;
  categoryElement.value = productDetail.category;
  priceElement.value = productDetail.price;
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

  const editProduct = {
    title, // newProduct.title = title
    image,
    description,
    category,
    price: price ? Number(price) : 0, // chuyen price sang number
  };

  // 4. Call API PATCH json-server: localhost:3000/products/productId, newProduct
}
