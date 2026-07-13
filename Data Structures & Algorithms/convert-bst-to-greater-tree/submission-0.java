/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode convertBST(TreeNode root) {
        int sum = 0;

        _convertBST(root, sum);

        return root;
    }

    private int _convertBST(TreeNode root, int sum) {
        if (root == null) return sum;
        sum = _convertBST(root.right, sum);

        sum = sum + root.val;
        root.val = sum;
        sum = _convertBST(root.left, sum);

        return sum;
    }
}