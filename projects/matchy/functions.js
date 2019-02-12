/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//fucntion named search takes parameters of array = animals and string = name
function search(animals, name) {
    //loop through the array to access each animal
    for(var i = 0; i < animals.length; i++) {
        //use conditional statement to compare name of animal at ith index to name of animal = string
        if(animals[i].name === name) {
            //return name of animal, if name matches string
            return animals[i];
        } else {
            //return null if animal name doesn't match string
            //return null;
        }
    } return null;
} 

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//function called replace that takes array = animals, string = name, and object = replacement
function replace(animals, name, replacement) {
    //loop through animals 
    for(var i = 0; i < animals.length; i++) {
        //if an animal at index of i includes string name...
        if(animals[i].name.includes(name)) {
            //splice array of animals, starting at [0], deleting/replacing i with the replacement object
            animals.splice(0, i, replacement);
        } else {
            //else do nothing aka return;
            return;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function named remove with parameters of array of animals and string name
function remove(animals, name) {
  //loop through animals
  for(var i = 0; i < animals.length; i++) {
      //if an animal with name exists in array, compare forced to same case, thenk remove the animal object with that name from array
      if(animals[i].name.toLowerCase() === name.toLowerCase()) {
          //removing object from array at index i using splice at index of i, and removing 1 item
          animals.splice(i, 1);
        }
          //if object not to be removed, return undefined outside of loop  
        } return; 
} 


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//write function - add - with 2 parameters - animals, an array and animal, an object
//Note: ALL conditions must be met, so check if the properties - name and species - even exist for the animals
//use conditional statement - if to check if object at properties of name and species exist, aka have length > 0
//if those conditions are met, loop over array of animals with for loop 
//use another conditional statement - if to check if animal name in array at [i] forced to lower case matches animal name forced to lower case
//if names match, return undefined
//outside of for loop, but in 2nd if statement, if animal names do not match for animals with properties of name and species, 
//push the animal into the animals array

function add(animals, animal) {
    if (animal.name.length > 0 && animal.species.length > 0){
        for(var i = 0; i < animals.length; i++) {
            if(animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
                return;
            }
        }
        animals.push(animal);
    }
}

    /*Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.*/

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
