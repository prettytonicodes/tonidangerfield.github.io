/*
*OPERATORS:
*Think of the interactive boardgame Operation when considering what operators do. Just like a player in that game takes the tweezers and is 
*required to perform some surgical act on the cardboard patient, operators act on our data in JavaScript. Operators act on our data by 
*assigning values to variables, performing arithmetic operations and comparing our data. Operators are lumped into classes. The classes are
*determined by what sort of actions the operators do and how many operands - any JavaScript data type. There are three classes of operators
*I'll focus on now: Unary, Binary, and Ternary.
*
*1) Unary operators - 
*Unary operators operate on only one operand. They include delete, typeOf, ! bang operaors, and void.
*
A. Delete is applicable to arrays and Objects. This operator can delete a property from an object or an element from an array at a particular
*index. 
*Delete in Action:
*/
let sayGoodbye = ["Cheerio", "Ciao", "Later", "Peace"];
delete sayGoodbye[2]; //Output: true. The operation is possible!
/*
*B. typeOf
*The typeOf operator returns the data type of the data being evaluated in the form of a string ''/"". typeOf can be written as:
*typeof(dataHere); or typeof dataHere;
*
*typeOf in Action:
*/
let numberOfVacayDays = 4;
typeof(numberOfVacayDays); //Output: 'number'
/*
*
*C. Void
*The void operator locates an expression to be evaluated, but does not return a value. It can be written one of two ways
*(though, parentheses are favored): void expression; or void(expression);
*
*
*D. Bang ! Operator
*! - the bang operator aka the logical not operator can be translated to English as - not! A bang operator written before a Boolean value
*or strictly equal ===, negates the valule and flips the result from true to false or vice versa.
*
*Bang operator in Action:
*/
'salsa' !== 'bachata'; //Output: true
'salsa' === 'bachata'; //Output: false
/*
*
*E. Increment (++)
*The increment operator adds one to its operand. If the operator comes afterthe value (i++), the operator returns the value of the operand
*after one was added to the value. If the operator comes before the value (++i), the operator returns the value of the operand after one 
*was added to the value.

*
*Increment (++) in action:
*/
let a = 2;
console.log(++a); //Output: 3
/*
*let a = 1;
*console.log(a++); //Output: 1
*
*
*F. Decrement (--)
*The decrement operator works much like the Increment operator, except, instead of adding one to the value of the operand, it subtracts one.
*
*Decrement in action:
*       
*let a = 2;
*console.log(--a); //Output: 1
*
*let a = 1;
*console.log(a--); //Output 1
*
*
*G. Unary Negation (-)
*The unary negation operator returns the negation of its operand. If a number is positive, the unary negation operator will return it as 
*negative.
*
*unary negation in action:
*let a = 2;
*console.log(-a); //Output: -2
*
*
*H. Unary Plus (+)
*The unary plus operator does NOT do the oppostue of unary negation! The unary plus operator attempts to change operands to numeric values, 
*if the values are not already numbers.
*
*Unary Plus in Action:
*let a = true;
console.log(+a); //Output; 1
*Unary Plus worked, returning the number 1 for the Boolean value - true!
*
*Since we have looked at operators that oprate on one operand, we will jump ahead to the singular operator that operates on three operands
* - the Ternary operator! As a majority of the operators we will be studying handle two operands (are binary), we will get into those 
*individually, after these messages about Ternary operators.
*
*2) Ternary Operator (aka Conditional Operator)
*We can think of the Ternary operator as a shortcut for the if statement. The Ternary operator accepts three parameters. The first is a 
*condition, rather, an expression with value used as a condition. The other two parameters are expressions, whose values can be of any data
*type we choose. Ternary operators will have the following syntax: Condition ? exprT: exprF;
*If the conditoin of the Ternary operator can be converted to true, the operator will return the value of the truthy expression (exprT), 
*on the other hand, if the operator cannot be converted to true, rather, is false, the falsy expression (exprF) is returned. Values of 
*null, NaN, zero, undefined, and empty strings ''/"" will return a falsy expression (exprF) too.
*
*Ternary Operator in Action:
*/
let weight = 125;
let size = (weight <= 140 ? 'small': 'medium');
console.log(size); //Output: small
/*
*
*3) Assignment Operators
*Assignment operators assign value to the operand at left based on the value of the operand at right. The most common assignment operator
*is equal (=). Equal sets the left operand equal to the value at its right.
*
*Assignment Operators in Action:
*/
const ting = 'Jamaican Beverage';
console.log(ting); //Output: Jamaican Beverage
/*Ting is equal to or has been assigned to the value of the string - 'Jamaican Beverage'.
*
*Other assignemnt operators include the following:
*Addition Assignment: x += y
*Subtraction Assignment: x -= y
*Division Assignment: x /= y
*Remainder Assignment: x %= y
*Exponentiation Assignment: x **= y
*Left Shift Assignment: x <<= y
*Right Shift Assignment: x >>= y
*Unsigned Right Shift Assignment: x >>>= y
*Bitwise AND assignment: x &= y
*Bitwise XOR Assignemnt: x ^= y
*Bitwise OR Assignment: x |= y
*
*More complex assignments, require more complex tools, such as destructuring. The Destructuring Assignment makes use of an expression that
*enables us to pull from objects and arrays. The syntax of this expression looks just like the syntax for creating arrays and objects, 
*however, its action is quite the opposite - the Destructuring Assignment pulls or extracts data out of arrays and objects. The 
*Destructuring Assignment looks like this: {taxi, bus}. See the example below, for how the Destructuring Assignment works.
*
*Destructuring Assignment in Action:
*/
const aCubanTravelCompany = {
    first: 'Cuba', 
    second: 'Go', 
    travel: {
        local: {
            taxi: 'el taxi',
            bus: 'el autobus', 
        },
        regional: {
            train: 'el tren'
        }
    }
};

