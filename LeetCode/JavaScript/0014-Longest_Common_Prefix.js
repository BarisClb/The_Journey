// Question

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// My Answer

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let answer = "";
	for (let i = 0; i < strs[0].length + 1; i++) {
		for (let y = 1; y < strs.length; y++) {
			if (strs[y].slice(0, i) != strs[0].slice(0, i)) {
				return answer;
			}
		}
		answer = strs[0].slice(0, i);
	}
	return answer;
};
