// JSON: 
// 1. là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. Thể hiện được những kiểu dữ liệu: Number, Boolean, Null, Array, Object
// tức là từ những kiểu dl này có thể biến thành chuỗi json hoặc ngược lại
//  Stringify: từ js sang json
 // Parse: từ json thành js
// ex: dạng array
var json1 = '["Javascript","PHP"]';// note: trong JSON, các phần tử trong mảng phải được đặt trong dấu ngoặc kép (bắt buộc)
//  thể hiện object
var json2 = '{"name": "Trang","age": "3"}';
var arr = JSON.parse(json1);
console.log(arr);
console.log(JSON.stringify(arr))