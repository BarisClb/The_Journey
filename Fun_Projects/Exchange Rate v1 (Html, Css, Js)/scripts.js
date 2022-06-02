const convert_button = document.querySelector("#convert-button");
const convert_amount = document.querySelector("#amount-to-convert");
let convert_money = document.querySelector("#currency-1").value;
let converted_money = document.querySelector("#currency-2").value;
let convert_screen = document.querySelector("#converted-amount");

allEventListeners();

function allEventListeners() {
	convert_button.addEventListener("click", convert);
}

async function convert(e) {
	let convert = Number(convert_amount.value);
	let base_link = "http://api.exchangeratesapi.io/v1/";
	let conversion_type = "latest";
	let account_acces_key = "6d76a0e6192608658ada839d1d62a255";

	// We add "&format=1" at the end because we have a free account. Service is really restricted if you don't pay for it.

	let url = `${base_link}${conversion_type}?access_key=${account_acces_key}&format=1`;

	// We convert to EUR first because we have a free account, which doesn't let us convert between all currencies freely.

	let result = await convertToEur(url, convert).then((result) => result);

	convert_screen.value = result;

	// convert_screen.textContent = convertEur;

	// .then(result => convertEur = (Math.floor(result)))

	// And then, we convert from EUR to get the x to y conversion. "x -> EUR -> y" to simplify it.

	// console.log(convertFromEur(url, convertEur) )

	// convert_screen.value = convertFromEur(url, convertEur)
	// .then(result => result);
}

async function convertToEur(url, amount) {
	const response = await fetch(url);
	const responseJson = await response.json();
	const data = (amount / responseJson.rates[convert_money]) * responseJson.rates[converted_money];
	return data;

	// .then(conversion => console.log(amount / conversion))
	// .catch(console.log("Something went wrong with conversion to EUR."))
}

// function convertFromEur(url, amount) {

//     return new Promise((resolve, reject) => {

//         fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data.rates[converted_money]))
//         .then(conversion => resolve(amount * conversion))
//         // .catch(console.log("Something went wrong with conversion from EUR."))

//     })

// }

function changeOption_1() {
	convert_money = document.querySelector("#currency-1").value;
}

function changeOption_2() {
	converted_money = document.querySelector("#currency-2").value;
}

// console.log("http://api.exchangeratesapi.io/v1/latest?access_key=6d76a0e6192608658ada839d1d62a255&format=1")
