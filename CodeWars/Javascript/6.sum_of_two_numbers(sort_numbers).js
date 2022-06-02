// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.



// Failed Answers

// works if the second highest comes first, not other way around


function sumTwoSmallestNumbers(numbers) {  
    var lowest_number = 0
    var second_lowest_number = 0
    for (i = 0; i < numbers.length; i++) {
      if (numbers[i] < lowest_number || lowest_number == 0) {
        second_lowest_number = lowest_number;
        lowest_number = numbers[i];
      }      
    }
    return lowest_number + second_lowest_number
}


// problem happens if the second number IS the lowest and we start checking from third


function sumTwoSmallestNumbers(numbers) {  
  var lowest_number = numbers[0]
  var lowest_number_two = numbers[1]
  for (i = 2; i < numbers.length; i++) {
    if (numbers[i] < lowest_number) {
      lowest_number_two = lowest_number;
      lowest_number = numbers[i];
      continue;
    } 
    else if (numbers[i] < lowest_number_two) {
      lowest_number_two = numbers[i]
    } 
  }
  return lowest_number + lowest_number_two
}


// My Answer

// just lower the iteration start

function sumTwoSmallestNumbers(numbers) {  
  var lowest_number = numbers[0]
  var lowest_number_two = numbers[1]
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest_number) {
      lowest_number_two = lowest_number;
      lowest_number = numbers[i];
      continue;
    } 
    else if (numbers[i] < lowest_number_two) {
      lowest_number_two = numbers[i]
    } 
  }
  return lowest_number + lowest_number_two
}


// Best Answers


function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};


function sumTwoSmallestNumbers(numbers) {  
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}


function sumTwoSmallestNumbers(numbers) {  
  var min = Number.MAX_SAFE_INTEGER;
  var secondMin = Number.MAX_SAFE_INTEGER;
  
  var n;
  for (i = 0; i < numbers.length; i++) {
    n = numbers[i];
    if(n < min) {
      secondMin = min;
      min = n;
    } else if( n < secondMin ) {
      secondMin = n;
    }
  }
  
  return min + secondMin;
}


