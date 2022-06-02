// Set Default Parameters for Your Functions
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// Check out this code:

// const greeting = (name = "Anonymous") => "Hello " + name;

// console.log(greeting("John"));
// console.log(greeting());
// The console will display the strings Hello John and Hello Anonymous.

// The default parameter kicks in when the argument is not specified (it is undefined). 
// As you can see in the example above, the parameter name will receive its default value Anonymous 
// when you do not provide a value for the parameter. You can add default values for as many parameters as you want.



// Use the Rest Parameter with Function Parameters
// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. 
// With the rest parameter, you can create functions that take a variable number of arguments. 
// These arguments are stored in an array that can be accessed later from inside the function.

// Check out this code:

// function howMany(...args) {
//     return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { }));
// The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and 
// reduce() on the parameters array.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat


// ------------------------------------------------------------------------------------------------------



// Use Destructuring Assignment to Extract Values from Objects
// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly 
// from an object.

// Consider the following ES5 code:

// const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;
// name would have a value of the string John Doe, and age would have the number 34.

// Here's an equivalent assignment statement using the ES6 destructuring syntax:

// const { name, age } = user;
// Again, name would have a value of the string John Doe, and age would have the number 34.


// Use Destructuring Assignment to Assign Variables from Objects
// Destructuring allows you to assign a new variable name when extracting values. 
// You can do this by putting the new name after a colon when assigning the value.

// Using the same object from the last example:

// const user = { name: 'John Doe', age: 34 };
// Here's how you can give new variable names in the assignment:

// const { name: userName, age: userAge } = user;
// You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. 
// The value of userName would be the string John Doe, and the value of userAge would be the number 34.



// Use Destructuring Assignment to Assign Variables from Nested Objects
// You can use the same principles from the previous two lessons to destructure values from nested objects.

// Using an object similar to previous examples:

// const user = {
//   johnDoe: { 
//     age: 34,
//     email: 'johnDoe@freeCodeCamp.com'
//   }
// };
// Here's how to extract the values of object properties and assign them to variables with the same name:

// const { johnDoe: { age, email }} = user;
// And here's how you can assign an object properties' values to variables with different names:

// const { johnDoe: { age: userAge, email: userEmail }} = user;


// Use Destructuring Assignment to Assign Variables from Arrays
// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator unpacks 
// all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which 
// elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);
// The console will display the values of a and b as 1, 2.

// The variable a is assigned the first value of the array, and b is assigned the second value of the array. 
// We can also access the value at any index in an array with destructuring by using commas to reach the desired 
// index:

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);
// The console will display the values of a, b, and c as 1, 2, 5.


// Use destructuring assignment to swap the values of a and b so that a receives 
// the value stored in b, and b receives the value stored in a.


// let a = 8, b = 6;
// Only change code below this line
// [b, a] = [a, b];




// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// In some situations involving array destructuring, we might want to collect the rest of the elements 
// into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);
// The console would display the values 1, 2 and [3, 4, 5, 7].

// Variables a and b take the first and second values from the array. After that, because of 
// the rest parameter's presence, arr gets the rest of the values in the form of an array. 
// The rest element only works correctly as the last variable in the list. As in, you cannot use 
// the rest parameter to catch a subarray that leaves out the last element of the original array.



// Use Destructuring Assignment to Pass an Object as a Function's Parameters
// In some cases, you can destructure the object in a function argument itself.

// Consider the code below:

// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;

// }
// This effectively destructures the object sent into the function. This can also be done in-place:

// const profileUpdate = ({ name, age, nationality, location }) => {

// }
// When profileData is passed to the above function, the values are destructured from the function parameter 
// for use within the function.


// Use destructuring assignment within the argument to the function half to send only max and min inside 
// the function.


// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };

//   // Only change code below this line
//   const half = ({ max, min }) => (max + min) / 2.0;
//   // Only change code above this line




// ------------------------------------------------------------------------------------------------------




// Use getters and setters to Control Access to an Object
// You can obtain values from an object and set the value of a property within an object.

// These are classically called getters and setters.

