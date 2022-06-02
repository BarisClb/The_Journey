// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
// but do pass them on.


// My Answer


function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let answer = ""
    for (let i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) >= 0) {
            if (alphabet.indexOf(str[i]) + 1 <= alphabet.length / 2) {
            // console.log(alphabet[alphabet.indexOf(str[i]) + 13]);
            answer += alphabet[alphabet.indexOf(str[i]) + 13];
            } 
            else {
            // console.log(alphabet[alphabet.indexOf(str[i]) - 13]);
            answer += alphabet[alphabet.indexOf(str[i]) - 13];
            }
        } 
        else {
            // console.log(str[i]);
            answer += str[i];
        }
    }
    return answer;
}

