// LÀM VIỆC VỚI CHUỖI

var myString = '    Hoc JS tai F8!     ';

//Javascript String method

// 1. length
// console.log(myString.length);

// 2. Find index: không tìm thấy thì trả về giá trị -1
// console.log(myString.indexOf('JS'));
// console.log(myString.indexOf('JS',5)); => tìm vị trí của chuỗi 'JS' kể từ vị trí số 5
// console.log(myString.lastIndexOf('JS'));
// console.log(myString.search('JS')) => tìm vị trí đầu tiên của chuỗi 'JS'

// 3. Cut string
// console.log(myString.slice(4,6));
// console.log(myString.slice(-3,-1));

// 4. Replace
// console.log(myString.replace('JS', 'Javascript')); => nếu có nhiều chuỗi thì chỉ thay thể được 1 chuỗi
// muốn tìm tất cả chuỗi JS => phải dùng biểu thức chính quy:
// console.log(myString.replace(/JS/g, 'Javascript'));

//5. convert to uppercase
// console.log(myString.toUpperCase());

// 6. convert to lowercase
// console.log(myString.toLowerCase());

// 7. Trim: loại bỏ khoảng trắng thừa ở hai đầu
// console.log(myString.trim());

// 8. split: cắt 1 chuỗi thành array từ 1 điểm chung
// var languages = 'Javascript, PHP, Ruby';
// console.log(languages.split(', '));
// console.log(languages.split('')); => điểm chung là chuỗi rỗng => tách từng kí tự của chuỗi

// 9. Get a character by index: lấy 1 kí tự bởi chỉ số
// const myString2 = 'Son Dang';
// console.log(myString2.charAt(5)); => khi truyền 1 index không có vào thì trả về 1 chuỗi rỗng (kiểu String)
// console.log(myString2[5]); => khi truyền 1 index không có vào thì trả về undefined
// console.log(myString.toLowerCase());
// console.log(myString.toUpperCase());


// 10. đệm giá trị vào start hoặc end
// let text = "5";
// text.padStart(4,0)    // Returns 0005
// text.padEnd(4,0)     // Returns 5000


// 11. match(): tìm một chuỗi trong chuỗi đã cho trả về mảng:
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/g));    // Returns an array [ain,ain,ain]

//12. include(): kiểm tra một chuỗi có chứa chuỗi khác không
console.log(text.includes("in"));
console.log(text.includes("in",12));

// 13. StartWith():
let text = "Hello world, welcome to the universe.";
text.startsWith("world")    // Returns false
text.startsWith("world", 5)    // Returns false
text.startsWith("world", 6)    // Returns true


// 14. EndWith():
let text = "Hello world, welcome to the universe";
text.endsWith("universe")    // Returns true
text.endsWith("world", 11)    // Returns true = tìm kiếm trong 11kí tự đầu tiên chuỗi kết thúc bằng "world" 