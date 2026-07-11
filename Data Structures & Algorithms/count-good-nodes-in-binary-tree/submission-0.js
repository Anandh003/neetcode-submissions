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
    goodNodes(root) {
        return this._findGoodNodes(root, -Infinity, 0)
    }

    _findGoodNodes(root, prevMax, count) {
        if (!root) {
            return count
        }

        if (root.val >= prevMax) {
            prevMax = root.val;
            count++;
        }

        count = this._findGoodNodes(root.left, prevMax, count)
        count = this._findGoodNodes(root.right, prevMax, count)

        return count
    }
}
