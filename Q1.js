var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
odd_c = 0;
even_c = 0;
var sum = 0;
for(var i of elements){
    if (i%2 == 0){
        sum += i
        even_c++
        avg_even = sum /even_c

    }
    else{
        sum+=i
        odd_c++
        avg_odd = sum/odd_c
    }
}
console.log("its a even count",even_c);
console.log("its a even average",avg_even);
console.log("Its a od count",odd_c);
console.log("its a odd average",avg_odd);
// odd even count and average of odd even
