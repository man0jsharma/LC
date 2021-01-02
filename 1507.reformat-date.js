/*
 * @lc app=leetcode id=1507 lang=javascript
 *
 * [1507] Reformat Date
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let [dateValue, month, year] = date.split(" ");

    dateValue = dateValue.slice(0, -2)
    dateValue = dateValue.length === 2 ? dateValue : `0${dateValue}`
    month = months.indexOf(month) + 1
    month = month.toString().length === 2 ? month : `0${month}`;

    return `${year}-${month}-${dateValue}`
};


// console.log(reformatDate("20th Oct 2052"))
// @lc code=end

