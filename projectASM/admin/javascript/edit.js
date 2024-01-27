// FORM
const formElement = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const priceElement = document.getElementById("price");
const descElement = document.getElementById("description");
const categoryElement = document.getElementById("category");

// Gobal: Luu ProductId
let productId = null;

// 1. addEventListener DOMLOADED
window.addEventListener("DOMContentLoaded", init);
// 2. Lang nghe su kien submit
// - Lay phan tu DOM form

function init() {
  // submit - click button submit
  formElement.addEventListener("submit", handleSubmit);
  getProductById();
}

function getProductById() {
  // 1 : lay productId ?productId window.location.search
  productId = window.location.search.split("=")[1];

  // 2. call api getDetail
  const productDetail = {
    title: "Sp1",
    image: "Image1",
    price: 11,
    description: "Desc 1",
    category: "1",
  };

  // 3. Bom nguoc lai value
  titleElement.value = productDetail.title;
  imageElement.value = productDetail.image;
  priceElement.value = productDetail.price;
  descElement.value = productDetail.description;
  categoryElement.value = productDetail.category;
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

  // Check xem productId !== null
  if (!productId) return;

  // 4. Call Api  + productId
}
