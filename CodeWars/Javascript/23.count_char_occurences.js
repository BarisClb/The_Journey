// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// My Answer


function count (string) {  
    let ansObj = {};
    
    for (let i = 0; i < string.length; i++) {
        if (ansObj[string[i]] == undefined) {
            ansObj[string[i]] = 1;
        } 
        else {
            ansObj[string[i]] += 1;
        }
    }
    return ansObj;
}


// Best Answers


function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}


function count (string) {
    return string.split('').reduce(function(counts,char){
        counts[char] = (counts[char]||0) + 1;
        return counts;
    },{});
}


function count (string) {  
    return string.split("").reduce(function(obj, elem) {
        if (elem in obj)
            obj[elem]++;
        else
            obj[elem] = 1;
        return obj;
    }, {});
}


const count = string =>
    [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});

