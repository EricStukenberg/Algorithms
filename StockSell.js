const maxProfit = (prices) => {
    let prof = 0
    let len = prices.length
    let buyPrice = prices[0]
    let sellPrice = prices[1]
    let buyIndex = 0
    for(let i = 0; i < len-1; i++) {
        if(buyPrice > prices[i]) {
            buyPrice = prices[i]
            buyIndex = i
        }
    }
    let sellIndex = buyIndex + 1
    for(let i = buyIndex+1; i < len; i++) {
        
    }
    
};
