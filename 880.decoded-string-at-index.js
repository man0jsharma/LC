/*
 * @lc app=leetcode id=880 lang=javascript
 *
 * [880] Decoded String at Index
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */


const isNumber = (c) => !isNaN(c - '0')


var decodeAtIndex = function (S, K) {

    let size = 0
    let N = S.length
    for (let i = 0; i < N; ++i) {
        if (!isNumber(S[i])) {
            size++;
        } else {
            size *= (S[i] - '0')
        }
    }

    console.log(size)
    for (let i = N - 1; i >= 0; --i) {
        K = K % size;
        if (K === 0 && !isNumber(S[i])) {
            return S[i];
        }
        if (isNumber(S[i])) {
            size = Math.floor(size / (S[i] - '0'))
        } else {
            size--;
        }
    }

};

// @lc code=end

