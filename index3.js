/*  
5.write a function that return thr reverse of string 
-input A string 
Return reversed string 
example 
"satish" -> hsitas
 */

function reverseString (inputstring){
  let splitstring = inputstring.split("")
  let reversestring = splitstring.reverse()
  let joinstring = reversestring.join('')
   
  return joinstring
}

// console.log(reverseString("satish "))


// with loops


function reverseStrings12(inputString){
    let result = ""
     for (let i = inputString.length -1; i >=0 ; i--) {
        result =  result + inputString[i]
     }
     return result
    
}
console.log(reverseStrings12("satish"))



//factorial 


function factorial( inputval){
    if( inputval <0 ){
       throw error ("negitive value not allowed")
    }
    let result = 1
    for ( let i= 1; i<=  inputval; i++ ) {
     result = result * i
    }
    return result
}
console.log(factorial(10))

// to find leap year 

function leapyear (year){
    return year % 4 ===0
}

console.log(leapyear(2021))