var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max = 0;
var i = 0;
while (i < numbers.length){
    if (numbers[i]>max){
        max = numbers[i]
    }
    i++
}
console.log(max);

var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var reversedArray=[]
for(var i=numbers.length-1; i>=0;i--){
reversedArray.push(numbers[i])
}
console.log(reversedArray);
// find the maximum number
