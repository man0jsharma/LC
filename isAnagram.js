const isAnagram = (str1, str2) => {
    let xor = 0;
    const concatenatedString = `${str1}${str2}`;

    if (str1.length !== str2.length) return false;

    for (let i = 0; i < concatenatedString.length; i++) {
        xor = xor ^ concatenatedString.charCodeAt(i)
    }
    return xor === 0;
}

module.exports = { isAnagram }

console.log(isAnagram("eat", "tea"));

console.log(isAnagram("eat", "teaa"));

console.log(isAnagram("eat", "xea"));