/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

var getHint = function (secret, guess) {
    let bullCount = 0
    let cowCount = 0
    let i = 0;
    let originalSecret = secret;
    while (i < guess.length) {
        if (secret.includes(guess[i])) {
            cowCount++;
            secret = secret.replaceAt(secret.indexOf(guess[i]), "#");
        }

        if (guess[i] === originalSecret[i]) {
            bullCount++;
        }
        i++;
    }
    return `${bullCount}A${cowCount - bullCount}B`
};


// console.log(getHint("1807", "7810"))
// console.log(getHint("1123", "0111"))
// console.log(getHint("011", "110"))
// @lc code=end

