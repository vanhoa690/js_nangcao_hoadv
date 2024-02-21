// 1. Lay Element Form : getElementById
const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const categoryElement = document.getElementById("category");

// submit: click button(type= submit)
// addEventListener: lang nghe su kien 'submit'
// DOMLOADED
window.addEventListener("DOMContentLoaded", init);

function init() {
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  // 1. chan hang dong mac dinh day du lieu input len url
  event.preventDefault();

  // 2. Lay du lieu input: element.value
  const title = titleElement.value;
  const image = imageElement.value;
  const description = descriptionElement.value;
  const category = categoryElement.value;

  // 3. Check validate: check tien do loai bo ai luoi
  console.log({ title });

  if (!title) {
    alert("Nhap title vao");
  }

  // console.log({ title, image, description, category });

  // 4. call api la xong: (bao cao sep)
}

// FORM - CREATE  - EDIT
// Form có 1 sự kiện submit (xảy ra khi click button Send)
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  //1. Ngan chan hanh vi mặc định
  event.preventDefault();

  // GET DOM HTML
  // 2. GET value .value
  const title = document.getElementById("title").value;

  // 3.validate: if(!value_1 || !vaule_2)
  // if(!title || !image) => alert('Thong bao') return;

  // 4. Call API

  
}
