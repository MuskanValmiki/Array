// copying array
var  namesArray = ['muskan','somi','samridhhi'];
var arr2 = namesArray;
console.log(arr2)

// add element in array
var namesArray = ['muskan','somi','samriddhi'];
var arr2 = namesArray;
console.log(arr2); // ['muskan','somi','samriddhi']
arr2.push("ruchi"); // adding a new string into arr2
console.log(arr2); // ['muskan','somi','samriddhi','ruchi'] arr2 changed
console.log(namesArray); // ['muskan','somi','samriddhi','ruchi']original array also changed

// copying with the spread operator
 
let namesArray_ = ['shivanshi','muskan','nistha','anu'];
let arr2_ = [...namesArray_]; // using spread operator
console.log(arr2_);//['shivanshi','muskan','nistha','anu']
arr2_.push("richa"); // adding a new name
console.log(arr2_); //['shivanshi','muskan','nistha','anu','richa']
console.log(namesArray_); //['shivanshi','muskan','nistha','anu']
