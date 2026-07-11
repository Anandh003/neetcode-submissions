class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.mruNode = new Node(-1, -1);
        this.lruNode = new Node(-2, -2);
        this.mruNode.prev = this.lruNode, this.lruNode.next = this.mruNode;
        this.nodeMap = {}
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.nodeMap[key]) return -1

        this.removeNode(this.nodeMap[key])

        this.insertNode(this.mruNode.prev, this.mruNode, this.nodeMap[key])

        return this.nodeMap[key]?.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const val = this.nodeMap[key]

        if (val && val === value) {
            return;
        }

        if (!val && Object.keys(this.nodeMap).length >= this.capacity) {
            const nodeToRemove = this.removeLRUNode();
            delete this.nodeMap[nodeToRemove.key];
        }

        let node = new Node(key, value);
        if (val) {
            node = val;
            node.val = value;
            this.removeNode(node);
        }

        this.insertNode(this.mruNode.prev, this.mruNode, node);
        this.nodeMap[key] = node;
        return;
    }

    insertNode(lnode, rnode, targetNode) {
        lnode.next = targetNode
        targetNode.prev = lnode
        targetNode.next = rnode
        rnode.prev = targetNode
    }

    removeNode(node) {
        const prevNode = node.prev;
        prevNode.next = node.next;
        node.next.prev = prevNode;
    }

    removeLRUNode() {
        const nodeToRemove = this.lruNode.next
        this.lruNode.next = nodeToRemove.next;
        nodeToRemove.next.prev = this.lruNode;
        return nodeToRemove;
    }
}


class Node {
    constructor(key, val) {
        this.key = key
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}