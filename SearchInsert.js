/** 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
};

describe("searchInsert", () => {
    it("returns 1 for [1,3,5,6]", () => {
      expect(searchInsert([1,3,5,6], 2)).toEqual(1);
    });
    it("returns 2 for [1,3,5,6]", () => {
      expect(searchInsert([1,3,5,6], 5)).toEqual(2);
    });
  });