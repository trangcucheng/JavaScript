// 1. Dùng để gọi 1 hàm
function random() {
    console.log(Math.random());
}

random.call();

//2. Gọi hàm và bind this
const teacher = {
    firstName: "Trang",
    lastName: "Huyen"
}

const student = {
    firstName: "Van",
    lastName: "Anh",
    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

student.getFullName();
student.getFullName.call(teacher); // mặc dù teacher không có getFullname nhưng vẫn trả về đc kết quả mong muốn


// khi sử dụng strict mode: thông thường this => undefined
// muốn sử dụng this: call(this)