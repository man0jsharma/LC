/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

Array.prototype.peek = function () {
    return this[this.length - 1]
}

var asteroidCollision = function (asteroids) {
    let stack = [];
    let n = asteroids.length;
    stack.push(asteroids[0])
    for (let i = 1; i < n; i++) {
        let value = asteroids[i]
        while (stack.peek() > 0 && value < 0) {
            let last = stack.pop();
            let a = Math.abs(last)
            let b = Math.abs(value)
            if (a > b) {
                value = last;
            } else if (a === b) {
                value = 0
            }
        }
        value && stack.push(value)
    }
    return stack;
}
// Any time we have to reduce an array or list
// based on the previous and (may be previous of prev)
// pop some stack is ideal.

// @lc code=end

