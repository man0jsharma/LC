/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */

const translate = (str) => {
    let p = 1;
    let res = ""
    let ct = 1;
    let prev = str[0]
    while (p < str.length) { //1 < 2
        if (prev === str[p]) { // 1 === 1
            ct++;   // 2
        } else {
            res += `${ct}${prev}`
            ct = 1;
        }
        prev = str[p]; // prev = 1
        p++; // 2
    }
    res += `${ct}${prev}`;
    return res;
}

var countAndSay = function (n) {
    let res = ""
    res = check(n, res)
    return res;
};

const check = (n, res) => {
    if (n <= 0) {
        return ""
    }
    if (n === 1) {
        return "1"
    }
    return translate(check(n - 1));
}
// @lc code=end

// console.log(countAndSay(5))
// console.log(translate("3322251"))
// console.log(translate("21"))