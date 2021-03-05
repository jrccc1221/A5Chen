/*
First program - create a program that uses a 'while' loop and outputs each iteration as shown: 
> scenario:
form named 'while'
output to console: 
This is loop iteration 1.
This is loop iteration 2.
etc....
*/
let i = 0;
while (i<=3)
      console.log(`This is loop iteration ${i}`);
      i ++;
      
/*Second program - create a program on a new form that uses a 'for' loop and an 'array' that outputs each name in the array on its' own line. 
> scenario:
form named ‘for’
array named 'names' with these names in it: 
Bob
Janet
Tom
Erin
Lucy
Alyssa
Dustin
each iteration, outputs a name from array, each on its’ own line.
Bob
Janet
Tom
etc.
*/
/*
let names = ['Bob','Janet','Tom','Erin','Lucy','Alyssa','Dustin']
for (i=0; i<=names.length;i++)
      console.log(name[i])
      
*/
/*

function Calculate(num1, num2) {
let sum = num1 + num2 
return sum
}


let x = prompt("Pick a number")

let y = prompt("Pick a number")


let summedNumbers = Calculate(x, y) 

alert(`The sum of ${x} and ${y} is ${summedNumbers}`)
console.log(`The sum of ${x} and ${y} is ${summedNumbers}`)
*/
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

upperCaseString = quoteString.toUpperCase()

console.log(`Upper case string is: ${upperCaseString}.`)

let authorString = "- Henry Ford"

let completeString= (quoteString + authorString)

let found = ""

value = completeString.includes("Henry")

if (value == true) {
  found = "Henry was in the quote string"
  console.log(found)
} else {
   found = " Henry was NOT in the quote string"
  console.log(found)
}


      
      


      
      
      