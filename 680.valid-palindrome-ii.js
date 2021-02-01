/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {

    const isPalindrome = (i, j) => {
        while (i <= j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--
        }
        return true;
    }


    let i = 0;
    let j = s.length - 1;


    while (i <= j) {
        if (s[i] !== s[j]) {
            return isPalindrome(i + 1, j) || isPalindrome(i, j - 1)
        }
        i++;
        j--
    }
    return true;

};
// @lc code=end

