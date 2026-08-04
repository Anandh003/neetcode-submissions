class Solution {
    int[] cache;

    public int climbStairs(int n) {
        cache = new int[n];
        for (int i = 0; i < n; i++) {
            cache[i] = -1;
        }
        return dfs(0, n);
    }

    public int dfs(int i, int target) {
        if (i == target)
            return 1;

        if (i > target)
            return 0;

        if (cache[i] != -1)
            return cache[i];

        cache[i] = dfs(i + 1, target) + dfs(i + 2, target);
        return cache[i];
    }
}
