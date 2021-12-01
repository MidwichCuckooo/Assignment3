// Create a function that checks if a number is a palindrome by calling the
// functions from question 3.

function reverseNum(number){
    number = number.toString();   
    number = Array.from(number);
    number = number.reverse();          
    number = number.join("");
    number = parseInt(number);

    return(number);
}
function isPalindrome(number){
    if(number == reverseNum(number)){
        return true;
    }
    return false;
}
console.log(isPalindrome(1441));