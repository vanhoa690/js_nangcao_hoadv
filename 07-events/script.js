// B1 Lay Element Input: getElementById
const title = document.getElementById("title");
const image = document.getElementById("image");
const category = document.getElementById("category");
const form = document.getElementById("form");

// Khi nhan het du lieu tu input, select => button submit
// form lang nghe su kien submit()

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // B1: chan day input value len url
  event.preventDefault();

  // B2: lay value input
  const newProduct = {
    title: title.value,
    image: image.value,
    category: category.value,
  };

  console.log("newProduct", newProduct);

  // B3: validate: check reuired filed can nhap
  if (!title.value || !image.value) {
    alert("Please input title and image");
    return;
  }
  
  // B4: call api: fetch / axios
  // create: post
  // edit : patch /(put)
}
