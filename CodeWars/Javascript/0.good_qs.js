// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
    let answer = [];
    let answerMini = [];
    for (let x = 0; x < arr.length; x++) {
        answerMini.push(arr[x]);
        if ((x + 1) % size == 0 || x == arr.length - 1) {
            answer.push(answerMini);
            answerMini = [];
        }
    }
    return answer;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);





// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.



function bouncer(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

bouncer([7, "ate", "", false, 9]);




// Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.


// My Answer

function frankenSplice(arr1, arr2, n) {
    let answer = []
    for (let i = 0; i < arr2.length + 1; i++) {
        if (i < n) {
            answer.push(arr2[i]);
        }
        else if (i == n) {
            answer.push(...arr1)
        }
        else {
            answer.push(arr2[i - 1])
        }
    }
    return answer;
}


// Best Answer


function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}



// Iterate Through the Keys of an Object with a for...in Statement
// Sometimes you may need to iterate through all the keys within an object. 
// This requires a specific syntax in JavaScript called a for...in statement. For our users object, 
// this could look like:

for (let user in users) {
    console.log(user);
}



// Return a Sorted Array Without Changing the Original Array
// A side effect of the sort method is that it changes the order of the elements in the original array. 
// In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array 
// to the one being sorted (remember that slice and concat return a new array), then run the sort method.

// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
// The function should return a new array, and not mutate the globalArray variable.


const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
    return arr.slice().sort(function(a,b){
        return a===b ? 0 : a > b ? 1 : -1;
    })

  // Only change code above this line
}

nonMutatingSort(globalArray);




// Use the reduce Method to Analyze Data
// Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. 
// You can solve almost any array processing problem using the reduce method.

// The reduce method allows for more general forms of array processing, and it's possible to show that both 
// filter and map can be derived as special applications of reduce. The reduce method iterates over each item 
// in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback 
// function that is called on each iteration.

// The callback function accepts four arguments. The first argument is known as the accumulator, which gets 
// assigned the return value of the callback function from the previous iteration, the second is the current 
// element being processed, the third is the index of that element and the fourth is the array upon which reduce 
// is called.

// In addition to the callback function, reduce has an additional parameter which takes an initial value for
//  the accumulator. If this second parameter is not used, then the first iteration is skipped and the second 
//  iteration gets passed the first element of the array as the accumulator.

// See below for an example using reduce on the users array to return the sum of all the users' ages. 
// For simplicity, the example only uses the first and second arguments.

// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
// ];

// const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
// console.log(sumOfAges);
// The console would display the value 64.

// In another example, see how an object can be returned containing the names of the users as properties 
// with their ages as values.

// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
// ];

// const usersObj = users.reduce((obj, user) => {
//     obj[user.name] = user.age;
//     return obj;
// }, {});
// console.log(usersObj);
// The console would display the value { John: 34, Amy: 20, camperCat: 10 }.

// The variable watchList holds an array of objects with information on several movies. 
// Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. 
// Recall from prior challenges how to filter data and map over it to pull what you need. 
// You may need to create other variables, and return the average rating from getRating function. 
// Note that the rating values are saved as strings in the object and need to be converted into 
// numbers before they are used in any mathematical operations.


function getRating(watchList) {
    // Only change code below this line
    let nolanMovies = watchList.filter(function(movie) {
        if (movie["Director"] === "Christopher Nolan") {
            return movie;
        }
    });

    let nolanRatings = nolanMovies.map(function(rating) {
        return rating["imdbRating"]
    })

    let sumRatings = nolanRatings.reduce(function(sum, rating) {
        sum += parseFloat(rating);
        return sum;
    }, 0)

    let avarageRating = sumRatings / nolanRatings.length;
    // Only change code above this line
    return avarageRating;
}

// console.log(getRating(watchList));



// Combine an Array into a String Using the join Method
// The join method is used to join the elements of an array together to create a string. It takes an argument 
// for the delimiter that is used to separate the array elements in the string.

// Here's an example:

// const arr = ["Hello", "World"];
// const str = arr.join(" ");
// str would have a value of the string Hello World.

// Use the join method (among others) inside the sentensify function to make a sentence from the words in the 
// string str. The function should return a string. For example, I-like-Star-Wars would be converted to 
// I like Star Wars. For this challenge, do not use the replace method.


function sentensify(str) {
    // Only change code below this line
    let strArr = str.split(/\W/);
    return strArr.join(" ")
    // Only change code above this line
}

sentensify("May-the-force-be-with-you");



// Apply Functional Programming to Convert Strings to URL Slugs
// The last several challenges covered a number of useful array and string methods that follow functional 
// programming principles. We've also learned about reduce, which is a powerful method used to reduce problems 
// to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. 
// Recall that map and filter are special cases of reduce.

// Let's combine what we've learned to solve a practical problem.

// Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking 
// purposes. For example, if you write a Medium post titled Stop Using Reduce, it's likely the URL would have 
// some form of the title string in it (.../stop-using-reduce). You may have already noticed this on the 
// freeCodeCamp site.

// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
// You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

// The input is a string with spaces and title-cased words

