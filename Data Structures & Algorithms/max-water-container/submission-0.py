class Solution:
    def maxArea(self, heights: List[int]) -> int:
        left_pointer = 0
        right_pointer = len(heights) - 1
        max_capacity = 0
        
        while left_pointer < right_pointer:
            left_num = heights[left_pointer]
            right_num = heights[right_pointer]

            pivot_num = min(left_num, right_num)

            intervals = right_pointer - left_pointer 

            capacity = intervals * pivot_num

            max_capacity = max(capacity, max_capacity)

            if left_num < right_num:
                left_pointer += 1
            else:
                right_pointer -= 1
    
        return max_capacity