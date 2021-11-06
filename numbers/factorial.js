function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

console.log(isPrime(12));
console.log(isPrime(7));

// Time Complexity: O(n)
// The time complexity is O(n) because this algorithm checks all numbers from 0 to n.