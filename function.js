// HÀM TRONG JAVASCRIPT
/*
Có 2 loại hàm: bult-in và tự định nghĩa
*/

// function showDialog() {
//     alert("Welcome to my world!");
// }

// gọi hàm:
// showDialog();

// THAM SỐ TRONG HÀM:
// function writeLog(message) {
//     console.log(message);
// }

// writeLog('Test Mesage');

// KIỂU DỮ LIỆU: có thể truyền vào hàm bất cứ kiểu dữ liệu nào của JS

// TÍNH PRIVATE: khi truyền biến message vào hàm thì biến này chỉ được sử dụng trong hàm

// Arguments: đối tượng arguments: chỉ xuất hiện trong hàm
// function writeLog() {
//     console.log(arguments);
// }

// writeLog('I','Love', 'You');

// GIỚI THIỆU VÒNG FOR OF:
// function writeLog() {
//     var myString= '';
//     for (var param of arguments) {
//         myString += `${param}-`;
//     }
//     console.log(myString);
// }
    
// writeLog('I','Love', 'You', 3000, null, NaN, undefined);
    
// 1. Khi định nghĩa ra hai hàm trùng tên thì hàm được định nghĩa sau sẽ ghi đè hàm được định nghĩa trước
