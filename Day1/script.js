// print Number from 1 to n: 
function numberUptoN(N){
    for(let i=1;i<=N;i++){
       console.log(i);
    }
    return ;
}

console.log(numberUptoN(10));




// Reverse an array
function reverseArray(a, n) {
    // Write your code here
    for (let i = n; i >= 0; i--) {
        console.log(a[i]);
    }
}
var arr = [1, 2, 3, 4, 5, 6, 7];
reverseArray(arr, 7);
