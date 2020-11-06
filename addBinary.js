
addBinary = (a, b) => {
    let aNum = 0
    let bNum = 0
    //get a 
    for(let i = 0; i < a.length; i++) {
        if(a.charAt(i) == 1) {
            aNum += Math.pow(2, i)
        }
    }
        
    for(let i = 0; i < b.length; i++) {
        if(a.charAt(i) == 1) {
            aNum += Math.pow(2, i)
        }
    }
    
    
};
