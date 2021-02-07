/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let match = (m1, m2) => {
        for (let each in m1) {
            if (m1[each] !== m2[each]) {
                return false;
            }
        }
        return true
    }

    let hash1 = {}

    for (let each of s1) {
        hash1[each] = -~hash1[each]
    }

    for (let i = s1.length - 1; i < s2.length; i++) {
        let hash2 = {}
        for (let j = i - s1.length + 1; j <= i; j++) {
            hash2[s2[j]] = -~hash2[s2[j]]
        }
        if (match(hash1, hash2)) return true
    }
    //Build hash of s1 and build another hash for every window of s1 length in s2
    // Compare everytime
    return false;
};

// @lc code=end

