const firstUniqChar = (s) => {
    let map = {}
    for(let i = 0; i < s.length; i++) {
        map[s.charAt(i)] += 1
    }
    for(let i = 0; i < s.length; i++) {
        if(map[s.charAt(i)] == 1) {
            return i;
        }
    }
    return null;
};
