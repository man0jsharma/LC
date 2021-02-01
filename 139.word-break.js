/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let memo = []
    const dp = (start = 0) => {
        if (start === s.length) {
            return true;
        }
        if (memo[start] !== undefined) {
            return memo[start];
        }
        for (let end = start + 1; end <= s.length; end++) {
            let subStr = s.substring(start, end);
            if (wordDict.includes(subStr) && dp(end)) {
                return memo[start] = true;
            }
        }
        return memo[start] = false;
    }
    let res = dp()
    // console.log({ memo })

    /*
    { subStr: \'l\' }
    { subStr: \'le\' }
    { subStr: \'lee\' }
    { subStr: \'leet\' }
    { subStr: \'c\' }
    { subStr: \'co\' }
    { subStr: \'cod\' }
    { subStr: \'code\' }
    { memo: [ true, <3 empty items>, true ] }


    { subStr: \'a\' }
    { subStr: \'ap\' }
    { subStr: \'app\' }
    { subStr: \'appl\' }
    { subStr: \'apple\' }
    { subStr: \'p\' }
    { subStr: \'pe\' }
    { subStr: \'pen\' }
    { subStr: \'a\' }
    { subStr: \'ap\' }
    { subStr: \'app\' }
    { subStr: \'appl\' }
    { subStr: \'apple\' }
    { memo: [ true, <4 empty items>, true, <2 empty items>, true ] }

    catch is '' return true;
            leet 
            /   \
           /     \
l && wb(eet)    le && wb(et) ...
    */


    return res;
};
// @lc code=end

