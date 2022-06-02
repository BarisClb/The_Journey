// You will be given an array of numbers. You have to sort the odd numbers in ascending 
// order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


// My Answer


function sortArray(array) {
    let answArr = [];
    let oddNums = array.filter( function(num) {
        if (num % 2 != 0) {
            return num;
        }
    })
    let sortedArray = oddNums.sort( function(a,b) {
        return a - b;
    });
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            answArr.push(sortedArray[x]);
            x++;
        } else {
            answArr.push(array[i]);
        }
    }
    return answArr; 
}


// Best Answers


function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}


function sortArray(array) {
    var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
    return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
}