const {taxi, bus} = aCubanTravelCompany.travel.local; 
// {taxi, bus} These curly brackets are not an object literal; they are a Destructuring Assignment.
console.log(taxi, bus); //Output: el taxi el autobus
/*
*Next, I'll destructure an array into variables:
*Here's an array with the first name and second name of a fictional business
*/
let arr = ["Cuba", "Go"];

//The Destructuring Assignment
let[firstName, secondName] = arr;

console.log(firstName); //Output: Cuba
console.log(secondName); //Output: Go
/* 
*
*4) Arithmetic Operators
*Arithmetic operators have numeric values, such as numbers as their operands and return a numeric value. Some of the most common binary 
*arithmetic operators are: addition (+), subtraction (-), multiplication (*), division (/), Remainder (%), and the Exponentiation 
*Operator (**). Other arithmetic operators previously covered in Unary operators are: Increment (++), Decrement (--), Unary Negation(-), 
*and Unary Plus (+).
*
*Arithmetic Operators in Action:
*/
const m = 1;
const n = 2;
console.log(1 * 2); //Output: 2
/*The multiplication operator was used.
*
*
*
*5) Comparison Operators
*Comparison operators do as their name suggests - compare operands. Additionally, they return logical values that depend on whether the 
*comparison is true. If the comparison is true, the operator will return true, otherise false. Conveniently, if operands are of different
*data types, JavaScript will try to convert the data types for comparison. JavaScript will usually convert the type to a number. Values 
*that are strict equal (===) or not equal (!==), will never be converted by JavaScript.
*
*Comparison Operators in Action:
*/
const nike1 = 'swoosh';
const nike2 = 'check';
console.log(nike1 === 'swoosh'); //Output: true
/*
*
*Comparison operators include the following:
*Equal (==), Not Equal (!=), Strict Equal (===), Strict Not Equal (!==), Greater Than (>), Greater Than or Equal (>=), Less Than (<), and
*Less Than or Equal (<=). Their actions are pretty self explanatory.
*
*
*6) Logical Operators
*Logical operators are mostly used with Boolean (logical) values, but may be used with other values as well. If logical operators are used 
*with Boolean values, they return Boolean values, i.e. True or False. The Logical Operators are as follows:
*A. Logical AND (&&) - The && operator returns a Boolean of true, if and only if BOTH operands are true. if one is false, && will return 
*the value of false. && specifically returns the value of one of the operators being operated upon.
*
*Logical && at work:
*/
let duMonde1 = "beignets";
let duMonde2 = "cafeaulait";
console.log(duMonde1 == "cafeaulait" || duMonde2 == "cafeaulait"); //Output: true
/*
*
*C. Logical Not (!expr)
*If the operand can be converted to true, ! returns false. If the operand cannot be converted to true, ! returns true.
*
*Logical ! at work:
*
*let duMonde1 = "beignets";
*console.log(duMonde1 != "beignets"); //Output: false
*/