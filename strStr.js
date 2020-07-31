var strStr = function(haystack, needle) {
    const iter = needle.length
    const len = haystack.length
    let i;
    if(haystack.localeCompare(needle) == 0) {
        return 0;
    }
    for(i = 0; i < len; i++) {
        if(i+iter > len) {
            break;
        }
        console.log("substring: " + haystack.substring(i,i+iter ) + ", i= " + i)
        console.log(haystack.substring(i,i+iter ).localeCompare(needle))
        if(haystack.substring(i,i+iter ).localeCompare(needle) == 0) {
            return i;
        }
    }
    return -1;
    
};