/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // iterate through linked lists, add up numbers
  // remember to: carry over if sum >= 10
  // also remember: if linked lists have different lengths, add 0 for the item 
  // for the shorter list
  var currentSum = 0;
  var carryOver = false;
  var val1 = 0;
  var val2 = 0;
  var newNode;
  var currentResult; // keep track of last node in results to add more nodes 
  var result; // root node of results

  while (l1 !== null || l2 !== null || carryOver > 0 ) {
    // set current sum if there is a carryOver
    currentSum = carryOver ? 1 : 0;
    // reset carryOver flag
    carryOver = false;
    // default value to 0 if the val is null
    val1 = (l1 && l1.val !== null) ? l1.val : 0;
    val2 = (l2 && l2.val !== null) ? l2.val : 0;
    // determine if there is carryover
    carryOver = !!((val1 + val2  + currentSum) >= 10);
    // get ones place value of sum
    currentSum = currentSum + (carryOver ? val1 + val2 - 10 : val1 + val2);

    // if no sum and no carryover, then addition is over
    if (!carryOver && !currentSum) {
      if (!result) {
        result = new ListNode(currentSum);
      }
      break;
    }

    // add new node to result
    newNode = new ListNode(currentSum);
    if (result) {
      currentResult.next = newNode;
      currentResult = newNode;
    } else {
      result = newNode;
      currentResult = newNode;
    }

    // advance linked list position (either to null or next)
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return result;
};