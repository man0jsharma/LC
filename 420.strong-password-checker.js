/*
 * @lc app=leetcode id=420 lang=javascript
 *
 * [420] Strong Password Checker
 */

// @lc code=start
/**
 * @param {string} password
 * @return {number}
 */
Array.prototype.peak = function (count = 1) {
    return this[this.length - count]
}

var strongPasswordChecker = function (password) {
    let lessThan6 = [6]
    let threeTypeChars = [3]
    let lastThreeChar = [0];

    let isDigit = (c) => c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0)
    let isLower = (c) => c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)
    let isUpper = (c) => c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)
    let chars = [false, false, false]
    for (let i = 0; i < password.length; i++) {
        //6 length
        if (lessThan6.peak() > 0)
            lessThan6.push(lessThan6.peak() - 1)
        else
            lessThan6.push(i >= 20 ? i - 19 : 0);

        // Three types of character
        let c = password[i]
        let count = 0;
        switch (true) {
            case isDigit(c): {
                if (!chars[0]) {
                    count++;
                    chars[0] = true
                }
                break;
            }
            case isLower(c): {
                if (!chars[1]) {
                    count++;
                    chars[1] = true
                }
                break;
            }
            case isUpper(c): {
                if (!chars[2]) {
                    count++;
                    chars[2] = true
                }
                break;
            }
        }

        threeTypeChars.push(threeTypeChars.peak() - count)

        if (password[i] === password[i - 1] && password[i] === password[i - 2]) {
            lastThreeChar.push(lastThreeChar.peak(3) + 1)
        } else {
            lastThreeChar.push(lastThreeChar.peak())
        }
    }

    console.log({ lastThreeChar, threeTypeChars, lessThan6 })
    return Math.max(lastThreeChar.peak(), threeTypeChars.peak(), lessThan6.peak())
};


console.log(strongPasswordChecker("ABABABABABABABABABAB1"));

