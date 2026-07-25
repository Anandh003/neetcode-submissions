/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head == null || head.next == null)
            return null;

        int length = findLength(head);

        int iter = 0;
        ListNode prev = null;
        ListNode current = head;

        while (iter != length - n) {
            // current = head.next;
            prev = current;
            current = current.next;
            iter++;
        }

        if (prev != null) {
            prev.next = current.next;
            current.next = null;
        } else {
            head = current.next;
            current.next = null;
        }

        return head;
    }

    public int findLength(ListNode head) {
        int count = 0;

        while (head != null) {
            count += 1;
            head = head.next;
        }
        return count;
    }
}
