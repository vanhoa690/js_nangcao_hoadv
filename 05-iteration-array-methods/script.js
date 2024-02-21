// map [] => new []

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Filter
// return true || false
// category "Auto"

const filterCompany = companies.filter((company) => {
  return company.category === "Auto";
});

//category Retail
// function removeProductById(id) {
//   return companies.filter((company) => {
//     return company.id !== id; //Retail !== Retail // false
//   });
// }
// const filterCompany2 = removeProductByCategory("Retail");

// console.log(filterCompany2);
// const newList = companies.map((company) => {
//   return {
//     title: `Company Name: ${company.name}`,
//   };
// });

// console.log()

// Reduce
// Shopping cart example (objects)

// totalBill ?
const cart = [
  { id: 1, name: "Product 1", price: 130, soluong: 1 },
  { id: 2, name: "Product 2", price: 150, soluong: 2 }, // 2
  { id: 3, name: "Product 3", price: 200, soluong: 3 },
];

// totalPrice
const totalPrice = cart.reduce((total, product) => {
  return total + product.price * product.soluong;
}, 0);

console.log(totalPrice);
// React - JS

// Map - Filter - Reduce
