var countAndSay = function(n) {
    if (n === 1) return '1';
    let result = '';
    const prev = countAndSay(n - 1)
    
    for (let o = 0, i = 1; i <= prev.length; i++)
        prev[i] !== prev[o] && (result += `${i - o}${prev[o]}`, o = i)

    return result
};