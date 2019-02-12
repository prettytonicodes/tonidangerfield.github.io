/*
*LOOPS:
*Loops give us a means to efficeintly iterate through data. Loops are particularly helpful in processing complex data types - objects and 
*arrays - in JavaScript. Objects and arrays may contain massive collections of data, which would be more difficult to process without means 
*to loop over data.
*
*1) For Loops
*
*The first type of loop I'll discuss is the for loop. For loops loop oer the elements of an array. For loops iterate over an arrays values
*in order to do some specific action on the array the loop is looping over. A for loop is constructed as such:
*/
let ounces = [2, 6, 12, 60];
for(let i = 0; i < ounces.length; i++) {
    console.log('My bowls hold ' + ounces[i] + ' ounces of cake batter!');
}
/* Output: My bowls hold 2 ounces of cake batter!
*My bowls hold 6 ounces of cake batter!
*My bowls hold 12ounces of cake batter!
*My bowls hold 60 ounces of cake batter!
*
*First, a variable was declared and set equal to the value of an array. I used the keyword - for - to signal that I am constructing a for loop.
*let i = 0 is my starting condition. I am initializing my loop starting at the index 0. i < ounces.length is my stopping condition. When this
*condition is reached, stop looping! This loop wil stop at the end of my array - ounces. i++ is my incrementor. This tells the interpreter 
*how much I want to increment through the index. In this case, I want to increment by one each time the loop runs. With this for loop, I want
*to print to the console the number of ounces of cake batter each style of my mixing bowls holds. 
*
*Next, I will play around with some loops, looping forward, backward, etc. 
*
*2a.) Looping any number of times, forward, counting up some limit:
*/
let loopFwd;
for(loopFwd = 1; loopFwd < 6; loopFwd++) {
    console.log(loopFwd);
}
/*Output:   1
*           2
*           3
*           4
*           5
*
*
*In the example above, I wanted to loop forward counting up to five. I called a variable, but did not declare a value. I created a for loop
*to start looping at let = 1, to stop looping at let less than 6, and incrementing by one each loop. Each iteration of my loop, a value of
*my variable will print to the console - up to, but not including, the number 6.
*
*2b.) Looping any number of times, backward, counting down to 0:
*/
let loopBack = 0;
for(loopBack = 5; loopBack > 0; loopBack--) {
    console.log(loopBack);
}
/*Output:   5
*           4
*           3
*           2
*           1
*
*
*To loop backwards any number of times, as presented in the example immediately above, I declared a variable - loopBack with a value of 0.
*I want to count backwards, starting at 5, so I set my starting condition at 5. My stopping condition is 0. Since I am counting backwards, 
*I want to decrement by one each iteration of the loop, so I used i--. When I console.log(i), 5, 4, 3, 2, 1 is printed to the console.
*
*/
//3a) Loop over an Array, Forwards:
let loopFwdOverArray = ["Axel", "Balei", "Cree", "Drexel"];
for(let i = 0; i < loopFwdOverArray.length; i++) {
    console.log(loopFwdOverArray[i]);
}
/*Output:   Axel
*           Balei
*           Cree
*           Drexel
*
*In the example code above, I looped over an array of names, forwards. I declared a variable of an array of names. Next, I constructed a 
*for loop with a starting condition of index 0, a stopping condition of the end of my array - loopFwdOverArray - and incremented by 1 over
*the array. I printed the results of array at index i, incrementing up from 0 to the end of my array and the names printed to the console
*in the order in which they appear in my array.
*
*
*3b.) Loop over an Array, backwards:
*/
var loopBackwardsOverArray = ["Axel", "Balei", "Cree", "Drexel"];
for (let i = loopBackwardsOverArray.length - 1; i >= 0; i--) {
    console.log(loopBackwardsOverArray[i]);
}
/*Output: [Drexel", "Cree", "Balei", "Axel"]
*
*To loop backwards over an array, as I did in the above example, I declared a variable of an array of names. I constructed a for loop with
*a starting condition of index equal to the last index of my array, a stopping condition of index greater than or equal to zero, 
*decrementing by one with each loop over the array. I printed to the console the array at index of i, with the condition of my for loop and 
*the output, as noted, the names of my array, backwards.
*
*
*4) Loop Over an Object
*As discussed previously, Objects are key:value pairs. The key is the position that directs us to a value in an Object (Object's property)
*Keys are strings, which can be stored in variables. Keys in Objects are paired with some value. My job at this time is to access the 
*values of an Object's keys. I can use for-in loops to do that. For-in loops hand an Object's keys over to a variable. Once the variable 
*has the keys, we can use the key to access the value stored in an Object at a particular key. For-in loops can only loop over the keys
*in an Object. To reference a key, we can use square bracket [] notation. ALERT: we cannot use dot (.) notation on Objects. Things will be
*bad...very bad! The square bracket [] notation allows us to pass keys into applicable variables. 
*Let's just jump in and see for-in loops in action!
*
*/
const genteDeZona = {
    Track: 'Los 40', 
    Video: 'Si', 
    Genre: 'Tropical', 
    Origin: 'Cuba'
};
//Logging the attribute - band - prints key or property names of Object to console as shown below. 
//Output is a listing of the Object's keys!
for(const band in genteDeZona) {
    console.log(band);
}
/*Output:   Track
*           Video
*           Genre
*           Origin
*
*Now, if I log the variable - genteDeZona - at the index of the attribute - band - to the console, the key or property values of my Object
*are printed! See output just below!
*/
for(const band in genteDeZona) {
    console.log(genteDeZona[band]);
}
/* Output:  Los 40
*           Yes
*           Tropical
*           Cuba
*
*My final manipulation with my for-in loop will print the names and values of my Object's keys or properties. If you refer to the output 
*note below, I now have a listing of my keys or properties and their corresponding values. I acheived this by pushing the case of my keys 
*to uppercase, concatenating a colon to separate the keys and their values, and printed the values in their original formatting.
*/
for(const band in genteDeZona) {
    console.log(`${band}`.toUpperCase() + `: ${genteDeZona[band]}`);
}
/* Output:  TRACK: Los 40
*           VIDEO: Yes
*           GENRE: Tropical
*           ORIGIN: Cuba
*
*
*5) While Loops
*While loops are awesome to utilize if we do not have a clue about how long a loop needs to run. It still needs a stopping condition, 
*however, else - the loop will run forever until the application crashes! We give the while loop a condition to evaluate. Data is 
*evaluated, given that condition, as long as the condition is true. Once the data evaluates to false, the while loop stops running.
*Let's check one out!
*/
let year = 1981;
while(year < 2000) {
    console.log('Millennial');
    year++;
}
/*Output:   Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*           Millennial
*
*The Asia Business Unit of Corporate Directions, Inc., published that all persons born between the dates of 1981 and 2000 are Millennials.
*I used a while loop to evaluate that data. I declared a variable - year - with a value of 1981. Next, I gave the while loop a condition, 
*followed by directions to do something. My loop translates in English to, "while the year is less than 2000, print to the console 'Millennial'".
*As long as my coniditon was true, Millennial was printed to the console. Once my condition was false (years greater than 2000), my while
*loop stopped. The while loop will execute the block of code in its body until the condition is false I've got 19 prints of Millennial!
*2000 - 1981 = 19!
*That concludes loops!
*/