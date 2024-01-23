// map () : [] => new []

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 }, //
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 }, //
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// giu company.end < 2010  // 2014 => false
const filterCompanies = companies.filter((company) => {
  // true or false  true: giu, false, loai bo
  return company.end < 2010; /// 2004 < 2010 -> true, 2014 < 2010 false -> loaid
});

// removeProduct (1981)

function removeCompanyByStart(start) {
  return companies.filter((company) => {
    return company.start !== start;
  });
}

const filterCompanies2 = removeCompanyByStart(2011);

// console.log(filterCompanies2);

// Filter

// Reduce
// Shopping cart example (objects)

// totalBill ?
const cart = [
  { id: 1, name: "Product 1", price: 130, soluong: 1 },
  { id: 2, name: "Product 2", price: 150, soluong: 2 },
  { id: 3, name: "Product 3", price: 200, soluong: 3 },
];

const totalBill = cart.reduce((total, product) => {
  return total + product.price * product.soluong;
}, 0);

console.log(totalBill);
