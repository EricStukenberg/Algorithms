// Only works for num < 100
function findPrimeNumbers(num) {
    
    if(num <= 7) {
        if(num > 5 ) {
            return [2,3,5];
        } else if(num > 3  ) {
            return [2,3];
        } else if(num > 2 ) {
            return [2];
        } else {
            return [];
        }
    }
    const result = [2,3,5];
    //start = 7;
    let i = 7;
    while( i < num) {
        if(isPrime(i)) {
            result.push(i);
            mod = i%10;
        }
        if(mod === 1 || mod === 7 || mod === 9) {
            i += 2;
        } else {
            i += 4;
        } 
    }

    return result;
}

function isPrime(n) {n
    let sq =  Math.sqrt( n )
    for(let x = 2; x < sq; x++) {
      if(n % x === 0) {
        return false;
      }
    }
    return true;  
}

console.time('findPrimeNumbers');
array = findPrimeNumbers(100);
console.timeEnd('findPrimeNumbers');