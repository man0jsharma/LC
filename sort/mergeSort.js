const mergeSort = (arr) => {

    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor((arr.length) / 2)
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}


const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            sortedArray.push(leftArray[leftIndex])
            leftIndex++;
        } else {
            sortedArray.push(rightArray[rightIndex])
            rightIndex++
        }
    }

    return sortedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))
}

const arr = [9, 8, 2, 7, 1, 0, -1, 100, 20003, 3, 2, 3]
console.log(mergeSort(arr, 0, arr.length - 1));