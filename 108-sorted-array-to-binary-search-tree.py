# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        if len(nums) == 0:
            return None

        midIndex = len(nums)//2
        leftNums = nums[:midIndex]
        rightNums = nums[(midIndex + 1):]

        newNode = TreeNode(nums[midIndex])
        newNode.left = self.sortedArrayToBST(leftNums)
        newNode.right = self.sortedArrayToBST(rightNums)

        return newNode