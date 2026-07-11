class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsSet = new Set(nums);

        for (let indx = 0; indx < nums.length; indx++) {
            const diff = target - nums[indx];
            let subIndx = indx + 1;

            if (numsSet.has(diff)) {
                while (subIndx < nums.length) {
                    if (target === nums[subIndx] + nums[indx]) {
                        return [indx, subIndx]
                    }
                    subIndx += 1
                }
            }
        }

        return []
    }
}