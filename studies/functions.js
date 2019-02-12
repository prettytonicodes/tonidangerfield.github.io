/*
*FUNCTIONS:
*
*Functions are complex data types, recognized in JavaScript via the keyword, function(). They are reusable pieces of code. Once we have our
*function, we can change the values and re-use it over and over and over and over...to return the data we need. Functions are blocks of code
*that are designed to perform specific tasks. Let's take care of business answering the following questions and/or discussing all things - 
*functions.
*
*1) The 2 Phases to Using Functions:
*
*1. First, we must declare or define the function. We define functions by using the keyword function, followed by a name, then its parameters
*inside of the () operator or parentheses. Parameters are separated by commas, though none were used in the simplified example below, that
*is not using working code.
*Functions look like this/have the following syntax:
*
*function name(parameters) {
*    function body
*    return statement;
*}
*
*
*2. Next, we can execute or call or invoke a function by giving the parameters values. Once the values are added to the function, we have 
*arguments. So long parameters! We can take the above syntax and make a working function. Let's say we made $40 in 2 minutes at a festival
*selling bars of handmade vegan soap. Our inventory shows we only sold the citrus-lavender soap. Our bars of soap are $4 each. We can use
*the following function to quickly evaluate how many sales of soap bars we had in 2 minutes.
*Per our output, we sold 10 bars of soap!
*/
const a = 40;
const b = 4;
function divide(a, b) {
    return a/b;
}
console.log(a/b); //Output: 10
/* 
*The working code looks a lot prettier and much more "official" than the sample syntax. We now have values!
*
*2) What's the difference between a function's parameters and the arguments PASSED to a function?
*Parameters are palceholders. Our functions are of no use to us without values being passed into them. If I only had Profit and Sales in 
*the function, nothing would have been returned, but an error! When values are passed into the funtion and the placeholders become 
*arguments, we have data values to work with and set the function into motion! A function without arguments is like a body without a soul -
*it ain't coming to life!
*
*3) What's the Syntax for a Named Function?
*The syntax for a named function is as follows. I'll be remarking with notes as we go through the code. 
*
*I have declared variables to use as the arguments in the function. They are num, which will represent the number of soap bars sold and 
*price, which represents the price of each bar of soap.
*/
let num;
const price = 4;
/*
*I have used the function keyword so the JavaScript interpreter is aware I'm declaring a function. The name of my function is trackSales, 
*as that is what I am doing with this function. My first parameter is num and its value changes depending on the number of sales, so I have
*kept the code dynamic by not setting it equal to any particular value. My second parameter is price, which has been assigned to the value 
*of 4. My open curly bracket is there to the right of my argument. Inside of my curly bracket is the body of my function, which is a return
*statement. I am asking the function to return the product of sales or num times 4, which is the price of each bar of soap. I close my curly
*brackets, which signals the end of a block of code. Outside of my closure, I called the function trackSales with the quantity of soap bars
*sold. If I sold 2 bars, I would make $8. If I sold 5, I would make $20, and so forth. That data printed to the console is reflected in the
*output notes below.
*/
const trackSales = function(num, price) {
    return num * 4;
};
num = 2;
trackSales(num, price); //Output: 8
num = 5;
trackSales(num, price); //Output: 20
num = 140;
trackSales(num, price); //Output: 560
/*
*
*4) How do We Assign a Function to A Variable?
*We assign a function to a variable by passing the values of variables into the function, using their names or values, after the variables
*have been assigned values or we have a means of inputting them later, as shown in the trackSales function for study point 3, in this 
*review of functions. The variable names or values are placed where parameters or placeholders once lived. When a function is invoked, 
*as shown in previous examples of working functions, values assigned to variables are passed into the function as arguments. I will show
*how in the following example:
*/
const gimmeTheProduct = function(a, b) {
    return a * b;
};
gimmeTheProduct(1, 2); //Output: 2
/*
*Variables a and b have values (1 and 2, respecrively), and they are arguments in the function named gimmeTheProduct, above.
*
*
*5) Functions can OPTIONALLY take inputs and OPTIONALLY return a single value. How do we specify inputs and how do we specify outputs?
*Functions can have as many parameters as we want them to. As many parameters as we construct in our function, we can replace with arguments.
*As show above in study point 3, the parameter's value may need to be generated per the actions of the function. Num did not have any 
*numeric values until I input the sales amounts. We specify the inputs with variables that are assigned to functions. We specify outputs 
*with our return statements. A properly working function will return the values back out of a function call and perform what is placed 
*inside of its body.
*
*6) Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true. When we think of scope, we should 
*think about where we can access variables or constants or lets. This data is not accessible everywhere. Scope is global(parent) or local
*(child). Local scope is within a function and global scope is anything outside of the function body. Functions have their own scope, local
*scope, however, they can access variables outside of local scope, in the global or parent scope. Data that is within the local or child 
*scope is not accessible by the global or parent scope. Think of a basinette for a baby as local or child scope and a California King bed
*as parent or global scope. A baby can co-sleep with their parents in their large California King bed, but parents cannot co-sleep with 
*baby in their tiny basinettes. Parents do not have access to the child's basinette or scope, but baby or child can make their way into 
*the parents' bed at any time.
*
*Scope in action:
*/
//Initialize a global variable, channel. It is accessible by the local scope.
let channel = "JTV";
function changeChannel() {
    //Initialize a local, function-scoped variable = global variable name. 
    //Local assignment of variable channel can only be used inside of the function body.
    let channel = "upliftTV";
    console.log(channel); //Output: 'upliftTV'. We cannot access this variable - channel - outside of the body of the function.
}
//Log the global variable and the local variable. 
console.log(channel); //Output: 'JTV'. This is the global variable channel.
changeChannel();
console.log(channel); //Output: 'JTV'. This is the global variable channel.
/*
*
*
*7) Closures: Functions form closures around the data they house. If an object is returned from the function and is held in memory
*somewhere (referenced) that closure stays ALIVE and data can continue to exist in these closures! (See: our meeting-room app for an example!)
*(ALSO, see: Understanding JavaScript Closures with Ease.)
*
*Well, the end is near and it is quite appropos to discuss - closures. The prompt in this studies project laid the groundwork, but I will
*reiterate some information about closures, put it in action with an example, and close. Closures are references to variables in the outer
*scopes that are accessible in the inner scope. The closure is the function and the environment in which it was invoked. Closures are 
*essentially a function within a function. Environment simply means any of the variables that the function had access to when it was invoked
*Inner functions can access the parameters of the outer function, the global parameters, and of course all of its components, aka the code
*within its curly brackets. Functions create an encampment including themselves, and all the variables that are visible to them. Functions
*take ownership of everything visible in their environments, such as variables, that should seemingly be off limits to the child or local 
*scope, but, somehow fucntions manage to finagle their ways to get them because of - closures.
*
*Closures in action:
*/
function royalFamilyMember(firstName, sirName) {
    let royalTitle = "Her Royal Highness";
    function makeOfficialRoyalName() { 
        //This inner function created a closure! 
        //It has access to the outer function's variables and references them.
        return royalTitle + firstName + " " + sirName;
}
return makeOfficialRoyalName();
}
royalFamilyMember("Meghan", "Windsor");
//Output: 'Her Royal Highness Meghan Windsor'

//That does it for closures for now! This concludes this study guide on functions.
