class Solution {
    int[] cache;

    public int climbStairs(int n) {
        if (n <= 2) return n;
        int one = 1;
        int two = 2;
        int result = one + two;

        for (int i = 3; i <= n; i++) {
            result = one + two;
            one = two;
            two = result;
        }

        return result;
    }
}
