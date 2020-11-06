
addBinary = (a, b) => {
    let aNum = BigInt(0)
    let bNum = BigInt(0)
    let pow = 0
    //get a 
    for(let i = a.length-1; i >= 0; i--) {
        if(a.charAt(i) == '1') {
            console.log("i = " + i + " cahr at = "  + a.charAt(i))

            let temp = Math.pow(2, pow)
            aNum +=  BigInt(temp)
        }
        pow++

    }
    pow = 0
    for(let i = b.length-1; i >= 0; i--) {

        if(b.charAt(i) == '1') {
            let temp = Math.pow(2, pow)
            bNum +=  BigInt(temp)

        }
        pow++

    }

    return BigInt(aNum + bNum).toString(2);

};
