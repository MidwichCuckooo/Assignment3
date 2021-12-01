// Create a function that returns the reverse number of a given number.
// Example: input = 123 -> returns: 321

function reverseNum(number){
    number = number.toString();   
    number = Array.from(number);
    number = number.reverse();          
    number = number.join("");
    number = parseInt(number);

    return(number);
}
 
    console.log(reverseNum(134))