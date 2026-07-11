class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = []

        let product = 1
        for (let indx = 0; indx < nums.length; indx ++) {
            result.push(product)

            product = product * nums[indx];
        }

        product = 1
        for (let indx = nums.length - 1; indx >= 0; indx--) {
            result[indx] *= product

            product = product * nums[indx]
        }


        return result
    }
}

