// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //console.log base for value type //2 and b
    //after logging base, preface code with return, as I want to return a function
    //create a function with a parameter of aGivenValue
    //Since a function is defined by its retunn statement, I must return something from this anonymous function
    //Comparison operators return Booleans. I want to return whether whether aGivenValue is greater than the base
    
    //console.log(base);
    
    return function(aGivenValue) {
        return aGivenValue > base;
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //console.log(base); //2, b
    //preface code with return, as I want to return a function
    //create a function with a parameter of aGivenValue
    //Since a function is defined by its retunn statement, I must return something from this anonymous function
    //Comparison operators return Booleans. I want to return whether whether aGivenValue is greater than the base
    
    
    return function(aGivenValue) {
        return aGivenValue < base;
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //console.log(startsWith); //c, j, a
    //preface code with return, as I want to return a function
    //Make function that takes parameter of a given String
    //A function is defined by its return statement, so I need to return something!
    //I want to test whether aGivenString starts with the startsWith character
    //I need to ensure that all characters are comparable, i.e. in the same case and free of special chars or symbols
    //There aren't any symbols, etc., so I force aGivenString and startsWith to lower case
    //return comparison of charAt(0) of string and the startsWith character(s)
    return function(aGivenString) {
        return aGivenString.charAt(0).toLowerCase() === startsWith.toLowerCase();
      
    };
      
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //console.log(endsWith);//k (lowercase), M (uppercase)
    //preface code with return, as I want to return a function
    //Make function that takes parameter of a given String
    //A function is defined by its return statement, so I need to return something!
    //I want to test whether aGivenString ends with the endsWith character
    //I need to ensure that all characters are comparable, i.e. in the same case and free of special chars or symbols
    //There aren't any symbols, etc., so I force aGivenString and endsWith to upper case
    //return comparison of charAt(aGivenString.length - 1) (the last character of string) of string and the endsWith character(s)
    
    
    return function(aGivenString) {
        return aGivenString.toUpperCase().charAt(aGivenString.length - 1) === endsWith.toUpperCase();
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    //console.log(strings); //array ["a", "b", "c"]
    //console.log(modify); //function that forces input to uppercase
    //assign empty array to collect modified string to a variable - let. Let because the elements will change.
    //use for loop to loop over array of strings
    //push modified string at each element to the empty array 
    //OUTSIDE of for loop, return the array of modified strings
    
    let modifiedString = [];
    for(let i = 0; i < strings.length; i++) {
        modifiedString.push(modify(strings[i]));
    }    
    return modifiedString;
       
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    //console.log(strings); //["aa", "ab", "abc"]
    //console.log(test); //function
    //use for loop to loop over array of strings
    //pass each element of the array of strings to the function
    //Create conditional statement using if
    //If only one test doesn't pass, test should return false.
    //if !test(strings[i]) return false
    //Must return true outside of the for loop to continue in the event all tests pass
    
    
    for(let i = 0; i < strings.length; i++) {
      
        if(!test(strings[i])) {
            return false;
        }
        
    }
    return true;
     
     
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}