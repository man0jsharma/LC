/*

Check if a contiguous subArray can be created from array wwith sum k


*/


const isPossible = (a, k) => {

    let hash = [0];
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
        if (hash.includes(sum - k)) {
            return true;
        } else {
            hash.push(sum);
        }
    }
    return false;
}


console.log(isPossible([5, 0, 2, 4], 10))
console.log(isPossible([5, 0, 2, 4], 6))
console.log(isPossible([5, 0, 2, 4], 0))
console.log(isPossible([5, 2, 0, 4], 0))
console.log(isPossible([5, 2, 0, 4], 9))
console.log(isPossible([5, 2, 0, 4], 7))