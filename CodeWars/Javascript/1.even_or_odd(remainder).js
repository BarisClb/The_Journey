// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// My Answer 

function even_or_odd(number) {
    if (number%2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}



// Best Answers


function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}


function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}


const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';


