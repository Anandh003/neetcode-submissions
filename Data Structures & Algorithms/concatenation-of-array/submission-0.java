class Solution {
    public int[] getConcatenation(int[] nums) {
        int[] ans = new int[nums.length * 2];

        for (int indx = 0; indx < nums.length; indx++) {
            ans[indx] = nums[indx];
            ans[indx + nums.length] = nums[indx];
        }

        return ans;
    }
}