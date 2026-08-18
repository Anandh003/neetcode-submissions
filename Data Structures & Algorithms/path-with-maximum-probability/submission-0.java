class Solution {
    public class Node implements Comparable<Node> {
        int dest;
        double prob;

        public Node(double prob, int dest) {
            this.prob = prob;
            this.dest = dest;
        }

        public int compareTo(Node o) {
            return Double.compare(o.prob, this.prob);
        }
    }

    public double maxProbability(int n, int[][] edges, double[] succProb, int start_node, int end_node) {
        Map<Integer, List<Node>> adjList = new HashMap<>();
        Map<Integer, Double> result = new HashMap<>();

        for (int i = 0; i < n; i++) {
            adjList.put(i, new ArrayList<>());
        }

        for (int i = 0; i < edges.length; i++) {
            int[] edge = edges[i];
            int source = edge[0];
            int target = edge[1];
            double prob = succProb[i];
            adjList.get(source).add(new Node(prob, target));
            adjList.get(target).add(new Node(prob, source));
        }

        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.add(new Node(1, start_node));

        while (!pq.isEmpty()) {
            Node node = pq.poll();

            if (result.keySet().contains(node.dest)) {
                continue;
            }

            result.put(node.dest, node.prob);

            for (Node neighbor : adjList.get(node.dest)) {
                if (result.keySet().contains(neighbor.dest)) {
                    continue;
                }
                pq.add(new Node(neighbor.prob * node.prob, neighbor.dest));
            }
        }

        return result.getOrDefault(end_node, Double.valueOf(0));
    }
}