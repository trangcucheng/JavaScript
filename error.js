let x= 5;
try {
    // Block of code to try
    var x =2;
  }
  catch(err) {
    //Block of code to handle errors
    console.log(err.message);
 }
  finally {
   // Block of code to be executed regardless of the try / catch result
  }

// câu lệnh throw xử lý các ngoại lệ do người dùng tự định nghĩa