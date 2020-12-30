/*
 * @lc app=leetcode id=384 lang=javascript
 *
 * [384] Shuffle an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.originalArray = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.originalArray;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let copy = this.originalArray.concat();
    let i = copy.length - 1;

    while (i >= 0) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = copy[randomIndex];
        copy[randomIndex] = copy[i];
        copy[i] = temp;
        i--;
    }
    return copy
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

