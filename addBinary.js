
addBinary = (a, b) => {
    let aNum = 0
    let bNum = 0
    //get a 
    for(let i = a.length-1; i >= 0; i--) {
        if(a.charAt(i) == 1) {
            aNum += Math.pow(2, i)
        }
    }
        
    for(let i = a.length-1; i >= 0; i--) {
        if(a.charAt(i) == 1) {
            aNum += Math.pow(2, i)
        }
    }
    
     return (aNum + bNum).toString(2);

};
