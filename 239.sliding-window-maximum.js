/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const dynamicProg = () => {
        let n = nums.length;
        let dp = Array.from({ length: k }, () => Array.from({ length: n }, () => null))
        // console.log({dp})

        for (let i = 0; i < n; ++i) {
            dp[0][i] = nums[i]
        }

        let ans = []

        for (let r = 1; r < k; ++r) {
            for (let c = r; c < n; ++c) {
                dp[r][c] = Math.max(dp[r - 1][c], dp[r - 1][c - 1])
                if (r === k - 1 && dp[r][c] !== null) {
                    ans.push(dp[r][c])
                }
            }
        }
        // console.log({dp})
        return ans.length === 0 ? nums : ans;
    }

    // Above is a working solution where 
    // sliding window max width k
    // = sliding window max of(0 , k - 1) && sliding window max of (1, k)
    // But too slow N*K time and complexity


    const splitWindowMax = () => {
        let left = [], right = [];

        let n = nums.length;
        left[0] = nums[0];
        right[n - 1] = nums[n - 1]
        for (let i = 1; i < n; i++) {
            if (i % k === 0) {
                left[i] = nums[i]
            } else
                left[i] = Math.max(left[i - 1], nums[i])

            let j = n - i - 1
            if (((j + 1) % k) === 0) {
                right[j] = nums[j]
            } else {
                right[j] = Math.max(right[j + 1], nums[j])
            }
        }

        let ans = [];
        for (let i = 0; i <= n - k; ++i) {
            ans[i] = Math.max(right[i], left[i + k - 1])
        }
        return ans;
    }

    // Here just split the array in two multiple windows of max length K
    // then find the local maxima for each small windows from left to right and right to left
    // then you just need to apply the Math.max(right[i], left[i + k - 1])

    return splitWindowMax();
};
// @lc code=end

