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
    let max = 0;
    for (let i = 0; i < bookings.length; i++) {
        let [start, end, booked] = bookings[i];
        while (start <= end) {
            array[start] = !array[start] ? booked : array[start] + booked
            start++;
        }
    }

    for (let i = 1; i <= n; i++) {
        array[i] = array[i] || 0;
    }

    return array.slice(1);
};
// @lc code=end
