class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let xored = 0
        for (let i = 1; i <= nums.length; i++){
            xored = xored ^ i;
        }

        for (let num of nums) {
            xored = xored ^ num;
        }

        return xored;
    }
}
