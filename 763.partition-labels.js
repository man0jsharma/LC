/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const mySolution = () => {
        let freq = {}
        let intervals = {}
        for (let i = 0; i < s.length; ++i) {
            intervals[s[i]] = [s.indexOf(s[i]), s.lastIndexOf(s[i])]
        }

        let sorted = Object.values(intervals).sort((a, b) => a - b)

        let merged = [sorted[0]]

        const isOverlapping = (a, b) => Math.max(a[0], b[0]) <= Math.min(a[1], b[1])
        const merge = (a, b) => [Math.min(a[0], b[0]), Math.max(a[1], b[1])]

        for (let i = 1; i < sorted.length; i++) {
            let last = merged[merged.length - 1];
            // console.log(last)
            if (isOverlapping(last, sorted[i])) {
                merged.pop();
                merged.push(merge(last, sorted[i]))
            } else {
                merged.push(sorted[i])
            }
        }

        let ans = []
        for (let each of merged) {
            ans.push(each[1] - each[0] + 1)
        }
        return ans;
    }

    //Above is my solution where we make intervals
    //merge the intervals
    //then take the width of the intervals
    // T(N) S(N)

    const lcSolution = () => {
        //Build the last index of each char in a object

        let lastIndex = {}
        for ([index, each] of s.split('').entries()) {
            lastIndex[each] = index;
        }
        let start = 0;
        let ans = []
        let max = -1
        for ([index, each] of s.split('').entries()) {
            max = Math.max(max, lastIndex[each]);
            if (max === index) {
                ans.push(max - start + 1);
                start = max + 1;
            }
        }
        return ans;
    }
    return lcSolution();
    // return mySolution
};


// console.log(partitionLabels("ababcbacadefegdehijhklij"))
// @lc code=end

