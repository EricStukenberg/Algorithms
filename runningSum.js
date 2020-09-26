var runningSum = function(nums) {
    let sum = 0
    const res = []
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        res.push(sum)
    }
    return res
};