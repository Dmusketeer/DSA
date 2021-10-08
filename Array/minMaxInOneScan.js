var min = 5
var max = 5
Arr = [2, 6, 4, 9, 10, 23, 54, 7]
function minAndMax(min, max) {
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] < min) min = Arr[i]
        else if (Arr[i] > max) max = Arr[i]
    }
    return [min, max]
}
console.log(minAndMax(min, max))