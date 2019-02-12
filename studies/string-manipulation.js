/*
*STRING MANIPULATION:
*
*1) With Operators
*Comparison operators can be used on strings, just like other data types. The Concatenation Operator (+), is unique to strings. The 
*Concatenation Operator works like so - it takes two string operands and concats or returns one string, which is comprised of the values of 
*both operand strings.
*
*String Manipulation with the Concatenation Operator (+) in action:
*/
const greetEnEspanol1 = "Buenos ";
const greetEnEspanol2 = "dias";
console.log(greetEnEspanol1 + greetEnEspanol2); //Output: Buenos dias
/*
*
*2) With String Methods
*Strings can also be manipulated with methods or functions applicable for use with strings. Those functions or methods used can be pure or 
*impure. Pure functions are deterministic, meaning that if the same value is input, the function will always produce the same output each 
*time it is called. Furthermore, pure functions do not produce side effects, such as changing values or variables in other scopes, or 
*altering the state of the application in which they are used. Finally, all necessary inputs are passed into the function. Pure functions
*do not use variables that are globally scoped. A function is impure if it breaks any of the rules previously mentioned.
*
*Some string methods are as follows:
*A. [] Square Bracket Notation
*Using [] bracket notation, we can access a specific character in a string. We only need the index number of the character to be accessed.
*Square bracket notation is pure. If the same index is referenced, the same output will result without side effects.
*
*const greetEnEspanol2 = "dias";
*console.log(greetEnEspanol2[2]); //Output: a
*
*B. Changing Case toLowerCase() and toUpperCase()
*We can use the built-in JavaScript methods of toLowerCase() and toUpperCase() to convert strings or characters at specific indexes within
*a string. String values are mutated, so changing case is impure.
*
*Changing Case in Action:
*
*let greetEnEspanol2 = "dias";
*greetEnEspanol2.toUpperCase(); //Output: "DIAS"
*
*let greetEnEspanol = "Buenos ";
*greetEnEspanol1.toLowerCase(); //Output: 'buenos'
*
*
*C. .length Method
*We can use the length property to find the length of a string with .length. This method will return the number of characters in a string.
*.length is pure if used within the same scope as string. The same input will yield the same output and side effects are not produced.
*
*.length in Action:
*const greetEnEspanol1 = "Buenos ";
*console.log(greetEnEspanol1.length); //Output: 7
*Note: character count includes the space after s.
*
*Alternatively, if we use .length - 1, the number of index positions of the string will be returned.
*const greetEnEspanol1 = "Buenos ";
console.log(greetEnEspanol1.length - 1); //Output 6
*
*
*D. Index Of (indexOf();)
*Given a search value and a specific part of a string, indexOf returns the specific index position of a string as a numeral. Note that
*the indexOf will return the first occurance of a particualar part of a string and if that specific part of a string cannot be found, -1
*will be returned.
*
*indexOf in Action:
*/
let var1 = "Muy Feliz";
"Muy Feliz".indexOf("Feliz"); //Output: 4
/*
*Feliz starts at the index of 4.
*
*
*E. .slice();
*The method .slice enables us to remove characters from a string, referencing specific indexes. To utilize the .slice method, we must know
*where we want to start slicing and where we want to end slicing a string. The two positions within a string are separated by a comma 
*inside of the parentheses, i.e. .slice(,). To the left of the comma, we input the starting index position, aka where we start slicing.
*To the right of the comma is the index position of the character after the last character or up to the character we want to slice off of
*our string. Note: the second index position is not required. Slice will stop at the first index number, if not given a second value to 
*slice up to.
*
*.slice in Action:
*/
let tellBrotherTo = "Put my sneakers back!";
console.log(tellBrotherTo.slice(0,7)); //Output: Put my

console.log(tellBrotherTo.slice(0)); //Output: Put my sneakers back!
/* 
*
*F. Updating Parts of A String with replace()
*Lastly, we can update parts of a string using the replace() method. replace() replaces one substing in a string value with another 
*substring. replace() requires 2 parameters, unlike .slice, which works with only 1 parameter. The parameters are separated with a comma
*inside of the parentheses. The first parameter, to the left of the comma, is the substring to be replaced. The second parameter, to the
*right of the comma, is the substring to replace the substring to be removed with. The replace() method will return an updated string 
*value.
*
*replace() in Action:
*/
const motivation1 = "Break a leg!";
console.log(motivation1.replace("Break", "Shake")); //Output: Shake a leg!

