//  event listener

//  1. xử lí nhiều việc khi một event xảy ra
//  2. lắng nghe / hủy bỏ lắng nghe
var btn = document.getElementById('btn');

//================= DOM event khi xử lí nhiều việc

// note: hàm setTimeout đặt thời gian xử lý sự kiện sau bao lâu, tham số thứ hai là số ms
// setTimeout(function(){
//     btn.onclick = function(){
//         console.log('1');
//         console.log('2');
//         alert('3');
//     }
// },3000);

//  hủy bỏ sự kiện lắng nghe sau 3s

// btn.onclick = function(){
//     console.log('1');
//     console.log('2');
//     alert('3');
// }

// setTimeout(function(){
//     // ghi đè: gán lại bằng một function rỗng
//     btn.onclick = function(){

//     };
// },3000);
    

//================= Event listener khi xử lí nhiều việc
btn.addEventListener('click',function(e){
    console.log(Math.random());
});

//  hủy bỏ lắng nghe: btn.removeEventListener('click', viec1);

