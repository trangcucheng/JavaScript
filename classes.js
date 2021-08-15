// class không phải là một object mà là một template của object
// tức là có thể sử dụng class để tạo object
class car{
    // luôn luôn có một phương thức khởi tạo
    constructor(name, year){
        this.name = name;
        this.year = year;
    };
        //  class method
        age(x){
            return x- this.year;
        };
};

const myCar1 = new car("Audi", 2019);
console.log(myCar1.age(2020));