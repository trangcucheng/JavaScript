// trường hợp thuận buồm xuôi gió
function sleep(ms){
    return new Promise(function(resolve) {
        setTimeout(resolve,ms);
    });
}

/*
sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return sleep(1000);
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .then(function(){
        console.log(4);
        return sleep(1000);
    })
*/

    //  trường hợp bị reject giữa đường:
    function sleep(ms){
        return new Promise(function(resolve) {
            setTimeout(resolve,ms);
        });
    }
    
    sleep(1000)
        .then(function(){
            console.log(1);
            return sleep(1000);
        })
        .then(function(){
            console.log(2);
            return new Promise(function(resolve,reject){
                reject();
            });
        })
        .then(function(){
            console.log(3);
            return sleep(1000);
        })
        .then(function(){
            console.log(4);
            return sleep(1000);
        })

        //  Từ khối then bị lỗi => chuyển đến khối catch()
        .catch(function(error){
            console.log("ERROR!");
        })
    


// promise.all
var promise1 = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Trang');
        },1000);
});

var promise2 = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Anh Bao');
        },3000);
});

Promise.all([promise1,promise2])
    .then(function(result){
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    });