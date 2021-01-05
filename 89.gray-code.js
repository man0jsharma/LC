/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start

/*
0 000 - 0 - 
1 001 - 1
2 011 - 3 - f(1) + 2
3 010 - 2 - f(0) + 2
4 110 - 6 - f(3) + 4
5 111 - 7 - f(2) + 4
6 101 - 5 - f(1) + 4
7 100 - 4 - f(0) + 4
*/
/**
 * @param {number} n
 * @return {number[]}
 */

var grayCode = function (n) {
    let ans = [0, 1];
    let singleBits = []
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return ans
    }

    for (let bit = 1; bit < n; bit++) {
        let eachBit = Math.pow(2, bit)
        let count = 0;
        for (let i = 0; i < eachBit; i++) {
            let last = ans[ans.length - 1 - count];
            ans.push(last + eachBit)
            count += 2;
        }
    }

    return ans;
    //This is idea behind this
    // https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc1%2FBinary-reflected_Gray_code_construction.svg%2F250px-Binary-reflected_Gray_code_construction.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGray_code&tbnid=wTB_sph3CL4vSM&vet=12ahUKEwiGqKnWyIPuAhWYwCkDHWPXAF0QMygAegUIARDMAQ..i&docid=wRAbZmb9-75GNM&w=250&h=200&q=graycode&ved=2ahUKEwiGqKnWyIPuAhWYwCkDHWPXAF0QMygAegUIARDMAQ
}

console.log(grayCode(4));
// @lc code=end

