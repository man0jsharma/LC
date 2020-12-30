// import { isAnagram } from './isAnagram'

const { isAnagram } = require('./isAnagram')

const groupAnagram = (strs) => {

    let addedStrs = [];
    const group = strs.reduce((acc, iter) => {
        const index = addedStrs.find(each => isAnagram(each, iter))
        if (acc[index]) {
            acc[index].push(iter)
        } else {
            acc[iter] = [iter]
        }
        addedStrs.push(iter)
        return acc;
    }, {})

    return Object.values(group)
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))