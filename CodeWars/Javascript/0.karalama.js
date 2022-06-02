function addTogether(a, b = "None") {
	function sum(x) {
		let sum = 0;
		if (x < 0) {
			return x;
		}
		while (x > 0) {
			sum += x;
			x--;
		}
		return sum;
	}
	if (b == "None") {
		return sum(a);
	} else if ((Number.isInteger(a) == false) | (Number.isInteger(b) == false)) {
		return undefined;
	} else {
		return a + b;
	}
}
