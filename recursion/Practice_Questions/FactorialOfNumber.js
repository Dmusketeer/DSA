// n! = 1*2*3*...*(n-1)*n;
// fact(n)=fact(n-1)*n;

function fact(n) {
    if(n===0){
        return 1;
    }else{
        return fact(n-1)*n ; 
    }
}
// Timme complexity and space complexity O(n);
console.log(fact(5));