// Create a function that inverses and returns a given binary number. Example:
// 1101 -> 0010.

function revertBinary(number){
    number = Array.from(number);
    for(let i=0; i < number.length; i++){
    //let i in number    
        number[i] = number[i] == 1 ? 0 : 1;
    }
    number = number.join("");
    
    return number
}

    console.log(revertBinary("11001"))