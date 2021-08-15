/* 
vòng lặp:
1. for: lặp với điều kiện đúng
2. for / in: lặp qua key của đối tượng
3. for / of: lặp qua value của đối tượng
4. while: lặp lại khi điều kiện đúng
5. do/while: lặp ít nhất 1 lần, sau đó lặp lại khi điều kiện đúng
*/


// FOR LOOP:
for (var i = 1; i <10; i++ ){
    console.log(i);
}

var myObject = {
    first: 'Javascript',
    second: 'PHP',
    third: 'Java',
    forth: 'Ruby'
};

// for in
for (var key in myObject){
    console.log(myObject[key]);
}

// for of: không áp dụng trực tiếp được với object

var myArray = [
     'Javascript',
     'PHP',
     'Java',
     'Ruby'
];

for (var value of myArray){
    console.log(value);
}

//  dùng for of đối với object:
for (var key of Object.keys(myObject)){
    console.log(myObject[key]);
}

for (var value of Object.values(myObject)){
    console.log(value);
}

//DO/ WHILE LOOP
var i =0;
var isSuccess = false;
do{
    i++;
    console.log('Nạp thẻ lần: '+i);
    // nếu thành công
    if (true){
        isSuccess = true;
    }
}while (!isSuccess && i<3);
