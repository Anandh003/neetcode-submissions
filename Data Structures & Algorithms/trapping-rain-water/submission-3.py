class Solution:
    def trap(self, height: List[int]) -> int:
        left_pointer = 0
        right_pointer = len(height) - 1
        left_max = height[left_pointer]
        right_max = height[right_pointer]
        water_trapped = 0

        while(left_pointer < right_pointer):
            if (left_max <= right_max):
                left_pointer += 1
                current_height = height[left_pointer]
            else:
                right_pointer -= 1
                current_height = height[right_pointer]

            if (min(left_max, right_max) > current_height):
                water_trapped += min(left_max, right_max) - current_height

            if (height[left_pointer] > left_max):
                left_max = height[left_pointer]
            elif (height[right_pointer] > right_max):
                right_max = height[right_pointer]

        return water_trapped
