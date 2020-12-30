const list = [];

const backTracking = (str, start, end) => {
    if (start >= end) {
        return null;
    }
    str = str.slice(start, end)
    backTracking(str, start++, end--);
    start--;
    end--
}



backTracking("abc", 0, "abc".length);


console.log(list)