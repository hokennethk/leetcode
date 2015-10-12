/**
 * Given a linked list, remove the nth node from the end of list and return its head.
 * For example,
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var indices = {};
    indices.length = 0;
    var currentNode = head;
    // build indices
    while (currentNode !== null) {
      indices[indices.length] = currentNode;
      indices.length++;
      currentNode = currentNode.next;
    }

    // check input
    if (n <= 0 || n > indices.length) {
      return console.error('n is out of range');
    }

    // find nth node from end
    var nodeToRemove = indices[indices.length - n];
    // if the node is the head, remove the head
    if (nodeToRemove === head) {
      head = head.next;
    } else {
      // change node.next to exclude nodeToRemove
      (indices[indices.length - n - 1]).next = nodeToRemove.next;
    }

    return head;
};

// Tests
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// var l = new ListNode(1);
// l.next = new ListNode(2);
// l.next.next = new ListNode(3);
// l.next.next.next = new ListNode(4);
// l.next.next.next.next = new ListNode(5);

// console.log(removeNthFromEnd(l, 2));