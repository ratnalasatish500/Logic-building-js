//Q-1 write a program to print hello world in console 



console.log("Hello World")

//2.write a function that takes two numbers as input and print their sum

// function sum (a,b){
//       return a + b 
// }
//  console.log(sum(4,12))  

 //or


//  function sum (a,b){
//      const sum = a + b
//      console.log("sum is" , sum)
//  }
//  sum(2,10)
//  sum(100,20)

 //3.write a function calculate and print the area of rectanglr
//   - input length and width
//   -Area of rectangle = Length * width
//   -clg
//   -if it should not be negitive value result   print length should be +ve and width should be +ve 


function calculateArea( Length, width){
     let Area = Length * width
     if (Length<=0){
           throw new RangeError("Length should be positive ")
     }
     if(width<=0){
        throw new RangeError("Width should be postive ")
     }
     console.log("Area of rectamgle", Area)
   
     }
    
// calculateArea(-7,100)
// calculateArea(0,100)
// calculateArea(20,100)