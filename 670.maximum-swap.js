/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {

    let inputStr = Array.from(num.toString())

    let lastArr = []
    for (let i = 0; i < inputStr.length; i++) {
        lastArr[inputStr[i] - '0'] = i;
    }

    for (let i = 0; i < inputStr.length; i++) {
        for (let j = 9; j > inputStr[i] - '0'; j--) {
            if (lastArr[j] > i) {
                let tmp = inputStr[i];
                inputStr[i] = inputStr[lastArr[j]];
                inputStr[lastArr[j]] = tmp;
                return Number.parseInt(inputStr.join(""))
            }
        }
    }
    return num;
};

// @lc code=end

