var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("Enter any num :=")
var empty = [];
for (var i = 0; i<user; i++){
    var empty1 = [];
    var count = 1;
    for (var j = 0; j<=i;j++){
        empty1.push(count)
        count++
    }
    empty.push(empty1)
}
console.log(empty);
// nested array