// Getter functions are meant to simply return (get) the value of an object's private variable to the user 
// without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of an object's private variable based on the value 
// passed into the setter function. This change could involve calculations, or even overwriting the previous 
// value completely.

// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// const novel = new Book('anonymous');
// console.log(novel.writer);
// novel.writer = 'newAuthor';
// console.log(novel.writer);
// The console would display the strings anonymous and newAuthor.

// Notice the syntax used to invoke the getter and setter. They do not even look like functions. 
// Getters and setters are important because they hide internal implementation details.

// Note: It is convention to precede the name of a private variable with an underscore (_). However, 
// the practice itself does not make a variable private.



// ------------------------------------------------------------------------------------------------------



// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

// In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in 
// Celsius.

// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, 
// and C is the value of the same temperature in Celsius.

// Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit 
// or Celsius.

// This is the power of a getter and a setter. You are creating an API for another user, who can get the correct 
// result regardless of which one you track.

// In other words, you are abstracting implementation details from the user.



// // Only change code below this line
// class Thermostat {
//     constructor(fahrenheit) {
//       this.fahrenheit = fahrenheit;
//     } 
//       get temperature() {
//         return (5 / 9) * (this.fahrenheit - 32);
//     } 
//       set temperature(celsius) {
//         this.fahrenheit = (celsius * 9 / 5) + 32;
//     }
//   }
//   // Only change code above this line

//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   let temp = thermos.temperature; // 24.44 in Celsius
//   thermos.temperature = 26;
//   temp = thermos.temperature; // 26 in Celsius



// ------------------------------------------------------------------------------------------------------



// Use export to Share a Code Block
// Imagine a file called math_functions.js that contains several functions related to mathematical operations. 
// One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

// export const add = (x, y) => {
//   return x + y;
// }
// The above is a common way to export a single function, but you can achieve the same thing like this:

// const add = (x, y) => {
//   return x + y;
// }

// export { add };
// When you export a variable or function, you can import it in another file and use it without having to 
// rewrite the code. You can export multiple things by repeating the first example for each thing you want 
// to export, or by placing them all in the export statement of the second example, like this:

// export { add, subtract };



// Reuse JavaScript Code Using import
// import allows you to choose which parts of a file or module to load. In the previous lesson, 
// the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:

// import { add } from './math_functions.js';
// Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. 
// The ./ tells the import to look for the math_functions.js file in the same folder as the current file. 
// The relative file path (./) and file extension (.js) are required when using import in this way.

// You can import more than one item from the file by adding them in the import statement like this:

// import { add, subtract } from './math_functions.js';



// ------------------------------------------------------------------------------------------------------



// Match Literal Strings
// In the last challenge, you searched for the word Hello using the regular expression /Hello/. 
// That regex searched for a literal match of the string Hello. Here's another example searching for a 
// literal match of the string Kevin:

// let testStr = "Hello, my name is Kevin.";
// let testRegex = /Kevin/;
// testRegex.test(testStr);
// This test call will return true.

// Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.

// let wrongRegex = /kevin/;
// wrongRegex.test(testStr);
// This test call will return false.

// A future challenge will show how to match those other forms as well.



// Match a Literal String with Different Possibilities
// Using regexes like /coding/, you can look for the pattern coding in another string.

// This is powerful to search single strings, but it's limited to only one pattern. 
// You can search for multiple patterns using the alternation or OR operator: |.

// This operator matches patterns either before or after it. For example, if you wanted to match the strings 
// yes or no, the regex you want is /yes|no/.

// You can also search for more than just two patterns. You can do this by adding more patterns 
// with more OR operators separating them, like /yes|no|maybe/.


// Ignore Case While Matching
// Up until now, you've looked at regexes to do literal matches of strings. But sometimes, 
// you might want to also match case differences.

// Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. 
// Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

// You can match both cases using what is called a flag. There are other flags but here you'll focus on 
// the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using 
// this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.





// So far, you have only been checking if a pattern exists or not within a string. 
// You can also extract the actual matches you found with the .match() method.

// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

// Here's an example:

// "Hello, World!".match(/Hello/);
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);
// Here the first match would return ["Hello"] and the second would return ["expressions"].

// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

// 'string'.match(/regex/);
// /regex/.test('string');



// Find More Than the First Match
// So far, you have only been able to extract or search a pattern once.

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// testStr.match(ourRegex);
// Here match would return ["Repeat"].

// To search or extract a pattern more than once, you can use the g flag.

// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// And here match returns the value ["Repeat", "Repeat", "Repeat"]



// Match Anything with Wildcard Period
// Sometimes you won't (or don't need to) know the exact characters in your patterns. 
// Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time 
// using the wildcard character: .

// The wildcard character . will match any one character. The wildcard is also called dot and period. 
// You can use the wildcard character just like any other character in the regex. For example, 
// if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr);
// huRegex.test(hugStr);
// Both of these test calls would return true.



// Match Single Character with Multiple Possibilities
// You learned how to match literal patterns (/literal/) and wildcard character (/./). 
// Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. 
// There are options that are a balance between the two extremes.

// You can search for a literal pattern with some flexibility with character classes. Character classes 
// allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

// For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. 
// The [aiu] is the character class that will only match the characters a, i, or u.

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex);
// bagStr.match(bgRegex);
// bugStr.match(bgRegex);
// bogStr.match(bgRegex);
// In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.


// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels 
// in the string quoteSample.

// Note: Be sure to match both upper- and lowercase vowels.


// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line



// Match Letters of the Alphabet
// You saw how you can use character sets to specify a group of characters to match, but that's a lot of 
// typing when you need to match a large range of characters (for example, every letter in the alphabet). 
// Fortunately, there is a built-in feature that makes this short and simple.

// Inside a character set, you can define a range of characters to match using a hyphen character: -.

// For example, to match lowercase letters a through e you would use [a-e].

// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// catStr.match(bgRegex);
// batStr.match(bgRegex);
// matStr.match(bgRegex);
// In order, the three match calls would return the values ["cat"], ["bat"], and null.



// Match Numbers and Letters of the Alphabet
// Using the hyphen (-) to match a range of characters is not limited to letters. 
// It also works to match a range of numbers.

// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

// Also, it is possible to combine a range of letters and numbers in a single character set.

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;  -> BITIŞIK OLMALI
// jennyStr.match(myRegex);



// Match Single Characters Not Specified
// So far, you have created a set of characters that you want to match, but you could also create a set of 
// characters that you do not want to match. These types of character sets are called negated character sets.

// To create a negated character set, you place a caret character (^) after the opening bracket and before 
// the characters you do not want to match.

// For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters 
// like ., !, [, @, / and white space are matched - the negated vowel character set only excludes 
//     the vowel characters.



// Create a single regex that matches all characters that are not a number or a vowel. 
// Remember to include the appropriate flags in the regex.


// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou^0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line



// Match Characters that Occur One or More Times
// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. 
// This means it occurs at least once, and may be repeated.

// You can use the + character to check if that is the case. Remember, the character or pattern has to be present 
// consecutively. That is, the character has to repeat one after the other.

// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single 
// match in aabc and return ["aa"].

// If it were instead checking the string abab, it would find two matches and return ["a", "a"] because 
// the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, 
// it wouldn't find a match.


// Match Characters that Occur Zero or More Times
// The last challenge used the plus + sign to look for characters that occur one or more times. 
// There's also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex);
// gPhrase.match(goRegex);
// oPhrase.match(goRegex);
// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.



// Find Characters with Lazy Matching
// In regular expressions, a greedy match finds the longest possible part of a string that fits 
// the regex pattern and returns it as a match. The alternative is called a lazy match, which finds 
// the smallest possible part of the string that satisfies the regex pattern.

// You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, 
// ends with i, and has some letters in between.

// Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string 
// possible to fit the pattern.

// However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex 
// of /t[a-z]*?i/ returns ["ti"].

// Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular 
// expressions is completely fine.



//   Match All Letters and Numbers
// Using character classes, you were able to search for all letters of the alphabet with [a-z]. 
// This kind of character class is common enough that there is a shortcut for it, although it includes a few extra 
// characters as well.

// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. 
// This character class matches upper and lowercase letters plus numbers. Note, this character class also includes 
// the underscore character (_).



// Match All Numbers
// You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking 
// for just digits or numbers.

// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], 
// which looks for a single character of any number between zero and nine.


// Match Everything But Letters and Numbers
// You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. 
// A natural pattern you might want to search for is the opposite of alphanumerics.

// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. 
// This shortcut is the same as [^A-Za-z0-9_].

// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// numbers.match(shortHand);
// sentence.match(shortHand);
// The first match call would return the value ["%"] and the second would return ["!"].

// same with \D


// Match Whitespace
// The challenges so far have covered matching letters of the alphabet and numbers. 
// You can also match the whitespace or spaces between letters.

// You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, 
// but also carriage return, tab, form feed, and new line characters. You can think of it as similar to 
// the character class [ \r\t\f\n\v].

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);
// This match call would return [" ", " "].


// Match Non-Whitespace Characters
// You learned about searching for whitespace using \s, with a lowercase s. 
// You can also search for everything except whitespace.

// Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, 
// carriage return, tab, form feed, and new line characters. You can think of it being similar to 
// the character class [^ \r\t\f\n\v].

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let nonSpaceRegex = /\S/g;
// whiteSpace.match(nonSpaceRegex).length;
// The value returned by the .length method would be 32.


// Specify Upper and Lower Number of Matches
// Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for 
// zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

// You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used 
// with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower 
// and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would 
// be /a{3,5}h/.

// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// multipleA.test(A4);
// multipleA.test(A2);
// The first test call would return true, while the second would return false.



// Check for All or None
// Sometimes the patterns you want to search for may have parts of it that may or may not exist. 
// However, it may be important to check for them nonetheless.

// You can specify the possible existence of an element with a question mark, ?. This checks for zero or 
// one of the preceding element. You can think of this symbol as saying the previous element is optional.

// For example, there are slight differences in American and British English and you can use the question 
// mark to match both spellings.

// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// rainbowRegex.test(american);
// rainbowRegex.test(british);
// Both uses of the test method would return true.



// ------------------------------------------------------------------------------------------------------



// JavaScript recognizes six primitive (immutable) data types: 
// Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: 
// Object. Note that in JavaScript, arrays are technically a type of object.


// The code below assigns x to be 2, which evaluates as true. Almost every value on its own in JavaScript 
// evaluates to true, except what are known as the "falsy" values: false, 0, "" (an empty string), NaN, undefined, 
// and null.



// ------------------------------------------------------------------------------------------------------



// Remove Items from an Array with pop() and shift()
// Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). 
// As you may have guessed by now, instead of adding, pop() removes an element from the end of an array, 
// while shift() removes an element from the beginning. The key difference between pop() and shift() and 
// their cousins push() and unshift(), is that neither method takes parameters, and each only allows 
// an array to be modified by a single element at a time.



// Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), 
// but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? 
// Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive 
// elements from anywhere in an array.



// Add Items Using splice()
// Remember in the last challenge we mentioned that splice() can take up to three parameters? 
// Well, you can use the third parameter, comprised of one or more element(s), to add to the array. 
// This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);
// The second occurrence of 12 is removed, and we add 13 and 14 at the same index. The numbers array would now be 
// [ 10, 11, 12, 13, 14, 15 ].



// Copy Array Items Using slice()
// The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a 
// given number of elements to a new array, leaving the array it is called upon untouched. slice() takes 
// only 2 parameters — the first is the index at which to begin extraction, and the second is the index at 
// which to stop extraction (extraction will occur up to, but not including the element at this index). 
// Consider this:



// Check For The Presence of an Element With indexOf()
// Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular 
// piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us 
// with another built-in method, indexOf(), that allows us to quickly and easily check for the presence 
// of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, 
// or index, of that element, or -1 if the element does not exist on the array.



// Iterate Through All an Array's Items Using For Loops
// Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or 
// more elements that we might need, or to manipulate an array based on which data items meet a certain set of 
// criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different 
// ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which 
// is most flexible and offers us the greatest amount of control is a simple for loop.




