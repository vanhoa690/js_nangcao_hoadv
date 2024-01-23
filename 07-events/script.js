const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descElement = document.getElementById("desc");
const categoryElement = document.getElementById("category");

// Get element
// lang nghe submit
// preventDefault(): ngan can sui bot
// Get value input: titleElement.value;
// call api

// addEventListener lang nghe su kien 'submit'
// xay ra an button submit (button nam trong form)
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // b1: ngan chan day input value len url
  event.preventDefault();

  // b2. Get value from input
  const title = titleElement.value;
  const image = imageElement.value;
  const desc = descElement.value;
  const category = categoryElement.value;

  console.log({ title, image, desc, category });

  const newProduct = {
    title,
    image,
    desc,
    category,
  };

  // call api post(api_url, newProduct)
}
