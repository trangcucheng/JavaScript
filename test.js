var myArray=[1,2,3,8,7,9,10];
Array.prototype.reduce2= function(callback, initialValue){
    var length =  this.length;
    for (var i = 0; i< length; i++){
        initialValue = callback(initialValue,this[i]);
    }
    return initialValue;
};



console.log(myArray.reduce2(function(initialValue, item){
    return initialValue+item;
},0));
