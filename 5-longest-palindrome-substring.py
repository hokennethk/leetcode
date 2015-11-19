class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        longest = ''

        # loop through characters and check sides
        # (also check if next char matches, then check sides)
        # if sides match, continually check sides
        i = 0
        while(i < len(s)):
            current_palindrome = self.checkPalindrome(s, i, i)
            longest = current_palindrome if len(current_palindrome) > len(longest) else longest
            # check if midpoint is repeated chars
            # use j to keep track of last index for repeated pattern
            j = i
            while(j < len(s) and s[j] == s[i]):
                j += 1
            j -= 1
            current_palindrome = self.checkPalindrome(s, i, j)
            longest = current_palindrome if len(current_palindrome) > len(longest) else longest

            # increment i
            i = j + 1
        return longest

    def checkPalindrome(self, s, left_idx, right_idx):
        """
        :type s: str
        :type left_idx: number
        :type right_idx: number
        """
        if (left_idx == right_idx):
            current_palindrome = s[left_idx]
        else:
            current_palindrome = s[left_idx:right_idx+1]
        exit = False

        while(not exit):
            left_idx = left_idx - 1
            right_idx = right_idx + 1
            # check to see if in range and left/right chars are equal
            if (left_idx >= 0 and right_idx < len(s) and s[left_idx] == s[right_idx]):
                current_palindrome = s[left_idx] + current_palindrome + s[right_idx]
            else:
                exit = True # break outta here

        return current_palindrome


s = Solution()
l = "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
k = "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa"
a = "abcba"
# print(len(l))
# g = s.checkPalindrome(a, 2, 2)
j = "eabcb"
g = s.longestPalindrome(j)
print(g)
