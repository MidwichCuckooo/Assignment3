// Create a function that takes a number as its argument and returns true if a
// number is a prime number and false otherwise. Hint: A number is a prime
// number when it is divisible only by one and itself. If a number is not divisible
// to any number starting 2 to the SQRT of itself, then that number is a prime
// number.
function isPrime(number) {
    let numberSQRT = Math.sqrt(number);
    let numberIsPrime = true;

    if(number < 0 || typeof(number) != "number") return "Wrong input"
    if(number == 0 || number == 1) return false;

    for(let i = 2; i <= numberSQRT; i++) {
        if(number % i == 0) {
            numberIsPrime = false;
            break;
        }
    }

    return numberIsPrime
}

console.log(isPrime(7))

