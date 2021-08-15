// trả về kết quả đúng hoặc sai
// kiểm tra tất cả các phần tử của mảng nếu đúng điều kiện thì mới trả về true
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

Array.prototype.every2 = function(callback){
    for (var i in this){
        if (this.hasOwnProperty(i)){
            var result = callback(this[i]);
            if (!result){
                return false;
            }
        }
    }
    return true;
};

var result = myArray.every2(function(item) {
    return item.age<100;
});

console.log(result);