// Check if an Object has a Property
// Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object 
// has a specific property? JavaScript provides us with two different ways to do this. 
// One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users 
// with a property of Alan, we could check for its presence in either of the following ways:

// users.hasOwnProperty('Alan');
// 'Alan' in users;
// Both of these would return true.





// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.



// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num 
// is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.




// ------------------------------------------------------------------------------------------------------




// Create a Method on an Object
// Objects can have a special type of property, called a method.

// Methods are properties that are functions. This adds different behavior to an object. Here is the duck example 
// with a method:

// let duck = {
//   name: "Aflac",
//   numLegs: 2,
//   sayName: function() {return "The name of this duck is " + duck.name + ".";}
// };
// duck.sayName();
// The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. 
// Notice that the method accessed the name property in the return statement using duck.name. The next challenge 
// will cover another way to do this.

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
// };

// dog.sayLegs();


// While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

// A way to avoid these issues is with the this keyword:

// let duck = {
//     name: "Aflac",
//     numLegs: 2,
//     sayName: function() {return "The name of this duck is " + this.name + ".";}
// };




// Define a Constructor Function
// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

// Here is an example of a constructor:

// function Bird() {
//     this.name = "Albert";
//     this.color = "blue";
//     this.numLegs = 2;
// }
// This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.



// Use a Constructor to Create Objects
// Here's the Bird constructor from the previous challenge:

// function Bird() {
//     this.name = "Albert";
//     this.color  = "blue";
//     this.numLegs = 2;
// }

// let blueBird = new Bird();
// NOTE: this inside the constructor always refers to the object being created.

// Notice that the new operator is used when calling a constructor. This tells JavaScript to create a 
// new instance of Bird called blueBird. Without the new operator, this inside the constructor would 
// not point to the newly created object, giving unexpected results.




// Extend Constructors to Receive Arguments
// The Bird and Dog constructors from the last challenge worked well. However, notice that all Birds that are 
// created with the Bird constructor are automatically named Albert, are blue in color, and have two legs. 
// What if you want birds with different values for name and color? It's possible to change the properties of 
// each bird manually but that would be a lot of work:

// let swan = new Bird();
// swan.name = "Carlos";
// swan.color = "white";
// Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. 
// It would take a lot of time to create all the birds, then change the properties to different values for 
// every one. To more easily create different Bird objects, you can design your Bird constructor to accept 
// parameters:

// function Bird(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
// }
// Then pass in the values as arguments to define each unique bird into the Bird constructor: 
// let cardinal = new Bird("Bruce", "red"); This gives a new instance of Bird with name and color properties 
// set to Bruce and red, respectively. The numLegs property is still set to 2. The cardinal has these properties:

// cardinal.name
// cardinal.color
// cardinal.numLegs
// The constructor is more flexible. It's now possible to define the properties for each Bird at the time 
// it is created, which is one way that JavaScript constructors are so useful. They group objects together 
// based on shared characteristics and behavior and define a blueprint that automates their creation.

// Create another Dog constructor. This time, set it up to take the parameters name and color, 
// and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. 
// Pass it two strings as arguments for the name and color properties.


// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4
// }

// let terrier = new Dog("Bruh", "Brown")

// console.log(terrier)





// ------------------------------------------------------------------------------------------------------






// Understand Own Properties
// In the following example, the Bird constructor defines two properties: name and numLegs:

// function Bird(name) {
//     this.name  = name;
//     this.numLegs = 2;
// }

// let duck = new Bird("Donald");
// let canary = new Bird("Tweety");
// name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

// let ownProps = [];

// for (let property in duck) {
//     if(duck.hasOwnProperty(property)) {
//         ownProps.push(property);
//     }
// }

// console.log(ownProps);
// The console would display the value ["name", "numLegs"].




// Use Prototype Properties to Reduce Duplicate Code
// Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated 
// variable numLegs inside each Bird instance.

// This may not be an issue when there are only two instances, but imagine if there are millions of instances. 
// That would be a lot of duplicated variables.

// A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of 
// Bird. Here's how to add numLegs to the Bird prototype:

