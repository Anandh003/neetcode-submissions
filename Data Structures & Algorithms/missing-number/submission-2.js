class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sum = 0, max = 0;
        for (let num of nums) {
            sum = sum + num;
            max = Math.max(num, max);
        }

        const actualSum = max * ((max + 1) / 2);

        const diff = actualSum - sum;

        if (diff === 0 && nums.length === max + 1) {
            return max + 1;
        } else if (diff === 0) {
            return 0;
        }
        return diff;
    }
}
