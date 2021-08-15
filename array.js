// MẢNG TRONG JAVASCRIPT
//  tự động đánh index cho các phần tử bắt đầu từ 0
// array có thể chứa tất cả các kiểu dữ kiệu trong javascript

// Tạo mảng cách 1:
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     null,
//     undefined,
//     5
// ];

// Tạo mảng cách 2:
var languages = new Array(
    'Javascript',
    'PHP',
    'Ruby'
);

// console.log(languages);

// không nên dùng cách 2 vì mất thời gian

// kiểm tra kiểu dữ liệu:
// - kiểu dữ liệu của array là Object
// => sd hàm:
// Array.isArray(languages);

// truy xuất mảng:
// console.log(languages.length);

//  lấy phần tử ở vị trí index
// console.log(languages[0]);

// LÀM VIỆC VỚI ARRAY
// 1. languages.toString() : chuyển từ array sang string

// 2. languages.join('-'); => ngăn cách các phần tử bằng kí tự '-'

// 3.pop: xóa đi phần tử cuối mảng, trả về phần tử đã xóa; khi không còn phần tử nào để xóa trả về undefined

// console.log(languages.pop());
// console.log(languages);

// 4. push: thêm 1 hoặc nhiều phần tử vào cuối mảng
// console.log(languages.push('Dart'));
// console.log(languages);

// 5. shift: xóa phần tử đầu mảng ( tương tự pop), trả về số phần tử của mảng
// console.log(languages.shift());
// console.log(languages);

// 6.Unshift: thêm phần tử vào đầu mảng, trả về số phần tử của mảng
// console.log(languages.unshift('Dart'));
// console.log(languages);

// 7. spicing:
// 7.1 xóa
// languages.splice(1,1) // xóa số phần tử (tham số thứ hai) của mảng từ vị trí tham số thứ nhất 

// 7.2: chèn
// languages.splice(1,0,'Dart'); : tham số thứ nhất: vị trí chèn

// 7.3 vừa xóa vừa chèn
// languages.splice(1,2,'Dart', 'Java'); tham số thứ nhất: vị trí đặt con trỏ, tham số thứ hai là số phần tử muốn xóa, các tham số tiếp theo là những phần tử muốn chèn vào

// 8. concat: nối hai array trả về  array là tổng của 
// var array = [
//     'I',
//     'Love',
//     'You'
// ];

// console.log(languages.concat(array));

// 9. slicing: cắt phần tử của mảng

// var aray = languages.slice(1,2); cắt từ vị trí 1 đến vị trí 2
// console.log(aray);


// ARRAY METHODS:

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 150
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 170
    },
    {
        id: 3,
        name: 'ReactJS',
        coin: 120
    },
    {
        id: 4,
        name: 'HTML',
        coin: 100
    },
    {
        id: 5,
        name: 'CSS',
        coin: 0
    }
];

// forEach: duyệt qua từng phần tử của mảng:
courses.forEach(function(course, index) {
    console.log(course, index);
});
// }); // call back

// Every: thường dùng để kiểm tra tất cả các phần tử có thỏa mãn 1 đk nào đó:kiểm tra lần lượt từng phần tử đến khi đk sai => dừng

// var isFree =  courses.every(function(course, index){
//     return course.coin === 0;
// });

// console.log(isFree);

// some: kiểm tra lần lượt từng phần tử gặp ngay đk đúng => dừng

// var isFree =  courses.some(function(course, index){
//     // console.log(index);
//     return course.coin === 15;
// });

// console.log(isFree);

// FIND: tìm kiếm phần tử trong mảng (nếu có thì chỉ trả về 1 phần tử) => gặp phần tử nào return true => gán ngược lại phần tử đó => trả về chính phần tử đó; nếu k có thì trả về undefined
// var course =  courses.find(function(course, index) {
//     return course.name === 'Trang';
// });

// console.log(course);

// filter: tìm kiếm phần tử có thuộc tính nào đó trong mảng, trả về tất cả các phần tử cần tìm


// MAP(): muốn chỉnh sửa các phần tử:
// var newCourses = courses.map(function(course, index) {
//     course.name = 'Khoa hoc '+ `${course.name}`;
//     course.coinText = 'Gia: '+ `${course.coin}`;
//     return course;
// });

// console.log(newCourses);

// // reduce:
// làm phẳng một mảng sâu:
// var deepArray = [1,2,3,[4,5,6],2,[]];
// var flatArray = deepArray.reduce(function(flatArray,deepArrayItem){
//     return flatArray.concat(deepArrayItem);
// },[]);
// console.log(flatArray);

// ====reversing an array: 
// arrayName.reverse(); trả về một mảng đã được đảo thứ tự


// JS sorting arrays: sort() method sorts an array as a string alpabetically
// Khi sắp xếp một mảng số:
sử dụng hàm so sánh:
const points = [40, 100, 1, 5, 25, 10];
// sắp xếp tăng dần
points.sort(function(a,b){
    return a-b;
});
// sắp xếp giảm dần
points.sort(function(a,b){
    return b-a;
});