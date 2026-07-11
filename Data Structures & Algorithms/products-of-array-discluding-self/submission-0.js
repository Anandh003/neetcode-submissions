class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProduct = [];
        const postfixProduct = [];
        const result = []

        let product = 1
        for (let indx = 0; indx < nums.length; indx ++) {
            prefixProduct.push(product)

            product = product * nums[indx];
        }

        product = 1
        for (let indx = nums.length - 1; indx >= 0; indx--) {
            postfixProduct.push(product)

            product = product * nums[indx]
        }

        for (let indx = 0; indx < nums.length; indx++) {
            result[indx] = prefixProduct[indx] * postfixProduct[nums.length - indx - 1]
        }

        return result
    }
}
