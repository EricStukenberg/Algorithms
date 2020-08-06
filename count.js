var countAndSay = function(n) {
    if (n === 1) return '1';
    if (n === 2) return '11';
    let result = '11';
    for (let k = 2; k < n; k++) {
      let temp = '', count = 1;
      for (let i = 0; i < result.length - 1; i++) {
        if (result[i] === result[i+1]) {
          count++;
        } else {
          temp += count + '' + result[i];
          count = 1;
        }
      }
      temp += count + '' + result[result.length - 1];
      result = temp;
    }
    return result;
};