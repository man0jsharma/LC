const numberAnagram = (num) => {
    let ans = 0
    while (num > 0) {
        let d = num % 10;
        num = Math.floor(num / 10);
        ans = (ans * 10) + d;
        console.log({ ans, d, num })
    }
    return ans;
}

const arr = [789, 987, 125, 521, 8787]

const findAnagramPairs = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(numberAnagram(arr[i]))) {
            count++
        }
    }
    return count / 2;
}

console.log(findAnagramPairs(arr))