
const isValid = (x, y, n) => {
    return x >= 0 && y >= 0 && x < n && y < n
}

const hasValue = (arr, x, y) => {
    if (arr.length === 0) {
        return false;
    } else {
        return arr[x] && arr[x][y]
    }
}

const buildSpiral = (n) => {
    if (n === 0) return [];
    if (n === 1) return [1];
    const start = [0, 0]

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    let directionKey = 0;

    let addedCount = 1;
    let x = 0;
    let y = 0
    let contents = Array.from(Array(n), () => new Array(n))
    contents[0][0] = addedCount;

    while (addedCount < Math.pow(n, 2)) {
        let newX = x + directions[directionKey][0]
        let newY = y + directions[directionKey][1]
        if (isValid(newX, newY, n) && !contents[newX][newY]) {
            x = newX;
            y = newY
            contents[x][y] = ++addedCount;
        } else
            if (directionKey + 1 < directions.length) {
                directionKey++;
            } else
                directionKey = 0
    }
}


buildSpiral(2)