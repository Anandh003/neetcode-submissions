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
        this.diameter = 0
    }

    diameterOfBinaryTree(root) {
        this.updateDiameterOfTree(root)
        return this.diameter
    }


    updateDiameterOfTree(root) {
        let heightLeft = 0, heightRight = 0;

        if (!root) {
            return 0
        }

        if (root.left) {
            heightLeft = 1 + this.updateDiameterOfTree(root.left)
        }

        if (root.right) {
            heightRight = 1 + this.updateDiameterOfTree(root.right)
        }

        this.diameter = Math.max(this.diameter, heightLeft + heightRight)

        return Math.max(heightLeft, heightRight)
    }
}
