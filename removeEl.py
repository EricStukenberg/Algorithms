class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        count = nums.count(val)
        for x in range(count):
            nums.remove(val)
    