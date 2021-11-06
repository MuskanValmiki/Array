numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var count_element=0;
for(var i=0; i<numbers.length;i++){
   count_element++
}
console.log(count_element);
// here we count the element

numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max_num=0;
for(var i=0; i<numbers.length;i++){
   if (numbers[i]>max_num){
       max_num=numbers[i]
 
   }
}
console.log(max_num);
//here we find maxmium

var max=0;
var second_max=0;
for (var i =0;i<numbers.length;i++){
 if (max<numbers[i]){
   if (second_max<max){
     second_max=max;
   }
   max=numbers[i];
 }
 else{
     if (second_max<numbers[i]){
     second_max=numbers[i];
   }
 }
}
console.log(second_max);

const arr = ['20','120','111','215','54','78', '120'];   
let intArray = arr.map(Number); // convert into number
intArray = [...new Set(intArray)]; // Remove duplicate numbers
const secondLargestNumber = intArray.sort((a,b) => {
   return b - a;
})[1];
console.log(secondLargestNumber) 
//here we find the second max

var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var reversedArray=[]
for(var i=numbers.length-1; i>=0;i--){
   reversedArray.push(numbers[i])
}
console.log(reversedArray);
//here we find the reverse 


var Name=['m','a','l','a','y','a','l','a','m'];
var new_array=[];
for (var i=Name.length-1; i>=0;i--){
   new_array.push(Name[i]);
}
var count=0;
for (var j=0; j<Name.length; j++){
   if (new_array[j]===Name[j]){
       count++;
   }
}
if(count===Name.length){
   console.log("this is palindrome");
}else{
   console.log("this is not a palindrome");
}
//here we find palindrome or not

list1 = [1,2,3,4,5,6]
list2 = [2,3,1,0,6,7]
elements=[]
for(var i of list1){
   if (!list2.includes(i)){
       elements.push(i)
   }
}
console.log(elements);
//find the which number not in list2