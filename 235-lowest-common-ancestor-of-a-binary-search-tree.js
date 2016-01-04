/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two 
given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is 
defined between two nodes v and w as the lowest node in T that has both v and w 
as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another 
example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself
 according to the LCA definition.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  var paths = [];
  var pathP = [];
  var pathQ = [];

  var traverse = function(node, path) {
    // add node to path
    path.push(node);

    // if node === target, then add copy of path to paths
    if (node.val === p.val || node.val === q.val) {
      paths.push(path.slice());
    }

    // continue traversing
    if (node.left !== null) {
      traverse(node.left, path);
    }

    if (node.right !== null) {
      traverse(node.right, path);
    }

    // backtrack
    path.pop();
  };

  // build up paths
  traverse(root, []);
  pathP = paths[0];
  pathQ = paths[1];
  
  console.dir(paths);

  for (var i = pathP.length - 1; i >= 0; i--) {
    for (var j = pathQ.length - 1; j >= 0; j--) {
      if (pathP[i] === pathQ[j]) {
        return pathP[i].val; 
      }
    }
  }

  return null;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


// TESTING
var root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

var root2 = new TreeNode(2);
root2.left = new TreeNode(1);
var p = new TreeNode(2);
var q = new TreeNode(1);

var root3 = new TreeNode(2);
root3.left = new TreeNode(1);
root3.right = new TreeNode(3);
var p3 = new TreeNode(1);
var q3 = new TreeNode(3);
