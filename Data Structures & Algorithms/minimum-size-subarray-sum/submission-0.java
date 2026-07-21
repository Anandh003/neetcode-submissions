class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int minCount = Integer.MAX_VALUE;

        int left = 0;
        int right = 0;
        int sum = 0;

        while (right < nums.length) {
            sum += nums[right];

            if (sum >= target) {
                minCount = Math.min(minCount, right - left + 1);
                sum = sum - nums[left];
                sum = sum - nums[right];
                left++;
                continue;
            }

            right++;
        }

        return minCount == Integer.MAX_VALUE ? 0 : minCount;
    }
}