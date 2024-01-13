// 03-functions-scope
function sayHello(name = 'hoadv', age = 34) {
  //   console.log('Hello cac ban ' + name + 'Toi dang ' + age); //PHP noi chuoi
  // Template literals (Template strings)
  console.log(`Hello cac ban ${name} . Toi dang ${age}`);
}

// sayHello('Nam');

//arrow function () => {}
// function addNumber() {}
const addNumber = (a, b) => a + b; //return a + b
// console.log(addNumber(9, 10));

//04-logic-control-flow

// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const arr = []; // check arr trong
if (arr.length) {
  // age > 18
  console.log('truthy');
} else {
  console.log('fasthy');
}

// Using a ternary operator dieu_kien ? dung_lam_gi : sai_lam_gi

const age = 22;
const canDoThis = age > 18 ? 'Di hoc len cao, di lam' : 'Hoc Cap 3, 2';

// console.log(canDoThis);

// map: [] => new Array

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
    timer: `Start: ${company.start} - End: ${company.end}`,
  };
});
// companyInfo.map(item => `<h1>item.name</h1><p>item.category</p>`)
// console.log(companyInfo); //<p>company.timer</p>

// const companyInfo2 = [];
// for (let company of companies) {
//   companyInfo2.push({
//     name: company.name,
//     category: company.category,
//     timer: `Start: ${company.start} - End: ${company.end}`,
//   });
// }

// console.log(companyInfo2);

// const resultsApi = {
//   data: [],
//   status: 200,
// };
// const { mess } = resultsApi;
// console.log(mess);
