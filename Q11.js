var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
odd_c = 0;
even_c = 0;
for(var i of elements){
    if (i%2 == 0){
        even_c++
    }
    else{
        odd_c++
    }
}
console.log("its a even count",even_c);
console.log("Its a od count",odd_c);
// odd even count