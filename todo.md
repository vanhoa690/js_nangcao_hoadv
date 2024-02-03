# JSON Server

- https://www.npmjs.com/package/json-server
- Install NodeJs: https://nodejs.org/en
- Install json-server:
  - Create folder: server
  - cd server (terminal)
  - npm install -g json-server ((terminal) hoac npm install json-server )
  - Create file: db.json: + thao tac update data json (bang tay)
  - npx json-server db.json (terminal)

# JSON : Server

- db.json:dữ liệu data: cặp key - value
- Mỗi key: products: 1 đầu api (end-point): list, Thêm sửa xóa
- Update end-point: products
- Data mẫu: https://fakestoreapi.com/products

# Kết nối Server (API): lấy data (products)

- JS:
  - Fetch(): fetch(api_url: end-poin-api): http://localhost:3000/products (get + post) (edit or delete + id)
  - fetch(api_url): mặc định có sẵn (ko can cai them gi ca)
  - VD: fetch(http://localhost:3000/products)
  - Axios: 
  - thư viện bên ngoài axios: https://www.npmjs.com/package/axios
  - Nhúng JS (html): <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>

# fetch(api_url, options {}): su dung async /await

- Fetch Option: 3 option: GET - POST - PUT (PATCH) - DELETE
  - method: DELETE (default: GET)
  - body: create or edit (newProduct or editProduct): JSON.stringify()
  - headers: 'Content-Type': 'application/json' or token

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
