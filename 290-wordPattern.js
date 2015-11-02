/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    // split str
    var words = str.split(' ');
    var mapping = {};
    var reverseMap = {};
    
    return words.length === pattern.length && 
        pattern.split('').reduce(function(result, current, index) {
            var strWord = words[index];
            // add to mapping if not exist
            if (!mapping.hasOwnProperty(current)) {
                mapping[current] = strWord;
            }
            // add to reverseMap
            // reverseMap checks case for example case: pattern = 'abba', str = 'dog dog dog dog'
            if (!reverseMap[strWord]) {
                reverseMap[strWord] = current;    
            }

            // check mapping
            return result && (mapping[current] === strWord) && current === reverseMap[strWord]; 
        }, true);
};
