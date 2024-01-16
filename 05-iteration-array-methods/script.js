// map: [] => new []
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// newNumber [2,4,6...]
const newNumber = numbers.map((number) => {
  return number * 2;
});

const companies = [
  { id: 1, name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { id: 2, name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { id: 3, name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { id: 4, name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  {
    id: 5,
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014,
  },
  { id: 6, name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { id: 7, name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  {
    id: 8,
    name: 'Company Eight',
    category: 'Technology',
    start: 2011,
    end: 2016,
  },
  { id: 9, name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// const companyInfo = companies.map((company, index) => {
//   //   console.log({ company, index });
//   return {
//     name: company.name,
//     category: company.category,
//     timer: `Start: ${company.start}  - End ${company.end}`,
//   };
// });
// console.log(companyInfo);

//  UI p : time: company.timer resApi = [products].map(product) => `h1 product.title .span.produc.price`

// filter: Lọc theo điều kiện
// start > 2000
// Delete item id -> xoa
// const newCompanies = companies.filter((company) => {
//   //   console.log(company);
//   //   return company.start > 2000 && company.end < 2020; // true
//   return company.start !== 1999; // true
// });

let newCompanies = [];

function handleRemoveCompany(id) {
  newCompanies = companies.filter((company) => {
    return company.id !== id; // true
  });
}

// handleRemoveCompany(2);

// console.log(newCompanies);

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130, quanlity: 2 },
  { id: 2, name: 'Product 2', price: 150, quanlity: 1 },
  { id: 3, name: 'Product 3', price: 200, quanlity: 3 },
];

const totalPice = cart.reduce(function (total, product) {
//   console.log({ total, product });
  return total + product.price * product.quanlity; // 0 + 130*2 = 260  = total
  // total + 150 = 130 + 150 = 280
}, 0);

console.log({ totalPice });
