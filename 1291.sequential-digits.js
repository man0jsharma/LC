/*
 * @lc app=leetcode id=1291 lang=javascript
 *
 * [1291] Sequential Digits
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {

    let { l, h } = limits(low, high)
    let ans = [];
    let digits = countDigits(low);
    for (let i = l; i <= h; i++) {
        let v = firstDigit(i * Math.pow(10, digits - 1));
        if (low <= v && high >= v && v !== null) {
            !ans.includes(v) && ans.push(v)
        }
    }
    return ans;
};

const countDigits = (num) => {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

const firstDigit = (num) => {
    let i = 0;
    let last = 0;
    while (num > 0) {
        last = num;
        num = Math.floor(num / 10);
        i++;
    }

    let v = last;
    i--;

    if (last > 9 - i) {
        return null
    }

    while (i > 0) {
        let next = last + 1;
        v = (v * Math.pow(10, 1)) + next;
        last = next;
        i--;
    }
    return v;
}

const limits = (low, high) => {

    let prevLow = -1;
    let prevHigh = -1;

    while (low > 0 && high > 0) {
        prevLow = low
        prevHigh = high
        low = Math.floor(low / 10);
        high = Math.floor(high / 10);
    }
    return {
        l: prevLow,
        h: prevHigh
    }
}



// console.log(firstDigit(895))
// console.log(sequentialDigits(1000, 13000))
// console.log(limits(100, 1500))
// @lc code=end

