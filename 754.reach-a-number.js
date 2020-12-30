/*
 * @lc app=leetcode id=754 lang=javascript
 *
 * [754] Reach a Number
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
    let ans = { value: Number.POSITIVE_INFINITY }
    jump(target, 0, 1, ans, new Set())
    return ans.value;
};

/*
0 => 1 => 3



*/

// const jump = (target, current, step) => {

//     let l = current + step;
//     let r = current - step;
//     let absTarget = Math.abs(target)
//     console.log({ current, step, l, r })
//     if (l > Math.floor((step * (step + 1)) / 2) ||
//         r < (0 - Math.floor((step * (step + 1)) / 2))) {
//         return step;
//     }
//     if (l === target || r === target) {
//         return step;
//     } else {
//         return Math.min(jump(target, l, step + 1), jump(target, r, step + 1))
//     }
// }


const jump = (target, start, step, ans, set) => {
    console.log({ start, step: step - 1 })

    if (set.has(start)) {
        return;
    } else {
        set.add(start)
    }

    if (Math.abs(target) === Math.abs(start)) {
        ans.value = Math.min(ans.value, step - 1);
        return;
    }

    if (step > Math.abs(target) + 1) {
        return;
    }

    jump(target, start + step, step + 1, ans, set)
    jump(target, start - step, step + 1, ans, set)
}

console.log(reachNumber(9))
// // console.log(reachNumber(-2))
// // console.log(reachNumber(2))
// console.log(reachNumber(-9))
// @lc code=end

