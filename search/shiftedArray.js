


const searchShiftedArray = (arr, num) => {
    let p = pivot(arr, 0, arr.length - 1);
    if (arr[p] === num) {
        return p
    } else if (num < arr[0]) {
        return binarySearch(arr, num, p + 1, arr.length - 1)
    } else
        return binarySearch(arr, num, 0, p - 1)
}


const pivot = (arr, low, high) => {
    if (low > high) {
        return 0;
    }
    let mid = Math.floor((low + high) / 2);
    if (mid === 0 || arr[mid - 1] > arr[mid])
        return mid;
    else if (arr[mid] > arr[0])
        return pivot(arr, mid + 1, high)
    else
        return pivot(arr, low, mid - 1)
}


const binarySearch = (arr, num, low, high) => {
    if (low > high) {
        return -1;
    }
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] === num) {
        return mid;
    } else if (arr[mid] < num) {
        return binarySearch(arr, num, mid + 1, high);
    } else
        return binarySearch(arr, num, low, mid - 1)
}

//1,2,3,4,8
let arr = [1, 2]
// for (let i = 0; i < arr.length; i++)
// console.log(binarySearch(arr, arr[i], 0, arr.length - 1))

console.log(searchShiftedArray(arr, 2))