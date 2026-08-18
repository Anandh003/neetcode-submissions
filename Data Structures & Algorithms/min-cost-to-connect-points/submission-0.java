class Solution {
    public int minCostConnectPoints(int[][] points) {
        Map<Integer, List<List<Integer>>> adjList = new HashMap<>();
        Set<Integer> vistedSet = new HashSet<>();
        Comparator<List<Integer>> comp = (a, b) -> Integer.compare(a.get(0), b.get(0));
        PriorityQueue<List<Integer>> pq = new PriorityQueue<>(comp);

        for (int i = 0; i < points.length; i++) {
            adjList.put(i, new ArrayList<>());
        }

        for (int i = 0; i < points.length; i++) {
            List<Integer> x = Arrays.stream(points[i]).boxed().toList();
            for (int j = i + 1; j < points.length; j++) {
                List<Integer> y = Arrays.stream(points[j]).boxed().toList();
                Integer distance = Math.abs(x.get(0) - y.get(0)) + Math.abs(x.get(1) - y.get(1));
                adjList.get(i).add(Arrays.asList(distance, j));
                adjList.get(j).add(Arrays.asList(distance, i));
            }
        }

        int cost = 0;
        pq.add(Arrays.asList(0, 0));

        while (vistedSet.size() < points.length) {
            List<Integer> next = pq.poll();

            if (vistedSet.contains(next.get(1))) {
                continue;
            }
            vistedSet.add(next.get(1));
            cost += next.get(0);
            for (List<Integer> neighbor : adjList.get(next.get(1))) {
                pq.add(neighbor);
            }
        }

        return cost;
    }
}
