var fourSum = function(nums, target) {
    nums.sort();
    let res = [];
    
    
}


const twoSum = (nums, target) => {
    const res = {}
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if(res[diff] !== undefined && res[diff] !== i)  return [i, res[diff]]
		res[nums[i]] = i
    }
    return res;
};
