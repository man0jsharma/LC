/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {

    let dist = ([x, y]) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    let swap = (i, j) => [points[j], points[i]] = [points[i], points[j]]

    let shuffle = (lo, hi) => Math.floor(Math.random() * hi) + lo;

    let partition = (lo, hi) => {
        let pivot = points[lo];
        let i = lo;
        let j = hi;
        let n = points.length;
        while (i <= j) {
            while (i < n && dist(points[i]) <= dist(pivot)) {
                i++;
            }
            while (j > 0 && dist(points[j]) > dist(pivot)) {
                j--;
            }
            if (i < j) {
                swap(i, j)
                j--;
                i++;
            }
        }
        swap(lo, j)
        return j;
    }


    let sort = (i, j, k) => {
        let randomIndex = shuffle(i, j - i) // Magic to make it from N2 to N
        swap(i, randomIndex)

        let pivot = partition(i, j);
        let leftLength = pivot - i + 1;

        if (leftLength > k)
            sort(i, pivot - 1, k)
        else if (leftLength < k)
            sort(pivot + 1, j, k - leftLength)
    }

    sort(0, points.length - 1, K)
    return points.slice(0, K)
};



// console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2))
// @lc code=end

