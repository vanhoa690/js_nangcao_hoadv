const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const priceElement = document.getElementById("price");

const API_URL = "http://localhost:3000/products"; // end-point

window.addEventListener("DOMContentLoaded", init);

function init() {
  getCategoryList();
  form.addEventListener("submit", handleSubmit);
}

async function getCategoryList() {
  const res = await fetch("http://localhost:3000/categories");
  const categoryList = await res.json();
  const categoryListElm = document.getElementById("category-list");
  const optionList = document.createElement("select");
  optionList.classList.add("bg-gray-50", "border", "rounded-lg");
  optionList.setAttribute("id", "category");
  optionList.innerHTML = `
  <select>
  ${categoryList
    .map(
      (category) => `
  <option value=${category.id}>${category.name}</option>`
    )
    .join("")}
    </select>
  `;

  categoryListElm.appendChild(optionList);
}

async function handleSubmit(event) {
  //1. ngan chan preventDefault()
  event.preventDefault();
  const categoryElement = document.getElementById("category");

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

  // 4. Call API POST json-server: http://localhost:3000/products, newProduct
  // method: POST, body: JSON.stringify
  const apiUrl = "http://localhost:3000/products";

  await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newProduct),
  });

  // bay sang man list
  window.location.replace("./list.html");
}
