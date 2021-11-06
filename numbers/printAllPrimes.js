function AllPrimesLessThanN(num) {
    for (var i = 0; i < num; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

AllPrimesLessThanN(100)