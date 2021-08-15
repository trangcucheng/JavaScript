//  promise
// -Sync: đồng bộ: chạy theo luồng, tuần tự, cái nào code trước thì được thực thi trước
// -Async: bất đồng bộ: không theo trật tự trên
//  javascript cơ bản là sync, ngoại trừ: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
//  => trước khi có promise => giải quyết bất đồng bộ bằng callback
// sinh ra vấn đề:
// callback hell: địa ngục callback:)))
// Pyramid of doom: kim tự tháp diệt vong:)))
// => giải quyết bất đồng bộ bằng promise


//===== Promise có 3 trạng thái
// 1. pending
// 2. fulfilled
// 3. rejected


var promise = new Promise(
    // executor
    function(resolve, reject){
        // logic
        //khi thao tác xử lý thành công: resolve()
        // thất bại: reject()

        // Fake call API
        resolve([
            {
                id: 1,
                name: 'JavaScript'
            }
        ]);
    }
);

promise
    // callback của then được gọi khi resolve() được gọi
    .then( function(course) {
        // nếu trong callback của then trên không return promise thì JS sẽ thực hiện then bên dưới
        // data của then ở dưới chính là kết quả của then trên return
        // console.log(course);
        // return 1;
        // nếu:
        return new Promise(function(resolve){
            setTimeout(resolve,3000); //chờ promise này thực hiện xong rồi mới thực hiện khối then bên dưới
        });
    })
    //  kết thúc then trên sẽ return 1 promise => khối then dưới chính là promise.then
    .then( function(data) {
        console.log(data);
        return 2;
    })
    .then( function(data) {
        console.log(data);
        return 3;
    })
    
    // callback của catch được gọi khi reject() được gọi
    .catch( function(error) {
        console.log(error);
    })
    // được gọi khi 1 trong reject() hoặc resolve() được gọi
    .finally( function() {
        console.log("Done!");
    })

    // Promise.resolve(): luôn trả về một resolve;
    // Promise.reject(): luôn trả về một reject;

    var promise = new Promise(function(resolve, reject){
        // resolve("Successfully!");
        reject("ERROR!");
    })

    promise
        .then(function(result){
            console.log(result);
        })
        .catch(function(err){
            console.log(err);
        })

    