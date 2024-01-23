// On DOM Load
window.addEventListener("DOMContentLoaded", init);
// B1 Get elements
const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descElement = document.getElementById("description");
const categoryElement = document.getElementById("category");
const priceElement = document.getElementById("price");

// b2: lang nghe submit
function init() {
  form.addEventListener("submit", handleSubmit);
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
  const newProduct = {
    title: titleElement.value,
    image: imageElement.value,
    description: descElement.value,
    category: categoryElement.value,
    price: priceElement.value ? Number(priceElement.value) : 0,
  };

  console.log(newProduct);

  //b6 call api post (api_url, newProduct)
}
