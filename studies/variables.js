/*
*VARIABLES:
*
*Definition: Variables are containers. They hold values, like cups hold liquids. The values may be primitive - like water - numbers 
*(let myJersey = 23), booleans (let myJersey = true), strings (let myJersey = 'Jordan'), or, conversely, values can help lead us to specified 
*points in a computer's memory, where more complex values like objects, arrays or functions are located. We can liken the complex values to 
*wine, with its complex notes in our cups (variables). Since variables can be any value from water to wine, they're values are obviously able
*to be changed! Hence, the term variable.
*
*1) Variable Declaration: Once we use the keyword - var - and give the variable a name, voila - it's been created and declared! Variable 
*names can be whatever we like, but DO NOT use reserved keywords, such as var or const or function.... Declaration is the first step to 
*making our variables useful. Be sure to use camel Case when naming, i.e. myHouse. The first word should be lowercase and all subsequent 
*words in a variable name should start with an upper case letter. Notice, the names should not have spaces between characters or words.
*
*Variable Assignment:
*We can't use our cups just yet! To be useful and able to store and be utilized throughout our code, variables must be assigned values. To
*assign value to a variable, we only need an equal (=) operator. Setting the declared variable equal to some value initializes the variable.
*The cup is now ready to use!
*
*/
//Step 1: Declare a variable
var myCup;
/*
*If I were to console.log() myCup, 'undefined' would print because the variable is not initialized. It has not been assigned a value. It is
*a cup with half of a bottom; it does nothing for us!
*/
console.log(myCup); //Output: undefined
//Step 2. Assign or Initialize A Variable
myCup = "lavender citrus spritzer";
console.log(myCup); //Output: lavender citrus spritzer
/*
*As mentioned previously, variables' values are changeable in JavaScript. I can assign my cup sparkling water and change my mind and re-
*assign the value to iced coffee. That's because variable value types are changeable, aka - loosely typed! I can assign a variable a 
*number of teas at 8AM and a string of cocktails at 6PM.
*
*If you want to, you may Step 3. Re-assign A Variables Value and/or Value Type
*/
myCup = "bubble tea";
console.log(myCup); //Output; bubble tea
/*
*
*2) var, let, and const:
*As previously established, var is the keyword for variable. let, is also a container, but it is only applicable within the block of code 
*it is used in. let is like an exclusive microbrew, only available at a local neighborhood bar. It cannot be shipped abroad, or used or 
*consumed anywhere else. It is a container used for reassignable values that do not have to be initialized or assigned to a value.
*
*let in Action:
*/
let myCar = "Jeep Wrangler";
console.log(myCar); //Output: Jeep Wrangler
//Note that this code or variable declaration/initialization is outside of the block {}

//Block starts here! {}
if(myCar === "Jeep Wrangler") {
    let myCar = "Land  Rover";
    console.log(myCar);
    //expected Output: Land Rover because 'Land Rover' is the reassigned value of myCar within the local block of code.
}
console.log(myCar);
//expected output: Jeep Wrangler because myCar was initially declared 'Jeep Wrangler' outside of the local block of code.
/* Outsise of the local block, the initial declaration, or that declared in the parent or global scope, will be printed to the console.
*
*const is a reserved keyword that is an abbreviation of constant. const is a container for values, usually written in all uppercase 
*letters, for example, const MY_BAG = "Italian leather";. Variables declared with const cannot be re-assigned values, cannot be left 
*unassigned, and cannot be hoisted to the top of a block of code, as they are block scoped. Constants are stubborn, they don't budge! They
*are code blocked, so once they are declared and assigned within a block of code - they stay there! Constants are like diamonds in a 
*scope - they last forever!
*
*const in Action:
*/
const MY_BAG = "Italian leather";
console.log(MY_BAG); //Output: Italian leather
/*
*If I try to reassign a value of 'Spanish leather' to const MY_BAG, I will be thrown an error in the console. 
*MY_BAG = 'Spanish leather';
*console.log(MY_BAG); //Expected output: error
*
*Even if I add const before the variable MY_BAG, I will be thrown an error, because const was already declared and assigned a value.
*const MY_BAG = 'Spanish leather';
*console.log(MY_BAG); //Expected output: error
*
*console.log('My favorite bag is ' + MY_BAG); //Expected output: error
*
*Once const has been declared and assigned, any manipulation to the value will result in an error because consts' values are permanent 
*within the blocks they are assigned.
*
*3) Hoisting allows us to call a function before it is written and have working code. Essentially, the interpreter, which is built into 
*the browser, similar to a foreign language interpreter, and required for a computer to understand JavaScript, puts the variable and the 
*function declarations in memory while the code is being compiled, before any code is executed. The interpreter reads through the code and 
*figures out what to do with it. Variable and function declarations are not physically moving, but the information is being stored and 
*accessible for use. Hence, initialization and use happen before variables are declared!
*
*Hoisting has something similar to an hierarchy. Function and variable declarations are hoisted to the top of their scopes. Any variable 
*declared outside of a function body is in the global scope and any variable declared in the function body has local scope. Every function
*has its own scope. Function declarations have precedence over variable declarations, and variable assignments are not hoisted at all. The
*entire function body (definition) is hoisted, including function expressions and the functions must be named. Variable declarations are
*scoped to the context in which they are currently being executed; which would be either globally scoped or locally scoped. Undeclared
*variables, or variables declared without the var keyword, are globally scoped. Let's get into it below:  
*
*/
var Chloe = function() {    //var Chloe would be hoisted because it is a variable declaration.
    console.log('Tess');    //This line of code would not be hoisted. Neither a function nor variable were declared.
    console.log('C Bag');   //The same applies to this line. This code would not be hoisted.
};
Chloe();
/*
*ONLY declarations can be hoisted! We declare variables with the var keyword (i.e. var Chloe) and declare functions with the function 
*keyword (i.e. function()). Unlike variables declared with the var keyword, variables declared with const or let do NOT leave their 
*block scope! Variables reassigned values do NOT get hoisted either. We can declare a variable after we use it because of hoisting. The 
*JavaScript interpreter looks over code and hoists function and variable declarations, then the interpreter executes the code that has
*been hoisted.
*
*Hoisting in Action:
*/
//I will start by initializing my variable, though I have not declared it yet.
room = 'living'; //this code is initialized.
console.log(room); //Expected output: living
var room;
console.log(room); //Expected output: living
/* Hoisting enabled me to initialize my code before having declared a variable.
*
*The following code will demonstrate the difference between how code is written and how it is interpreted by the JavaScript interpreter:
*
*How code is written - 
*console.log(bed);
var bed = 'Murphy';
*
*How code is interpreted by the JavaScript interpreter - 
*var bed;
*console.log(bed);
*bed = 'Murphy';
*/
