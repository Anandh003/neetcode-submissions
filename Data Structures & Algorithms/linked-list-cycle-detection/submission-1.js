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
        let slowPointer = head, fastPointer = head

        while(fastPointer && fastPointer.next) {
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next

            if (slowPointer === fastPointer) {
                return true
            }
        }
        return false
    }
}
