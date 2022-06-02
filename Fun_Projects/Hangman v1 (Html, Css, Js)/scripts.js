// Variables for the Interaction

const deneme_1 = document.querySelector("#deneme");
const deneme_2 = document.querySelector("#deneme-2");
const tries = document.querySelector(".hangman");
const letters = document.querySelector(".keyboard");
let the_word_screen = document.querySelector("#what-is-the-word");
let guessed_letters_screen = document.querySelector("#guessed-letters");
const word_guess = document.querySelector("#guess-the-word");
const word_guess_button = document.querySelector("#guess-button");

// Variables for the game

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let try_count = 0;
// const the_answer = "Baris Celebi";
// const the_answer_lowercase = the_answer.toLowerCase();
let guessed_letters = "";

// Choosing an Answer

// You can add as much as you want, or get them from somewhere else.
let answers = ["Baris Celebi", "Software Developer", "Javascript", "Html Css", "ReactJs"];

const the_answer = answers[Math.floor(Math.random() * answers.length)];
const the_answer_lowercase = the_answer.toLowerCase();

// Event Listeners sorted

allEventListeners();

function allEventListeners() {
	deneme_1.addEventListener("click", deneme_11);
	deneme_2.addEventListener("click", deneme_22);
	letters.addEventListener("click", letterGuess);
	window.addEventListener("DOMContentLoaded", changeTheWord);
	word_guess_button.addEventListener("click", guessTheWord);
	// word_guess.onchange = updateGuessWord();
}

// Game Mechanics

function letterGuess(e) {
	if (e.target.className == "button") {
		const guessed_letter = e.target.id.toLowerCase();
		guessed_letters += guessed_letter + " ";
		updateGuessedLetters();
		if (the_answer_lowercase.indexOf(guessed_letter) < 0) {
			(tries.children[try_count].className += " wrong-try"), (try_count += 1);
			if (try_count == 6) {
				window.alert("You failed! The Answer was : " + the_answer);
				location.reload();
			}
		}
	}
	changeTheWord();
}

function changeTheWord() {
	let the_word = "";
	for (let i = 0; i < the_answer.length; i++) {
		if (the_answer_lowercase[i] == " ") {
			the_word += " ";
		} else if (guessed_letters.indexOf(the_answer_lowercase[i]) >= 0) {
			the_word += the_answer[i];
		} else {
			the_word += "_";
		}
	}
	if (the_word.toLowerCase() == the_answer_lowercase) {
		window.alert("Congratulations! You won! The word was : " + the_answer);
		location.reload();
	}
	the_word_screen.textContent = the_word;
}

function guessTheWord() {
	const guessed_word = word_guess.value.trim();

	if (guessed_word == the_answer_lowercase) {
		window.alert("Congratulations! You won! The word was : " + the_answer);
		location.reload();
	} else {
		console.log(guessed_word);
		window.alert("You failed! The Answer was : " + the_answer);
		location.reload();
	}
}

// UI Changes

function updateGuessedLetters() {
	guessed_letters_screen.textContent = guessed_letters;
}

function updateGuessWord(word) {
	word_guess.value = word;
}

function deneme_11(e) {
	(tries.children[try_count].className += " wrong-try"), (try_count += 1);
	if (try_count == 6) {
		window.alert("You failed! The Answer was : " + the_answer);
		location.reload();
	}
}

function deneme_22(e) {
	try_count = 0;
}
