// On DOM Load
window.addEventListener("DOMContentLoaded", init);
// B1: Get element
const title = document.getElementById("title");
const image = document.getElementById("image");
const price = document.getElementById("price");
const category = document.getElementById("category");
const description = document.getElementById("description");
const form = document.getElementById("form");
let productId = null;

function init() {
  getProductDetail();
  form.addEventListener("submit", handleSubmit);
}

// Get Product Detail
function getProductDetail() {
  // b1. Lay ProductId from Url
  productId = window.location.search.split("=")[1];
  console.log(productId);

  // b2. call api get Detail Product

  //b3. Gan product info
  const productDetail = {
    title: "title",
    image: "image",
    price: 0,
    description: "description",
    category: "category",
  };
  title.value = productDetail.title;
  image.value = productDetail.image;
}

// Submit form
function handleSubmit(event) {
  event.preventDefault();

  // validate
  if (!title.value) {
    alert("Please add title");
    return;
  }

  // gom value product
  const editProduct = {
    title: title.value,
    image: image.value,
    price: price.value ? Number(price.value) : 0,
    description: description.value,
    category: category.value,
  };

  // submit api
  console.log("submit", editProduct);
  if (!productId) return;
  //  submit api productId (http://localhost:3000/products/product)
}
