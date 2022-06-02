// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


// My Answer


function squareDigits(num){
    let answer = "";
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
      answer = answer.concat(parseInt(num[i]) * parseInt(num[i]));
    }
    return parseInt(answer);
}


// Best Answers


function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));   
}


function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
        var i = parseInt(int);
        return i * i;
    });
    return parseInt(array.join(""));
}


function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
}

