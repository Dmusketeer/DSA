// method:1️⃣
// using extra array
array = [1, 2, 3, 4, 5]
revArr1 = []
function revArr(Array, revArr) {
    for (var i = Array.length - 1; i >= 0; i--) {
        revArr.push(Array[i])
    }
    return revArr;
}
// console.log(revArr(array, revArr1))
// method 2️⃣
// // whitout using extra array 
function reverse(Array, start, end) {
    while (start < end) {
        [Array[start], Array[end]] = [Array[end], Array[start]]
        start += 1;
        end -= 1;
    }
    return Array;
}
// console.log(reverse(array, 0, array.length - 1))
// Time Complexity: O(n)


// Method 3️⃣ 
// recursive way 
function reverseArr(Array, start, end) {
    if (start >= end) {
        return;
    }
    [Array[start], Array[end]] = [Array[end], Array[start]]
    reverse(Array, start + 1, end - 1)
    return Array;
}
console.log(reverseArr(array, 0, array.length - 1))
