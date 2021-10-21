function kthSmallestItem(arr, n, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1]
}

let arr = [1, 345, 2, 6, 9.10, 3];
let n = arr.length;
let k = 4;
console.log(`K'th smallest element is ${kthSmallestItem(arr, n, k)}.`)