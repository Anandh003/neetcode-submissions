class Solution {
    public boolean hasDuplicate(int[] nums) {
        Set hashSet = new HashSet();
        for (int num : nums) {
            if (hashSet.contains(num)) {
                return true;
            }

            hashSet.add(num);
        }

        return false;
    }
}