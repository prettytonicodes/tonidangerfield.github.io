// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //use conditional statement to test if array is an array via Array.isArray() method
    //return true if an array
    //else, return false
    if(Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //Make a conditional statement using if, else-if... to check for value type and return boolean
    //Could be a number, so I have to handle numbers too!
    //check if value is array using Array.isArray, as typeof will return 'object'
    if(Array.isArray(value)) {
        return false;
    }
    //check if value is null, not using typeof operator, which would return 'object'
    else if(value === null) {
        return false;
    }
    //check for instanceof Date, not using typeof operator, which would return 'object'
    else if(value instanceof Date) {
        return false;
    }
    //use typeof operator to check remaining value types...
    else if(typeof value === 'number') {
        return false;
    }
    else if(typeof value === 'string') {
        return false;
    }
    else if(typeof value === 'boolean') {
        return false;
    }
    else if(typeof value === 'object') {
        return true;

    }
   
    
 
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //Make a conditional statement using if, else-if... to check for value types and return boolean of false if not Array or Object as collection
    //use typeof operator for all value types except null, Date, & Array
    //Check for typeof object last, as other value types will be considered objects, if special operators aren't used to check for value types
    if(value === null) {
        return false;
    }
    else if(value instanceof Date) {
        return false;
    }
    else if(typeof value === 'number') {
        return false;
    }
    else if(typeof value === 'boolean') {
        return false;
    }
    else if(typeof value === 'number') {
        return false;
    }
    else if(typeof value === 'string') {
        return false;
    }
    else if(Array.isArray(value)) {
        return true;
    }
    else if(typeof value === 'object') {
        return true;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //Use conditional if/else-if statements to test value type with appropriate operators
    
    if(typeof value === 'string') {
        return 'string';
    }
    else if(value === undefined) {
        return 'undefined';
    }
    else if(typeof value === 'number') {
        return 'number';
    }
    else if(typeof value === 'boolean') {
        return 'boolean';
    }
    else if(typeof value === 'function') {
        return 'function';
    }
    else if(Array.isArray(value)) {
        return 'array';
    }
    else if(isNaN(value)) {
        return 'NaN';
    }
    else if(value === null) {
        return 'null';
    }
    else if(value instanceof Date) {
        return 'date';
    }
    else if(typeof value === 'object') {
        return 'object';
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
