// Create a function that takes two numbers as its arguments and returns an
// array that contains all the prime numbers between them inclusively. This
// function must call your function from question 1 to check each number.

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

function arePrime(num1, num2){
    let primeArr = [];
    
    for(let i = num1; i <= num2; i++){
        if(isPrime(i)){
            primeArr.push(i);
        }
        
    }
    
    return(primeArr);
}

console.log(arePrime(1, 50))