/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 * For example,
 * 
 * Consider the following matrix:
 * [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * 
 * Given target = 3, return true.
 */

/**
 * Returns boolean if target is found in the 2D matrix
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // find row through binary search
  var rowIndex = searchRows(matrix, target, 0, matrix.length);
  if (rowIndex === null) {
    return false;
  }

  var row = matrix[rowIndex];
  var result = binarySearch(row, target, 0, row.length);
  return  result !== null ? true : false;
};

/**
 * Finds the row index in a 2D matrix where the target is (using binary search)
 * @param  {Array.<Array>} matrix 2D matrix
 * @param  {number} target 
 * @param  {rowMin} rowMin Index of the start of our range
 * @param  {rowMax} rowMax Index of the end of our range
 * @return {number|null}        Row Index of 2D matrix where target is (null if not found)
 */
var searchRows = function(matrix, target, rowMin, rowMax) {
  // test if array is empty
  if (rowMax < rowMin) {
    return null;
  } else {
    var midIndex = Math.floor(((rowMax - rowMin) / 2) + rowMin);

    // comparison
    var midRow = matrix[midIndex];
    if (midRow === undefined) {
      return null;
    }
    if (midRow[0] > target) {
      // target in lower subset
      return searchRows(matrix, target, rowMin, midIndex-1);
    } else if (midRow[midRow.length - 1] < target) {
      // target in upper subset
      return searchRows(matrix, target, midIndex + 1, rowMax);
    } else {
      return midIndex;
    }
  }
};

/**
 * Searches through an array for a target value using binary search method
 * @param  {Array} array  
 * @param  {number} target 
 * @param  {imin} imin   Index number of start of range
 * @param  {imax} imax   Index number of end of range
 * @return {number|null}        Index of target or null if not found
 */
var binarySearch = function(array, target, imin, imax) {
  // test if array is empty
  if (imax < imin) {
    return null;
  } else {
    var midIndex = Math.floor(((imax - imin) / 2) + imin);
    if (array[midIndex] === undefined) {
      return null;
    }
    // comparison
    if (array[midIndex] > target) {
      // target in lower subset
      return binarySearch(array, target, imin, midIndex - 1);
    } else if (array[midIndex] < target) {
      // target in upper subset
      return binarySearch(array, target, midIndex + 1, imax);
    } else {
      return midIndex;
    }
  }
};