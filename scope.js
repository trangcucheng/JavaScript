// Scope: phạm vi 

// - các loại phạm vi:
//     - global: toàn cục
//     - code block: khối mã: let, function, if. else: {}
//     - local scope: Hàm: var, let

// - khi gọi mỗi hàm luôn có một phạm vi mới được tạo
// - các hàm có thể truy cập được các biến đc khai báo bên trong phạm vi của nó và bên ngoài nó
// - Cách thức một biến được truy cập: tìm trong phạm vi gần nhất xem có biến này hay không, nếu không thì sẽ tìm ở phạm vi rộng hơn
// - Khi nào một biên được xóa khỏi bộ nhớ?
//     - Biến toàn cầu: khai báo một biến không nằm trong bất kì một khối code nào (nên hạn chế dùng )
//     - biến trong code block và trong Hàm (sẽ bị xóa khỏi bộ nhớ khi kết thúc hàm/ khối lệnh)
//     - biến trong hàm được tham chiếu bởi một hàm (closures) (khi một hàm tham chiếu đến 1 biến không thuộc phạm vi của nó thì khi kết thúc hàm này biến đó vẫn không bị xóa khỏi bộ nhớ)

// Note: khi khai báo một biến với từ khóa var - tự động hiểu là global
// ex:
{
    var msg = 'I love you'; // phạm vi truy cập: global
}

function logger(){
    function logger2(){
        console.log()
    }
}

logger();
logger2()