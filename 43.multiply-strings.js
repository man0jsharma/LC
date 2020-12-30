/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let sumTenth = 0;
    let totalSum = 0
    for (let i = num1.length - 1; i >= 0; i--) {
        let value = 0
        let carry = 0;
        let tenth = 0
        for (let j = num2.length - 1; j >= 0; j--) {
            let a = num1.charCodeAt(i) - '0'.charCodeAt(0);
            let b = num2.charCodeAt(j) - '0'.charCodeAt(0)

            let product = (a * b) + carry;
            // console.log({ a, b, product })
            value += ((product % 10) * (Math.pow(10, tenth)))
            carry = Math.floor(product / 10)
            tenth++;
        }
        value += (carry * (Math.pow(10, tenth)))

        totalSum += (value * Math.pow(10, sumTenth));
        console.log({ totalSum, sumTenth, tenths: value * Math.pow(10, sumTenth) })
        sumTenth++;
    }

    console.log({ totalSum })
    return totalSum.toString();
};


console.log(multiply("123456789", "987654321"))
// @lc code=end

