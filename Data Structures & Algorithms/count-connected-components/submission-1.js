class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const parents = [], ranks = [];
        let connectedComponents = n;
        for (let node = 0; node < n; node++) {
            parents.push(node)
            ranks.push(1)
        }


        for (let edge of edges) {
            const [node1, node2] = edge

            const pNode1 = this.findParent(node1, parents)
            const pNode2 = this.findParent(node2, parents)


            if (pNode1 !== pNode2) {
                if (ranks[pNode1] >= ranks[pNode2]) {
                    parents[pNode2] = parents[pNode1]
                    ranks[pNode1] += 1
                } else {
                    parents[pNode1] = parents[pNode2]
                    ranks[pNode2] += 1
                }
                connectedComponents -= 1;
            }
        }
        return connectedComponents
    }

    findParent(n1, parents) {
        while (true) {
            if (parents[n1] === n1) {
                return n1
            }

            n1 = parents[n1]
        }
    }
}
