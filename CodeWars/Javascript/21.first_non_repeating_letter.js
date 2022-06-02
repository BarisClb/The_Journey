// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


// My Answer


function firstNonRepeatingLetter(s) {
    let sLow = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (sLow.slice(i+1).indexOf(sLow[i]) < 0 && sLow.slice(0,i).indexOf(sLow[i]) < 0) {
            return s[i];
        }
    }
    return "";
}


// Best Answers


function firstNonRepeatingLetter(s) {
    for(var i in s) {
        if(s.match(new RegExp(s[i],"gi")).length === 1) {
            return s[i];
        }
    }
    return '';
}


function firstNonRepeatingLetter(str){
    return str.split('').find(e => str.match(new RegExp(`${e}`, 'gi')).length === 1) || ''
}


const firstNonRepeatingLetter = s =>
    s[[...s.toLowerCase()].findIndex((c, _, s) => s.indexOf(c) === s.lastIndexOf(c))] || "";


