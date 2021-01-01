/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    if (S.length === 0) {
        return S;
    }
    let master = [S];
    let start = 0;
    permutation(S, master, start);
    return master;
};

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const permutation = (str, master, start) => {
    if (!master.includes(str)) {
        master.push(str);
    }

    console.log({ start, master })
    while (!isNaN(str[start])) {
        start++;
    }
    if (start < str.length) {
        permutation(str.replaceAt(start, str[start].toUpperCase()), master, start + 1)
        permutation(str.replaceAt(start, str[start].toLowerCase()), master, start + 1)
    }
}


console.log(letterCasePermutation("a1b2"))

// console.log(letterCasePermutation("3z4"))
// console.log(letterCasePermutation("12345"))
// console.log(letterCasePermutation("C"))
// @lc code=end

