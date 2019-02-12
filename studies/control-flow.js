/*
* CONTROL FLOW:
*Control flow is simply the way in which we control the flow of an application we are programming. It's how we control the flow of logic.
*There are four statements we will look at that control the flow of logic. These statements are called Condtiional Statements and they
*are as follows:
*If, Else-If, Else, and Switch statements. Conditional statements depend on the truthy-ness or falsy-ness of one value when compared to
*another. Therefore, values are changed into Booleans to be compared using conditional statements.
*
*1. If
*An if statement is the kickoff or starting point for a conditional block of code. If the initial condition is true, this block of code is
*executed.
*If statement in action:
*/
let condition = "feels good";
if(condition === "feels good") {
    console.log("Buy the shoes.");
}
else if(condition === "rubbing") {
    console.log("Don't get these shoes.");
}
else if(condition === "painful") {
    console.log("Put the shoes back, now!");
} else {
    console.log("Keep trying on shoes.");
}
/*Output: Buy the shoes.
*
*2. Else-if
*Else-if statements are the subsequent conditional statements after an if statement that we are comparing against our condition. Their
*truthy-ness or falsy-ness will help to determine what value our return will be and what action will be taken next, pending the
*else-if statement's truthy-ness or falsy-ness. If the initial condition is false, and a subsequent condition is true, this block of 
*code is executed.
*
*Else-if statement in action:
*/
let shoes = "painful";
if(shoes === "feel good") {
    console.log("Buy the shoes.");
}
else if(shoes === "rubbing") {
    console.log("Don't get these shoes.");
}
else if(shoes === "painful") {
    console.log("Put the shoes back, now!");
} else {
    console.log("Keep trying on shoes.");
}
/*Output: Put the shoes back, now!
*
*3.Else
*The else statement ends the chain of logic. It is not required, however. If all other conditions are false, I can expect that the block
*of code to be executed in the body of the else statement will be returned.
*
*Else statement in action:
*/
let feeling = "meh...";
if(feeling === "good") {
    console.log("Buy the shoes.");
}
else if(feeling === "rubbing") {
    console.log("Don't get these shoes.");
}
else if(feeling === "painful") {
    console.log("Put the shoes back, now!");
} else {
    console.log("Keep trying on shoes.");
}
/*Output: Keep trying on shoes.
*
*4. Switch
*Switch statments are used if we have several conditions to compare. They provide for cleaner code, rather than writing a large number
*of else-if statements. Switch statements work like this: 1) an expression is input for evaluation. 2) the expression's value is 
*compared to that of several case clauses. 3) switch executes the statements for the case that matches our declared variable. All values
*in a switch statement can be evaluated to either true or false. There are a couple of very important statements that must be used when
*constructing switch statements - break and default. A break statement ends a case and lets the interpreter know that if the condition is true, 
*it should not continue on to evaluate the next case. The default statement works similarly to an else statement. It lets our interpreter
*know that if the the condition is true, it should not continue on to evaluated the next case. The default statement works similarly
*to an else statement. It lets the interpreter know that our block of code is finished and if none of the other cases or conditions have
*been satisfied, the default statement should be returned.
*
*Switch in action:
*/
const shoe = "sneaker";
switch(shoe) {
case "chancla":
    console.log("this is a chancla");
    break;
case "espadrille":
    console.log("this is an espadrille");
    break;
case "platform":
    console.log("this is a platform");
    break;
case "bootie":
    console.log("this is a bootie");
    break;
case "boot":
    console.log("this is a boot");
    break;
case "sandal":
    console.log("this is a sandal");
    break;
case "slipper":
    console.log("this is a slipper");
    break;
default:
    console.log("Sorry, this shoe style is currently out of stock.");
}
/*Output: Sorry, this shoe style is currently out of stock.
*
*/