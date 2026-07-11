class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};
        const sortedBucket = Array.from(nums).map(() => [])
        const res = [];

        for (let num of nums) {
            countMap[num] = countMap[num] ? countMap[num] + 1 : 1;
        }

        for (let indx in countMap) {
            sortedBucket[countMap[indx] - 1].push(indx)
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (k === 0) {
                break;
            }

            if (sortedBucket[i].length > 0 && k > 0) {
                if (sortedBucket[i].length <= k) {
                    res.push(...sortedBucket[i]);

                    k = k - sortedBucket[i].length
                } else {
                    res.push(...sortedBucket[i].slice(0, k))
                    k = 0
                }
            }
        }

        return res
    }
}
