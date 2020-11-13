
const firstUniqChar = (s) => {
    
     let map = new Map()
    for(let i = 0; i < s.length; i++) {
        map.set(s.charAt(i))
    }
};
