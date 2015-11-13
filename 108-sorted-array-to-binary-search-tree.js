/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  // if length of array is only 1, then just add that node
  if (nums.length === 0) {
    return null;
  }
  // get the length of the array
  // ceiling divide by 2 to split the array into 2
  var midIndex = Math.floor(nums.length/2);
  var leftNums = nums.slice(0, midIndex);
  var rightNums = nums.slice(midIndex+1);
  // ==> that index is the parent node
  var newNode = new TreeNode(nums[midIndex]);
  // left and right half:
    // recursively do the same thing
  newNode.left = sortedArrayToBST(leftNums);
  newNode.right = sortedArrayToBST(rightNums);
  
  return newNode;
};