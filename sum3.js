var threeSumClosest = function(nums, target) {
   
    const len = nums.length;
    let i;
    let sol =  Number.MAX_SAFE_INTEGER;
    let sum;
    for(i = 0; i < len; i++) {
       
        let j = i+1;
        let k = i+2;
        while(j < len && k < len) {

            for(k;  k < len; k++) {
                sum = nums[i] + nums[j] + nums[k];
                                    console.log(sum)

                if(Math.abs(sum-target) < sol) {
                    sol = sum
                    if(sol === target) {

                        return sol;
                    }
                }
            }
            j++;
            k = j+1;
        }
    }
    return sol;
   
};