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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let n = 0;
        const stack = [];
        let current = root;

        while(current != null || stack.length) {
            while(current) {
                stack.push(current)
                current = current.left;
            }

            n += 1;
            current = stack.pop();

            if (n == k) {
                return current.val
            }

            current = current.right;
        }
    }
}
