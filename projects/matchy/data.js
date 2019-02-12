/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'llama';
animal['name'] = 'llory';
animal['noises'] = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
//Can only use numbers with bracket notation, so at 1st index [0], I'm adding the 1st noise to array
noises[0] = 'lloras';
//console.log(noises);//lloras
noises.push("llija");
//console.log(noises);
noises.unshift("llego");
//console.log(noises);
noises[noises.length] = "llega";
//console.log(noises);
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
//console.log(animal.noises);
noises.unshift("llak");

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *I can access properties on objects via bracket or dot notation.
 *animals['name'] = "someName";
 *animals.name = 'someName';
 *I can also use for-in loops.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *I can access elements on arrays using bracket notation or loops.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);
var tortuga = {species: 'tortuga', 
    name: 'tomas', 
    noises: ['taki', 'tiki', 'tata', 'tito']
};
animals.push(tortuga);
console.log(animals);
var orca = {species: 'whale', 
    name: 'olga', 
    noises: ['ooowee', 'ooowow', 'ooo', 'ow']
};
animals.push(orca);
console.log(animals);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I'm choosing an array to store my LIST of friends. I don't have to store them in any 
//particular order and can access them via their index, if I need to manipulate my list
//for any reason
//I tried an object previously b/c I thought ahead to my friends having properties like
//name, age, etc., but the tests said otherwise and I should've noticed the
//word INDEX!

var friends = [];
getRandom = function(animals) {
    return friends.push(Math.random(animals));
};
console.log(friends);

orca['friends'] = friends;
console.log(orca);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
