// Log number
// console.log(100);

// // Log string
// console.log('Hello World');

// // Log multiple values
// console.log(20, 'Hello', true);

// // Log a variable
// const x = 100;
// console.log(x);

// // Console error & warning
// console.error('Alert');
// console.warn('Warning');

// // Log object as table
// console.table({ name: 'Brad', email: 'brad@gmail.com' });

// // Group console commands
// console.group('simple');
// console.log(x);
// console.error('Alert');
// console.warn('Warning');
// console.groupEnd();

// // Add CSS to logs
// const styles = 'padding: 10px; background-color: white; color: green';
// console.log('%cHello World', styles);

// This is a single line of code

/*
Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/

// Bai so 3: Khai bao bien
// $ten_bien PHP

// Ways to declare a variable
// `var`, `let`, & `const`

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase
// let first_name : snake_case (underscore)

// name conversion
// tieng anh
// let hoTen
// let firstName = "Hoadv"; //camelCase
// const lastName = "dv";

// // phan biet let vs const
// let age = 30;

// age = 34;
// console.log(age);

// // Array [giatri1, giatri2]
// const arr = [1, 2, 3, 4];
// // arr = [2, 3];
// arr.push(5);
// console.log(arr);

// // object ten {}
// // thuoc tinh OOP, Class,
// // tham chieu dia chi o nho
// const person = {
//   name: "Hoadv",
//   age: 34,
//   hasBike: true,
//   subject: "JS Nang Cao",
// };

// // person = {
// //   name: "1",
// // };
// person.name = "John";
// person.email = "brad@gmail.com";

// console.log(person);

// Bai so 4: Data type

const firstName = "Sara"; // string "" | ''

const age = 30; // number
const temp = 98.9;

const hasKids = true; // boolean  ten bien bat dau has, is (hasCar, hasBike), isShow, isNumber

const aptNumber = null; // null

const score = undefined; //undefined

// phan biet null vs undefined
console.log(score);
// Array [giatri1, giatri2]
const numbers = [1, 2, 3, 4];

// object
const person = {
  name: "Brad",
};

console.log(typeof hasKids);

function sayHello() {
  // bat dau dong tu: createProduct, deleteProduct, getProductList, update... + Danh tu bo nghia
  console.log("Xin chao cac ban hoc JS Nang cao");
}

sayHello()