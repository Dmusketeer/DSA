function C(n,r){
    if(n==r|| r==0){
        return 1 ;
    }else{
        return C(n-1,r-1)+C(n-1,r);
    }
}

var n=5;
var r=4;
console.log(`The value of ${n}C${r} is : ${C(n,r)}`);
