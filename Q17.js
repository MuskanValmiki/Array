let c=require("readline-sync");
let loop_time=c.question("enter loop time: ");
 
var maxi=0;
let lis=[ ]
for (let i=1;i<=loop_time;i++) {
   let num=c.question("enter number: ")
   lis.push(num)//here i debug append to push
}
var maxi=lis[0];
for (let j=0;j<lis.length;j++){//here i debug ; to .
   if (maxi<lis[j]) {
       [maxi=lis[j]]
   }
 
}
console.log(maxi);


