var num = [10, 11, 12, 13, 14, 17, 18, 19];
var empty = [];
for (var i of num){
    for (var j of num){
        if (i+j == 30){
            empty.push([i,j])
            
        }
    }
}
console.log(empty);
// sum of pairs