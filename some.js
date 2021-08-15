//  kiểm tra xem có tối thiểu một phần tử trong mảng thỏa mãn điều kiện
//  trả về kết quả đúng hoặc sai

var myArray = [
    {
        name: 'Daddy',
        age: 50,
        number: 10
    },
    {
        name: 'Trang',
        age: 20,
        number: 8
    },
    {
        name: 'Anh',
        age: 18,
        number: 5
    },
    {
        name: 'Bao',
        age: 7,
        number: 4
    }
];

Array.prototype.some2 = function(callback){
    for (i in this){
        if (this.hasOwnProperty(i)){
            return callback(this[i]);
        }
    }
}

var result = myArray.some2(function(item){
    return item.age<0;
})

console.log(result);