// Bird.prototype.numLegs = 2;
// Now all instances of Bird have the numLegs property.

// console.log(duck.numLegs);
// console.log(canary.numLegs);
// Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for 
// creating objects. Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. 
// Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.




// Iterate Over All Properties
// You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

// function Bird(name) {
//   this.name = name;  //own property
// }

// Bird.prototype.numLegs = 2; // prototype property

// let duck = new Bird("Donald");
// Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

// let ownProps = [];
// let prototypeProps = [];

// for (let property in duck) {
//     if(duck.hasOwnProperty(property)) {
//         ownProps.push(property);
//     } else {
//         prototypeProps.push(property);
//     }
// }

// console.log(ownProps);
// console.log(prototypeProps);
// console.log(ownProps) would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].




// Remember to Set the Constructor Property when Changing the Prototype
// There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

// duck.constructor === Bird;
// duck.constructor === Object;
// duck instanceof Bird;
// In order, these expressions would evaluate to false, true, and true.

// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

// Bird.prototype = {
//     constructor: Bird,
//     numLegs: 2,
//     eat: function() {
//         console.log("nom nom nom");
//     },
//     describe: function() {
//         console.log("My name is " + this.name); 
//     }
// };



// Understand Where an Object’s Prototype Comes From
// Just like people inherit genes from their parents, an object inherits its prototype directly from 
// the constructor function that created it. For example, here the Bird constructor creates the duck object:

// function Bird(name) {
//   this.name = name;
// }

// let duck = new Bird("Donald");
// duck inherits its prototype from the Bird constructor function. You can show this relationship with 
// the isPrototypeOf method:

// Bird.prototype.isPrototypeOf(duck);
// This would return true.



// Use a Mixin to Add Common Behavior Between Unrelated Objects
// As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not 
// the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. 
// They can both fly, but a Bird is not a type of Airplane and vice versa.

// For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

// let flyMixin = function(obj) {
//   obj.fly = function() {
//     console.log("Flying, wooosh!");
//   }
// };
// The flyMixin takes any object and gives it the fly method.

// let bird = {
//   name: "Donald",
//   numLegs: 2
// };

// let plane = {
//   model: "777",
//   numPassengers: 524
// };

// flyMixin(bird);
// flyMixin(plane);
// Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. 
// Now bird and plane can both fly:

// bird.fly();
// plane.fly();
// The console would display the string Flying, wooosh! twice, once for each .fly() call.

// Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.




// Understand the Immediately Invoked Function Expression (IIFE)
// A common pattern in JavaScript is to execute a function as soon as it is declared:

// (function () {
//   console.log("Chirp, chirp!");
// })();
// This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

// Note that the function has no name and is not stored in a variable. The two parentheses () at the end of 
// the function expression cause it to be immediately executed or invoked. This pattern is known as 
// an immediately invoked function expression or IIFE.





// ------------------------------------------------------------------------------------------------------




// Refactor Global Variables Out of Functions
// So far, we have seen two distinct principles for functional programming:

// Don't alter a variable or object - create new variables and objects and return them if need be from a function.
//  Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference 
//  to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

// Declare function parameters - any computation inside a function depends only on the arguments passed to the 
// function, and not on any global object or variable.

// Adding one to a number is not very exciting, but we can apply these principles when working with arrays or 
// more complex objects.

// Rewrite the code so the global array bookList is not changed inside either function. The add function should 
// add the given bookName to the end of the array passed to it and return a new array (list). The remove 
// function should remove the given bookName from the array passed to it.

// Note: Both functions should return an array, and any new parameters should be added before the bookName 
// parameter.





// Use the map Method to Extract Data from an Array
// So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen 
// the value in having a function only depend on its input arguments.

// This is only the beginning. As its name suggests, functional programming is centered around a theory of 
// functions.

// It would make sense to be able to pass them as arguments to other functions, and return a function from 
// another function. Functions are considered first class objects in JavaScript, which means they can be used 
// like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

// Let's start with some simple array functions, which are methods on the array object prototype. In this 
// exercise we are looking at Array.prototype.map(), or more simply map.

