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
     * @return {boolean}
     */
    constructor() {
        this._isBalanced = true
    }
    isBalanced(root) {
        this._findDiffHeight(root)
        return this._isBalanced
    }

    _findDiffHeight(root) {
        let leftHeight = 0, rightHeight = 0

        if (!root) return 0

        if (root.left) {
            leftHeight = 1 + this._findDiffHeight(root.left)
        }

        if (root.right) {
            rightHeight = 1 + this._findDiffHeight(root.right)
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            this._isBalanced = false
        }

        return Math.max(leftHeight, rightHeight)
    }
}
