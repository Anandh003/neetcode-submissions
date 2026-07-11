class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums = sorted(nums)
        results = []

        const_indx = 0

        while const_indx <= len(nums) - 2:
            if nums[const_indx] > 0:
                return results
            if const_indx > 0 and nums[const_indx - 1] == nums[const_indx]:
                const_indx += 1
                continue
    
            left_pointer = const_indx + 1
            right_pointer = len(nums) - 1
            while left_pointer < right_pointer:
                if nums[const_indx] + nums[left_pointer] + nums[right_pointer] == 0:
                    results.append([nums[const_indx], nums[left_pointer], nums[right_pointer]])
                    left_pointer += 1
                    while left_pointer < right_pointer and nums[left_pointer] == nums[left_pointer - 1]:
                        left_pointer += 1
                elif  nums[const_indx] + nums[left_pointer] + nums[right_pointer] > 0:
                    right_pointer -= 1
                    while  left_pointer < right_pointer and nums[right_pointer] == nums[right_pointer + 1]:
                        right_pointer -= 1
                else:
                    left_pointer += 1
                    while  left_pointer < right_pointer and nums[left_pointer] == nums[left_pointer - 1]:
                        left_pointer += 1

            const_indx += 1

            
        return results 