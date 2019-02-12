// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//Use for loop
//set start of loop at 1, stop loop at 100 and increment through the range of numbers 1-100 by one
for(let i = 1; i <= 100; i++) {
    //Create conditional statement (if) starting with conditions to print "FizzBuzz", as that is the "hardest" case, where the numeric values must be divisible by 3 and 5 
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    //The next condition (else if) is if the numeric value is divisible by 3 and print "Fizz"
    else if(i % 3 === 0) {
        console.log("Fizz");
    }
    //The next condition (else if) is if the numeric value is divisible by 5 and print "Buzz"
    else if(i % 5 === 0) {
        console.log("Buzz");
        //Must use this else statement to stop loop and print numbers that are neither divisible by 3, 5, nor 15
    } else {
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz;
}