/*
 * @lc app=leetcode id=1622 lang=javascript
 *
 * [1622] Fancy Sequence
 */

// @lc code=start
const MOD = 1e9 + 7;
class Fancy {
    constructor() {
        this.set = []
        this.operation = []
        this.inc = 0
        this.mul = 1
    }

    append(value) {
        this.set.push((value - this.inc) / this.mul);
    }

    addAll(inc) {
        this.inc += inc
    }

    multAll(m) {
        this.inc *= m;
        this.mul *= m;
    }

    getIndex(idx) {
        if (idx >= this.set.length) {
            return -1;
        } else {
            return (this.set[idx] * this.mul) + this.inc;
        }
    }

    /* Here is the idea - 
    When we multiply - we multy both add and mult
    When we add - we add only the add 
    That's math - 
    ex (2x + 3) * 2 => 4x + 6
    whereas (3x + 3)+3 => 3x + 9

    We also need to mindful of when we append the new number

    So we (X - inc)/mul and store them in the array instead of the actual number
    where inc, mul are value at that time of append
    hence we can do S(1) and T(1)

    */
}
// @lc code=end

