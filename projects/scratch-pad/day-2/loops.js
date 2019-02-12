// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //use for loop to loop over array
  //conslole.log array[i] to print its values after every iteration of the loop
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //use a for loop to start at end of array (array.length), end at 0 (i > 0) or the first index of array, and decrement through array (--)
  //console.log array[i];
  for(let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //preface code with return
  //use method Object.keys with input object
  return Object.keys(object);
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for(let key in object) {
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //assign vals to an empty array that I'll push the object's values to later
  //Use a for-in loop to loop over object
  //use push method to push object's values (objedt[key]) into the empty array
  //return array, now filled with object's values
  let vals = [];
  for(let key in object) {
    vals.push(object[key]);
  }
  return vals;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //use for-in loop to loop over object
  //console.log object[key], which evaluates to an object's values, per iteration through object's keys
  for(let key in object) {
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //preface code with return
  //Use method Object.keys with input object and use property .length to find length of key/value pairs
  return Object.keys(object).length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //assign an empty array to var objectValuesReversed, which I'll push reversed values into later
  //use a for-in loop to loop over object
  //push object values (object[key]) into empty array
  //use a for loop to loop over values in array in reverse - starting at last element, stopping at 1st element and decrementing
  //console.log array at [i] to print values as loop decrements through array
  let objectValuesReversed = [];
  for(let key in object) {
    objectValuesReversed.push(object[key]);
  }
  for(let i = objectValuesReversed.length - 1; i >= 0; i--) {
    console.log(objectValuesReversed[i]);
  }
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
