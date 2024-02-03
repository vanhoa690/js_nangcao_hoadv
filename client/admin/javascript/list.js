// On DOM Load
window.addEventListener("DOMContentLoaded", init);
// R + D: Read + Delete

// const API_URL = "http://localhost:3000/products";

function init() {
  renderProductList();
}

async function handleDeleteProduct(id) {
  if (window.confirm("Ban co mua xoa san pham nay ko????")) {
    const apiUrl = `http://localhost:3000/products/${id}`;
    await fetch(apiUrl, {
      method: "DELETE",
    });
  }
}

async function renderProductList() {
  //1. Lay Data API fetch(api_url): GET
  const API_URL = "http://localhost:3000/products";
  // js: async / await
  // Doi lan 1: ket noi api fetch
  const res = await fetch(API_URL);
  // Doi lan 2: xu ly data .json()
  const productList = await res.json();

  // b2 tim cha de bam vao
  const productListElm = document.getElementById("product-list");

  // b3: tao elment tbody
  const tbody = document.createElement("tbody");

  // b4: Update content
  tbody.innerHTML = `
  <thead
  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
>
  <tr>
    <th scope="col" class="px-6 py-3">Product name</th>
    <th scope="col" class="px-6 py-3">Category</th>
    <th scope="col" class="px-6 py-3">Price</th>
    <th scope="col" class="px-6 py-3">Action</th>
  </tr>
</thead>
<tbody>
${productList
  .map(
    (product) => `
        <tr
        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
        >
        <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
        ${product.title.substring(0, 20)}...
        </th>
        <td class="px-6 py-4">${product.category}</td>
        <td class="px-6 py-4">$${product.price}</td>
        <td class="px-6 py-4 flex gap-2">
        <a
            href="./edit.html?productId=${product.id}"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >Edit</a
        >
        <button
            // su kien onclick: handleDeleteProduct(id)
            onClick=handleDeleteProduct("${product.id}")
            class="font-medium text-red-600 dark:text-red-500 hover:underline"
            >Remove</
            button>
        </td>
    </tr>
    `
  )
  .join("")}

</tbody>
  `;
  // .join("") xoa bo dau ,
  productListElm.appendChild(tbody);
}
