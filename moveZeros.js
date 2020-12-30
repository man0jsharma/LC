/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

const switchValue = (arr, first, second) => {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

const moveZerosInPlace = (nums) => {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count++] = nums[i]
        }
    }

    while (count < nums.length) {
        nums[count++] = 0;
    }
    return nums;
}

console.log(moveZerosInPlace([0, 1, 0, 3, 12]))

console.log(moveZerosInPlace([1, 0, 1]))