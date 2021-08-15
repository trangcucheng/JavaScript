//  được sử dụng khi trong file code có thể có những đoạn code không an toàn ( có thể gây rò rỉ bộ nhớ):
// - tránh quên từ khóa khai báo biến
// - tránh trùng tên biến dẫn tới lỗi logic
// - sử dụng bộ nhớ hiệu quả vì hạn chế được việc tạo biến global
//  Cách sử dụng:
// 1. thêm "use strict"; ở đầu file
// 2. thêm "use strict"; ngay sau thẻ <script>
// 3. sử dụng trong một hàm 
// => luôn để đầu phạm vi

//=============================================
"use strict";
// Ứng dụng:

// 1. báo lỗi khi gán lại giá trị có thuộc tính writable: false;
const student = Object.freeze( { // dóng băng những thuộc tính lại: writable => false => bật strict mode => báo lỗi
    name: "Trang"
});

// writable => true
student[name] ="Anh";
console.log(student[name]); // "Anh"

// 2. Báo lỗi khi khai báo hàm có các tham số cùng tên
// function sum(a,a){
//     return a+a  // báo lỗi khi use strict
// }

//3. Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
{
    function sum(a,b) {
        return a+b;
    }
}

console.log(sum(5,3)); // báo lỗi

//4. Không đặt tên biến, tên hàm bằng một só từ khóa "nhạy cảm" của ngôn ngữ (có những từ khóa tương lai có thể thêm vào ngôn ngữ)
const private = 123;
console.log(private);