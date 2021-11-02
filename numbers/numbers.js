var num1 = 5
var num2 = 4


// Math.floor - rounds down to nearest integer
// Math.round - rounds to nearest integer
// Math.ceil - rounds up to nearest integer


// Math.floor
// 5 / 4; ==> 1.25
console.log("Math.floor : ", Math.floor(num1 / num2))
console.log("Math.floor : ", Math.floor(0.9)); //nearest down(0)
console.log("Math.floor : ", Math.floor(1.1)); // nearest down(1)


//Math.round
// 0-0.49 ==>0
// 0.5-1.0 ==>0
console.log("math round : ", Math.round(4.9));
console.log("math round : ", Math.round(0.9));
console.log("math round : ", Math.round(0.49));
console.log("math round : ", Math.round(0.5));


// Math.ceil
console.log("Math.ceil :", Math.ceil(5.3));
console.log("Math.ceil :", Math.ceil(0.5));
console.log("Math.ceil :", Math.ceil(1.8));


// Number.EPSILON
function numberEqual(x, y) {
    return Math.abs(x - y) < Number.EPSILON
}

console.log(numberEqual(0.4, 0.2));
console.log(numberEqual(0.2, 0.2));


// Number.MAX_SAFE_INTEGER [returns the largest integer]
// Number.MIN_SAFE_INTEGER [returns the smallest integer]
// Number.MIN_VALUE [returns the smallest floating-point number possible.]
// Number.MAX_VALUE [ returns the largest floating-point number possible.]
console.log("Largest integer : ", Number.MAX_SAFE_INTEGER);
console.log("Smallest integer : ", Number.MIN_SAFE_INTEGER);
console.log("Min floating point value : ", Number.MIN_VALUE);
console.log("Max floating point value : ", Number.MAX_VALUE);