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
     * @return {number}
     */
    maxDepth(root) {
        let depth = 0;

        return this._maxDepth(root, depth + 1)
    }

    _maxDepth(root, depth, maxDepth = 0) {
        if (!(root instanceof TreeNode)) {
            return maxDepth
        }

        if (root.left) {
            maxDepth = this._maxDepth(root.left, depth + 1, Math.max(depth + 1, maxDepth))
        }
        if (root.right) {
            maxDepth = this._maxDepth(root.right, depth + 1, Math.max(depth + 1, maxDepth))
        }

        return Math.max(depth, maxDepth)
    }
}
