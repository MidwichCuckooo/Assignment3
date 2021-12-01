// Create a function that sums two binary numbers. This function should put
// every digit of both binary numbers into two separate arrays, one for each
// argument, and make the length of those two arrays equal by adding zeros to
// the left of the shorter one (using the unshift method). Add those digits with
// the same index. Don’t forget to use the carry bit variable.
let inter;
function biniarySum(number1,number2){
    number1 = Array.from(number1);
    number2 = Array.from(number2);
        if (number1.length >= number2.length){
            inter =  (number1.length - number2.length);
        }
            else{
                inter = (number2.length - number1.length)
        }
    for(i = 0; i >= inter; i++){
        if (number1.length >= number2.length){
            number2.unshift(0);
        } 
            else {
                number1.unshift(0)
            }  
        }


    
    
    return(number1 + number2);
 }

        console.log(biniarySum(123, 12345))
