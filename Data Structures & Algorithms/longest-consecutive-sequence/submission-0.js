class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const visitedNums = new Set()
        const numsSet = new Set(nums);
        let longestSequence = [];

        for (let indx = 0; indx < nums.length; indx++) {
            let num = nums[indx]
            let tempSequence = [num]
            if (visitedNums.has(nums[indx])) {
                continue;
            }
            visitedNums.add(num);
            while (numsSet.has(num + 1)) {
                tempSequence.push(num + 1)
                visitedNums.add(num + 1)
                num++;
            }

            if (tempSequence.length > longestSequence.length) {
                longestSequence = [...tempSequence]
            }
        }

        return longestSequence.length;
    }
}