/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let visited = [true]
    let list = [prerequisites[0][0]]
    let res = dp(numCourses, prerequisites, prerequisites[0], visited, list)
    console.log({ list, res })
};

const dp = (numCourses, prerequisites, start, visited, list) => {
    if (numCourses === list.length) {
        return true;
    }
    for (let i = 1; i < prerequisites.length; i++) {
        if (prerequisites[i][0] === start[1]) {
            visited[i] = true;
            if (!list.includes(start[1])) {
                list.push(start[1])
            } else {
                return false;
            }
            return dp(numCourses, prerequisites, prerequisites[i], visited, list)
        }
    }
}


console.log(canFinish(6, [[0, 5], [0, 4], [0, 3], [0, 2], [0, 1], [3, 1]]))
// @lc code=end

