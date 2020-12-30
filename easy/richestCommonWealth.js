const richestCommonWealth = (accounts) => {
    return accounts.reduce((max, eachAccount) => {
        return Math.max(max, sumOfAccounts(eachAccount))
    }, 0)
}


const sumOfAccounts = account => {
    return account.reduce((acc, curr) => acc + curr, 0)
}

console.log(richestCommonWealth([[1, 2, 3], [3, 2, 1]]))

console.log(richestCommonWealth([[1, 5], [7, 3], [3, 5]]))

console.log(richestCommonWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]))