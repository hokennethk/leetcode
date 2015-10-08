/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // loop through, keeping track of longest running string
  var longest = '';
  var current = '';
  var seen = {};
  for (var i=0, character; i<s.length; i++) {
    character = s.charAt(i);
    if (!seen[character]) {
      seen[character] = true;
      current += character;
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      seen = {};
      seen[character] = true;
      // add previous char if possible (not a repeat of current char)
      if (!seen[s.charAt(i-1)]) {
        current = '' + s.charAt(i-1);
        seen[s.charAt(i-1)] = true;
      } else {
        current = '';
      }
      current += character;
    }
  }

  // final check
  if (current.length > longest.length) {
    longest = current;
  }

  return longest.length;
};
