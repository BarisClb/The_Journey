// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them

// My Answer

numbers = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	eleven: 11,
	twelve: 12,
	thirteen: 13,
	fourteen: 14,
	fifteen: 15,
	sixteen: 16,
	seventeen: 17,
	eightteen: 18,
	nineteen: 19,
	twenty: 20,
	thirt: 30,
	fourty: 40,
	fifty: 50,
	sixty: 60,
	seventy: 70,
	eighty: 80,
	ninety: 90,
	hundred: 100,
	thousand: 1000,
};
function parseInt(string) {
	let answArr = [];
	let numbArr = string.split(" ");
	for (let i = numbArr.length; i > 0; i--) {
		if (numbArr[i].includes("-")) {
			let microArr = numbArr[i].split("-");
			answArr.unshift(numbers[microArr[0]] + numbers[microArr[1]]);
		} else if (numbArr[i].includes("hundred")) {
		}
	}

	// Logic maybe?
	// .replace("-", " ").split(" ")
	// if (includes 100) add -> arr.length - i * 0
	// if there is only 1 number after hundred, add 1 zero, if no numbers, add 2 zeros.

	return answArr.join("");
}
