class Solution {
    List<List<Integer>> result;
    int target;
    int[] nums;
    public List<List<Integer>> combinationSum(int[] nums, int target) {
        this.result = new ArrayList<>();
        this.target = target;
        this.nums = nums;
        findSum(0, 0, new ArrayList<Integer>());
        return this.result;
    }

    public void findSum(int sum, int index, List<Integer> currentList) {
        if (sum > target || index >= this.nums.length) {
            return;
        }

        if (sum == this.target) {
            this.result.add(new ArrayList<>(List.copyOf(currentList)));
            return;
        }

        int ele = this.nums[index];
        currentList.add(ele);
        findSum(sum + ele, index, currentList);

        currentList.remove(Integer.valueOf(ele));
        findSum(sum, index + 1, currentList);
    }
}
