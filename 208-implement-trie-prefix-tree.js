console.clear();
/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function(value, end) {
    this.value = value;
    this.end = end || false;
    this.children = {};
};

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word, trieNode) {
  if (trieNode === undefined) {
    return this.insert(word, this.root);
  }

  var childNode = trieNode.children[word.charAt(0)];
  if (childNode) {
    this.insert(word.substr(1), childNode);
  } else {
    trieNode.children[word.charAt(0)] = new TrieNode(word.charAt(0));
    childNode = trieNode.children[word.charAt(0)];
    if (word.length === 1) {
      childNode.end = true;
    } else {
      this.insert(word.substr(1), childNode);    
    }
  }

};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word, trieNode) {
  if (trieNode === undefined) {
    return this.search(word, this.root);
  }

  var childNode = trieNode.children[word.charAt(0)];
  if (word.length === 1) {
    return !!childNode && childNode.end;
  }

  if (childNode) {
    return this.search(word.substr(1), childNode);
  }

  // not found 
  return false;  
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix, trieNode) {
  if (trieNode === undefined) {
    return this.startsWith(prefix, this.root);
  }
  var childNode = trieNode.children[prefix.charAt(0)];

  if (prefix.length === 1) {
    return !!childNode;
  }

  if (childNode) {
    return this.startsWith(prefix.substr(1), childNode);
  }

  // not found 
  return false;  
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */

// TEST

// var t = new Trie();
// t.root.children['b'] = new TrieNode('b');
// t.root.children['b'].children['a'] = new TrieNode('a');
// t.root.children['b'].children['a'].children['t'] = new TrieNode('t', true);
// t.root.children['b'].children['a'].children['t'].children['h'] = new TrieNode('h', true);


// var testNo = 0;
// // startsWith  
// console.assert(t.startsWith('b'), 'Failed: startsWith test #', ++testNo);
// console.assert(t.startsWith('ba'), 'Failed: startsWith test #', ++testNo);
// console.assert(t.startsWith('bat'), 'Failed: startsWith test #', ++testNo);
// console.assert(t.startsWith('bar') === false, 'Failed: startsWith test #', ++testNo);
// console.assert(t.startsWith('br') === false, 'Failed: startsWith test #', ++testNo);
// console.assert(t.startsWith('bth') === false, 'Failed: startsWith test #', ++testNo);
// console.assert(t.startsWith('bath'), 'Failed: startsWith test #', ++testNo);

// testNo = 0;
// // search
// console.assert(t.search('b') === false, 'Failed: search test #', ++testNo);
// console.assert(t.search('ba') === false, 'Failed: search test #', ++testNo);
// console.assert(t.search('bt') === false, 'Failed: search test #', ++testNo);
// console.assert(t.search('bat'), 'Failed: search test #', ++testNo);
// console.assert(t.search('bath'), 'Failed: search test #', ++testNo);

// testNo = 0;
// //insert
// t.insert('bathe');
// console.assert(t.search('bathe'), 'Failed: insert test #', ++testNo);
// t.insert('test');
// console.assert(t.search('test'), 'Failed: insert test #', ++testNo);
// t.insert('arrest');
// console.assert(t.search('arrest'), 'Failed: insert test #', ++testNo);
// t.insert('tested');
// console.assert(t.search('tested'), 'Failed: insert test #', ++testNo);