// The map method iterates over each item in an array and returns a new array containing the results of calling 
// the callback function on each element. It does this without mutating the original array.

// When the callback is used, it is passed three arguments. The first argument is the current element being 
// processed. The second is the index of that element and the third is the array upon which the map method was 
// called.

// See below for an example using the map method on the users array to return a new array containing only the 
// names of the users as elements. For simplicity, the example only uses the first argument of the callback.

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const names = users.map(user => user.name);
// console.log(names);
// The console would display the value [ 'John', 'Amy', 'camperCat' ].

// The watchList array holds objects with information on several movies. 
// Use map on watchList to assign a new array of objects to the ratings variable.
//  Each movie in the new array should have only a title key with the name of the film, 
//  and a rating key with the IMDB rating. The code in the editor currently uses a for loop to do this, 
//  so you should replace the loop functionality with your map expression.



// const ratings = watchList.map(movie => ({
//     title: movie["Title"],
//     rating: movie["imdbRating"]
// }));




// Implement the filter Method on a Prototype
// You might learn a lot about the filter method if you implement your own version of it. 
// It is recommended you use a for loop or Array.prototype.forEach().

// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
// You should not use the built-in filter method. The Array instance can be accessed in the myFilter method 
// using this.



// // The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback) {
//   // Only change code below this line
//     const newArray = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i]) == true) {
//         newArray.push(this[i]);
//         }
//     }
//     // Only change code above this line
//     return newArray;
// };

// const new_s = s.myFilter(function(item) {
//     return item % 2 === 1;
// });




// Sort an Array Alphabetically using the sort Method
// The sort method sorts the elements of an array according to the callback function.

// For example:

// function ascendingOrder(arr) {
//     return arr.sort(function(a, b) {
//         return a - b;
//     });
// }

// ascendingOrder([1, 5, 2, 3, 4]);
// This would return the value [1, 2, 3, 4, 5].

// function reverseAlpha(arr) {
//     return arr.sort(function(a, b) {
//         return a === b ? 0 : a < b ? 1 : -1;
//     });
// }

// reverseAlpha(['l', 'h', 'z', 'b', 's']);
// This would return the value ['z', 's', 'l', 'h', 'b'].

// JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. 
// Therefore, it is encouraged to provide a callback function to specify how to sort the array items. 
// When such a callback function, normally called compareFunction, is supplied, the array elements are 
// sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value 
// less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value 
// greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value 
// equal to 0 for two elements a and b, then a and b will remain unchanged.




// Use the every Method to Check that Every Element in an Array Meets a Criteria
// The every method works with arrays to check if every element passes a particular test. 
// It returns a Boolean value - true if all values meet the criteria, false if not.



// Use the some Method to Check that Any Elements in an Array Meet a Criteria
// The some method works with arrays to check if any element passes a particular test. 
// It returns a Boolean value - true if any of the values meet the criteria, false if not.





// Introduction to Currying and Partial Application
// The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

// In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

// Here's an example:

// function unCurried(x, y) {
//     return x + y;
// }

// function curried(x) {
//     return function(y) {
//         return x + y;
//     }
// }

// const curried = x => y => x + y

// curried(1)(2)
// curried(1)(2) would return 3.

// This is useful in your program if you can't supply all the arguments to a function at one time. 
// You can save each function call into a variable, which will hold the returned function reference 
// that takes the next argument when it's available. Here's an example using the curried function in 
// the example above:

// const funcForY = curried(1);
// console.log(funcForY(2)); // 3
// Similarly, partial application can be described as applying a few arguments to a function at a time and 
// returning another function that is applied to more arguments. Here's an example:

// function impartial(x, y, z) {
//     return x + y + z;
// }

// const partialFn = impartial.bind(this, 1, 2);
// partialFn(10); // 13
// Fill in the body of the add function so it uses currying to add parameters x, y, and z.


// function add(x) {
//     // Only change code below this line
//     return function(y) {
//         return function(z) {
//             return x + y + z;
//         }
//     }
//     // Only change code above this line
// }

// add(10)(20)(30);

















