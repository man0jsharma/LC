/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const dict = {
        "{": "}",
        "(": ")",
        "[": "]"
    }

    let stack = [];
    let open = Object.keys(dict);
    // let close = Object.values(dict);

    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        } else {
            const prev = stack.pop();
            if (dict[prev] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length ? false : true;
};
// @lc code=end

