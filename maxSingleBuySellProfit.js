const maxMultiBuySellProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);

        maxProfit = Math.max(maxProfit, prices[i] - minPrice)

    }

    console.log(maxProfit)
}

console.log(maxMultiBuySellProfit([100, 180, 260, 310, 40, 535, 695]))