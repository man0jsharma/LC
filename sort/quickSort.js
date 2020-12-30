

const qs = (arr, l, h) => {
    if (l >= h) return;
    let j = partition(arr, l, h);
    qs(arr, l, j - 1);
    qs(arr, j + 1, h)
    return arr;
}

function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

const partition = (arr, l, h) => {
    let pivot = arr[l];
    let i = l;
    let j = h;

    while (i <= j) {
        while (arr[i] <= pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i < j) {
            swap(arr, i, j)
            i++;
            j--
        }
    }
    swap(arr, l, j)
    console.log({ arr })
    return j;
}

const getRandom = (upperLimit, n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * upperLimit))
    }
    return arr;
}

// const arr = getRandom(100, 100);
// console.log(arr);
// const arr = [3, 121, 33, 19, 122, 34, 56, 75, 26];
// console.log([...arr].sort((a, b) => a - b))
// console.log(partition(arr, 0, arr.length - 1))
// console.log(qs(arr, 0, arr.length - 1))

