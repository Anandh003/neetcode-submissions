/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const visited = new Set()
        while(head != null) {
            if (visited.has(head)) {
                return true
            }

            visited.add(head)
            head = head.next
        }

        return false
    }
}
