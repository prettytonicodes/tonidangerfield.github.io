/* DATA TYPES:
*
*Data Types simply describe how the types of data that we use in coding with JavaScript are catagorized. Think of them like fruits. There 
*are small, round, prickly, sweet, smelly, hard...fruits that look, taste and smell differently, but they are all fruits, nonetheless. 
*Jackfruit is different from kiwis or coconuts. Likewise, some data types are described as primitive or basic, while others are complex.
*
*A) Primitive Data Types - are atomic, meaning they have a singular value. Apples are apples. They will never be oranges or grapes! Basic
*data types are also immutable, meaning that once created, they cannot be changed. No matter how I try to manipulate them, whether I 
*concatenate them with other data or reassign primitive data types, the values of primitive data types are unchanged. Primitive data types 
do not hold onto new values.
*
*Another feature of primitive data types is that their data is passed By Value. This means that the interpreter copies the data value and 
*stores it in different places. There's an iniital value and a clone or duplicate of that value elsewhere. Both values are equal to each
*other, but are accessible at different locations. Imagine a bunch or cluster of grapes. All of the grapes taste the same, have the same
*components and are recognizable as grapes, even if I pluck one from the bunch or peel some. The rest of the grapes are unchanged. Something 
*awesome about data passed By Value is that if changes are made to the copy, the original or initial value in the outer or global scope will 
*not be affected.
*
*Passing By Value in action:
*/
let mango = "delish!";
let favoriteFruit = "mango";
console.log(mango); //Output: 'delish!'
console.log(favoriteFruit); //Output: 'mango'

