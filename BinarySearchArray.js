

const binarySearch = (arr, num) => {
    let start = 0
    let end = arr.length - 1;

    return bs(arr, num, start, end);
}

const bs = (arr, num, start, end) => {
    if (arr.length === 0) {
        return -1;
    }
    if (arr.length === 1 && arr[0] === num) {
        return 0;
    }
    let mid = Math.ceil((start + end) / 2);
    if (arr[mid] === num) {
        return mid;
    }
    let isLeftSorted = arr[start] < arr[mid];
    let isRightSorted = arr[mid] < arr[start]
    if (num < arr[mid])
        return bs(arr, num, start, mid - 1)
    else
        return bs(arr, num, mid, end)
}


console.log(binarySearch([5, 6, 7, 8, 9, 10, 12, 1, 2, 3, 4,], 1))