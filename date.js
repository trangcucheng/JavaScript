// ĐỐI TƯỢNG DATE

var date = new Date(); //đối tượng date
// var date = Date() => khai bảo date như 1 function
// console.log(date);

var year = date.getFullYear();
console.log(year);

var  month = date.getMonth()+1;  // trả về tháng từ 0-11
console.log(month);

var day = date.getDay();
console.log(day);

// một số phương thức:
// 1. getHours()
// 2. getMinutes()
// 3.getSeconds()

