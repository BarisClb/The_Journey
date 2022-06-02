// Task
// Given an integral number, determine if it's a square number:


// My Answer

var isSquare = function(n){
    if (n < 0) {
        return false
    }
    else if (Number.isInteger(Math.sqrt(n))) {
        return true
    }
    else 
        return false
}



// Best Answers


function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}


const isSquare = n => Number.isInteger(Math.sqrt(n));


var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
}


