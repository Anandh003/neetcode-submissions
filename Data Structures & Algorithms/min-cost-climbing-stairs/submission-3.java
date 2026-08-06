class Solution {
    Map<Integer, Integer> cache = new HashMap<>();

    public int minCostClimbingStairs(int[] cost) {
        // DP Solution
        cost = Arrays.copyOf(cost, cost.length + 1);
        cost[cost.length - 1] = 0;

        for (int i = cost.length - 3; i >= 0; i--) {
            cost[i] += Math.min(cost[i + 1], cost[i + 2]);
        }
        return Math.min(cost[0], cost[1]);
    }
}
