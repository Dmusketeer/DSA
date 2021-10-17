//Find the maximum and minimum element in an array
let array = [21, 23, 2, 45, 90, 12]
function findMax(arr) {
    let MAX = arr[0];
    let MIN = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > MAX) {
            MAX = arr[i];
        } else if (arr[i] < MIN) {
            MIN = arr[i]
        }
    }
    return [MAX, MIN];
}
console.log(findMax(array));

// time complexity🔴 
// O(n)