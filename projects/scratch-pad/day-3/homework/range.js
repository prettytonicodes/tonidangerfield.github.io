// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    //console.log(start, end); // 5, 1
    //create an empty array to collect integers in range
    //Create conditional statement (if/else-if) comparing start less than end
    //use a for loop to loop over array elements, incrementing
    //push elements into empty array
    //2nd case (else-if), compare start greater than end
    //use a for loop to loop over array elements, decrementing
    //push elements into empty array
    //outside of conditional statement, return the array - rangeIntegers (it will either be integers incrementing or decrementer per condition that passed)
    let rangeIntegers = [];
    
    if(start < end) {
    for(let i = start; i <= end; i++) {
        rangeIntegers.push(i);
    }
    } 
    else if(start > end) {
        for(let i = start; i >= end; i--) {
            rangeIntegers.push(i);
        }
    }
   
    return rangeIntegers;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}