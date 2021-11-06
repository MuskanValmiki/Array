var name=['n','i','t','i','n'];
// var name=['m','u','s','s','u'];
var empty = [];
var check_palin= name;
for (var i=name.length-1; i>=0 ; i--){
    empty.push(name[i])
}

for (var j=0; j<empty.length; j++){
    if (empty[j] === check_palin[j]){
        var check = ("Its a Palindrome");
    }
    else{
        var check = ("Not a Palindrome");
    }  
}
console.log(check)
// palindrome or not
