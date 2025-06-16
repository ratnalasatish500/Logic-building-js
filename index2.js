/*write a finction that tells if a given value is odd or even 
 input: a number
Return "even if the number is even "odd" if the number is odd
even num when divided by 2 has reminder -2,0,2,4,12,122
odd num when divided reminder -1,1 
*/

function OddOrEven(a){
     const reminder =  a%2

     if( reminder === 0){
          return  "even number"
     } 

     else{ 
         return "odd number"

     }
}

console.log(OddOrEven(1))  
console.log("0 is ",OddOrEven(0))
console.log("155 is", OddOrEven(155) )

// or


function checkOddOrEven(a){
   return a%2 ===0 ? "even" : "odd"
}


function SmallestValue (a,b,c){
    if (a < b && a< c){
       return  a + " is the smallest "   
    }
    else if(b<c && b< a){
        return b + " is the smallest"    
    }
    else if(c<a && c< b){
        return  c + " is the smallest" 
    }
}

// console.log( SmallestValue(-100,99,10))  

//or 

function SmallestValue(a,b,c){
  let smallestvalueis = a;
  if (b < smallestvalueis  ){
    smallestvalueis = b
  }
  if( c < smallestvalueis){
     smallestvalueis = c
  }
  return smallestvalueis
}
 const value = SmallestValue(10,2,10)
 console.log(value)