/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let lookUp = {
        '1': [],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }

    if (digits === "") {
        return []
    }
    let mstr = [];
    const bt = (tmp = "", start = 0) => {
        if (tmp.length === digits.length) {
            mstr.push(tmp.concat())
        }
        for (let i = start; i < digits.length; i++) {
            let chars = lookUp[digits[i]];
            for (let j = 0; j < chars.length; j++)
                bt(tmp + chars[j], i + 1)
        }
    }

    bt();
    return mstr
};

// @lc code=end

