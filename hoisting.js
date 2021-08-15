//  Hoisting: việc khai báo các hàm hoặc biến được kéo lên phía trên
//  var: khi khai báo biến thì biến được kéo lên trên và có giá trị là undefined
//  let, const: khi khai báo biến được hoisted nhưng không được tạo giá trị và được đưa vào "Temperal Dead Zone": vùng tạm thời không truy cập đc
// Note:
const counter1 = makeCounter()
console.log(counter1());

function makeCounter(){
    let counter = 0;
    return increase;
    // mặc dù release ở đây nhưng increase() đã đc hoisted lên trên nên khi chạy vẫn cho ra kết quả
    function increase(){
        return counter ++;
    }
}