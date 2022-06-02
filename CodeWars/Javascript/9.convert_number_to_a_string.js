// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"


// My Answer


function numberToString(num) {  
    return `${num}`
} 


// Best Answers


function numberToString(num) {
    return num.toString();
}


function numberToString(num) {
    // Return a string of the number here!
    return String(num);
}


function numberToString(num) {
    return ''+num;
}


numberToString = String;


const numberToString = num => `${num}`;


