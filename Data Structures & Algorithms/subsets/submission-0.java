class Solution {
    List<List<Integer>> result;
    List<Integer> tempResult;

    public List<List<Integer>> subsets(int[] nums) {
        this.result = new ArrayList<List<Integer>>();
        this.tempResult = new ArrayList<Integer>();
        getSubset(0, nums);
        return this.result;
    }

    public void getSubset(int index, int[] nums) {
        if (index == nums.length) {
            this.result.add(new ArrayList<>(List.copyOf(this.tempResult)));
            return;
        }

        int ele = nums[index];
        this.tempResult.add(ele);
        getSubset(index + 1, nums);

        this.tempResult.remove(Integer.valueOf(ele));
        getSubset(index + 1, nums);
    }
}
