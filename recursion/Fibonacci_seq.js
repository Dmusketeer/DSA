function fib(n){
    if(n<=1){
        return 1;
    }
    var sum = 0;
    var fNumber = 0;
    var secNumber = 1;
    
    for(var i = 1 ; i<=n ;i++){
        sum = fNumber + secNumber;// (lastlast, last) = (last,lastlast + last)
        fNumber=secNumber;
        secNumber=sum;
    } return sum;
}
console.log(fib(8));  // 34

// Base case: The base case for the Fibonacci sequence is that the first element is 1


// Recursive Solution

function fib(n){
    if(n<=1){
        return 1;
    }else{
        return fib(n-1)+fib(n-2);
    }
}
console.log(fib(8)); //34

// time complexity of O(2**n)




// Fibonacci Sequence: Tail Recursion
// A tail recursive function is a recursive function in which the recursive call is the last
// executed thing in the function.First let’s look at the iterative solution:

function fib(n,fnum,snum){
    if(n==0) return fnum;
    if(n==1) return snum;
    return fib(n-1,snum,snum+fsum);
}
console.log(fib(8,1,1)); //34
// Time Complexity: O(n)
// space Complexity: O(n)