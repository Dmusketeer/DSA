// Nested Recursion: In this recursion, a recursive function will pass the parameter as a recursive call.That means “recursion inside recursion”.Let see the example to understand this recursion.

function Nestedfunc(n){
if(n>100){
    return n-10;
}else{
    return Nestedfunc(Nestedfunc(n+11));
}
}
var x = Nestedfunc(95);
console.log(x);//91