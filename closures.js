// tính khép kín, bao đóng của một hàm:
/* khi một hàm được gọi => tạo ra một phạm vi
- Khái niệm closure: Là một hàm có thể ghi nhớ nơi nó đc tạo và có thể truy cập đc biến ở bên ngoài phạm vi của nó
- Ứng dụng:
    + viết code ngắn gọn hơn
    + biểu diễn, ứng dụng tinhd private trong OOP

- Note: 
    + Biến được tham chiếu bởi closure sẽ không đc xóa khỏi bộ nhớ khi hàm cha thực thi xong
*/

function createCounter() {
    let counter = 0;
    function increase() {
        return ++counter;
    }
    return increase;
}

const counter1 = createCounter();  // counter1 => increase()
console.log(counter1()) //1
console.log(counter1()) //2
console.log(counter1()) //3
console.log(counter1()) //4
// Tạo sao giá trị lại tăng lên? counter1 vẫn nằm trong phạm vi của createCounter(), làm tăng giá trị của mottoj biến ở bên ngoài pvi của nó => biến đó không bị xóa khỏi bộ nhớ

// ứng dụng của closure: tạo ra một storage
function createStorage(key){
    const store = JSON.parse(localStorage.getItem(key)) ?? {}; // neu underfined thi mac dinh la obj -{}
    function save(){
        localStorage.setItem(key, JSON.stringify(store)); // doi sang JSON
    }
    const storage = {
        get(key){
            return store[key];
        },
        add(key, value){
            store[key] = value;
            save();
        },
        remove(key){
            delete store[key];
            save()
        }
    }
    return storage;
}

const app = createStorage('profile_setting');
app.add("name", "Trang");