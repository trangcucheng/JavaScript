// OBJECT TRONG JAVASCRIPT
// var emailKey = 'email';

// var myInfo = {
//     fullName: 'Nguyen Thi Huyen Trang',
//     age: 20,
//     address: 'Thanh Chuong, Nghe An',
//     [emailKey]: 'trangcucheng@gmail.com',
//     getName: function() {
//         return this.fullName;  // this => myInfo
//     }
// };

// thêm 1 cặp key value
// myInfo.email = 'trangcucheng@gmail.com';
// myInfo['cute-dog'] = 'shin';

// thêm 
// console.log(myInfo['cute-dog']);

// xóa
// delete myInfo.age;
// console.log(myInfo.getName());

// OBJECT CONSTRUCTOR 
// cách 2: var User = function(firstName, lastName, avatar) {  //expression function
// cách 1
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function(){
//         return `${this.lastName} ${this.firstName} `;
//     }
// }

// var author = new User('Trang', 'Nguyen','avatar');
// var user = new User('Vu', 'Nguyen','avatar');

// // thêm thuộc tính cho các đối tượng
// author.title = 'Chia sẻ dạo tại F8!';
// user.comment = 'Hi mình sẽ cố gắng!'

// console.log(author.getName());
// console.log(user.getName());


/* OBJECT PROTOTYPE: nguyên mẫu
1. sử dụng để thêm 1 thuộc tính ở bên ngoài hàm tạo; những thuộc tính này chỉ hiện thị bên trong từ khóa _proto_ ở console của trình duyệt 


*/

function User(firstName, lastName, avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.getName = function(){
            return `${this.lastName} ${this.firstName} `;
        }
    }
    
var author = new User('Trang', 'Nguyen','avatar');
var user = new User('Vu', 'Nguyen','avatar');

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

console.log(author.getClassName());

