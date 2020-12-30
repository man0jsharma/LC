const maxMultiBuySellProfit = (prices) => {

    let lowPrice = Number.MAX_VALUE;
    let highPrice = Number.MIN_VALUE;

    let max = 0;

    for (let i = 1; i < prices.length;) {
        while (i < prices.length && prices[i - 1] >= prices[i]) {
            i++
        }
        lowPrice = prices[i - 1];

        while (i < prices.length && prices[i - 1] <= prices[i]) {
            i++
        }
        highPrice = prices[i - 1];

        console.log({ lowPrice, highPrice })

        max += highPrice - lowPrice
    }
    return max;
}


console.log(maxMultiBuySellProfit([7, 1, 5, 3, 6, 4]))
console.log(maxMultiBuySellProfit([1, 2, 3, 4, 5]))
console.log(maxMultiBuySellProfit([7, 6, 4, 3, 1]))