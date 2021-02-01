/*
 * @lc app=leetcode id=992 lang=javascript
 *
 * [992] Subarrays with K Different Integers
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
    /*
        const helper_2n = (k) => {
            let left = 0;
            let hash = {};
            let ans = 0
            for (let right = 0; right < A.length; right++) {
                hash[A[right]] = -~hash[A[right]];
                while (Object.keys(hash).length > k) {
                    hash[A[left]] -= 1;
                    if (hash[A[left]] === 0) {
                        delete hash[A[left]];
                    }
                    left++;
                }
                // if (Object.keys(hash).length === K)
                ans += right - left + 1;
                console.log({ left, right, ans })
            }
            return ans;
        }
        */

    // return helper_2n(K) - helper_2n(K - 1)

    // So it is easy to find the all subarray with distinct almost K(<=K) values 
    // than finding exactly K values(coz we may have to loop thru the array N2 times)

    // So it is easy to find all the subarray at most K
    // and subtract them by all the subarray at most K-1

    // Above solution is doing seperately K and K-1
    // But we can do it better by putting it in the same loop


    const helper = (k) => {
        let hashK = {}
        let hashKminus1 = {}
        let leftK = 0
        let leftKminus1 = 0;
        let ans = 0;

        for (let right = 0; right < A.length; right++) {
            hashK[A[right]] = -~hashK[A[right]];
            hashKminus1[A[right]] = -~hashKminus1[A[right]];

            while (Object.keys(hashK).length > k) {
                hashK[A[leftK]] -= 1;
                if (hashK[A[leftK]] === 0) {
                    delete hashK[A[leftK]];
                }
                leftK++;
            }

            while (Object.keys(hashKminus1).length > k - 1) {
                hashKminus1[A[leftKminus1]] -= 1;
                if (hashKminus1[A[leftKminus1]] === 0) {
                    delete hashKminus1[A[leftKminus1]];
                }
                leftKminus1++;
            }

            ans += leftKminus1 - leftK
        }
        return ans;
    }
    return helper(K)
};


// console.log(subarraysWithKDistinct([1, 2, 1, 1, 3], 2))
// @lc code=end

