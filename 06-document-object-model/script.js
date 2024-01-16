const title = document.getElementById('title');
// add class
title.classList.add('first', 'second', 'third');
// console.log(h1List);
// h1List[0].innerText = 'Day la h1 dau tien';
// h1List[1].innerText = 'Day la h1 thu 2';
// title.innerText = '<em>Xin chao cac ban hoc JS nang cao</em>';
// title.innerHTML = '<em>Xin chao cac ban hoc JS nang cao</em>';

// Single Element
// document.getElementById() => Element
// document.querySelector('h1') <h1 lay thang nay></h1><h1></h1>

// Mutil Element

// querySelectorAll() => []
// getElementsByClassName()
// getElementsByTagName()

// Create new Element
//document.createElement

const newElm = document.createElement('div');
newElm.innerHTML = 'Day la con toi dang di hoc mau giao';
const idMain = document.getElementById('main');

console.log(idMain);

idMain.appendChild(newElm);