/*If I change the value of mango to healthy snack and console.log() it, the output will be the new value of mango - healty snack. However, the
*the value of favoriteFruit - "mango", will not change or be affected, due to the data being passed By Value!
*
*let mango = "healthy snack";
*console.log(mango); //output: 'healthy snack'
*console.log(favoriteFruit); Output: 'mango'
*
*
*Let's get into the Primitave data types!
*
*1) Number
*A number is a numeral value, like 12 or 25.
*
*Number in action:
*/
let jordanNumber = 23;
console.log(jordanNumber); //Output: 23
/*
*
*2) String
*A string is a grouping of characters inside of single or double quotations.
*
*String in action:
*/ 
let sungByYebbaSmith = "Take care of yourself";
console.log(sungByYebbaSmith); //Output: 'Take care of yourself'
/*
*
*3) Boolean
*A boolean has a value of True or False.
*
*Boolean in action:
*/
8 < 18;
console.log(8 < 18); //Output: true
/*
*
*4) Undefined
*Undefined values are uninitialized. Something undefined has not been assigned value or the value may not be accessible outside of the 
*scope in which it was assigned.
*
*Undefined in action:
*/
let quizas;
console.log(quizas); //Output: undefined
/* 
*
*5) null
*Null values are an indication that there's an absence of value. Values have to be nullified by the programmer, however.
*
*Null in action:
*/
const drama = null;
console.log(drama); //Output: null (because I said so!)
/*
*
*6) NaN
*NaN means that some numeral is not a number.
*
*NaN in action:
*/function ronaldinho(i) {
    if(isNaN(i)) {
        return NaN;
    }
    return (i);
}
console.log(ronaldinho(21)); //Output: 21
console.log(ronaldinho("NotAumber")); //Output: NaN
/*
*
*B) Complex Data Types - Now it's time to get more complex with our data types! Complex data types hava an indefinite size, hence their 
*ability to hold other values. Values are stored in complex data types as references to values. Values are passed By Reference. Objects, 
*arrays and functions are complex data types.
*
*A feature applicable to complex data types in JavaScript, specifically, objects, is that objects interact by reference. When objects are
*equal to each other or objects are passing to a function, they all point to or reference the exact same location. Complex data types are
*too large (exceeding 8 bytes) to fit all data into a small container, so, to locate a value, we can make reference to a specific location.
*Think of passing By Reference as a pointer. The pointer starts pointing at some value at assignment. Next, I may want to assign another 
*variable the same value. Now, I have two variables pointing to the same value. That's very efficient, however, it's a doozy, because if I
*change either object's value or array's element within my function, I will also be changing the variables value because it is still 
*pointing at the value, though changed. Yikes! In other words, any property changed within our fucntions will be reflected in the outer
*scope. Let's look at passing By Reference in action.
*
*Passing By Reference in action:
*/
let myPet;
let myBuddy;
myPet = {dog: "Lil\' Freedia"};
myBuddy = myPet;
myBuddy.dog = "frostop";
console.log(myPet.dog); //Output: 'Frostop'
console.log(myPet); //Output: {dog: 'Frostop'}
console.log(myBuddy); //Output: dog: 'Frostop'}
/*
*I declared two variables - myPet and myBuddy. The variable - myPet is pointing at {dog: "Lil\' Freedia"};. I set myBuddy equal to myPet, 
*so both variables are pointing at the same value. In other words, the variables have the same value. However, I changed the value at 
*myBuddy to "Frostop". That changes the value of the key:value pair in the Object. When I log myPet at the object's key - dog - the name 
*"Frostop" prints to the console because my object has been modified. Calling any variable pointing at that object will print to the 
*console the modified key:value pair. I assigned the variable myBuddy to what the variable myPet was pointing to. I reassigned myBuddy, 
*so the value of myPet changes too.
*
*The same rules would apply to an array. Take a look:
*/
let myPets;
let myBuddies;
myPets = ["Marley", "lil\' Freedia", "T Slim"];
myBuddies = myPets;
myBuddies[2] = "Fishypoo";
console.log(myBuddies); //Output: ['Marley', 'Lil\' Freedia', 'Fishypoo']
console.log(myPets); //Output: ['Marley', 'Lil\' Freedia', 'Fishypoo']
/*
*I declared two variables - myPets and myBuddies. myPets was assigned to an array of some of my pets' names over the years. I reassigned
* the value of the variable myBuddies at the second index from "T Slim" to "Fishypoo". When I log the variable myBuddies to the console,
*my array has been updated to ['Marley', 'Lil\' Freedia', 'Fishypoo']. When I logged the variable myPets, the same updated array was 
*printed. Any modification to the value of one object will alter the value of any other variables associated to that value because the 
*data is passing By Reference.
*
*Now, lets get into the Complex Data Types!
*
*1) Array
*An array is a 0-based index collection of elements that is housed in square brackets. Elements are separated by commas within the array.
*
*Array in action:
*/
const bigArray = ["jumbo", "mega", "stupendous", "gargantuan", "ridiculous", "massive", "colossal", "supercalifrjulisticixpialadocious"];
console.log(bigArray);
/*Output: ['jumbo', 'mega', 'stupendous', 'gargantuan', 'ridiculous', 'massive', 'colossal', 'supercalifrajulisticixpialadocious']
*
2)Object
*An object is a key:value pair. Objects are collections of related data, comprised of variables and functions. Inside of objects, 
*variables and functions become known as properties and methods, respectively. We would use dot noation or bracket notation to access 
*properties and methods in an object.
*
*Object in action:
*/
const shoes = {brand: 'Ferragamo'};
console.log(shoes); //Output: {brand: 'Ferragamo'}
/*
*
*3) Function
*A function, in a nutshell, is a block of code that is purposed to perform a certain task. We can define code and reuse it any number of 
*times, using any number of arguments. Functions are executed when something invokes them. The () operator invokes functions. Functions 
*are defined with the function keyword, a name (call), then parentheses(). In the parentheses are parameters, which are separated by 
*commas and later become arguments when values are received from the invoked funciton. Lastly, the body of the function is inside of 
*curly brackets - {}. The body of a function tells the interpreter what code should be executed. Code stops being executed after the 
*return statement is returned.
*
*Function in action:
*/
const rundmc = myAdidas('shells', 'stripes');
function myAdidas(a, b) {
    return a + " " + b;
}
console.log(rundmc); //Output: shells stripes
/*
*
*C) Infinity 
*Infinity is a global property, a variable in global scope that is a numeric value representing infinity. Infinity has an initial value of
*Number.POSITIVE_INFNITY and is greater than all numbers. It is not configurable, writable, nor is it ennumerable. Mathmatically, it works
*just like Infinity. A positive numeral added to or multiplied by the Infinity property is equal to Infinity. All numbers divided by 
*Infinity are equal to Infinity. Any number divided by Infinity equals zero.
*
*Infinity in action:
*/
const maxNumber = Infinity;
console.log(Infinity + 10000000); //Output: Infinity
/*
*
*D) -Infinity
*-Infinity aka Number.NEGATIVE_INFINITY is a property which represents the negative infinity value. Like Infinity, -Infinity is neither
*ennumerable, configuarble, nor writable. Mathmatical rules do not necessarily apply to -Infinity. Any positive value multiplied by
*-Infinity equals -Infinity. Any positive or negative value divided by -Infinity equals zero. Zero or NaN multiplied by -Infinity equals
*NaN. Any negative value, including -Infinity multiplied by -Infinity equals -Infinity. -Infinity divided by any negative value 
*(except -Infinity) equals Infinity. -Infinity divided by any number (except Infinity) equals -Infinity. -Infinity divided by -Infinity
* equals NaN.
*
*-Infinity in action:
*/
const maxNum = -Infinity;
console.log(-Infinity + 10000000); //Output: -Infinity
