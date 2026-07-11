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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return []
        
        let queue = [root];
        const result = [];

        while (queue.length) {
            const ql = queue.length;
            const childNodes = []
            let i = 0;

            for (i = 0; i < ql; i++) {
                const node = queue.shift()
                if (i === ql - 1) {
                    result.push(node.val);
                }
                if (node.left)
                    childNodes.push(node.left);
                if (node.right)
                    childNodes.push(node.right);
            }
            queue = [...childNodes]
        }

        return result
    }
}
