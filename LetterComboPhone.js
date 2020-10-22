const letterMap = new Map([["2", ["a", "b", "c"]], ["3", ["d", "e", "f"]], ["4", ["g", "h", "i"]], ["5", ["j", "k", "l"]], ["6", ["m", "n", "o"]], ["7", ["p",
"q", "r","s"]], ["8", ["t", "u", "v"]], ["9", ["w", "x", "y", "z"]]])

letterCombinations = (digits) => {
    const digitLen = digits.length
    if (digitLen <= 1 ) {
        if(digitLen === 1 ) {
            return letterMap.get(digits)
        } else {
            return []
        }
    }
    let res = []
    let digitSet = getDigitSet(digits, digitLen)
    let temp = ''
    backtrack(temp, digitSet, 0, digitLen)

    function backtrack(temp, data, currLev, endLev) {
        if (temp.length == endLev) {
            res.push(temp)
            return
        }
        for(let i = 0; i < data[currLev].length; i++) {
            temp += data[currLev][i]
            backtrack(temp, data, currLev+1, endLev)
            temp = temp.slice(0, temp.length-1)
        }
    }
    
    return res;
};

const getDigitSet = (digits, lenDigit) => {
        let res = []
        for(let i = 0; i < lenDigit; i++) {
            res.push(letterMap.get(digits.charAt(i)))
        }
    return res;
}
