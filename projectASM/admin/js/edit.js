// On DOM Load
window.addEventListener("DOMContentLoaded", init);
// CRUD: Create
// B1 Get elements
const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descElement = document.getElementById("description");
const categoryElement = document.getElementById("category");
const priceElement = document.getElementById("price");
let productId = null;

// b2: lang nghe submit
function init() {
  getProductDetail();
  form.addEventListener("submit", handleSubmit);
}

// get ProductId from Url => call APi : getProductDetail +> input value

function getProductDetail() {
  // productId
  //window.location.search
  productId = window.location.search.split("=")[1];

  // call APi getProductDetail(productId)

  const productDetail = {
    title: "title Detail",
    image: "image Detail",
    description: "description Detail",
    category: "1",
    price: 10,
  };

  // fill info => input value
  titleElement.value = productDetail.title;
  imageElement.value = productDetail.image;
  descElement.value = productDetail.description;
  categoryElement.value = productDetail.category;
  priceElement.value = productDetail.price;
}

function handleSubmit(event) {
  //b3. ngan chan default
  event.preventDefault();

  //b4. validate
  // requried: title, category, image
  if (!titleElement.value || !imageElement.value || !categoryElement.value) {
    alert("Please add title, image, category");
    return;
  }

  //b5 gom get value input
  const updateProduct = {
    title: titleElement.value,
    image: imageElement.value,
    description: descElement.value,
    category: categoryElement.value,
    price: priceElement.value ? Number(priceElement.value) : 0,
  };

  console.log(updateProduct);

  //b6 call api post (api_url + productId, updateProduct)
}

