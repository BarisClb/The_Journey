// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.


// My Answers


function validate(password) {
    return password.length >= 6 && password.match(/[^A-Z^0-9]/gi) == null && password.match(/[A-Z]/g) != null && password.match(/[a-z]/g) != null && password.match(/[0-9]/g) != null
}


// Best Answers


function validate(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}


// function validate(password) {
//     /**
//     * positive lookahead is used here to ensure that at least one of each character set is available
//     * you need to allow every character (.*) before your lookahead character set, 
//     * except you want to ensure the expression starts with i.e. a lowercase character.
//     * Each lookahead basically says "Is there <anything> and 1 or more of <character set> in the following expression?"
//     * The speciality here is that lookaheads wont touch the matching group so that you can check for 6 or more
//     * characters afterwards. The 6 or more characters will simply not match if they don't fulfill every lookahead.
//     **/
//     return /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$/.test(password);
// }


// Rest

// https://www.codewars.com/kata/52e1476c8147a7547a000811/solutions/javascript

