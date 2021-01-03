/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */

const evalute = (symbol, l, r) => {
    switch (symbol) {
        case '+':
            return (l - '0') + (r - '0')
        case '-':
            return (l - '0') - (r - '0')
        case '*':
            return (l - '0') * (r - '0')
    }
}

var diffWaysToCompute = function (input) {
    let i = 0;
    let n = input.length;
    let symbols = ["+", "-", "*"]
    let ans = [];

    for (let i = 0; i < n; i++) {
        if (symbols.includes(input[i])) {
            let l = input.substring(0, i)
            let r = input.substring(i + 1)
            let leftPart = diffWaysToCompute(l)
            let rightPart = diffWaysToCompute(r)

            for (let p1 of leftPart) {
                for (let p2 of rightPart) {
                    ans.push(evalute(input[i], p1, p2))
                }
            }
        }
    }

    if (ans.length == 0) {
        ans.push(Number.parseInt(input));
    }
    return ans;
};
// @lc code=end

