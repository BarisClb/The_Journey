// Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

const romanNums = {
	0: ["", "", "", ""],
	1: ["I", "X", "C", "M"],
	2: ["II", "XX", "CC", "MM"],
	3: ["III", "XXX", "CCC", "MMM"],
	4: ["IV", "XL", "CD", "MMMM"],
	5: ["V", "L", "D", ""],
	6: ["VI", "LX", "DC", ""],
	7: ["VII", "LXX", "DCC", ""],
	8: ["VIII", "LXXX", "DCCC", ""],
	9: ["IX", "XC", "CM", ""],
};
function convertToRoman(num) {
	let answerArr = [];
	let numString = num.toString();
	let numLength = numString.length;
	for (let i = 0; i < numLength; i++) {
		answerArr.unshift(romanNums[numString[numLength - i - 1]][i]);
		console.log(num);
	}
	return answerArr.join("");
}
