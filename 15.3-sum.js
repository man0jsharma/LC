/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//     let master = new Set()
//     let temp = [];

//     nums = nums.sort((a, b) => a - b)
//     backTracking(nums, master, temp, 0, -1)
//     return Array.from(master, JSON.parse);;
// };

// const isSumOf3Zero = (arr) => {
//     return (arr[0] + arr[1] + arr[2]) === 0;
// }

// const backTracking = (nums, master, temp, start, sum) => {
//     if (temp.length > 3) return;
//     else if (temp.length === 3 && isSumOf3Zero(temp)) {
//         master.add(JSON.stringify(temp.concat()));
//     } else {
//         for (let i = start; i < nums.length && temp.length <= 3; i++) {
//             temp.push(nums[i]);
//             backTracking(nums, master, temp, i + 1, sum);
//             temp.pop();
//         }
//     }
// }


var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let ans = []

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let sum = 0 - nums[i];
            let low = i + 1;
            let high = nums.length - 1;
            while (low < high) {
                if ((nums[low] + nums[high]) === sum) {
                    ans.push([nums[i], nums[low], nums[high]])
                    while (low < high && nums[low] === nums[low + 1]) low++;
                    while (low < high && nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if ((nums[low] + nums[high]) > sum) {
                    high--
                } else
                    low++;
            }
        }
    }

    return ans;
}
// @lc code=end

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// console.log(threeSum([-7, -10, -1, 3, 0, -7, -9, -1, 10, 8, -6, 4, 14, -8, 9, -15, 0, -4, -5, 9, 11, 3, -5, -8, 2, -6, -14, 7, -14, 10, 5, -6, 7, 11, 4, -7, 11, 11, 7, 7, -4, -14, -12, -13, -14, 4, -13, 1, -15, -2, -12, 11, -14, -2, 10, 3, -1, 11, -5, 1, -2, 7, 2, -10, -5, -8, -10, 14, 10, 13, -2, -9, 6, -7, -7, 7, 12, -5, -14, 4, 0, -11, -8, 2, -6, -13, 12, 0, 5, -15, 8, -12, -1, -4, -15, 2, -5, -9, -7, 12, 11, 6, 10, -6, 14, -12, 9, 3, -10, 10, -8, -2, 6, -9, 7, 7, -7, 4, -8, 5, -4, 8, 0, 3, 11, 0, -10, -9]))