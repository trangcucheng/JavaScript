
// input/ select

// var inputElement = document.querySelector('input[type="text"]');
//  e: mouse event
// e.target: lấy ra element node

// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }

//  sự kiện onchange chỉ được thực thi khi value của element node thay đổi
//  muốn gõ đến đâu lấy đến đó: oninput

// var inputElement = document.querySelector('input[type="checkbox"]');

// inputElement.onchange = function(e){
//     console.log(e.target.checked);
// }


// var inputElement = document.querySelector('select');

// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }

// ============================
// key up / key down
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeydown = function(e){
    // console.log(e.target.value);
//     console.log(e.which); // muốn biết mình nhấn vào phím nào (hiển thị mã của phím đấy)
//     switch (e.which){
//         case 27: 
//             console.log('exit');
//             break;
//     }
// }


// document.onkeydown = function(e){
//     switch(e.which){
//         case 27:
//             console.log('EXIT');
//             break;
//     }
// }

// ============================
//1. preventDefault: loại bỏ hành vi đặc biệt của trình duyệt trên 1 thẻ HTML
//  note một số cách lấy thẻ a
//  cách 1: thông thường
//  cách 2: document.anchors: chỉ dùng trong trường hợp các thẻ a có name = ""
// cách 3: document.links lấy được tất cả thẻ a không cần bắt buộc phải có tên

// var aElements = document.querySelectorAll('a');  // hoặc document.links

// for ( var i =0; i<aElements.length; i++){
//     aElements[i].onclick = function(e){

//         // khi href không chứa chuỗi kia thì sẽ ngăn chặn hành vi mặc định đó là tự động chuyển trang
//         if (!e.target.href.startsWith('https://f8.edu.vn')){
//             e.preventDefault();
//         }
//     }

// }

// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(e){
//     e.preventDefault();
// }

// ================================
//2. stopPropagation: ngăn chặn sự kiện nổi bọt 
document.querySelector('div').onclick = function(){
    console.log('DIV');
}
document.querySelector('button').onclick = function(e){
    e.stopPropagation();
    console.log('Click me!');
}
