// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]





// Failed Answer


// function towerBuilder(nFloors) {
//     var tower = []
//     var floor = ""
//     for (var i = 1; i < nFloors + 1; i++) {
//       floor = ""
//       for (let x = 0; x < ((2 * nFloors - 1) - (2 * i - 1)) / 2; x++) {
//         floor += " "
//       }
//       for (let y = 0; i < 2 * i - 1; y++) {
//         floor += "*"
//       }
//       for (let z = 0; ((2 * nFloors - 1) - (2 * i - 1)) / 2; z++) {
//         floor += " "
//       tower.push(floor)
//       }
//     }
//     return tower
//   }


// My Answer


function towerBuilder(nFloors) {
  var tower = []
  var floor = ""
  for (let i = 0; i < nFloors; i++) {
    floor = ""
    for (let x = 0; x < nFloors * 2 - 1; x++) {
      if (x < (nFloors * 2 - 1) / 2 + i && x > (nFloors * 2 - 3) / 2 - i) {
        floor += "*"
      } else {
        floor += " "
      }
    } 
    tower.push(floor)
  }
  return tower
}


// Best Answers


function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}


function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
              + "*".repeat((i * 2)+ 1)
              + " ".repeat(nFloors - i - 1));
  }
  return tower;
}


function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}


function towerBuilder(nFloors) {
  var result = [];
  var starNumber = 1;
  for (i=1; i<=nFloors; i++) {
    result[i-1] = " ".repeat(nFloors-i) + "*".repeat(starNumber) + " ".repeat(nFloors-i);
    starNumber += 2;
  }
  return result;
}

