class Solution {
    Stack<List<Integer>> stack = new Stack<>();
    int maxArea = 0;

    public int largestRectangleArea(int[] heights) {

        for (int i = 0; i < heights.length; i++) {
            int height = heights[i];

            int start = i;
            while (!stack.isEmpty() && stack.peek().get(1) > height) {
                List<Integer> last = stack.pop();
                int tempArea = (i - last.get(0)) * last.get(1);
                maxArea = Math.max(tempArea, maxArea);
                start = last.get(0);
            }

            stack.push(Arrays.asList(start, height));
        }

        while (!stack.isEmpty()) {
            List<Integer> last = stack.pop();
            int tempArea = (heights.length - last.get(0)) * last.get(1);
            maxArea = Math.max(tempArea, maxArea);
        }

        return maxArea;
    }
}
