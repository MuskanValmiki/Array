var numbers=[50, 40, 0,23, 70, 56, 12, 5, 10, 4,8];
var sec_max = 0;
var max = 0;

for (var  i= 0 ;i<numbers.length;i++){
    if (numbers[i]>max){
        if (sec_max<max){
            sec_max = max
        }
        max = numbers[i];
    }
    else{
        if (sec_max < numbers[i] ){
            sec_max = numbers[i];
        }
    }
}
console.log(sec_max);
console.log(max);
// find the second maxmimum
