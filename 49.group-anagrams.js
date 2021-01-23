/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */


const buildHash = (str) => {
    let arr = Array.from({ length: 26 }, () => 0);
    for (let each of str) {
        arr[each.charCodeAt(0) - 'a'.charCodeAt(0)] = -~arr[each.charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    return arr.join('~')
}
var groupAnagrams = function (strs) {
    let hash = {}
    for (let str of strs) {
        let key = buildHash(str)
        if (hash[key]) {
            hash[key] = [...hash[key], str];
        } else {
            hash[key] = [str];
        }
    }
    return Object.values(hash)
};

// @lc code=end

