marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
 ]
 var sum=0
 for(var i of marks){
    for(var j of i){
        sum+=j
    }
 }
 console.log(sum);
//find the sum of nested array

var number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19]
output=[]
for(var i of n){
   for(var j of n){
       if (i+j === number){
           output.push([i,j])
       }
  }
}
console.log(output);
//here we check which two element sum is 30

elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var odd_numbers=0
var even_numbers=0
for(var i of elements){
   if(i%2 ===0){
       even_numbers+=1
   }
   else{
       odd_numbers+=1
   }
}
console.log(odd_numbers);
console.log(even_numbers);
//count even and odd

elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_odd_numbers=0
var sum_even_numbers=0
for(var i of elements){
   if(i%2 ===0){
       sum_even_numbers+=i
   }
   else{
       sum_odd_numbers+=i
   }
}
console.log(sum_odd_numbers);
console.log(sum_even_numbers);
//odd number sum and even number sum

elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_odd_numbers=0
var sum_even_numbers=0
for(var i of elements){
   if(i%2 ===0){
       sum_even_numbers+=i
   }
   else{
       sum_odd_numbers+=i
   }
}
console.log((sum_even_numbers+sum_odd_numbers)/2);
//find the average of even ,odd sum

elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var count_odd_numbers=0
var sum_odd_numbers=0
var sum_even_numbers=0
var count_even_numbers=0
for(var i of elements){
   if(i%2 ===0){
       sum_even_numbers+=i;
       count_even_numbers+=1;
   }
   else{
       sum_odd_numbers+=i;
       count_odd_numbers+=1;
   }
}
console.log((sum_even_numbers+sum_odd_numbers)/2);
console.log(count_odd_numbers);
console.log(count_even_numbers);
console.log(sum_odd_numbers);
console.log(sum_even_numbers);
//here we have to find odd count,even count,even sum,odd sum and average both together