/*
 * @lc app=leetcode id=923 lang=javascript
 *
 * [923] 3Sum With Multiplicity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */

function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

var threeSumMulti = function (A, target) {
    let master = [];
    let temp = []
    let uniqueA = [];
    let freq = {}
    for (let i = 0; i < A.length; i++) {
        if (!uniqueA.includes(A[i])) {
            uniqueA.push(A[i])
        }
        if (freq[A[i]]) {
            freq[A[i]] = freq[A[i]] + 1;
        } else
            freq[A[i]] = 1;
    }

    bt(uniqueA, target, master, temp, 0, [])

    console.log(master)
    return (master.reduce((acc, each) => {
        let uniqEach = new Set(each);
        let localSum = 1
        for (let elem of uniqEach) {
            let freqOfElemInEach = each.filter(e => e === elem).length;

            localSum *= Math.floor(factorialize(freq[elem]) /
                (factorialize(freqOfElemInEach) * factorialize(Math.abs(freq[elem] - freqOfElemInEach))))

            console.log({ localSum, e: freq[elem], freqOfElemInEach })
        }
        // console.log({ localSum })
        return acc + localSum
    }, 0)) % (1e9 + 7)
};

const bt = (arr, target, master, temp, start, used) => {
    if (temp.length > 3) {
        return;
    }
    if (temp.length === 3 && (temp[0] + temp[1] + temp[2] === target)) {
        master.push(temp.concat())
    }
    for (let i = start; i < arr.length; i++) {
        temp.push(arr[i]);
        bt(arr, target, master, temp, i, used)
        temp.pop();
    }
}

// console.log(threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8))
// console.log(threeSumMulti([1, 1, 2, 2, 2, 2], 5))
// console.log(threeSumMulti([1, 2, 3, 3, 1], 5))

// console.log(threeSumMulti([0, 0, 0, 0], 0))
// console.log(factorialize(0))
// @lc code=end

