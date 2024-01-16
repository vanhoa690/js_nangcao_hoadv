const API_URL = 'https://fakestoreapi.com';

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('init');
  displayProductList();
}

async function displayProductList() {
  //   const response = await fetch(`${API_URL}/products`);
  //   const productList = await response.json();
  fetch(`${API_URL}/products`)
    .then((res) => res.json())
    .then((productList) => {
      const div = document.createElement('div');
      div.classList.add('row');
      div.innerHTML = `
        ${productList
          .map(
            (product) => ` 
            <div class="col-12 col-md-3">
            <div class="card" style="width: 18rem">
              <img
                src=${product.image}
                class="card-img-top"
                alt=${product.title}
              />
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">
                ${product.description.substring(0, 60)} ...
                </p>
                <a href="#" class="btn btn-primary">Add To Cart</a>
              </div>
            </div>
          </div>
            `
          )
          .join('')}}`;

      document.getElementById('product-list').appendChild(div);
    });
}
