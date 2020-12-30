/*
 * @lc app=leetcode id=963 lang=javascript
 *
 * [963] Minimum Area Rectangle II
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */

const distanceBetweenTwoPoints = ([x1, y1], [x2, y2]) => {
    if (x1 === x2) {
        return Math.abs(y2 - y1)
    }
    if (y1 === y2) {
        return Math.abs(x1 - x2)
    }
    const a = Math.abs(x1 - x2)
    const b = Math.abs(y1 - y2)
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}


const sizeOfRectangle = ([[x1, y1], [x2, y2], [x3, y3], [x4, y4]]) => {
    // let sizes = [];
    // for (let i = 0; i < points.length; i++) {
    //     for (let j = 0; j < points.length && j !== i; j++) {
    //         sizes.push(distanceBetweenTwoPoints(points[i], points[j]))
    //     }
    // }

    // const arr = Array.from(sizes).sort();

    // console.log(arr)

    console.log([[x1, y1], [x2, y2], [x3, y3], [x4, y4]])
    let sum = (((x1 * y2) - (x2 * y1)) + ((x2 * y3) - (x3 * y2)) + ((x3 * y4) - (x4 * y3)) + ((x4 * y1) - (x1 * y4)))
    console.log({ area: Math.abs(sum / 2) })
    console.log({ x: ((x1 * y2) - (x2 * y1)), y: ((x2 * y3) - (x3 * y2)), l: ((x3 * y4) - (x4 * y3)), m: ((x4 * y1) - (x1 * y4)) })
    return Math.abs(sum / 2)
}

var isRectangle = function ([[x1, y1], [x2, y2], [x3, y3], [x4, y4]]) {
    let cx = (x1 + x2 + x3 + x4) / 4;
    let cy = (y1 + y2 + y3 + y4) / 4;

    let dd1 = Math.pow((cx - x1), 2) + Math.pow((cy - y1), 2);
    let dd2 = Math.pow((cx - x2), 2) + Math.pow((cy - y2), 2);
    let dd3 = Math.pow((cx - x3), 2) + Math.pow((cy - y3), 2);
    let dd4 = Math.pow((cx - x4), 2) + Math.pow((cy - y4), 2);

    return dd1 == dd2 && dd1 == dd3 && dd1 == dd4;
};


const minAreaFreeRect = (points) => {
    let master = [];
    let temp = [];

    if (points.length < 4) {
        return 0;
    }
    let min = { value: Number.MAX_VALUE }
    bt(points, master, temp, 0, min);
    return min.value === Number.MAX_VALUE ? 0 : min.value;
}

const bt = (points, master, temp, start, min) => {
    if (temp.length === 4 && isRectangle(temp)) {
        min.value = Math.min(min.value, sizeOfRectangle(temp));
    }
    for (let i = start; i < points.length; i++) {
        temp.push(points[i]);
        bt(points, master, temp, i + 1, min);
        temp.pop()
    }
}

// console.log(minAreaFreeRect([[0, 3], [1, 2], [3, 1], [1, 3], [2, 1]]))
console.log(minAreaFreeRect([[3, 1], [1, 1], [0, 1], [2, 1], [3, 3], [3, 2], [0, 2], [2, 3]]))

// console.log(isSquare([[2, 1], [1, 1], [1, 0], [2, 0]]))
// console.log(minAreaFreeRect([[1, 2], [2, 1], [1, 0], [0, 1]]))

// console.log(sizeOfRectangle([[2, 1], [1, 1], [1, 0], [2, 0]]))
// @lc code=end

