/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} Indices of two numbers that add up to specific target
 */
var twoSum = function(nums, target) {
  // hashMap will store the difference (target-num) as the key, and the index of num
  var hashMap = {};
  var results = [];
  // iterate through nums. If the num is a key in the hashMap { key: num }, then we know that
  // the key number + num is equal to the target
  for (var i=0; i<nums.length; i++) {
    var num = nums[i];
    if(!hashMap.hasOwnProperty(num)) {
      hashMap[target - num] = i;
    } else {
      results[0] = hashMap[num];
      results[1] = i;
      break; // only one solution
    }
  }

  return (results.length) ? results : null;
};
