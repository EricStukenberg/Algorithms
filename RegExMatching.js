var isMatch = function(s, p) {
    let res = false
    if(p.length < s.length) {
        return false
    }
    for(let i = 0; i< p.length - s.length; i++) {
            let subP = s.substring(i, s.length+i)
            res = checkSubString(subP, s)
        
        if(res === true) {
            return res;
        }
    }
    return res;
};

function checkSubString(s, p) {    
    for(let i = 0; i< p.length; i++) {
        if(s[i] !== p[i] && p[i] !== '.') {
          if(p[i] === '*' && i < 0) {
              if(p[i-1] !== s[i]) {
                  return false
              }
          } else {
              return false;
          }
        } 
    }
    return true;
}
