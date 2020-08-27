
var isMatch = function(s, p) {
    let res = true
    
    for(let i = 0; i< s.length; i++) {
        checkSubString(subString, p)
    }
    return res;
};

function checkSubString(subString, p) {
    let res = true;
    
    for(let i = 0; i< p.length; i++) {
        if(s[i] !== p[i] && p[i] !== '.') {

        } else if(p[i] === '*' && i < 0) {

        }
    }
    return res;
}
