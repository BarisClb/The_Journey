// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000
// Help
// Symbol	Value
// I	1
// IV	4
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000


// Best Answer


const romanNums = {
    0 : ["","","",""],
    1 : ["I", "X", "C", "M"],
    2 : ["II", "XX", "CC", "MM"],
    3 : ["III","XXX","CCC","MMM"],
    4 : ["IV","XL","CD","MMMM"],
    5 : ["V","L","D",""],
    6 : ["VI","LX","DC",""],
    7 : ["VII","LXX","DCC",""],
    8 : ["VIII","LXXX","DCCC",""],
    9 : ["IX","XC","CM",""],
}
const easierRomanNums = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000,
}
class RomanNumerals {
    static toRoman(num) {
        let answerArr = [];
        let numString = num.toString();
        let numLength = numString.length;
        for (let i = 0; i < numLength; i++) {
            answerArr.unshift(romanNums[numString[numLength - i - 1]][i]);
        };
        return answerArr.join("");
    };
    static fromRoman(str) {
        let answer = 0;
        let len = str.length;
        for (let i = 0; i < len; i++) {
            if (i == len - 1) {
                answer += easierRomanNums[str[i]];
            }
            else if (easierRomanNums[str[i]] >= easierRomanNums[str[i + 1]]) {
                answer += easierRomanNums[str[i]];
            }
            else {
                answer -= easierRomanNums[str[i]];
            }
            };
            return answer;
        }; 
}


// Best Answers


var numerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];

    RomanNumerals = {
        toRoman: function(v) {
        var s = '';
        numerals.forEach(function(n) {
            while (v >= n[1]) {
            s += n[0];
            v -= n[1]; 
            }
        });
        return s;
        },
        fromRoman: function(s) {
        var v = 0;
        numerals.forEach(function(n) {
            while (s.substr(0, n[0].length) == n[0]) {
            s = s.substr(n[0].length);
            v += n[1];
            }
        });
        return v;
    }
};


const map = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};

class RomanNumerals {
    static toRoman(num) {
        let str = '';
        for (var i in map) {
            while (num >= map[i]) {
                str += i;
                num -= map[i];
            }
        }
        return str;
    }
    
    static fromRoman(str) {
        return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc + map[el], 0);
    }
}


// Rest

// https://www.codewars.com/kata/51b66044bce5799a7f000003/solutions/javascript

