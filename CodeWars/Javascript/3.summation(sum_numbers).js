// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


// My Answer


var summation = function (num) {
    var sum = 0
    for (var i = 1; i < num + 1; i++)
        sum += i
    return sum
}


// Best Answers


const summation = n => n * (n + 1) / 2;


function summation(num) {
    return num * (num + 1) / 2
}


