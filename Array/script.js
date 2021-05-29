// Find the length of an array
(function (arr){
    var len=arr.length;
    console.log(len);
})([1,2,3,4]);  //output 4;

// Reverse the array in place without using reverse
function reverse(arr){
    let fnl = [];
    for (i = arr.length-1;i>=0;i--){        
        fnl.push(arr[i])    
    }
    return fnl;
}
console.log(reverse([1,2,3,4]));

// Find the smallest and largest numbers 


function minMaxOfArray(arr){
    console.log((Math.min(...arr))); //destructuring assignment
    console.log((Math.max(...arr)));
}
minMaxOfArray([12, 3, 4, 13, 65, 10])


// Remove all the duplicates of an array in place
// Find the length of the longest consecutive elements’ sequence
// Remove the first two elements using array destructuring
// Write a function that determines if an object is an array
// Given an array of coins, write a function to compute the number of ways you can make that amount using those coins