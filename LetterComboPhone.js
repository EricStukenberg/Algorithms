const letterMap = new Map([["2", ["a", "b", "c"]], ["3", ["d", "e", "f"]], ["4", ["g", "h", "i"]], ["5", ["j", "k", "l"]], ["6", ["m", "n", "o"]], ["7", ["p",
"q", "r","s"]], ["8", ["t", "u", "v"]], ["9", ["w", "x", "y", "z"]]])
letterCombinations = (digits) => {
    const lenDigit = digits.length
    if (lenDigit <= 1 ) {
        if(lenDigit === 1 ) {
            return letterMap.get(digits)
        } else {
            return []
        }
    }
    
};
