var isMatch = function(s, p) {
    return (new RegExp('^'+p+'$')).test(s);
    let res = false
    if(p.length < s.length) {
        console.log("False Return im")
        return false
    }
    for(let i = 0; i < p.length - s.length+1; i++) {
            console.log(s + " p = " + p)

            let subP = p.substring(i, s.length+i)
                        console.log(s + " p = " + p)

            res = checkSubString(subP, s)
        
        if(res === true) {
            return res;
        }
    }
    return res;
};

function checkSubString(p, s) {    
    console.log("subP= "+ p + " s = " + s)
    for(let i = 0; i< p.length; i++) {
        if(s[i] !== p[i] && p[i] !== '.') {
            console.log("s[i] = " + s[i] + " p[i] = " + p[i] + " i=" + i)
          if(p[i] === '*' && i > 0) {
              if(p[i-1] !== s[i] && p[i-1] !== '.') {
                  return false
              }
              
          } else {
              return false;
          }
        } 
    }
    return true;
}


function regexVersion(s, p) {
    return (new RegExp('^'+p+'$')).test(s);
}
