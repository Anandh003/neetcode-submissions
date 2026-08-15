/*
Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    public Node cloneGraph(Node node) {
        if (node == null) {
            return node;
        }
        Map<Integer, Node> visitedNodes = new HashMap<>();
        return this._cloneGraph(node, visitedNodes);
    }

    public Node _cloneGraph(Node node, Map<Integer, Node> visitedNodes) {
        Node newNode = new Node(node.val);
        visitedNodes.put(node.val, newNode);

        for (Node neighborNode : node.neighbors) {
            if (visitedNodes.keySet().contains(neighborNode.val)) {
                newNode.neighbors.add(visitedNodes.get(neighborNode.val));
                continue;
            }

            Node newNeighborNode = this._cloneGraph(neighborNode, visitedNodes);
            newNode.neighbors.add(newNeighborNode);
        }

        return newNode;
    }
}