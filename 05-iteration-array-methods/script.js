// map : [] => new Array // so che du lieu

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// [ 2, 4, 6....] x2

const newNumbers = numbers.map((item) => {
  return item * 2;
});

// console.log(newNumbers);

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

// filter: Loai bo du lieu minh ko thich

const newCompanies = companies.filter((item) => {
  return item.category === 'Finance'; // filter true, false next
});

function removeCompany(id) {
  return companies.filter((item) => item.id !== id);
}

const newCompanies2 = removeCompany(9);

// console.log(newCompanies2);

// const companyInfo = companies.map((c) => {
//   return {
//     name: c.name,
//     category: c.category,
//     timer: `bat dau ${c.start} - ket thuc ${c.end}`,
//     // startEnd: `Start ${c.start} - End ${c.end}`,
//   };
// });

// console.log(companyInfo);
// //companyInfo.map(item) => UI: h1 c.title, p.startEnd

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130, soLuong: 1 },
  { id: 2, name: 'Product 2', price: 150, soLuong: 2 },
  { id: 3, name: 'Product 3', price: 200, soLuong: 3 },
];

// totalBill = ?
// totalBill = 0
const totalBill = cart.reduce(
  (total, product) => total + product.price * product.soLuong,
  0
);
