/**
 * Takes an integer and reverses it. 
 * @param {number} x
 * @return {number} Reverse digits of x. Returns 0 if reverse overflows.
 */
var reverse = function(x) {
  // assume max is 32-bit integer
  var overflow = Math.pow(2, 32)/2;
  var isNegative = (x < 0);
  var numStr = x.toString();
  var reversedStr = Array.prototype.reduceRight.call(numStr, function(result, current) {
    // skip negative signs
    if (current === '-') {
      return result;
    }
    return result + current;
  }, '');
  var reversedNum =  isNegative ? -1 * Number(reversedStr) : Number(reversedStr);

  return (reversedNum >= overflow || reversedNum <= -1 * overflow) ? 0 : reversedNum;

};
