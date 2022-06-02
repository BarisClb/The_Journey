// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
// the longest possible, containing distinct letters - each taken only once - coming from 
// s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// My Answer


function longest(s1, s2) {
    let answArr = [];
    for (let i = 0; i < s1.length; i++) {
        if (answArr.indexOf(s1[i]) < 0) {
            answArr.push(s1[i]);
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (answArr.indexOf(s2[i]) < 0) {
            answArr.push(s2[i]);
        }
    }
    return answArr.sort().join("")
}


// Best Answers


const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}


function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);
    return [...str].sort().join('');
}

