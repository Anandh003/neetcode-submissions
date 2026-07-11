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

    constructor() {
        this.result = null;
    }

    maxPathSum(root) {
        this.result = -Infinity;
        this._maxPathSum(root)
        return this.result;
    }

    _maxPathSum(root) {
        if (!root) {
            return  0;
        }

        let left = 0, right = 0, joint = 0;

        const leftMax = this._maxPathSum(root.left)
        left += Math.max(0, leftMax)
        
        const rightMax = this._maxPathSum(root.right)
        right += Math.max(0, rightMax);

        joint = left + right + root.val

        this.result = Math.max(joint, this.result)

        return Math.max(left + root.val, right + root.val)
    }
}
