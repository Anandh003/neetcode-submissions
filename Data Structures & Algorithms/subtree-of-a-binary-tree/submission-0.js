/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let queue = [root];

        while (queue.length) {
            const node = queue.shift();
            if (!node) {
                continue;
            }
            if (node.val === subRoot.val) {
                const isEqual = this.isEqual(node, subRoot);
                if (isEqual) {
                    return true
                }
            }
            queue.push(node.left);
            queue.push(node.right);
        }
        return false;
    }

    isEqual(root1, root2) {
        if (!root1 && !root2) {
            return true;
        }

        if (root1 && !root2 || !root1 && root2) {
            return false;
        }

        if (root1.val !== root2.val) {
            return false;
        }

        return this.isEqual(root1.left, root2.left) && this.isEqual(root1.right, root2.right);
    }

    findNode(root, targetValue) {
        if (!root) {
            return
        }

        if (root.val === targetValue) {
            return root;
        }

        let targetNode = findNode(root.left);
        if (targetNode) {
            return targetNode;
        }
        targetNode = findNode(root.right);

        return targetNode;
    }
}
