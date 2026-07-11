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
     * @return {TreeNode}
     */
    invertTree(root) {
        this._invertTree(root)
        return root
    }

    convertAsLevelArray(root) {
        const iter = [root]
        const elements = []

        while (iter.length !== 0) {
            root = iter.shift()
            if (root.left) {
                iter.push(root.left)
            }

            if (root.right) {
                iter.push(root.right)
            }

            elements.push(root.val)
        }
        return elements
    }

    _invertTree(root) {
        if (root) {
            this.invertTree(root.left)
            this.invertTree(root.right)
            const tmp = root.left
            root.left = root.right
            root.right = tmp
        }
        return;
    }

    hasChildren(root) {
        return root.left !== undefined && root.right !== null
    }
}
