// hàm forEach không trả về cái gì hết(không return)
//  không duyệt các phần tử empty của mảng



var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

Array.prototype.forEach2 = function(callback) {
    for (var i in this){
        if (this.hasOwnProperty(i)){
            callback(i, this[i]);
        }
    }
};


courses.forEach2(function(index, item){
   console.log(index, item);
});

