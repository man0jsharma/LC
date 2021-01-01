/*
 * @lc app=leetcode id=1109 lang=javascript
 *
 * [1109] Corporate Flight Bookings
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {

    let array = [];

    bookings = bookings.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < bookings.length; i++) {
        let [start, end, booking] = bookings[i];

        array[start] = (array[start] || 0) + booking;
        if (end < n) array[end + 1] = (array[end + 1] || 0) - booking;
    }

    for (let i = 1; i <= n; i++) {
        array[i] = (array[i - 1] || 0) + (array[i] || 0);
    }

    return array.slice(1);
};


// console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5))
// @lc code=end
