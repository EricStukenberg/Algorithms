var reorderLogFiles = function(logs) {
    let len = logs.length
    let res = []
    
    for(let i = 0; i < len; i++) {
        let wordArr = logs[i].split(" ")
        if(isNaN(wordArr[wordArr.length-1])) {
            res.unshift(logs[i])
        } else {
            res.push(logs[i])
        }
    }
     return res; 
};
