// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

// Wrong Answer

// function palindrome(str) {
//     let answer = "";
//     let strLowerCase = str.toLowerCase();
//     let lettersAndNumber = /[a-z0-9]/ig;
//     for (let x = 0; x < strLowerCase.length; x++) {
//       if (strLowerCase[x].match(lettersAndNumber) == true) {
//         answer += string(strLowerCase[x]);
//       }
//     }
//     for (let i = 0; i < answer.length / 2; i++) {
//       if (answer[i] !== answer[-i - 1]){
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(palindrome("eye"));

// Notes: There is no str[-i] -> you need to do str[str.length - 1]

// My Answer

function palindrome(str) {
	let strLowerCase = str.toLowerCase();
	let lettersAndNumbers = /[A-Za-z0-9]/gi;
	let answer = strLowerCase.match(lettersAndNumbers);
	for (let i = 0; i < answer.length / 2; i++) {
		if (answer[i] !== answer[answer.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
