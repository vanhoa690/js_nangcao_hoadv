# Note Server JSON

- https://www.npmjs.com/package/json-server
- Install NodeJs: https://nodejs.org/en
- Install json-server:
  Cai golbal
  - npm install -g json-server
    Cai dung trong mon JS nang Cao
  - Create folder: server
  - cd server (terminal)
  - npm install json-server (cai golbal roi thi bo qua buoc nay)
  - Create file: db.json: Update data
  - npx json-server db.json

# JSON : Server

- db.json:dữ liệu data: cặp key - value
- Mỗi key: posts: 1 đầu api (end-point): list, Thêm sửa xóa
- Update end-point: products
- Data mẫu: https://fakestoreapi.com/products

# Kết nối Server (API): lấy data (products)

- JS:
  - fetch(): mặc định có sẵn
  - thư viện bên ngoài axios: https://www.npmjs.com/package/axios
  - Nhúng JS (html): <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>

# fetch(api_url, options {}): su dung async /await

- Fetch Option
  /_
  COMMON FETCH OPTIONS
  method: GET, DELETE, POST, PUT (PATCH)
  body: (create new Product, update product - form input)
  headers: (config: Content-Type or token)
  _/

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
  title,
  body,
  }),
  headers: {
  'Content-Type': 'application/json',
  token: 'abc123',
  },
  })

- GET LIST
  - await fetch(API_URL)
  - await res.json()
- DELETE PRODUCT:
  API_URL + id (xoa)
  fetch(API_URL, {
  method: "DELETE"
  })

- Create Product: method: POST (+ body)
  body: JSON.stringify(data)

- Edit Product:
- productDetail
  const apiUrl = `${API_URL}/${productId}`;

  const res = await fetch(apiUrl);
  const productDetail = await res.json();

method: PATCH (PUT) (+body)
await fetch(API_URL, {
method: "PATCH",
body: JSON.stringify(editProduct),
});

# Call API Error handling:

try {
// call api
} catch(error)
{
console.log(error)
}
