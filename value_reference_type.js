// Tham trị và tham chiếu trong JS
/**
 1. Value types (Primitive data types: kiểu dữ liệu nguyên thủy)
    - String
    - Number
    - Boolean
    - BigInt
    - Symbol
    - undefined
    - null

2. Reference types (Non-primitigve types)
    - Object
    - Array
    - Function
 */
// Note
const a ={
    name: 'Trang'
};
const b ={
    name: 'Trang'
};

console.log(a===b); // false vì a và b đang trỏ đến hai địa chỉ khác nhau trên ô nhớ

