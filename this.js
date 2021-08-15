//  Từ khóa This trong javascript đề cập đến đối tượng mà nó thuộc về
//  Đặc tính:
//  - Trong một phương thức, this tham chiếu tới đối tượng truy cập đến phương thức đó ( đối tượng trước dấu .)
const obj = {
    name: 'Trang',
    age: '20',
    lover: {
        name: "Shin",
        age: 3,
        getLover(){
            console.log(this);
        }
    }
}

obj.lover.getLover(); // trả lover
//  - Đứng ngoài phương thức, ở trong hàm this tham chiếu tới đối tượng global
console.log(this);  // trả về đối tượng window- global
function myFunc(){
    console.log(this);
}

myFunc() // trả về đối tượng Window nhưng nếu trong Strict mode thì hàm này trả về undefined vì nó thuộc đối tượng window  => muốn trả về thì phải dùng window.myFunc()
//  lưu ý:
//  - this trong hàm tạo đại diện cho đối tượng sẽ được tạo
function Person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new Person('Trang',20)

console.log(person1);
//  - this trong một hàm khi ở strict mode là underfined
//  - Các pt bind(), call(), apply() có thể tham chiếu this tới đối tượng khác
// - arrow function 

 // Ex: