/** 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    const len = nums.length
   for(i; i < len; i++) {

       if(nums[i] === target) {
           console.log(nums[i])
           return i;
       } else if(nums[i] > target) {
            return i;
           
        }
   } 
    
    return i;
};

describe("searchInsert", () => {
    it("returns 1 for [1,3,5,6]", () => {
      expect(searchInsert([1,3,5,6], 2)).toEqual(1);
    });
    it("returns 2 for [1,3,5,6]", () => {
      expect(searchInsert([1,3,5,6], 5)).toEqual(2);
    });
  });