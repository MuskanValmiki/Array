var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("Enter any num :=")
var array1 = [];
for (var i =1; i<=user ;i++){
    var array2 = [];
    var array3 = [];
    array2.push(i)
    for (var j=1; j<=10;j++){
        var result = i*j
        array3.push(result)
    }
    array2.push(array3);
array1.push(array2);
}
console.log(array1);
// nested table
