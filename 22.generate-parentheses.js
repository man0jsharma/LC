/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let master = [];
    let temp = "";

    bt(n, master, temp, "(");
    return master;
};

const isValid = (str, n) => {
    let i = 0;
    let open = 0;
    if (str.length !== n * 2) {
        return false;
    }
    while (i < str.length) { //0 -> 1
        if (str[i] === "(") // ( -> )
            open++; // +1
        else
            open--;// +1
        if (open < 0) {
            return false;
        }
        i++
    }
    return open === 0;
}


const bt = (n, master, temp, parenthesis) => {
    if (temp.length > n * 2) {
        return;
    }
    if (isValid(temp, n) && !master.includes(temp)) {
        master.push(temp);
    } else {
        temp += parenthesis;
        bt(n, master, temp, "(");
        bt(n, master, temp, ")");
        temp = temp.slice(0, -1);
    }
}

// @lc code=end

