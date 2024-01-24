function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; 
    }
    return true;
}
console.log(isPrime(2)); // true
console.log(isPrime(592)); // false 