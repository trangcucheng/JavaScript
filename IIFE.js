// IIFE: immediately invoked function expression: một hàm được gọi ngay lập tức
// hay còn gọi là self-invoking functionS
// Syntax:

(function(message){
    console.log(message);
})('Chao em!');

// arrow IIFE
(()=>console.log( "Hello Trang!"))();

// Note: nên dùng dấu ; trước 1 IIFE
//  IIFE là hàm 'private': 
;(function myFun(){
    console.log('Example!');
})()

// myFun() // không gọi được vì IIFE 'private'

var i = 0;

;(function myFun(){
    i++;
    console.log(i);
    if (i<10) 
        myFun();
})()

//  sử dụng IIFE khi nào?: sử dụng IIFE để chạy ngay và không bị trùng lặp hàm trong một dự án lớn

const app = (function(){
    //private
    const cars =[]
    return {
        add(car){
            cars.push(car);
        },
        edit(index, car){
            cars[index] = car;
        }, 
        delete(index){
            cars.splice(index,1);
        }
    }
})()