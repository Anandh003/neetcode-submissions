class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;

        while(head != null) {
            if (prev === null) {
                prev = head;
                head = head.next;
                prev.next = null
            } else {
                const next = head.next
                head.next = prev
                prev = head
                head = next
            }
        }

        head = prev;
        return head
    }
}