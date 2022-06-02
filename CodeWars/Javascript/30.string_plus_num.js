// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// My Answer

function incrementString(strng) {
	let index = -1;
	for (let i = 0; i < strng.length; i++) {
		if (!isNaN(parseInt(strng[i]))) {
			index = i;
			break;
		}
	}
	if (index == -1) {
		return strng + 1;
	}
	let fh = strng.substring(0, index);
	let sh = parseInt(strng.substring(index)) + 1;
	let z = `${sh}`;
	console.log(z.length);
	console.log(strng.substring(index).length);
	for (let x = 0; x < strng.substring(index).length - z.length; x++) {
		fh += 0;
	}
	return fh + sh;
}

// Best Answers

function incrementString(input) {
	if (isNaN(parseInt(input[input.length - 1]))) return input + "1";
	return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
		var up = parseInt(p2) + 1;
		return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
	});
}

let incrementString = (str) =>
	str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));

function incrementString(str) {
	var c = str[str.length - 1];
	switch (c) {
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
			return str.substring(0, str.length - 1) + (parseInt(c) + 1);
		case "9":
			return incrementString(str.substring(0, str.length - 1)) + 0;
		default:
			return str + "1";
	}
}
