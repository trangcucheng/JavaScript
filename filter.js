// lọc ra những phần tử thỏa mãn điều kiện, trả về một mảng chứa các phần tử thỏa mãn điều kiện
//  không lặp qua những phần tử trống
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

Array.prototype.filter2 =  function(callback){
    var output = [];
    for (var i in this){
        if (this.hasOwnProperty(i)){
            var result = callback(this[i],i, this);
            if (result) {
                output.push(this[i]);
            }
        }
    }
    return output;
};

var result = myArray.filter2(function(item,index, array) {
    return item.age > 19;
});

console.log(result);