var removeElement = function(nums, val) {
    const len = nums.lenght();
    let index;
    for(let i = 0; i < len; i++) {
        if(nums[i] === val) {
            index = i;
            break;
        }
    }

    return nums.splice(index, index)
};