// The output is a string with the spaces between words replaced by a hyphen (-)

// The output should be all lower-cased letters

// The output should not have any spaces


// Only change code below this line
function urlSlug(title) {
    let titleArr = title.toLowerCase().trim().split(/\s+/);
    // console.log(titleArr.join("-"))
    return titleArr.join("-")
}
  // Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
console.log(urlSlug(" Winter Is  Coming"))





// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of the same 
// value as these arguments.

// Note: You have to use the arguments object.


// My Answer

function destroyer(arr, ...arr1) {
    let answArr = arr.filter(function(a){
        if (arr1.indexOf(a) < 0) {
            return a
        }
    })
    return answArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Other Answers


function destroyer(arr) {
    var valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !valsToRemove.includes(val);
    });
}


function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}





// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of 
// all objects that have matching name and value pairs (second argument). Each name and value pair of 
// the source object has to be present in the object from the collection if it is to be included in the 
// returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
// { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return 
// the third object from the array (the first argument), because it contains the name and its value, 
// that was passed on as the second argument.



function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    var srcKeys = Object.keys(source);

    return collection.filter(function(obj) {
        return srcKeys.every(function(key) {
            return obj[key] === source[key];
        });
    });

    // Only change code above this line
    return arr;
}




// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase("AllThe-small Things");


function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash
    return str
        .toLowerCase()
        .split(/(?:_| )+/)
        .join("-");
}

// test here
spinalCase("This Is Spinal Tap");




function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}

  // test here
spinalCase("This Is Spinal Tap");



// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, 
// move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be 
// English words in all lowercase.

// Should handle words where the first vowel comes in the middle of the word. 
// translatePigLatin("schwartz") should return the string artzschway.

// Should handle words without vowels. translatePigLatin("rhythm") should return 
// the string rhythmay.



function translatePigLatin(str) {
    if ("aeiou".indexOf(str[0]) >= 0) {
        return str + "way";
    } 
    else if (/[aeiou]/.test(str) === false) {
        return str + "ay";
    } 
    else {
        let fvi = 0; 
        // console.log();
        for (let i = 0; i < str.length; i++) {
            if ("aeiou".indexOf(str[i]) >= 0) {
            fvi = i;
            break
            }
        }
        return str.substring(fvi) + str.substring(0, fvi) + "ay";
    }  
}


// Best Answers


function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
        ? str
            .replace(consonantRegex, "")
            .concat(myConsonants)
            .concat("ay")
        : str.concat("way");
}



// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and 
// return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are 
// replacing it. For example if you mean to replace the word Book with the word dog, 
// it should be replaced as Dog



function myReplace(str, before, after) {
    if (/[A-Z]/.test(before[0]) === true) {
        after = after[0].toUpperCase() + after.substring(1);
    }
    else {
        after = after[0].toLowerCase() + after.substring(1);
    }
    return str.replace(before, after);
}




// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, 
// and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]


function pairElement(str) {
    let dna = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "A") {
            dna.push(["A", "T"]);
        } 
        else if (str[i] == "T") {
            dna.push(["T", "A"]);
        }
        else if (str[i] == "G") {
            dna.push(["G", "C"]);
        }
        else {
            dna.push(["C", "G"]);
        }
    }
    return dna;
}



// Best Answers


function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var paired = [];
    // Function to check with strand to pair.
    var search = function(char) {
        switch (char) {
            case "A":
            paired.push(["A", "T"]);
            break;
            case "T":
            paired.push(["T", "A"]);
            break;
            case "C":
            paired.push(["C", "G"]);
            break;
            case "G":
            paired.push(["G", "C"]);
            break;
        }
    };
    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
        search(str[i]);
    }
    return paired;
}


function pairElement(str) {
    //create object for pair lookup
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}




// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.



function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startNum = alphabet.indexOf(str[0]);
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== alphabet[i + startNum]) {
            return alphabet[i + startNum]
        }
    }
    return undefined;
}



// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique 
// values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their 
// original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array 
// should not be sorted in numerical order.

// Check the assertion tests for examples.



function uniteUnique(...arr) {
    let answArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].forEach(function(num) {
            if (answArr.indexOf(num) < 0) {
            answArr.push(num);
            }
        }
        )}
    console.log(answArr)
    return answArr;
}



// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.


const htmlObj = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;"
    }
    function convertHTML(str) {
    let strArr = str.split("")
    return str.replace(/&|<|>|"|'/gi, function (entity) {
        return htmlObj[entity];
    })
}


// Best Answers


function convertHTML(str) {
    // Split by character to avoid problems.

    var temp = str.split("");

    // Since we are only checking for a few HTML elements, use a switch

    for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
            case "<":
            temp[i] = "&lt;";
            break;
            case "&":
            temp[i] = "&amp;";
            break;
            case ">":
            temp[i] = "&gt;";
            break;
            case '"':
            temp[i] = "&quot;";
            break;
            case "'":
            temp[i] = "&apos;";
            break;
        }
    }

    temp = temp.join("");
    return temp;
}



// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are 
// less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number 
// in the sequence is the sum of the two previous numbers. The first six numbers of 
// the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less 
// than or equal to 10 are 1, 1, 3, and 5.


function sumFibs(num) {
    let sum = 2;
    let fibo = [1,1];
    if (num < 3) {
        return num;
    }
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 2] + fibo[i - 1];
        if (fibo[i] > num) {
            break
        }
        else if (fibo[i] % 2 !== 0) {
            sum += fibo[i];
        }
    }
    return sum;
}



// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
// For example, 2 is a prime number because it is only divisible by 1 and 2. 
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or 
// equal to num.


function sumPrimes(num) {
    if (num < 5) {
        return num;
    }
    let sum = 5;
    for (let i = 5; i <= num; i += 2) {
        for (let x = 3; x < i / 2; x+= 2) {
            if (i % x == 0) {
            sum -= i
            break
            }
        }
        sum += i;
    }
    return sum;
}


// Best Answers


function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0)
            return false;
        }
        return true;
    }

    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            sum += i;
    }
    return sum;
}


function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
        if (primes.every((prime) => i % prime !== 0))
            primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}



// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly 
// divided by both, as well as by all sequential numbers in the range between these 
// parameters.

// The range will be an array of two numbers that will not necessarily be in numerical 
// order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
// that is also evenly divisible by all numbers between 1 and 3. The answer here 
// would be 6.



function smallestCommons(arr) {
    arr.sort(function(a,b) {
        return a - b
    })
    let max = 1;
    for (let i = arr[0]; i <= arr[1]; i++) {
        if (max % i != 0) {
            max *= i
        } 
    }
    let maxNums = arr[1] - arr[0] + 1;
    for (let i = arr[1]; i <= max; i += arr[1]) {
        let triedNums = 0;
        for (let x = arr[0]; x <= arr[1]; x++) {
            if (i % x === 0) {
            triedNums += 1;
            }
        }
        if (triedNums === maxNums) {
            return i
        }
    }
}



// Drop it
// Given the array arr, iterate through and remove each element starting from the 
// first element (the 0 index) until the function func returns true when the iterated 
// element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, 
// arr should be returned as an empty array.



function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            return arr.slice(i)
        }
    }
    return [];
}


// Best Answers


function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}



// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

// Couldn't solve it, didn't want to re-invent wheel


// Best Answers


function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            //  and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
        } else {
            // Copy contents that are not arrays
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
};



// Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.


// My Answer


function binaryAgent(str) {
    function ussu(a){
        let total = 1;
        if (a === 0) {
        return 1;
        }
        for (let i = 0; i < a; i++){
        total *= 2;
        }
        return total;
    }
    let answArr = str.split(" ");
        for (let i = 0; i < answArr.length; i++) {
        let sum = 0;
            for (let x = 0; x < answArr[i].length; x++) {
                if (answArr[i][answArr[i].length - 1 - x] == 1) {
                    sum += ussu(x)
                }
            }
            answArr[i] = String.fromCharCode(sum);
        }
    return answArr.join("");
}


// Best Answers


function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];

    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/

    for (var i = 0; i < biString.length; i++) {
        uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }

    // we then simply join the string
    return uniString.join("");
}


function binaryAgent(str) {
    // Separate the binary code by space.
    str = str.split(" ");
    var power;
    var decValue = 0;
    var sentence = "";

    // Check each binary number from the array.
    for (var s = 0; s < str.length; s++) {
      // Check each bit from binary number
        for (var t = 0; t < str[s].length; t++) {
            // This only takes into consideration the active ones.
            if (str[s][t] == 1) {
            // This is quivalent to 2 ** position
            power = Math.pow(2, +str[s].length - t - 1);
            decValue += power;
    
            // Record the decimal value by adding the number to the previous one.
            }
        }
        // After the binary number is converted to decimal, convert it to string and store
        sentence += String.fromCharCode(decValue);
        // Reset decimal value for next binary number.
        decValue = 0;
    }
    return sentence;
}



// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection 
// (first argument).

// In other words, you are given an array collection of objects. The predicate pre will 
// be an object property and you need to return true if its value is truthy. Otherwise, 
// return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a 
// Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.


// My Answer


function truthCheck(collection, pre) {
    return collection.every((users) => {
        return users[pre];
    });
}



// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, 
// then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a 
// function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.


// Couldn't solve

// Best Answers


function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number")
        return undefined;
    if (second === undefined)
        return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
        return undefined;
    return first + second;
}


function addTogether() {
    const [first, second] = arguments;
    // First argument is not a number
    if (typeof(first) !== "number") {
        return undefined;
    }
    // First argument is a number
    //  and second argument is not defined
    else if (second === undefined) {
        function addSecond(second) {
            // New argument is not a number
            if (typeof(second) !== "number") {
            return undefined;
            }
            // New argument is a number
            else {
            return first + second;
            }
        }
        // Note: returning a *function*
        return addSecond;
    }
    // First argument is a number
    //  and second argument is not a number
    else if (typeof(second) !== "number") {
        return undefined;
    }
    // First argument is a number
    //  and second argument is a number
    else {
        return first + second;
    }
}







