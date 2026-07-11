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
     * @return {void}
     */
    reorderList(head) {
        const nodes = []

        while(head != null) {
            nodes.push(head)
            head = head.next
        }

        let start = 0, end = nodes.length - 1

        while(start < end) {
            nodes[start].next = nodes[end]
            start ++;
            if (start >= end) {
                break;
            }
            nodes[end].next = nodes[start]
            end --;
        }
        nodes[start].next = null
    }
}
