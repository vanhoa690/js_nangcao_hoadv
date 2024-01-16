// Single Element

const title = document.getElementById('app-title');
// console.log(title);

// Use any CSS selector
// const title2 = document.querySelector('h1');
// console.log(title2);

// Returns a NodeList
// querySelectorAll
// []

// Array Element
const listItems = document.querySelectorAll('li');

// console.log(listItems);

listItems[0].innerText = '<em>Day la Text<em>';
listItems[1].style.color = 'red';
listItems[2].innerHTML = '<em>Inner HTML</em>';

// 07-create-elements
// document.createElement('the_HTML')
// const span = document.createElement('span');
// span.innerText = 'Day la the Div toi muon gan vao sau title';
// //. gan sau title
// title.appendChild(span);

// insertAdjacentElement Example
// function insertElement() {
//   const filter = document.querySelector('.filter');

//   const h1 = document.createElement('h1');
//   h1.textContent = 'insertAdjacentElement';

//   filter.insertAdjacentElement('beforebegin', h1);
// }

function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

insertBeforeItem();
