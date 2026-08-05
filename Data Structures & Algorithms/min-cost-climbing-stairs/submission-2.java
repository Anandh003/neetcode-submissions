class Solution {
    Map<Integer, Integer> cache = new HashMap<>();

    public int minCostClimbingStairs(int[] cost) {
        return findMinCost(-1, cost);
    }

    public int findMinCost(int indx, int[] cost) {
        if (cache.containsKey(indx)) return cache.get(indx);

        
        if (indx >= cost.length) {
            cache.put(indx, 0);
            return 0;
        }

        int currentCost = 0;

        if (indx >= 0) {
            currentCost = cost[indx];
        }

        int tempCost = Math.min(currentCost + findMinCost(indx + 1, cost), currentCost + findMinCost(indx + 2, cost));

        cache.put(indx, tempCost);

        return cache.get(indx);
    }
}
