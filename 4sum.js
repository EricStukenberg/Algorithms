/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort();
    let res = [];
    
    const kSum = (nums, target, start, k) => {
        const res = {}
        if(start === nums.length || nums[start]*k > target ||  target > nums[nums.length - 1] * k) {
            return res;
        } 
        if( k === 2) {
            return twoSum(nums, target, start);
            
        }
        for(i = start; i < nums.length; i++) {
            if(i === start || nums[i -1] != nums[i]) {
            
                
            }
        }
        
    }
    
    const twoSum = (nums, target) => {
        const res = {}
        for (let i = 0; i < nums.length; i++){
            const diff = target - nums[i];
            if(res[diff] !== undefined && res[diff] !== i)  return [i, res[diff]]
            res[nums[i]] = i
        }
        return res;
    }
};

