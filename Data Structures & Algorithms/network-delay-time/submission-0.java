class Solution {
    public static class Pair implements Comparable<Pair> {
        int weight;
        int dest;

        public Pair(int weight, int dest) {
            this.weight = weight;
            this.dest = dest;
        }

        public int compareTo(Solution.Pair o) {
            return this.weight - o.weight;
        }
    }
    public int networkDelayTime(int[][] times, int n, int k) {
        Map<Integer, Integer> result = new HashMap<>();
        Map<Integer, List<Pair>> adjList = new HashMap<>();

        PriorityQueue<Pair> pq = new PriorityQueue<>();

        for (int i = 1; i <= n; i++) {
            adjList.put(i, new ArrayList<>());
        }

        for (int[] time: times) {
            int source = time[0];
            int target = time[1];
            int weight = time[2];

            adjList.get(source).add(new Pair(weight, target));
        }

        pq.add(new Pair(0, k));

        while(!pq.isEmpty()) {
            Pair target = pq.poll();

            if (result.keySet().contains(target.dest)) {
                continue;
            }

            result.put(target.dest, target.weight);

            for (Pair neighbor : adjList.get(target.dest)) {
                pq.add(new Pair(target.weight + neighbor.weight, neighbor.dest));
            }
        }

        if (result.size() != n) {
            return -1;
        }

        int total = 0;
        for (int value: result.values()) {
            total = Math.max(total, value);
        }

        return total;
    }
}
