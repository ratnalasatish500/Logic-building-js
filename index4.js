/*
8. write a function that calculates and print the sum of the digits of a given number 
-input a number positive  integer 12,13,24
return sum of all digits 
example
12: 1 + 2 = 3
23: 2 + 3 = 5
 */

function calculatenumber ( inputint){
      if ( inputint  < 1 ){
         throw new Error ("input should be positive ")
      }
      let convertostring = inputint.toString()
      let splitInput = convertostring.split("")
      console.log(splitInput)
      let sumOfDigits = 0;
      splitInput.forEach(num => {
           sumOfDigits = sumOfDigits + parseInt(num)
      });
      return sumOfDigits
}

console.log(calculatenumber(12))  




