/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    let i = A.length;
    let ans = [];
    let carry = 0;
    while (--i >= 0 || K) {
        let kValue = K % 10;
        K = Math.floor(K / 10);
        let sum = (A[i] || 0) + kValue + carry;
        carry = Math.floor(sum / 10);
        let sumValue = sum % 10;
        ans = [sumValue, ...ans]
    }
    if (carry)
        ans = [carry, ...ans]

    return ans;
};



// @lc code=end

