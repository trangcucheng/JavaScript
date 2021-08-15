const teacher = {
    fisrtName: 'Trang',
    lastName: 'Huyen',
    getFullName(){
        console.log(`${this.lastName} ${this.fisrtName}`);
    }
}

const btn = document.getElementById("btn");
btn.onclick = teacher.getFullName; // trả về undefined vì this ở đây hiểu là onclick
btn.onclick = teacher.getFullName.bind(teacher);  // ràng buộc this với teacher