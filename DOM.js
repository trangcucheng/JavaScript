// HTML DOM: Doccument Object model:

// 1: Element: ID, class, tag name, CSS selector, HTML collection
// 2: Attribute;
// 3: Text;

// document.write("Hello, world!");

// DOM attributes
// var headingElement = document.querySelector('h1');

// // headingElement.id='test';
// // headingElement.className='trang';

// headingElement.setAttribute('title','heading');
// console.log(headingElement.getAttribute('class'));
// console.log(headingElement.getAttribute('title'));

// innerText, textContent

// var headingElement =document.querySelector('h1');
// co 2 cach de lay
// console.log(headingElement.innerText);
// console.log(headingElement.textContent); //geter
// headingElement.innerText = 'New heading';  //seter

// sự khác nhau giữa innerText và textContent: 
// innerText: lấy text ra không xét đến khoảng cách thực giữa các phần text (vd: xuống dòng), lấy ra giống như những gì mình thấy trên trang (display: none => innerText: sẽ không thấy)
// textContent: có xuống dòng, có khoảng cách, lấy toàn bộ nội dug của textNode (nỏ qua tên tag thôi, còn nội dung trong đó vẫn lấy)

// innerText là thuộc tính của element Node chứ không phải của Text Node
//  textContent: vừa Element node vừa textNode


//  thêm 1 element vào một element có sẵn bằng thuộc tính innerHTML, outerHTML
// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1>Hello world!</h1>';
// console.log(boxElement.innerHTML);  

// console.log(boxElement.outerHTML);  

//  tìm các thuộc tính của box element :
// console.log([boxElement]);

var h1Element = document.querySelector('.box');
console.log(h1Element.localName);
console.log([h1Element]);

